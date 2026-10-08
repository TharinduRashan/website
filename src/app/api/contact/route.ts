import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
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

    // Send email notification via Resend if API key is present
    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
      const resend = new Resend(apiKey);
      const toEnv = process.env.CONTACT_TO_EMAIL || "info@cloudzyne.com";
      const toRecipients = toEnv
        .split(",")
        .map((e) => e.trim())
        .filter(Boolean);

      const fromEmail = process.env.CONTACT_FROM_EMAIL || "Cloudzyne <inquiries@cloudzyne.com>";

      const emailSubject = `New Project Inquiry from ${result.data.name}`;
      const emailText = `New contact inquiry received on Cloudzyne:

Name: ${result.data.name}
Email: ${result.data.email}
Phone: ${result.data.phone || "Not provided"}
Company / Website: ${result.data.companyWebsite || "Not provided"}

Project Details:
${result.data.message}

Received at: ${new Date().toISOString()}
      `.trim();

      const emailHtml = `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background: #ffffff;">
  <div style="border-bottom: 2px solid #2373F4; padding-bottom: 16px; margin-bottom: 24px;">
    <h2 style="margin: 0; color: #0f172a; font-size: 20px;">New Project Inquiry</h2>
    <p style="margin: 4px 0 0; color: #64748b; font-size: 14px;">Submitted via Cloudzyne website contact form</p>
  </div>

  <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
    <tr>
      <td style="padding: 8px 0; color: #64748b; width: 140px; font-weight: 600;">Client Name:</td>
      <td style="padding: 8px 0; color: #0f172a; font-weight: 500;">${result.data.name}</td>
    </tr>
    <tr>
      <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Email Address:</td>
      <td style="padding: 8px 0;"><a href="mailto:${result.data.email}" style="color: #2373F4; text-decoration: none;">${result.data.email}</a></td>
    </tr>
    <tr>
      <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Phone Number:</td>
      <td style="padding: 8px 0; color: #0f172a;">${result.data.phone || "Not provided"}</td>
    </tr>
    <tr>
      <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Company / Web:</td>
      <td style="padding: 8px 0; color: #0f172a;">${result.data.companyWebsite || "Not provided"}</td>
    </tr>
  </table>

  <div style="background: #f8fafc; border-left: 4px solid #2373F4; padding: 16px; border-radius: 4px; margin-bottom: 24px;">
    <h3 style="margin: 0 0 8px; color: #0f172a; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em;">Project Description</h3>
    <p style="margin: 0; color: #334155; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${result.data.message}</p>
  </div>

  <div style="font-size: 12px; color: #94a3b8; border-top: 1px solid #f1f5f9; pt: 16px;">
    <p style="margin: 0;">Hit "Reply" in your email client to reply directly to ${result.data.email}.</p>
  </div>
</div>
      `.trim();

      const { data: resendData, error: sendError } = await resend.emails.send({
        from: fromEmail,
        to: toRecipients,
        replyTo: result.data.email,
        subject: emailSubject,
        text: emailText,
        html: emailHtml,
      });

      if (sendError) {
        console.error("[Resend Error]: Failed to send email:", sendError);
        return NextResponse.json(
          { error: `Email delivery failed: ${sendError.message}` },
          { status: 500 }
        );
      }

      console.log(`[Resend Success]: Email sent with ID ${resendData?.id} to:`, toRecipients);
    } else {
      console.warn("[Resend Warning]: RESEND_API_KEY is not configured in .env.local. Inquiry logged to console only.");
    }

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
