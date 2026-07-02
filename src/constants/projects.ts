import { ProjectRecord } from "@/types";

const Projects: ProjectRecord[] = [
  {
    slug: "client-provider-cipher",
    title: "Client-to-Provider Cipher",
    summary:
      "A high-performance, zero-knowledge CLI utility for securing local files via AES-256-CBC encryption before cloud synchronization.",
    description:
      "CTPC is a professional-grade security utility engineered to transform raw local files into encrypted payloads. It eliminates reliance on third-party cloud provider trust by ensuring that all cryptographic operations occur exclusively on the local client, guaranteeing that only the user-held key can ever unlock the data.",
    metaTitle: "CTPC | Zero-Knowledge File Encryption | Nikhil Katkuri",
    metaDescription:
      "A high-performance, local-first CLI tool for client-side file encryption, ensuring total data privacy before syncing to any cloud provider.",
    keywords: [
      "File Encryption",
      "Client-Side Cryptography",
      "Data Privacy",
      "Local-First Security",
      "TypeScript",
      "AES-256-CBC",
      "Zero-Knowledge",
    ],
    featuredImage: "/projects/cipher-hero.jpg",
    images: ["/projects/cipher-hero.jpg"],
    videoUrl: "",
    role: "Creator & Security Architect",
    status: "completed",
    startDate: "2026-05",
    endDate: "2026-06",
    challenge:
      "Modern cloud storage sync services often lack end-to-end encryption with user-owned keys. This leaves sensitive data exposed to provider-side monitoring, potential data breaches, or compliance risks during transit and at rest in the cloud.",
    solution:
      "Developed a streaming CLI pipeline that processes binary file streams on the local machine. By applying AES-256-CBC encryption before network egress, the tool creates an immutable barrier between raw data and cloud-based storage infrastructure.",
    results: [
      "Achieved stable throughput exceeding 100MB/s on standard hardware",
      "Implemented recursive directory processing with advanced glob pattern matching",
      "Delivered zero-knowledge security, ensuring no unencrypted data leaves the local environment",
      "Successfully published to NPM as @nikhil07k/ctpc",
    ],
    keyFeatures: [
      "High-performance streaming encryption/decryption",
      "Recursive directory and glob-pattern file filtering",
      "Built-in performance benchmarking (throughput and file-per-second analysis)",
      "Preservation of folder hierarchy during bulk encryption",
    ],
    tags: ["Cryptography", "TypeScript", "Node.js", "Security", "Local-First"],
    technologies: {
      backend: ["Node.js", "TypeScript"],
      tools: ["Crypto module", "Commander.js", "Zod"],
      infrastructure: ["NPM", "GitHub"],
    },
    urls: [
      {
        label: "Source Code",
        url: "https://github.com/nikhilKatkuri/ctpc",
        icon: "github",
        isPrimary: true,
      },
      {
        label: "NPM Package",
        url: "https://www.npmjs.com/package/@nikhil07k/ctpc",
        icon: "npm",
      },
    ],
    featured: true,
    publishedAt: "2026-06-19",
    metrics: {
      name: "version",
      count: "1.0.1",
    },
  },
  {
    slug: "offline-first-notes-app",
    title: "Offline-First Notes Application",
    summary:
      "A high-performance, monorepo-structured note-taking application designed with real-time sync and robust local persistence.",
    description:
      "An offline-first workspace configured inside a clean Turborepo/Yarn monorepo. It leverages advanced local databases for seamless user interactions and updates background data synchronization the moment network connectivity is re-established.",
    metaTitle: "Offline-First Notes Monorepo | Nikhil Katkuri",
    metaDescription:
      "High-performance, secure note-taking architecture utilizing local storage synchronization mechanisms inside a managed TypeScript monorepo.",
    keywords: [
      "Offline-First",
      "Monorepo",
      "Turborepo",
      "Local-first",
      "Sync Engine",
      "Note Taking App",
    ],
    images: [],
    videoUrl: "",
    role: "Full-Stack & Systems Architect",
    status: "in-progress",
    startDate: "2026-02",
    challenge:
      "Standard web interfaces experience high latency and risk losing user information during spotty network connections or sudden dropouts.",
    solution:
      "Engineered a Monorepo design mapping clean state transformations directly to a localized database client layer alongside background reconciliation workers.",
    results: [
      "Zero interface lag during note alterations",
      "Conflict-free background synchronization processes",
      "Highly scalable structural isolation utilizing unified monorepo sharing",
    ],
    keyFeatures: [
      "Instant optimistic UI mutations",
      "Robust local storage state caching",
      "Shared UI and utility packages in a singular monorepo structure",
      "Markdown formatting and rich editor integration",
    ],
    tags: ["React", "TypeScript", "Monorepo", "Offline-First", "Tailwind"],
    technologies: {
      frontend: ["React", "TypeScript", "Tailwind CSS"],
      database: ["IndexedDB", "LocalForage"],
      tools: ["Turborepo", "Yarn Workspaces", "Vite"],
    },
    urls: [
      {
        label: "Source Code",
        url: "https://github.com/NikhilKatkuri/notes_monorepo",
        icon: "github",
        isPrimary: true,
      },
    ],
    featured: true,
    publishedAt: "2026-03-01",
    metrics: {
      name: "packages",
      count: 3,
    },
  },
  {
    slug: "paperwork",
    title: "Paperwork",
    summary:
      "A Google Forms-inspired open-source platform designed for building dynamic forms, handling submissions, and streamlining document workflows.",
    description:
      "Paperwork is an intuitive form builder utility designed to mirror the simplicity of Google Forms while offering developers enhanced flexibility. It allows users to easily scaffold customized input forms, validate responses, and manage schema-driven data ingestion without complex overhead.",
    metaTitle: "Paperwork - Google Forms Inspired Builder | Nikhil Katkuri",
    metaDescription:
      "An open-source, Google Forms-inspired utility built by Nikhil Katkuri to simplify dynamic form creation, structured data entry, and custom workflows.",
    keywords: [
      "Form Builder",
      "Google Forms Alternative",
      "Dynamic Forms",
      "Schema Validation",
      "TypeScript",
      "Open Source",
    ],
    images: [],
    videoUrl: "",
    role: "Creator & Lead Engineer",
    status: "in-progress",
    startDate: "2025-01",
    endDate: "2025-05",
    challenge:
      "Building flexible, reusable web forms that can adapt to changing structural requirements often demands tedious frontend adjustments and re-deployments.",
    solution:
      "Developed a clean, schema-driven approach inspired by Google Forms that translates declarative field configurations directly into interactive user questionnaires with built-in validation.",
    results: [
      "Streamlined web form deployment pipelines down to a single configuration file",
      "Created an easily extendable interface pattern for custom question types",
      "Delivered a lightweight, open-source codebase ready for custom self-hosting",
    ],
    keyFeatures: [
      "Google Forms-inspired input components and validation states",
      "Dynamic configuration engines for rapid question structure modifications",
      "Centralized response processing and structured payload validation",
    ],
    tags: [
      "TypeScript",
      "Node.js",
      "Form Builder",
      "Developer Tools",
      "Open Source",
    ],
    technologies: {
      frontend: ["React", "Tailwind CSS"],
      backend: ["Node.js", "TypeScript"],
      tools: ["ESLint", "Prettier", "Zod"],
      infrastructure: ["GitHub Actions"],
    },
    urls: [
      {
        label: "Source Code",
        url: "https://github.com/nikhilKatkuri/paperwork",
        icon: "github",
        isPrimary: true,
      },
    ],
    featured: false,
    publishedAt: "2025-05-15",
    metrics: {
      name: "stars",
      count: 0,
    },
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
    featuredImage: "/projects/git-lite-cli-hero.jpg",
    images: ["/projects/git-lite-cli-hero.jpg"],
    videoUrl: "",
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
      backend: ["Node.js", "TypeScript"],
      tools: ["Commander.js", "Inquirer.js", "Octokit", "Chalk"],
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
        url: "https://github.com/nikhilKatkuri/git-lite-cli",
        icon: "github",
      },
    ],
    featured: true,
    publishedAt: "2025-06-01",
    metrics: {
      name: "npmDownloads",
      count: 2100,
    },
  },
];

export default Projects;
