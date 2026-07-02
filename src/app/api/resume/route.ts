import { publicConfigStrict } from "@/constants/links";
import clientPromise from "@/lib/mongodb";
import { ResumeTracker } from "@/types/db"; // Use the updated type
import { NextRequest, NextResponse } from "next/server";
import { checkup } from "@/utils/checkup";

const RESUME_URL = publicConfigStrict.resume;
const SESSION_COOKIE = "resume_session";
const SESSION_MAX_AGE = 600;

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  
  let sessionId = req.cookies.get(SESSION_COOKIE)?.value || crypto.randomUUID();
  
  const isFreshView = await checkup("/api/resume", sessionId, "resume");

  if (isFreshView) {
    const data: ResumeTracker = {
      time: Date.now(),
      sessionId,
      route: "/api/resume",
      event: "download/view",
      utm: {
        source: searchParams.get("utm_source") || undefined,
        medium: searchParams.get("utm_medium") || undefined,
        campaign: searchParams.get("utm_campaign") || undefined,
        term: searchParams.get("utm_term") || undefined,
        content: searchParams.get("utm_content") || undefined,
      },
      // Keep these undefined if you are phasing out fingerprinting
      device: undefined,
      country: undefined,
    };

    try {
      const client = await clientPromise;
      await client
        .db(publicConfigStrict.dbName)
        .collection("resume_tracks")
        .insertOne(data);
    } catch (error) {
      console.error(`[bug-resume]: ${error}`);
    }
  }

  // Return HTML redirect
  return new NextResponse(
    `<html><body><script>window.location.replace("${RESUME_URL}");</script></body></html>`,
    {
      status: 200,
      headers: {
        "Content-Type": "text/html",
        "Set-Cookie": `${SESSION_COOKIE}=${sessionId}; Path=/; Max-Age=${SESSION_MAX_AGE}; SameSite=Lax${
          process.env.NODE_ENV === "production" ? "; Secure" : ""
        }; HttpOnly`,
      },
    }
  );
}