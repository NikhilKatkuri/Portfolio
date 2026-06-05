import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { publicConfigStrict } from "@/constants/links";
import Tracker from "@/types/db";
import { getCountry, getDevice, getIp } from "@/utils/tools";
import { checkup } from "@/utils/checkup";

export async function POST(req: NextRequest) {
  try {
    const sessionId = req.cookies.get("portfolio_session")?.value;
    const payload = await req.json();
    const isFreshView = await checkup(payload.route, sessionId);

    if (!isFreshView) { 
      return NextResponse.json(
        { success: true, message: "Duplicate logged out" },
        { status: 200 },
      );
    }

    const data: Tracker = {
      ...payload,
      time: Date.now(),
      sessionId: sessionId || payload.sessionId,
      ipHash: getIp(req),
      device: getDevice(req),
      country: getCountry(req),
    };

    const client = await clientPromise;
    await client
      .db(publicConfigStrict.dbName)
      .collection("tracks")
      .insertOne(data);

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Tracking API DB error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
