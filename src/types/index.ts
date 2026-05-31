export interface UrlRecord {
  label: string;
  url: string;
  isPrimary?: boolean;
  icon?: string;
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
  featuredImage: string;
  images: string[]
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
  npmDownloads?: number;
}
