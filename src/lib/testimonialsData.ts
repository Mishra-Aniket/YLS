export interface StoredTestimonial {
  id: string;
  name: string;
  company?: string;
  rating: number;
  quote: string;
  createdAt: string;
  approved: boolean;
}

export const INITIAL_TESTIMONIALS: StoredTestimonial[] = [
  {
    id: "t1",
    name: "Rajesh Patil",
    company: "Daiva Engineering Solutions",
    rating: 5,
    quote:
      "Yes Logistics Service handled our 45-ton heavy machinery transit from Chakan to Bangalore flawlessly. The pilot escort team and daily hydraulic axle pressure updates gave us complete peace of mind. Outstanding precision!",
    createdAt: "2026-09-18T10:00:00.000Z",
    approved: true,
  },
  {
    id: "t2",
    name: "Sunil Deshmukh",
    company: "Aryavarta Enterprises Ltd.",
    rating: 5,
    quote:
      "We rely on YLS for all our interstate raw material and finished fabrication dispatches across Gujarat, Maharashtra, and Odisha. Consistently punctual, professional drivers, and 100% transparent billing.",
    createdAt: "2026-09-22T14:30:00.000Z",
    approved: true,
  },
  {
    id: "t3",
    name: "Amitabh Banerjee",
    company: "East India Infra Projects",
    rating: 5,
    quote:
      "Their covered container fleet and heavy flatbed trailers are in pristine condition. Zero transit damages across 18 shipments in the past 12 months. Vineet and Aniket manage every consignment with utmost dedication.",
    createdAt: "2026-09-28T09:15:00.000Z",
    approved: true,
  },
];
