import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { getDatabase, fallbackQuotes, StoredQuote } from "@/lib/mongodb";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      fullName,
      email,
      phone,
      freightType,
      goodsType,
      pickupCity,
      deliveryCity,
      dimensions,
      shipmentDate,
      notes,
    } = body;

    // Validation
    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { error: "Full Name, Email, and Phone Number are required fields." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const quoteId = uuidv4();
    const newQuote: StoredQuote = {
      id: quoteId,
      fullName: String(fullName).trim(),
      email: String(email).trim().toLowerCase(),
      phone: String(phone).trim(),
      freightType: freightType || "ODC Consignment",
      goodsType: goodsType || "Industrial Equipment",
      pickupCity: pickupCity || "Pune",
      deliveryCity: deliveryCity || "All India Destination",
      dimensions: dimensions ? String(dimensions).trim() : undefined,
      shipmentDate: shipmentDate ? String(shipmentDate).trim() : undefined,
      notes: notes ? String(notes).trim() : undefined,
      createdAt: new Date().toISOString(),
      status: "pending",
    };

    const { db, isConnected } = await getDatabase();

    if (isConnected && db) {
      await db.collection("quotes").insertOne({
        _id: quoteId as unknown as never, // Using UUID instead of ObjectId as required
        ...newQuote,
      });
      console.log(`[YLS Quote] Saved to MongoDB quotes collection with UUID: ${quoteId}`);
    } else {
      // Resilient fallback storage
      fallbackQuotes.unshift(newQuote);
      console.log(`[YLS Quote] Saved to fallback storage with UUID: ${quoteId}`);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your quote request has been received by YES LOGISTICS SERVICE. Our Pune transport coordinator will reach out promptly.",
        quoteId,
        data: newQuote,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Quote creation failed:", error);
    return NextResponse.json(
      { error: "Failed to process quote request. Please call our Pune office directly at +91 7021277197." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const { db, isConnected } = await getDatabase();

    if (isConnected && db) {
      const quotes = await db.collection("quotes").find({}).sort({ createdAt: -1 }).limit(50).toArray();
      return NextResponse.json({ success: true, count: quotes.length, quotes });
    }

    return NextResponse.json({
      success: true,
      count: fallbackQuotes.length,
      quotes: fallbackQuotes,
    });
  } catch (error) {
    console.error("Fetch quotes failed:", error);
    return NextResponse.json({ error: "Failed to fetch quotes" }, { status: 500 });
  }
}
