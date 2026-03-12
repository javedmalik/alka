import { NextResponse } from "next/server";

const ALLOWED_SERVICES = ["Volunteer", "Partner", "Learner"];

function validate(body) {
  const errors = {};

  const your_name = String(body?.your_name || "").trim();
  const your_email = String(body?.your_email || "").trim();
  const phone_number = String(body?.phone_number || "").trim();
  const service_name = String(body?.service_name || "").trim();
  const your_message = String(body?.your_message || "").trim();
  const website = String(body?.website || "").trim(); // honeypot

  if (website) {
    return {
      isBot: true,
      errors: {},
      clean: null,
    };
  }

  if (your_name.length < 2 || your_name.length > 80) {
    errors.your_name = "Invalid name.";
  }

  if (!/^\S+@\S+\.\S+$/.test(your_email) || your_email.length > 120) {
    errors.your_email = "Invalid email.";
  }

  const digits = phone_number.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 15) {
    errors.phone_number = "Invalid phone number.";
  }

  if (!ALLOWED_SERVICES.includes(service_name)) {
    errors.service_name = "Invalid selection.";
  }

  if (your_message.length < 10 || your_message.length > 2000) {
    errors.your_message = "Invalid message.";
  }

  return {
    isBot: false,
    errors,
    clean: {
      your_name,
      your_email,
      phone_number,
      service_name,
      your_message,
    },
  };
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { isBot, errors, clean } = validate(body);

    if (isBot) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { message: "Validation failed", errors },
        { status: 400 }
      );
    }

    const apiUrl = process.env.CONTACT_API_URL;

    if (!apiUrl) {
      return NextResponse.json(
        { message: "Server configuration error" },
        { status: 500 }
      );
    }

    const upstreamRes = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(clean),
      cache: "no-store",
    });

    if (!upstreamRes.ok) {
      return NextResponse.json(
        { message: "Failed to send message" },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { message: "Invalid request" },
      { status: 400 }
    );
  }
}