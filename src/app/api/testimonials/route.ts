import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { getDatabase } from "@/lib/mongodb";

interface StoredTestimonial {
  id: string;
  name: string;
  company?: string;
  rating: number;
  quote: string;
  createdAt: string;
  approved: boolean;
}

// In-memory fallback storage when MongoDB is not active locally
const fallbackTestimonials: StoredTestimonial[] = [];

export async function GET() {
  try {
    const { db, isConnected } = await getDatabase();

    if (isConnected && db) {
      const testimonials = await db
        .collection("testimonials")
        .find({ approved: true })
        .sort({ createdAt: -1 })
        .limit(50)
        .toArray();
      return NextResponse.json({ success: true, testimonials });
    }

    return NextResponse.json({
      success: true,
      testimonials: fallbackTestimonials,
    });
  } catch (error) {
    console.error("Fetch testimonials failed:", error);
    return NextResponse.json(
      { error: "Failed to fetch testimonials" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, company, rating, quote } = body;

    // Validation
    if (!name || !quote) {
      return NextResponse.json(
        { error: "Please provide your name and feedback message." },
        { status: 400 }
      );
    }

    const parsedRating = Math.min(5, Math.max(1, Math.round(Number(rating) || 5)));
    const text = String(quote).trim();
    if (text.length < 10) {
      return NextResponse.json(
        { error: "Feedback message is too short. Please write at least 10 characters." },
        { status: 400 }
      );
    }

    const newTestimonial: StoredTestimonial = {
      id: uuidv4(),
      name: String(name).trim().slice(0, 80),
      company: company ? String(company).trim().slice(0, 100) : undefined,
      rating: parsedRating,
      quote: text.slice(0, 600),
      createdAt: new Date().toISOString(),
      approved: true, // live display; moderate via DB if needed
    };

    const { db, isConnected } = await getDatabase();

    if (isConnected && db) {
      await db.collection("testimonials").insertOne({
        _id: newTestimonial.id as unknown as never,
        ...newTestimonial,
      });
      console.log(
        `[YLS Testimonial] Saved to MongoDB with id: ${newTestimonial.id}`
      );
    } else {
      fallbackTestimonials.unshift(newTestimonial);
      console.log(
        `[YLS Testimonial] Saved to fallback storage with id: ${newTestimonial.id}`
      );
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for your feedback! It is now live on our website.",
        testimonial: newTestimonial,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Testimonial submission failed:", error);
    return NextResponse.json(
      { error: "Failed to submit feedback. Please try again." },
      { status: 500 }
    );
  }
}
