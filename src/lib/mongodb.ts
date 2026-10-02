import { MongoClient, Db } from "mongodb";

const MONGO_URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017";
const DB_NAME = process.env.DB_NAME || "yls_logistics";

interface MongoGlobal {
  client?: MongoClient;
  promise?: Promise<MongoClient>;
}

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

let clientPromise: Promise<MongoClient> | null = null;

export async function getDatabase(): Promise<{ db: Db | null; isConnected: boolean }> {
  try {
    if (!process.env.MONGO_URL && process.env.NODE_ENV !== "production") {
      // Check if mongo can be contacted with a short timeout
    }

    if (!clientPromise) {
      if (process.env.NODE_ENV === "development") {
        if (!global._mongoClientPromise) {
          const client = new MongoClient(MONGO_URL, {
            serverSelectionTimeoutMS: 2500,
            connectTimeoutMS: 2500,
          });
          global._mongoClientPromise = client.connect();
        }
        clientPromise = global._mongoClientPromise;
      } else {
        const client = new MongoClient(MONGO_URL, {
          serverSelectionTimeoutMS: 3000,
          connectTimeoutMS: 3000,
        });
        clientPromise = client.connect();
      }
    }

    const client = await clientPromise;
    const db = client.db(DB_NAME);
    return { db, isConnected: true };
  } catch (error) {
    console.warn("MongoDB connection fallback active (using resilient in-memory storage):", error);
    return { db: null, isConnected: false };
  }
}

// In-memory fallback storage for quote requests when MongoDB is not active locally
export interface StoredQuote {
  id: string; // UUID
  fullName: string;
  email: string;
  phone: string;
  freightType: string;
  goodsType: string;
  pickupCity: string;
  deliveryCity: string;
  dimensions?: string;
  shipmentDate?: string;
  notes?: string;
  createdAt: string;
  status: "pending" | "reviewed" | "quoted";
}

export const fallbackQuotes: StoredQuote[] = [
  {
    id: "7b4c81a9-3d14-4e92-b695-0cfa0b380f12",
    fullName: "Rohan Deshmukh",
    email: "rohan.deshmukh@belden-sample.in",
    phone: "+91 9823011223",
    freightType: "ODC Trailer",
    goodsType: "Heavy Machinery",
    pickupCity: "Pune",
    deliveryCity: "Vadodara",
    dimensions: "18m x 3.5m x 4.2m, 38 Tonnes",
    shipmentDate: "2026-10-15",
    notes: "Requires pilot escort and route clearance through Maharashtra-Gujarat border.",
    createdAt: new Date().toISOString(),
    status: "pending",
  },
];
