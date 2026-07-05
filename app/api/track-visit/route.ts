// Fire-and-forget visit notifier: the client pings this once per session and
// it forwards a short summary to a Telegram bot. Configure via env vars:
//   TELEGRAM_BOT_TOKEN  — from @BotFather
//   TELEGRAM_CHAT_ID    — your personal chat id (from @userinfobot)
// Without both set, it silently no-ops so the site keeps working.

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Body = { path?: string; referrer?: string | null };

export async function POST(request: Request) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    return Response.json({ ok: false, reason: "not-configured" });
  }

  let body: Body = {};
  try {
    body = (await request.json()) as Body;
  } catch {
    /* empty/invalid body is fine */
  }

  const h = request.headers;
  const ua = h.get("user-agent") ?? "—";
  const ip =
    h.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    h.get("x-real-ip") ??
    "—";
  // Geo headers are populated by Vercel/most edges in production.
  const city = h.get("x-vercel-ip-city");
  const country = h.get("x-vercel-ip-country");
  const geo = [city ? decodeURIComponent(city) : "", country ?? ""]
    .filter(Boolean)
    .join(", ");

  const when = new Date().toLocaleString("pt-PT", {
    timeZone: "Europe/Lisbon",
  });

  const text = [
    "🌿 Nova visita — Flores da Poça",
    `🕒 ${when}`,
    body.path ? `📄 ${body.path}` : null,
    geo ? `📍 ${geo}` : null,
    body.referrer ? `↩️ ${body.referrer}` : null,
    `🖥️ ${ua}`,
    ip !== "—" ? `🌐 ${ip}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        disable_web_page_preview: true,
      }),
    });
  } catch {
    /* never let a notification failure affect the visitor */
  }

  return Response.json({ ok: true });
}
