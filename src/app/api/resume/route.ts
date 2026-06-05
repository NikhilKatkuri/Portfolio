import { publicConfigStrict } from "@/constants/links";
import clientPromise from "@/lib/mongodb";
import { ResumeTracker } from "@/types/db";
import { getCountry, getDevice, getIp, getUtmParams } from "@/utils/tools";
import { NextRequest, NextResponse } from "next/server";
import { checkup } from "@/utils/checkup";

const RESUME_URL = publicConfigStrict.resume;
const SESSION_COOKIE = "resume_session";
const SESSION_MAX_AGE = 600; 
 
export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const ipHash = getIp(req);

  let sessionId = req.cookies.get(SESSION_COOKIE)?.value;
  if (!sessionId) {
    sessionId = crypto.randomUUID();
  }
 
  const isFreshView = await checkup("/api/resume", sessionId, "resume");

  if (isFreshView) {
    const data: ResumeTracker = {
      time: Date.now(),
      ipHash,
      device: getDevice(req),
      country: getCountry(req),
      ...getUtmParams(searchParams),
    };

    try {
      const client = await clientPromise;
      await client
        .db(publicConfigStrict.dbName)
        .collection("resume_tracks")
        .insertOne(data);
      
    } catch (error) {
      console.error(`[bug-resume]:[${new Date().toISOString()}]`, error);
    }
  }  
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Opening Resume...</title>
      </head>
      <body>
        <script>
          window.location.replace("${RESUME_URL}");
        </script>
        <noscript>
          <meta http-equiv="refresh" content="0;url=${RESUME_URL}" />
        </noscript>
      </body>
    </html>
  `;

  return new NextResponse(html, {
    status: 200,
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": `${SESSION_COOKIE}=${sessionId}; Path=/; Max-Age=${SESSION_MAX_AGE}; SameSite=Lax${
        process.env.NODE_ENV === "production" ? "; Secure" : ""
      }; HttpOnly`,
    },
  });
}
