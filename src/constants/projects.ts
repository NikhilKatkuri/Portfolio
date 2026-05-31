import { ProjectRecord } from "@/types";

const Projects: ProjectRecord[] = [
  {
    slug: "dynamic-portfolio-cms",
    title: "Dynamic Portfolio CMS",
    summary:
      "A full-stack portfolio platform with real-time content management and AI-assisted personalization.",
    description:
      "Built a production-ready portfolio CMS with ISR, real-time updates, and AI content suggestions using Next.js, TypeScript, and MongoDB. Features include a user-friendly admin interface, AI-powered content recommendations, and seamless integration with the Next.js App Router for dynamic page generation.",
    metaTitle: "Dynamic Portfolio CMS | Next.js + AI Project by Nikhil Katkuri",
    metaDescription:
      "Built a production-ready portfolio CMS with ISR, real-time updates, and AI content suggestions using Next.js, TypeScript, and MongoDB.",
    keywords: [
      "Next.js",
      "Portfolio CMS",
      "AI Integration",
      "ISR",
      "Full-Stack Project",
    ],

    featuredImage: "/projects/dynamic-cms-hero.jpg",
    images: [
      "/projects/cms-1.jpg",
      "/projects/cms-2.jpg",
      "/projects/cms-3.jpg",
    ],
    videoUrl: "https://youtube.com/watch?v=...",

    role: "Full-Stack Engineer",
    status: "completed",
    startDate: "2025-08",
    endDate: "2025-12",

    challenge:
      "Needed a maintainable portfolio that can be updated without touching code.",
    solution:
      "Built a headless CMS using Next.js App Router, MDX, and MongoDB with real-time preview.",
    results: [
      "Reduced content update time by 90%",
      "Achieved 98 Lighthouse Performance score",
      "Implemented AI-powered content suggestions",
    ],
    keyFeatures: [
      "Real-time content editing",
      "ISR & On-demand revalidation",
      "AI content assistant",
      "Dark mode with smooth transitions",
    ],

    tags: ["Next.js", "TypeScript", "MongoDB", "Tailwind", "AI"],
    technologies: {
      frontend: ["Next.js 15", "React", "Tailwind CSS", "Framer Motion"],
      backend: ["Next.js API Routes", "MongoDB", "Mongoose"],
      tools: ["Vercel", "Clerk Auth", "MDX"],
    },

    urls: [
      { label: "Live Demo", url: "https://...", isPrimary: true },
      { label: "Source Code", url: "https://github.com/...", icon: "github" },
    ],

    featured: true,
    publishedAt: "2025-12-20",
    npmDownloads: 0,
  },
  {
    slug: "git-lite-cli",
    title: "Git Lite CLI",
    summary:
      "A lightweight, interactive command-line tool that simplifies common Git and GitHub workflows with clean commands and smart automation.",
    description:
      "Git Lite CLI (glc) is a powerful yet simple Node.js CLI tool with 2.1K+ downloads. It automates repository creation, commits, branching, and GitHub workflows from your terminal, making Git easier for developers of all levels.",
    metaTitle: "Git Lite CLI - Simplify Git Workflows | Nikhil Katkuri",
    metaDescription:
      "Git Lite CLI (glc) - A powerful yet simple Node.js CLI tool with 2.1K+ downloads. Automate repository creation, commits, branching, and GitHub workflows from your terminal.",
    keywords: [
      "Git CLI",
      "Developer Tooling",
      "GitHub Automation",
      "Command Line Tool",
      "NPM Package",
      "TypeScript CLI",
      "Git Lite",
      "Developer Productivity",
    ],

    featuredImage: "/projects/git-lite-cli-hero.jpg", // Add your image
    images: [
      "/projects/git-lite-cli-1.jpg",
      "/projects/git-lite-cli-2.jpg",
      "/projects/git-lite-cli-3.jpg",
    ],
    videoUrl: "", // Add a demo video if available

    role: "Creator & Lead Developer",
    status: "completed",
    startDate: "2025-05",
    endDate: "2026-01",

    challenge:
      "Git commands can be complex and repetitive for many developers. New users often struggle with remembering flags and managing GitHub authentication flows.",
    solution:
      "Built an intuitive CLI that wraps common Git operations into simple, memorable commands with interactive prompts, smart defaults, and seamless GitHub integration.",
    results: [
      "2,100+ organic NPM downloads",
      "Simplified daily Git workflow for many users",
      "Active maintenance with regular updates",
      "Well-documented authentication and usage guides",
    ],
    keyFeatures: [
      "Simplified commands like `glc save`, `glc sync`, `glc branch`",
      "Interactive GitHub authentication",
      "Smart repository cloning and management",
      "Built-in repository doctor and recovery tools",
      "gitignore templates and repository size analysis",
    ],

    tags: [
      "CLI",
      "TypeScript",
      "Node.js",
      "Git",
      "GitHub",
      "Developer Tool",
      "Open Source",
    ],
    technologies: {
      frontend: [],
      backend: ["Node.js", "TypeScript"],
      mobile: [],
      database: [],
      tools: ["Commander.js", "Inquirer.js", "Octokit", "Chalk", "Vercel"],
      infrastructure: ["NPM", "GitHub Actions", "Docker"],
    },

    urls: [
      {
        label: "Live on NPM",
        url: "https://www.npmjs.com/package/git-lite-cli",
        isPrimary: true,
      },
      {
        label: "Source Code",
        url: "https://github.com/NikhilKatkuri/git-lite-cli",
        icon: "github",
      },
      {
        label: "Documentation",
        url: "https://github.com/NikhilKatkuri/git-lite-cli#readme",
      },
    ],

    featured: true,
    publishedAt: "2025-06-01",
    npmDownloads: 2100,
  },
  {
    slug: "dynamic-portfolio-cms",
    title: "Dynamic Portfolio CMS",
    summary:
      "A full-stack portfolio platform with real-time content management and AI-assisted personalization.",
    description:
      "Built a production-ready portfolio CMS with ISR, real-time updates, and AI content suggestions using Next.js, TypeScript, and MongoDB. Features include a user-friendly admin interface, AI-powered content recommendations, and seamless integration with the Next.js App Router for dynamic page generation.",
    metaTitle: "Dynamic Portfolio CMS | Next.js + AI Project by Nikhil Katkuri",
    metaDescription:
      "Built a production-ready portfolio CMS with ISR, real-time updates, and AI content suggestions using Next.js, TypeScript, and MongoDB.",
    keywords: [
      "Next.js",
      "Portfolio CMS",
      "AI Integration",
      "ISR",
      "Full-Stack Project",
    ],

    featuredImage: "/projects/dynamic-cms-hero.jpg",
    images: [
      "/projects/cms-1.jpg",
      "/projects/cms-2.jpg",
      "/projects/cms-3.jpg",
    ],
    videoUrl: "https://youtube.com/watch?v=...",

    role: "Full-Stack Engineer",
    status: "completed",
    startDate: "2025-08",
    endDate: "2025-12",

    challenge:
      "Needed a maintainable portfolio that can be updated without touching code.",
    solution:
      "Built a headless CMS using Next.js App Router, MDX, and MongoDB with real-time preview.",
    results: [
      "Reduced content update time by 90%",
      "Achieved 98 Lighthouse Performance score",
      "Implemented AI-powered content suggestions",
    ],
    keyFeatures: [
      "Real-time content editing",
      "ISR & On-demand revalidation",
      "AI content assistant",
      "Dark mode with smooth transitions",
    ],

    tags: ["Next.js", "TypeScript", "MongoDB", "Tailwind", "AI"],
    technologies: {
      frontend: ["Next.js 15", "React", "Tailwind CSS", "Framer Motion"],
      backend: ["Next.js API Routes", "MongoDB", "Mongoose"],
      tools: ["Vercel", "Clerk Auth", "MDX"],
    },

    urls: [
      { label: "Live Demo", url: "https://...", isPrimary: true },
      { label: "Source Code", url: "https://github.com/...", icon: "github" },
    ],

    featured: true,
    publishedAt: "2025-12-20",
    npmDownloads: 0,
  },
  {
    slug: "git-lite-cli",
    title: "Git Lite CLI",
    summary:
      "A lightweight, interactive command-line tool that simplifies common Git and GitHub workflows with clean commands and smart automation.",
    description:
      "Git Lite CLI (glc) is a powerful yet simple Node.js CLI tool with 2.1K+ downloads. It automates repository creation, commits, branching, and GitHub workflows from your terminal, making Git easier for developers of all levels.",
    metaTitle: "Git Lite CLI - Simplify Git Workflows | Nikhil Katkuri",
    metaDescription:
      "Git Lite CLI (glc) - A powerful yet simple Node.js CLI tool with 2.1K+ downloads. Automate repository creation, commits, branching, and GitHub workflows from your terminal.",
    keywords: [
      "Git CLI",
      "Developer Tooling",
      "GitHub Automation",
      "Command Line Tool",
      "NPM Package",
      "TypeScript CLI",
      "Git Lite",
      "Developer Productivity",
    ],

    featuredImage: "/projects/git-lite-cli-hero.jpg", // Add your image
    images: [
      "/projects/git-lite-cli-1.jpg",
      "/projects/git-lite-cli-2.jpg",
      "/projects/git-lite-cli-3.jpg",
    ],
    videoUrl: "", // Add a demo video if available

    role: "Creator & Lead Developer",
    status: "completed",
    startDate: "2025-05",
    endDate: "2026-01",

    challenge:
      "Git commands can be complex and repetitive for many developers. New users often struggle with remembering flags and managing GitHub authentication flows.",
    solution:
      "Built an intuitive CLI that wraps common Git operations into simple, memorable commands with interactive prompts, smart defaults, and seamless GitHub integration.",
    results: [
      "2,100+ organic NPM downloads",
      "Simplified daily Git workflow for many users",
      "Active maintenance with regular updates",
      "Well-documented authentication and usage guides",
    ],
    keyFeatures: [
      "Simplified commands like `glc save`, `glc sync`, `glc branch`",
      "Interactive GitHub authentication",
      "Smart repository cloning and management",
      "Built-in repository doctor and recovery tools",
      "gitignore templates and repository size analysis",
    ],

    tags: [
      "CLI",
      "TypeScript",
      "Node.js",
      "Git",
      "GitHub",
      "Developer Tool",
      "Open Source",
    ],
    technologies: {
      frontend: [],
      backend: ["Node.js", "TypeScript"],
      mobile: [],
      database: [],
      tools: ["Commander.js", "Inquirer.js", "Octokit", "Chalk", "Vercel"],
      infrastructure: ["NPM", "GitHub Actions", "Docker"],
    },

    urls: [
      {
        label: "Live on NPM",
        url: "https://www.npmjs.com/package/git-lite-cli",
        isPrimary: true,
      },
      {
        label: "Source Code",
        url: "https://github.com/NikhilKatkuri/git-lite-cli",
        icon: "github",
      },
      {
        label: "Documentation",
        url: "https://github.com/NikhilKatkuri/git-lite-cli#readme",
      },
    ],

    featured: true,
    publishedAt: "2025-06-01",
    npmDownloads: 2100,
  },
];
export default Projects;