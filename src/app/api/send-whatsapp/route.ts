import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { to, message, buttonUrl } = await req.json();

    const PHONE_NUMBER_ID = process.env.PHONE_NUMBER_ID;
    const WHATSAPP_TOKEN = process.env.WHATSAPP_TOKEN;

    if (!PHONE_NUMBER_ID || !WHATSAPP_TOKEN) {
      return NextResponse.json({ error: "Missing config" }, { status: 500 });
    }

    const url = `https://graph.facebook.com/v20.0/${PHONE_NUMBER_ID}/messages`;

    const body = {
      messaging_product: "whatsapp",
      to,
      type: "interactive",
      interactive: {
        type: "cta_url",
        header: {
          type: "text",
          text: "Complete your registration",
        },
        body: {
          text: message,
        },
        footer: {
          text: "Tap below to continue",
        },
        action: {
          name: "cta_url",
          parameters: {
            display_text: "Payment Queries",
            url: buttonUrl,
          },
        },
      },
    };
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${WHATSAPP_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("WhatsApp API Error:", data);
      return NextResponse.json({ success: false, error: data }, { status: response.status });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("WhatsApp API Error:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
