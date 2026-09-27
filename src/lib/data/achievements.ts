export interface Achievement {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  organization: string;
  location: string;
  date: string;
  timeline: string;
  result?: string;
  accent: "blue" | "green" | "amber" | "purple";
  type: "hackathon" | "internship" | "award" | "certification";
  coverImage: string;
  gallery: string[];
  team: {
    name: string;
    image: string;
    role?: string;
    isLeader?: boolean;
  }[];
  technologies: string[];
  videoUrl?: string;
  githubUrl?: string;
  blogUrl?: string;
}

export const achievements: Achievement[] = [
  {
    id: "hackforge-preliminary-2026",
    title: "HackForge 2026 Preliminary Round",
    subtitle: "Top 10 Finalist",
    description:
      "Qualified in the HackForge Preliminary Round at HITAM and secured a Top 10 position, advancing through the college-level competition.",
    organization: "HackForge",
    location: "HITAM, Hyderabad",
    date: "18 September 2026",
    timeline: "Sep 2026",
    result: "Top 10",
    accent: "amber",
    type: "award",
    coverImage: "/images/achievements/hackforge-preliminary-cover.avif",
    gallery: [
      "/images/achievements/hackforge-preliminary-cover.avif",
      "/images/achievements/hackforge-preliminary-1.avif",
    ],
    team: [
      {
        name: "Nikhil Katkuri",
        image: "/hero.avif",
        role: "Full-Stack Developer",
        isLeader: true,
      },
      {
        name: "Mohith Mathukumalli",
        image: "/images/achievements/stratify-minds-team-mate-1.avif",
        role: "Frontend Developer",
      },
      {
        name: "Yavanika",
        image: "/images/achievements/stratify-minds-team-mate-2.avif",
        role: "Backend Developer",
      },
      {
        name: "Charlson",
        image: "/images/achievements/stratify-minds-team-mate-3.avif",
        role: "Data Engineer",
      },
    ],
    technologies: ["Vite", "TypeScript", "Express", "Tailwind CSS", "AI Agent"],
    githubUrl: "https://github.com/NikhilKatkuri/Sentinel_cyber_defender",
  },

  {
    id: "microsoft-codeathon-2026",
    title: "Microsoft Codeathon 2026",
    subtitle: "Second Runner-up",
    description:
      "Built and presented an AI-powered solution during the Microsoft Codeathon final round and secured Second Runner-up among invited engineering colleges.",
    organization: "Microsoft × HackForge",
    location: "Microsoft Campus, Hyderabad",
    date: "26 September 2026",
    timeline: "Sep 2026",
    result: "Top 3 • Second Runner-up",
    accent: "blue",
    type: "hackathon",
    coverImage: "/images/achievements/microsoft-codeathon-cover.avif",
    gallery: [
      "/images/achievements/microsoft-codeathon-cover.avif",
      "/images/achievements/microsoft-codeathon-1.avif",
      "/images/achievements/microsoft-codeathon-2.avif",
    ],
    team: [
      {
        name: "Nikhil Katkuri",
        image: "/hero.avif",
        role: "Full-Stack Developer",
        isLeader: true,
      },
      {
        name: "Mohith Mathukumalli",
        image: "/images/achievements/stratify-minds-team-mate-1.avif",
        role: "Frontend Developer & Data Engineer",
      },
      {
        name: "Yavanika",
        image: "/images/achievements/stratify-minds-team-mate-2.avif",
        role: "UI/UX Designer & Backend Developer",
      },
      {
        name: "Charlson",
        image: "/images/achievements/stratify-minds-team-mate-3.avif",
        role: "Data Engineer",
      },
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Express",
      "Tailwind CSS",
      "AI Agent",
    ],
    githubUrl: "https://github.com/NikhilKatkuri/Lucis",
  },
];
