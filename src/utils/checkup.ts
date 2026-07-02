import { redis } from "@/lib/upstash";
import { RedisKeys } from "./keys";

const checkup = async (
  routePath: string,
  sessionId: string | undefined,
  type: "pageView" | "resume" = "pageView"
): Promise<boolean> => {
  if (!sessionId) return true;

  const key = type === "pageView" ? RedisKeys.pageView(sessionId, routePath) : RedisKeys.resume(sessionId, routePath);
  const isFresh = await redis.set(key, "true", { nx: true, ex: 600 });

  return isFresh === "OK";
};

export { checkup };
