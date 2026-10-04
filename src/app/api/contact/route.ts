import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validators";

// In-memory sliding window rate limiter: max 5 requests per 10 minutes per IP
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;
const ipRequestHistory = new Map<string, number[]>();

function cleanUpStaleEntries() {
  const now = Date.now();
  for (const [ip, timestamps] of ipRequestHistory.entries()) {
    const validTimestamps = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
    if (validTimestamps.length === 0) {
      ipRequestHistory.delete(ip);
    } else {
      ipRequestHistory.set(ip, validTimestamps);
    }
  }
}

let lastCleanup = Date.now();

export async function POST(request: NextRequest) {
  try {
    // 1. Guard against oversized payloads (max 64KB)
    const contentLength = request.headers.get("content-length");
    if (contentLength && parseInt(contentLength, 10) > 65536) {
      return NextResponse.json(
        { error: "Payload too large. Maximum allowed size is 64KB." },
        { status: 413 }
      );
    }

    // 2. IP-based rate limiting
    const forwardedFor = request.headers.get("x-forwarded-for");
    const clientIp = forwardedFor
      ? forwardedFor.split(",")[0].trim()
      : request.headers.get("x-real-ip") || "unknown-ip";

    const now = Date.now();
    if (now - lastCleanup > 15 * 60 * 1000) {
      cleanUpStaleEntries();
      lastCleanup = now;
    }

    const history = ipRequestHistory.get(clientIp) || [];
    const recentRequests = history.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

    if (recentRequests.length >= MAX_REQUESTS_PER_WINDOW) {
      return NextResponse.json(
        {
          error: "Too many inquiries submitted from this connection. Please wait a few minutes before trying again.",
        },
        { status: 429 }
      );
    }

    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          error: "Invalid form data",
          details: result.error.flatten(),
        },
        { status: 400 }
      );
    }

    // 3. Honeypot check: If botCheck is filled, silently discard spambot request
    if (result.data.botCheck && result.data.botCheck.trim() !== "") {
      console.warn(`[Spam Bot Rejected]: Bot filled honeypot field from IP ${clientIp}`);
      return NextResponse.json(
        {
          success: true,
          message: "Your inquiry has been received.",
        },
        { status: 200 }
      );
    }

    // Register valid request timestamp
    recentRequests.push(now);
    ipRequestHistory.set(clientIp, recentRequests);

    // Server-side logging of legitimate contact inquiry
    console.log("[Cloudzyne Contact Inquiry Received]:", {
      name: result.data.name,
      companyWebsite: result.data.companyWebsite || "Not provided",
      email: result.data.email,
      phone: result.data.phone || "Not provided",
      messageLength: result.data.message.length,
      agreeToTerms: result.data.agreeToTerms,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your inquiry has been received. We will respond within 24-48 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Contact API Error]:", error);
    return NextResponse.json(
      { error: "Internal server error occurred while processing inquiry." },
      { status: 500 }
    );
  }
}
