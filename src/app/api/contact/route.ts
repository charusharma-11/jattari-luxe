import { NextResponse } from "next/server";

type ContactSubmission = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

function isContactSubmission(value: unknown): value is ContactSubmission {
  if (typeof value !== "object" || value === null) return false;

  const submission = value as Record<string, unknown>;
  return (
    typeof submission.name === "string" &&
    typeof submission.email === "string" &&
    typeof submission.phone === "string" &&
    typeof submission.message === "string"
  );
}

function validateSubmission(submission: ContactSubmission) {
  const name = submission.name.trim();
  const email = submission.email.trim();
  const phone = submission.phone.trim();
  const message = submission.message.trim();

  if (name.length < 2 || name.length > 80 || /\d/.test(name)) {
    return "Enter a name of at least two characters without numbers.";
  }
  if (email.length > 120 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return "Enter a valid email address.";
  }
  if (!/^[6-9]\d{9}$/.test(phone)) {
    return "Enter a valid 10-digit Indian mobile number.";
  }
  if (message.length < 10 || message.length > 1000) {
    return "Your message must be between 10 and 1000 characters.";
  }

  return null;
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON request." }, { status: 400 });
  }

  if (!isContactSubmission(payload)) {
    return NextResponse.json(
      { error: "Please provide all required contact details." },
      { status: 400 }
    );
  }

  const validationError = validateSubmission(payload);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_TO_EMAIL;
  const sender = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !recipient || !sender) {
    return NextResponse.json(
      {
        error:
          "The contact service is not configured. Please try again later or contact the site owner.",
      },
      { status: 503 }
    );
  }

  const { name, email, phone, message } = payload;

  try {
    const delivery = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: sender,
        to: [recipient],
        reply_to: email.trim(),
        subject: `Jattari Luxe enquiry from ${name.trim()}`,
        text: [
          `Name: ${name.trim()}`,
          `Email: ${email.trim()}`,
          `Phone: ${phone.trim()}`,
          "",
          "Message:",
          message.trim(),
        ].join("\n"),
      }),
    });

    if (!delivery.ok) {
      const providerError = await delivery.text();
      console.error("Contact email delivery failed:", providerError);
      return NextResponse.json(
        { error: "We could not deliver your message. Please try again later." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact email provider request failed:", error);
    return NextResponse.json(
      { error: "The contact service is temporarily unavailable." },
      { status: 502 }
    );
  }
}
