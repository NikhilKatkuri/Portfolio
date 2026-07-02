import { type NextRequest, NextResponse } from "next/server";
import { waitUntil } from "@vercel/functions";
import Tracker from "./types/db";

const BOT_REGEX =
  /bot|spider|crawl|scraper|preview|lighthouse|uptime|bytespider|googlebot|bingbot|slurp|duckduck|facebot|ia_archiver/i;
const SESSION_COOKIE = "portfolio_session";
const SESSION_MAX_AGE = 600;

export async function proxy(req: NextRequest) {
  if (BOT_REGEX.test(req.headers.get("user-agent") || "")) {
    return NextResponse.next();
  }

  const isPrefetch =
    req.headers.get("next-router-prefetch") === "1" ||
    req.headers.get("purpose") === "prefetch" ||
    req.headers.get("sec-purpose")?.includes("prefetch") ||
    req.headers.has("rsc"); // RSC payload fetch, not a document nav

  if (isPrefetch) {
    return NextResponse.next();
  }

  const isRealNavigation =
    req.headers.get("sec-fetch-mode") === "navigate" &&
    req.headers.get("sec-fetch-dest") === "document";

  if (!isRealNavigation) {
    return NextResponse.next();
  }

  let sessionId = req.cookies.get(SESSION_COOKIE)?.value;
  const isNewSession = !sessionId;
  if (isNewSession) {
    sessionId = crypto.randomUUID();
  }

  const { searchParams, pathname } = req.nextUrl;

  const data: Partial<Tracker> = {
    route: pathname,
    event: "load/view",
    utm: {
      source: searchParams.get("utm_source") ?? undefined,
      medium: searchParams.get("utm_medium") ?? undefined,
      campaign: searchParams.get("utm_campaign") ?? undefined,
      term: searchParams.get("utm_term") ?? undefined,
      content: searchParams.get("utm_content") ?? undefined,
    },
  };

  const base =
    process.env.NEXT_PUBLIC_SITE_URL as string ?? `${req.nextUrl.protocol}//${req.nextUrl.host}`;
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
  if (isNewSession) {
    res.cookies.set(SESSION_COOKIE, sessionId!, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: SESSION_MAX_AGE,
      path: "/",
    });
  }

  return res;
}

export const config = {
  matcher: [
    "/",
    "/about",
    "/project",
    "/project/:path*",
    "/uses",
    "/api/resume",
  ],
};
