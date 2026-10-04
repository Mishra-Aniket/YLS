export interface QuoteRequest {
  id: string;
  fullName: string;
  email?: string;
  phone: string;
  freightType?: string;
  goodsType?: string;
  pickupCity?: string;
  deliveryCity?: string;
  dimensions?: string;
  shipmentDate?: string;
  notes?: string;
  honeypot?: string;
  createdAt: string;
}

const FORM_URL = process.env.NEXT_PUBLIC_FORM_URL || '';

export async function submitQuoteRequest(
  data: Omit<QuoteRequest, 'id' | 'createdAt'>
): Promise<{ success: boolean; id: string; message: string }> {
  const id = crypto.randomUUID();
  const payload: QuoteRequest = {
    ...data,
    id,
    createdAt: new Date().toISOString(),
  };

  if (!FORM_URL) {
    // Fallback: store locally
    try {
      const existing = localStorage.getItem('yls_quotes');
      const quotes: QuoteRequest[] = existing ? JSON.parse(existing) : [];
      quotes.unshift(payload);
      localStorage.setItem('yls_quotes', JSON.stringify(quotes.slice(0, 50)));
    } catch {
      /* storage quota exceeded or disabled */
    }
    return {
      success: true,
      id,
      message:
        'Thank you, we will call you within 2 hours.',
    };
  }

  const res = await fetch(FORM_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`Form submission failed: ${res.status}`);
  }

  return {
    success: true,
    id,
    message: 'Thank you, we will call you within 2 hours.',
  };
}
