import { PrismaClient } from "@prisma/client";

const globalForPrisma = global;

// Log environment setup for debugging
if (process.env.NODE_ENV === "development") {
  console.log("🔧 Prisma initialization in development mode");
  console.log("DATABASE_URL set:", !!process.env.DATABASE_URL);
  console.log("DIRECT_URL set:", !!process.env.DIRECT_URL);
}

// Ensure DATABASE_URL is set
if (!process.env.DATABASE_URL) {
  console.error("❌ DATABASE_URL is not set in environment");
  throw new Error(
    "DATABASE_URL is not set. Please check your .env file has DATABASE_URL configured for Supabase."
  );
}

if (!globalForPrisma.prisma) {
  try {
    // For Prisma v7, we don't pass config options to constructor
    // The config comes from prisma.config.js in the prisma folder
    globalForPrisma.prisma = new PrismaClient();
    console.log("✅ Prisma Client initialized successfully");
  } catch (error) {
    console.error("❌ Failed to initialize Prisma Client:", error.message);
    console.error("Full error:", error);
    throw error;
  }
}

export const db = globalForPrisma.prisma;
