interface Campaign {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}

interface BaseTracker extends Campaign {
  time: number;
  ipHash: string;
  device: "desktop" | "mobile" | "tablet";
  country?: string;
}

interface Tracker extends BaseTracker {
  route: string;
  event?: string;
}

export type ResumeTracker  = BaseTracker; 

export default Tracker;
