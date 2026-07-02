export interface Campaign {
  source?: string;
  medium?: string;
  campaign?: string;
  term?: string;
  content?: string;
}

export interface BaseTracker {
  time: number;
  sessionId: string;
}

export interface Tracker extends BaseTracker {
  route: string;
  event: string;
  device?: string;
  country?: string;
  utm: Partial<Campaign>;
}

export type ResumeTracker = Tracker;

export default Tracker;