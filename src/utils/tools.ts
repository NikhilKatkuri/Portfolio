import { NextRequest } from "next/server";

export function getIp(request: NextRequest): string {
  const xForwardedFor = request.headers.get("x-forwarded-for");
  if (xForwardedFor) {
    return xForwardedFor.split(",")[0].trim();
  }
  return request.headers.get("x-real-ip") || "127.0.0.1";
}

export function getDevice(
  request: NextRequest,
): "desktop" | "mobile" | "tablet" {
  const vercelDevice = request.headers.get("x-vercel-device");
  if (
    vercelDevice === "mobile" ||
    vercelDevice === "tablet" ||
    vercelDevice === "desktop"
  ) {
    return vercelDevice;
  }

  const isMobileHint = request.headers.get("sec-ch-ua-mobile");
  const platformHint =
    request.headers.get("sec-ch-ua-platform")?.toLowerCase() || "";

  if (
    isMobileHint === "?1" ||
    platformHint === '"android"' ||
    platformHint === '"ios"'
  ) {
    return "mobile";
  }

  const userAgent = request.headers.get("user-agent") || "";

  if (/tablet|ipad|playbook|silk/i.test(userAgent)) {
    return "tablet";
  }

  if (/mobile|iphone|android|blackberry/i.test(userAgent)) {
    return "mobile";
  }

  return "desktop";
}

export function getUtmParams(searchParams: URLSearchParams) {
  return {
    utm_source: searchParams.get("utm_source") ?? undefined,
    utm_medium: searchParams.get("utm_medium") ?? undefined,
    utm_campaign: searchParams.get("utm_campaign") ?? undefined,
    utm_term: searchParams.get("utm_term") ?? undefined,
    utm_content: searchParams.get("utm_content") ?? undefined,
  };
}

export function getSessionId(request: NextRequest): string {
  const requestId = request.headers.get("x-request-id");

  if (!requestId) {
    return crypto.randomUUID();
  }

  return requestId;
}

export function getCountry(request: NextRequest): string | undefined {
  const vercelCountry = request.headers.get("x-vercel-ip-country");
  if (vercelCountry) return vercelCountry.toUpperCase();

  if (process.env.NODE_ENV === "development") {
    return "IN";
  }

  return undefined;
}
