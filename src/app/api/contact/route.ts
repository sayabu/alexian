import { validateContact } from "@/lib/contact";
export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin)
    return Response.json(
      { error: "Request origin not allowed." },
      { status: 403 },
    );
  if (Number(request.headers.get("content-length") || 0) > 10000)
    return Response.json({ error: "Request too large." }, { status: 413 });
  let value: unknown;
  try {
    const text = await request.text();
    if (text.length > 10000)
      return Response.json({ error: "Request too large." }, { status: 413 });
    value = JSON.parse(text);
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }
  if (!validateContact(value))
    return Response.json(
      { error: "Please provide a name, organization and valid work email." },
      { status: 400 },
    );
  const url = process.env.CONTACT_WEBHOOK_URL;
  if (!url)
    return Response.json(
      {
        error:
          "Contact delivery is not configured. Your request has not been sent.",
      },
      { status: 503 },
    );
  try {
    if (new URL(url).protocol !== "https:") throw new Error("HTTPS required");
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.CONTACT_WEBHOOK_TOKEN
          ? { Authorization: `Bearer ${process.env.CONTACT_WEBHOOK_TOKEN}` }
          : {}),
      },
      body: JSON.stringify(value),
      signal: AbortSignal.timeout(10000),
      redirect: "error",
    });
    if (!response.ok) throw new Error("Delivery failed");
    return Response.json({ ok: true });
  } catch {
    return Response.json(
      { error: "Delivery could not be confirmed. Please try again later." },
      { status: 502 },
    );
  }
}
