export interface UrlRecord {
  label: string;
  url: string;
  isPrimary?: boolean;
  icon?: string;
}
export interface Metrics {
  name: string;
  count: number | string;
}
export interface ProjectRecord {
  // Basic Info
  slug: string;
  title: string;
  summary: string; // Short one-liner for cards
  description: string; // Longer description

  // SEO & Metadata
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];

  // Media
  featuredImage?: string;
  images: string[];
  videoUrl?: string;
  thumbnail?: string;

  role: string;
  status: "completed" | "in-progress" | "maintenance";
  startDate: string;
  endDate?: string;

  // Content
  challenge?: string;
  solution?: string;
  results?: string[];
  keyFeatures?: string[];

  tags: string[];
  technologies: {
    frontend?: string[];
    backend?: string[];
    mobile?: string[];
    database?: string[];
    tools?: string[];
    infrastructure?: string[];
  };

  // Links
  urls: UrlRecord[];

  ogImage?: string;
  publishedAt?: string;
  featured?: boolean;
  metrics?: Metrics;
}

export type EmploymentType =
  | "full-time"
  | "part-time"
  | "contract"
  | "freelance"
  | "internship"
  | "apprenticeship";

export type WorkMode = "remote" | "onsite" | "hybrid";

export interface ExperienceTechnology {
  name: string;
  category?:
    | "language"
    | "framework"
    | "tool"
    | "platform"
    | "database"
    | "other";
}

export interface ExperienceHighlight {
  text: string;
  metric?: string;
}

export interface ExperienceRecord {
  id: string;
  title: string;
  company: string;
  companyUrl?: string;
  companyLogo?: string;
  companySize?: string;

  startDate: string;
  endDate?: string;
  isCurrent?: boolean;

  // ── Classification ────────────────────────────────────────────────────────
  employmentType: EmploymentType;
  workMode: WorkMode;
  location?: string; // e.g. "San Francisco, CA" or "Remote"

  // ── Content ───────────────────────────────────────────────────────────────
  summary: string; // One-liner for compact card view
  description?: string; // Full paragraph for expanded/detail view
  highlights?: ExperienceHighlight[]; // Bullet achievements with optional metrics
  responsibilities?: string[]; // Day-to-day responsibilities

  // ── Skills ────────────────────────────────────────────────────────────────
  technologies?: ExperienceTechnology[];
  skills?: string[]; // Soft / domain skills, e.g. "System Design"

  // ── Display ───────────────────────────────────────────────────────────────
  featured?: boolean; // Show on homepage summary section
  order: number; // Manual sort override (lower = first)
}
