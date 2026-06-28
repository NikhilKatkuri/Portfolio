import { type NextRequest, NextResponse } from "next/server";
import { waitUntil } from "@vercel/functions";
import Tracker from "./types/db";
import { getUtmParams } from "./utils/tools";

const BOT_REGEX =
  /bot|spider|crawl|scraper|preview|lighthouse|uptime|bytespider|googlebot|bingbot|slurp|duckduck|facebot|ia_archiver/i;

const SESSION_COOKIE = "portfolio_session";
const SESSION_MAX_AGE = 600;

export async function proxy(req: NextRequest) {
  if (BOT_REGEX.test(req.headers.get("user-agent") || "")) {
    return NextResponse.next();
  }

  let sessionId = req.cookies.get(SESSION_COOKIE)?.value;

  if (!sessionId) {
    sessionId = crypto.randomUUID();
  }

  const { searchParams, pathname } = req.nextUrl;

  const data: Partial<Tracker> = {
    route: pathname,
    event: "load/view",
    ...getUtmParams(searchParams),
  };

  const base =
    process.env.INTERNAL_URL ?? `${req.nextUrl.protocol}//${req.nextUrl.host}`;
  const trackingEndpoint = `${base}/api/track`;

  waitUntil(
    fetch(trackingEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: `${SESSION_COOKIE}=${sessionId}`,
      },
      body: JSON.stringify(data),
    }).catch(() => {}),
  );

  const res = NextResponse.next();
  res.cookies.set(SESSION_COOKIE, sessionId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: SESSION_MAX_AGE,
    path: "/",
  });

  return res;
}

export const config = {
  matcher: ["/", "/projects/:slug*"],
};
