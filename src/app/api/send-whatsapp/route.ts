import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { to, name, category, subCategory, } = await req.json();

    const PHONE_NUMBER_ID = process.env.PHONE_NUMBER_ID;
    const WHATSAPP_TOKEN = process.env.WHATSAPP_TOKEN;

    if (!PHONE_NUMBER_ID || !WHATSAPP_TOKEN) {
      return NextResponse.json({ error: "Missing config" }, { status: 500 });
    }

    const url = `https://graph.facebook.com/v20.0/${PHONE_NUMBER_ID}/messages`;
    const body_1 = {
      messaging_product: "whatsapp",
      to,
      type: "template",
      template: {
        name: "welcome_classic",
        language: { code: "en" },
        components: [
          {
            type: "body",
            parameters: [
              { type: "text", text: name },
              { type: "text", text: to },
              { type: "text", text: category },
              { type: "text", text: subCategory },
            ],
          },
          {
            type: "button",
            sub_type: "quick_reply",
            index: "0",
            parameters: [
              { type: "text", text: "Payment Queries" },
            ],
          },
        ],
      },
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${WHATSAPP_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body_1),
    });
    const data = await response.json();

    console.log(data);




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
