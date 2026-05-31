import type { Metadata } from "next";

const OWNER_NAME = "Nikhil Katkuri";
const PORTFOLIO_URL = "https://nikhilkatkuri.com";
const PORTFOLIO_EMAIL = "nikhil07.dev@gmail.com";
const TWITTER_HANDLE = "@nkatkuri";
const OG_IMAGE_PATH = "/og-image.png";

interface MetadataConfig {
  path: string;
  title: string;
  description: string;
  ogImage?: string;
  ogType?: "website" | "profile" | "article"; // Added article type for dynamic posts
  keywords?: string[];
}

function createMetadata(config: MetadataConfig): Metadata {
  const fullUrl = `${PORTFOLIO_URL}${config.path}`;
  // CRITICAL FIX: metadataBase simplifies relative paths, but manually building full URLs ensures social apps parse them flawlessly
  const ogImageUrl = config.ogImage
    ? `${PORTFOLIO_URL}${config.ogImage}`
    : `${PORTFOLIO_URL}${OG_IMAGE_PATH}`;

  return {
    title: config.title,
    description: config.description,
    applicationName: `${OWNER_NAME} Portfolio`,
    authors: [{ name: OWNER_NAME, url: PORTFOLIO_URL }],
    keywords: config.keywords,
    creator: OWNER_NAME,
    publisher: OWNER_NAME,
    metadataBase: new URL(PORTFOLIO_URL),

    openGraph: {
      title: config.title,
      description: config.description,
      url: fullUrl,
      siteName: `${OWNER_NAME} | Full-Stack Engineer`,
      locale: "en_US",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${OWNER_NAME} - Full Stack Engineer & AI Specialist`,
        },
      ],
      type: config.ogType || "website",
    },
    twitter: {
      card: "summary_large_image",
      site: TWITTER_HANDLE,
      creator: TWITTER_HANDLE,
      title: config.title,
      description: config.description,
      images: [ogImageUrl],
    },
    alternates: {
      canonical: fullUrl,
    },
  };
}

// --- METADATA INSTANCES ---

const homeMetadata: Metadata = createMetadata({
  path: "/",
  title: "Nikhil Katkuri | Senior Full-Stack Engineer & AI Specialist",
  description:
    "Portfolio of Nikhil Katkuri, a Full-Stack Engineer from Hyderabad specializing in Next.js, TypeScript, React, and LLM workflows. Exploring local AI inference and scalable system design.",
  ogType: "profile",
  keywords: [
    "Nikhil Katkuri",
    "Full Stack Engineer Hyderabad",
    "Next.js Developer India",
    "TypeScript Developer",
    "Ollama Integration",
    "Local LLM Development",
    "Software Engineer Portfolio",
    "Tailwind CSS Specialist",
  ],
});

const aboutMetadata: Metadata = createMetadata({
  path: "/about",
  title: "About | Nikhil Katkuri - Engineering Background & Philosophy",
  description:
    "Discover Nikhil Katkuri's professional journey, core architectural values, and technical expertise in full-stack engineering, interface exploration, and backend debugging.",
  ogImage: "/og-about.png",
  ogType: "profile",
  keywords: [
    "About Nikhil Katkuri",
    "Software Engineering Philosophy",
    "Full Stack Career Journey",
    "Hyderabad Developer Biography",
    "Technical Leadership",
  ],
});
 
const projectsMetadata: Metadata = createMetadata({
  path: "/project",
  title: "Project | Featured Work by Nikhil Katkuri",
  description:
    "Explore a curated collection of production-grade web applications, interactive software development, and AI tools built by Nikhil Katkuri using modern web frameworks.",
  ogImage: "/og-projects.png",
  keywords: [
    "Nikhil Katkuri Projects",
    "Next.js Portfolio Showcases",
    "Full Stack Case Studies",
    "AI Web Applications",
    "Software Engineering Portfolio",
  ],
});

const usesMetadata: Metadata = createMetadata({
  path: "/uses",
  title: "Uses | Tools, Tech Stack & Workflow of Nikhil Katkuri",
  description:
    "An inside look at the hardware, editor extensions, development environments, and local/cloud AI toolchains (Ollama, Claude, Gemini) utilized daily by Nikhil Katkuri.",
  ogImage: "/og-uses.png",
  keywords: [
    "Developer Setup",
    "Nikhil Katkuri Workspace",
    "VS Code Configuration",
    "Local AI Workflow",
    "Windows 11 Development Environment",
    "PowerShell Developer Setup",
  ],
});

// Helper factory function for your dynamic pages (/project/[id])
function createDynamicProjectMetadata(
  id: string,
  title: string,
  summary: string,
  tags: string[],
): Metadata {
  return createMetadata({
    path: `/project/${id}`,
    title: `${title} | Project by Nikhil Katkuri`,
    description: summary,
    ogType: "article",
    keywords: [...tags, "Nikhil Katkuri Project", "Software Case Study"],
  });
}

export {
  OWNER_NAME,
  PORTFOLIO_URL,
  PORTFOLIO_EMAIL,
  homeMetadata,
  aboutMetadata,
  projectsMetadata,
  usesMetadata,
  createDynamicProjectMetadata,
};
