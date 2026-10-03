import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validators";

export async function POST(request: NextRequest) {
  try {
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

    // In production with an email provider (e.g. Resend / SendGrid):
    // if (process.env.RESEND_API_KEY) { await resend.emails.send(...) }

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
