#!/usr/bin/env python3
"""
YLS brand asset pipeline.
1. emblem.png       - red YLS swoosh emblem, world-map bg removed, transparent
2. name_light.png   - YES LOGISTICS SERVICE wordmark (black+red) transparent
3. name_dark.png    - wordmark with black->white recolor for dark footer
4. icon.png / apple-icon.png - favicon squares
Previews composited on white & dark for inspection.
"""
import numpy as np
from PIL import Image
import os

REFS = "/Users/Personal Project/YLS/design_refs"
OUT = "/Users/Personal Project/YLS/public/logo"
APP = "/Users/Personal Project/YLS/src/app"


def rgb_to_hsv(rgb):
    """rgb float 0..1 array (h,w,3) -> h,s,v arrays"""
    r, g, b = rgb[..., 0], rgb[..., 1], rgb[..., 2]
    mx = np.max(rgb, axis=-1)
    mn = np.min(rgb, axis=-1)
    diff = mx - mn
    s = np.where(mx > 0, diff / np.maximum(mx, 1e-9), 0)
    v = mx
    # red dominance: how much R exceeds the other two channels (0..255 units)
    red_dom = (r - np.maximum(g, b)) * 255.0
    return s, v, red_dom


def smoothstep(x, lo, hi):
    t = np.clip((x - lo) / (hi - lo), 0, 1)
    return t * t * (3 - 2 * t)


def decontaminate(color, alpha, bg):
    """Remove background bleed from semi-transparent edge pixels."""
    a = np.maximum(alpha, 1e-4)[..., None]
    fg = (color - (1 - a) * np.array(bg, dtype=np.float64)) / a
    return np.clip(fg, 0, 255)


def trim(arr, alpha, thresh=0.02, pad=12):
    ys, xs = np.where(alpha > thresh)
    y0, y1 = max(ys.min() - pad, 0), min(ys.max() + pad, arr.shape[0])
    x0, x1 = max(xs.min() - pad, 0), min(xs.max() + pad, arr.shape[1])
    return arr[y0:y1, x0:x1], alpha[y0:y1, x0:x1], (y0, x0)


def save_rgba(rgb, alpha, path):
    out = np.dstack([rgb.astype(np.uint8), (alpha * 255).astype(np.uint8)])
    Image.fromarray(out, "RGBA").save(path)
    print(f"saved {path} {out.shape[1]}x{out.shape[0]}")


def preview(rgb, alpha, path_white, path_dark, bg_size_pad=40):
    """Composite trimmed result on white and dark cards for inspection."""
    ys, xs = np.where(alpha > 0.02)
    y0, y1, x0, x1 = ys.min(), ys.max(), xs.min(), xs.max()
    crop_rgb = rgb[y0:y1 + 1, x0:x1 + 1]
    crop_a = alpha[y0:y1 + 1, x0:x1 + 1]
    h, w = crop_a.shape
    for bgval, path in [((255, 255, 255), path_white), ((2, 14, 40), path_dark)]:
        canvas = np.zeros((h + bg_size_pad * 2, w + bg_size_pad * 2, 3), dtype=np.float64)
        canvas[:] = bgval
        a = crop_a[..., None]
        canvas[bg_size_pad:bg_size_pad + h, bg_size_pad:bg_size_pad + w] = (
            crop_rgb * a + np.array(bgval) * (1 - a)
        )
        Image.fromarray(canvas.astype(np.uint8), "RGB").save(path)
        print(f"preview {path}")


# ---------------- 1. EMBLEM ----------------
im = Image.open(f"{REFS}/logo_source.png").convert("RGB")
rgb = np.asarray(im, dtype=np.float64)
s, v, red_dom = rgb_to_hsv(rgb / 255.0)

# alpha: saturation ramp gated by red dominance (map bg & gray lines have ~0 red dominance)
a_red = smoothstep(s, 0.075, 0.22)
gate = smoothstep(red_dom, 8.0, 30.0)  # red_dom in 0..255 units
alpha = a_red * gate
alpha[alpha < 0.05] = 0.0

# background estimate (light gray ~233) sampled from transparent pixels
bg_px = rgb[alpha == 0]
bg = np.median(bg_px, axis=0) if len(bg_px) else np.array([233, 233, 235])
print("bg estimate:", bg)

fg = decontaminate(rgb, alpha, bg)
# fully opaque pixels keep original color exactly
op = alpha >= 0.999
fg[op] = rgb[op]
fg, alpha, _ = trim(fg, alpha)
save_rgba(fg, alpha, f"{OUT}/yls_emblem.png")
preview(fg, alpha, f"{REFS}/preview_emblem_white.png", f"{REFS}/preview_emblem_dark.png")

# ---------------- 2. WORDMARK ----------------
# Wordmark colors are flat (red YES / black text), so unmix exactly:
# alpha from channel ramp against white, fg = sampled flat fill -> zero fringe on any bg.
im2 = Image.open(f"{REFS}/company_name_source.png").convert("RGB")
rgb2 = np.asarray(im2, dtype=np.float64)
s2, v2, red_dom2 = rgb_to_hsv(rgb2 / 255.0)

red_branch = (red_dom2 > 12) & (s2 > 0.12)
# sample the flat red fill from bright red fill pixels only (skip dark bevels)
red_samples = rgb2[red_branch & (s2 > 0.55) & (v2 > 0.62)]
RED_FILL = np.median(red_samples, axis=0)
print("red fill sampled:", RED_FILL)

a_red2 = np.clip((255.0 - rgb2[..., 1]) / (255.0 - RED_FILL[1]), 0, 1) * red_branch
a_dark2 = np.clip((255.0 - v2 * 255.0) / (255.0 - 10.0), 0, 1)
a_dark2[(s2 < 0.12) & (v2 > 0.80)] = 0.0  # kill light-gray watermark halftone
alpha2 = np.maximum(a_red2, a_dark2)
alpha2[alpha2 < 0.05] = 0.0

dark_px = a_dark2 >= a_red2
fg2 = np.zeros_like(rgb2)
fg2[red_branch] = RED_FILL
fg2[dark_px] = [10, 10, 10]
fg2, alpha2, (oy, ox) = trim(fg2, alpha2, pad=8)
dark_px = dark_px[oy:oy + fg2.shape[0], ox:ox + fg2.shape[1]]
save_rgba(fg2, alpha2, f"{OUT}/yls_name_light.png")

# dark variant: black text & dividers -> white, red stays flat red
fg3 = fg2.copy()
fg3[dark_px & (alpha2 > 0)] = [255, 255, 255]
save_rgba(fg3, alpha2, f"{OUT}/yls_name_dark.png")
preview(fg2, alpha2, f"{REFS}/preview_name_white.png", f"{REFS}/preview_name_dark_tmp.png")
preview(fg3, alpha2, f"{REFS}/preview_name_dark_check.png", f"{REFS}/preview_name_dark.png")

# ---------------- 3. FAVICONS ----------------
emb = Image.open(f"{OUT}/yls_emblem.png")
size = 256
icon = Image.new("RGBA", (size, size), (0, 0, 0, 0))
scale = (size * 0.86) / emb.width
emb_s = emb.resize((int(emb.width * scale), int(emb.height * scale)), Image.LANCZOS)
icon.paste(emb_s, ((size - emb_s.width) // 2, (size - emb_s.height) // 2), emb_s)
icon.save(f"{APP}/icon.png")
apple = icon.resize((180, 180), Image.LANCZOS)
apple.save(f"{APP}/apple-icon.png")
print("favicons written")

# print trimmed wordmark aspect ratio for component sizing
ys, xs = np.where(alpha2 > 0.02)
print("wordmark aspect:", (xs.max() - xs.min()) / (ys.max() - ys.min()))
ys, xs = np.where(alpha > 0.02)
print("emblem aspect:", (xs.max() - xs.min()) / (ys.max() - ys.min()))
