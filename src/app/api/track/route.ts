import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { publicConfigStrict } from "@/constants/links";
import { checkup } from "@/utils/checkup";

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json();

    const sessionId =
      req.cookies.get("portfolio_session")?.value || payload.sessionId;

    if (!sessionId) {
      console.log({ success: false, message: "No session found" });
      return NextResponse.json(
        { success: false, message: "No session found" },
        { status: 400 },
      );
    }

    const isFreshView = await checkup(payload.route, sessionId);
    if (!isFreshView) {
      console.log({ success: true, message: "Duplicate view within cooldown" });
      return NextResponse.json(
        { success: true, message: "Duplicate view within cooldown" },
        { status: 200 },
      );
    }

    const url = new URL(payload.url);
    const utm = {
      source: url.searchParams.get("utm_source") || null,
      medium: url.searchParams.get("utm_medium") || null,
      campaign: url.searchParams.get("utm_campaign") || null,
      term: url.searchParams.get("utm_term") || null,
      content: url.searchParams.get("utm_content") || null,
    };

    const trackingData = {
      route: payload.route,
      sessionId,
      utm,
      timestamp: new Date(),
    };

    const client = await clientPromise;
    await client
      .db(publicConfigStrict.dbName)
      .collection("tracks")
      .insertOne(trackingData);
    console.log({ success: true, message: "Tracking data inserted" });
    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Tracking API DB error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 },
    );
  }
}
