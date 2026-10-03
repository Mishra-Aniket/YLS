export interface QuoteRequest {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  freightType?: string;
  goodsType?: string;
  pickupCity?: string;
  deliveryCity?: string;
  dimensions?: string;
  shipmentDate?: string;
  notes?: string;
  createdAt: string;
}

export function generateQuoteId(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let random = "";
  for (let i = 0; i < 5; i++) {
    random += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `YLS-QT-${random}`;
}

export function saveQuoteRequest(data: Omit<QuoteRequest, "id" | "createdAt">): {
  success: boolean;
  quoteId: string;
  message: string;
} {
  const quoteId = generateQuoteId();
  const newQuote: QuoteRequest = {
    ...data,
    id: quoteId,
    createdAt: new Date().toISOString(),
  };

  try {
    const existing = localStorage.getItem("yls_quotes");
    const quotes: QuoteRequest[] = existing ? JSON.parse(existing) : [];
    quotes.unshift(newQuote);
    localStorage.setItem("yls_quotes", JSON.stringify(quotes.slice(0, 50)));
  } catch {
    /* storage quota exceeded or disabled */
  }

  return {
    success: true,
    quoteId,
    message:
      "Your quote request has been received by YES LOGISTICS SERVICE. Our Pune transport coordinator will reach out promptly.",
  };
}

export function getWhatsAppQuoteUrl(quoteId: string, details: Partial<QuoteRequest>): string {
  const text = `Hello Yes Logistics Service, I submitted quote request #${quoteId}.\nName: ${details.fullName || ""}\nPhone: ${details.phone || ""}\nFreight: ${details.freightType || ""}\nRoute: ${details.pickupCity || ""} to ${details.deliveryCity || ""}`;
  return `https://wa.me/917021277197?text=${encodeURIComponent(text)}`;
}
