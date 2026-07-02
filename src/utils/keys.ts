export class RedisKeys {
  private static VIEW_PREFIX = "track";
  private static RESUME_PREFIX = "resume";

  static resume(sessionId: string, pathname: string): string {
    return `${this.RESUME_PREFIX}:${sessionId}:${pathname}`;
  }
  static pageView(sessionId: string, pathname: string): string {
    return `${this.VIEW_PREFIX}:${sessionId}:${pathname}`;
  }
}
