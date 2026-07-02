import type { Metadata } from "next";
import publicLinks from "./links";

const OWNER_NAME = "Nikhil Katkuri";
const PORTFOLIO_URL = process.env.NEXT_PUBLIC_SITE_URL as string;
const PORTFOLIO_EMAIL = publicLinks.mail.replace("mailto:", "");
const TWITTER_HANDLE = "@nkatkuri";
const OG_IMAGE_PATH = "/og-image.png";

interface MetadataConfig {
  path: string;
  title: string;
  description: string;
  ogImage?: string;
  ogType?: "website" | "profile" | "article";
  keywords?: string[];
}

function createMetadata(config: MetadataConfig): Metadata {
  const fullUrl = `${PORTFOLIO_URL}${config.path}`;
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
      siteName: `${OWNER_NAME} | Full-Stack Engineer Intern`,
      locale: "en_US",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${OWNER_NAME} - Full-Stack Engineer Intern at Galactix Solutions`,
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

const homeMetadata: Metadata = createMetadata({
  path: "/",
  title: "Nikhil Katkuri | Full-Stack Engineer Intern",
  description:
    "Portfolio of Nikhil Katkuri, a Full-Stack Engineer Intern at Galactix Solutions Pvt. Ltd. specializing in Next.js, TypeScript, React, and modern web architectures. Exploring offline-first systems, CLI developer tooling, and scalable monorepos.",
  ogType: "profile",
  keywords: [
    "Nikhil Katkuri",
    "Galactix Solutions Intern",
    "Full Stack Intern Hyderabad",
    "Next.js Developer India",
    "TypeScript Developer",
    "Offline-First Architecture",
    "Monorepo Web Applications",
    "Software Engineer Portfolio",
  ],
});

const aboutMetadata: Metadata = createMetadata({
  path: "/about",
  title: "About | Nikhil Katkuri - Professional Journey & Engineering Focus",
  description:
    "Discover Nikhil Katkuri's engineering journey, current experience as an intern at Galactix Solutions Pvt. Ltd., core development values, and technical expertise in modern full-stack web applications.",
  ogImage: "/og-about.png",
  ogType: "profile",
  keywords: [
    "About Nikhil Katkuri",
    "Galactix Solutions Experience",
    "Software Engineering Internship",
    "Full Stack Career Journey",
    "Hyderabad Developer Biography",
  ],
});

const projectsMetadata: Metadata = createMetadata({
  path: "/project",
  title: "Projects | Featured Work by Nikhil Katkuri",
  description:
    "Explore a curated collection of production-ready web applications, developer CLI utilities, monorepos, and projects built by Nikhil Katkuri.",
  ogImage: "/og-projects.png",
  keywords: [
    "Nikhil Katkuri Projects",
    "Next.js Portfolio Showcases",
    "Full Stack Case Studies",
    "Developer Tooling CLI",
    "Software Engineering Portfolio",
  ],
});

const usesMetadata: Metadata = createMetadata({
  path: "/uses",
  title: "Uses | Tools, Tech Stack & Workflow of Nikhil Katkuri",
  description:
    "An inside look at the hardware, editor extensions, terminal configurations, and development toolchains (Turborepo, Node.js, Next.js) utilized daily by Nikhil Katkuri.",
  ogImage: "/og-uses.png",
  keywords: [
    "Developer Setup",
    "Nikhil Katkuri Workspace",
    "VS Code Configuration",
    "Full-Stack Workflow",
    "Windows 11 Development Environment",
    "PowerShell Developer Setup",
  ],
});

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
    keywords: [
      ...tags,
      "Nikhil Katkuri Project",
      "Software Case Study",
      "Full-Stack Development",
    ],
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
