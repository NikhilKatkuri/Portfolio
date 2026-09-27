import { db } from "./db";

const GOOGLE_APP_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_APP_SCRIPT_URL;
const ANALYTICS_API_KEY = process.env.NEXT_PUBLIC_ANALYTICS_API_KEY;

const VISITOR_ID_KEY = "portfolio_visitor_id";

export interface AnalyticsData {
  totalViews: number;
  uniqueVisitors: number;
}

/**
 * Low-level helper: send a JSON payload to the Google Apps Script endpoint.
 * Fails silently — errors are only logged in development.
 */
async function sendAnalytics(payload: Record<string, unknown>): Promise<void> {
  if (!GOOGLE_APP_SCRIPT_URL || !ANALYTICS_API_KEY) return;

  try {
    const res = await fetch(GOOGLE_APP_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ apiKey: ANALYTICS_API_KEY, ...payload }),
      redirect: "follow",
    });

    if (!res.ok && process.env.NODE_ENV === "development") {
      console.error("Analytics request failed:", res.status, res.statusText);
    }
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("Analytics error:", error);
    }
  }
}

/**
 * Check if this is a new visitor using IndexedDB.
 * Generates and persists a unique visitor ID if not present.
 */
export async function checkNewVisitor(): Promise<boolean> {
  if (typeof window === "undefined") return false;

  try {
    const existing = await db.visitors.get(VISITOR_ID_KEY);
    if (existing) return false;

    await db.visitors.put({
      id: VISITOR_ID_KEY,
      visitedAt: Date.now(),
    });
    return true;
  } catch (error) {
    console.error("IndexedDB visitor check error:", error);
    return false;
  }
}

/**
 * Track a page view (new or returning visitor).
 */
export function trackVisit(isNewVisitor: boolean): Promise<void> {
  return sendAnalytics({ action: "view", isNewVisitor });
}

/**
 * Track a resume download / view.
 */
export function trackResumeDownload(): Promise<void> {
  return sendAnalytics({ action: "resume" });
}

/**
 * Fetch current analytics counts from Google Apps Script.
 */
export async function fetchAnalytics(): Promise<AnalyticsData | null> {
  if (!GOOGLE_APP_SCRIPT_URL) return null;

  try {
    const res = await fetch(GOOGLE_APP_SCRIPT_URL, { redirect: "follow" });
    if (!res.ok) return null;
    const data = await res.json();
    return {
      totalViews: Number(data.totalViews) || 0,
      uniqueVisitors: Number(data.uniqueVisitors) || 0,
    };
  } catch (error) {
    console.error("Analytics fetch error:", error);
    return null;
  }
}
