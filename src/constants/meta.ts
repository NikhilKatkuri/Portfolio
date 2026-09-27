import type { Metadata } from "next";
import publicLinks from "./links";

const OWNER_NAME = "Nikhil Katkuri";
const PORTFOLIO_URL = process.env.NEXT_PUBLIC_SITE_URL as string;
const PORTFOLIO_EMAIL = publicLinks.mail.replace("mailto:", "");
const OG_IMAGE_PATH = "/og-image.avif";

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
      siteName: `${OWNER_NAME} | Full Stack & Android Developer Portfolio`,
      locale: "en_US",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${OWNER_NAME} — Full Stack & Android Developer Portfolio`,
        },
      ],
      type: config.ogType || "website",
    },
    alternates: {
      canonical: fullUrl,
    },
  };
}

const homeMetadata: Metadata = createMetadata({
  path: "/",
  title: "Nikhil Katkuri | Full Stack Developer & Android Developer",
  description:
    "Portfolio of Nikhil Katkuri, a Full Stack and Android Developer building scalable web applications, AI systems, and offline-first architectures. Second Runner-up at Microsoft Codeathon 2026 with experience as an Android Developer at Galactix Solutions Pvt. Ltd.",
  ogType: "profile",
  keywords: [
    "Nikhil Katkuri",
    "Full Stack Developer Portfolio",
    "Android Developer Portfolio",
    "Microsoft Codeathon 2026",
    "Microsoft Codeathon Second Runner-up",
    "HackForge Top 10 Finalist",
    "Next.js Developer",
    "TypeScript Developer",
    "React Developer",
    "AI Agent Developer",
    "Offline-First Architecture",
    "Hyderabad Developer",
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
