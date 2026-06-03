import { ExperienceRecord } from "@/types";

const ExperienceData: ExperienceRecord[] = [
  {
    id: "pixelhexa-fullstack-intern",
    title: "Full Stack Developer Intern",
    company: "PixelHexa",
    startDate: "2026-06",
    isCurrent: true,
    employmentType: "internship",
    workMode: "remote",
    summary:
      "Building responsive UIs and secure backend APIs for active SaaS products.",
    description:
      "Build responsive user interfaces using React.js, Next.js, and Tailwind CSS. Code secure backend REST APIs with Node.js, Express.js, and MongoDB to support active SaaS products.",
    technologies: [
      { name: "React.js", category: "framework" },
      { name: "Next.js", category: "framework" },
      { name: "Tailwind CSS", category: "framework" },
      { name: "Node.js", category: "platform" },
      { name: "Express.js", category: "framework" },
      { name: "MongoDB", category: "database" },
    ],
    featured: true,
    order: 1,
  },
  {
    id: "galactix-android-intern",
    title: "Android Developer Intern",
    company: "Galactix Solutions Pvt. Ltd.",
    startDate: "2026-03",
    endDate: "2026-05",
    isCurrent: false,
    employmentType: "internship",
    workMode: "remote",
    summary:
      "Developed mobile app features and resolved cross-device layout and storage issues using React Native and Expo.",
    description:
      "Developed mobile app features using React Native and Expo. Fixed layout bugs across different screen sizes, resolved local storage issues, and prepared assets for app deployment.",
    technologies: [
      { name: "React Native", category: "framework" },
      { name: "Expo", category: "platform" },
    ],
    featured: true,
    order: 2,
  },
  {
    id: "ssg-hitm-tech-lead",
    title: "Student Faculty Technical Lead",
    company: "SSG - HITM",
    startDate: "2025-01",
    endDate: "2026-01",
    isCurrent: false,
    employmentType: "part-time",
    workMode: "onsite",
    summary:
      "Led coding workshops and crash courses, teaching Git, version control, and backend engineering basics to peers.",
    description:
      "Run hands-on coding workshops and crash courses for peers. Teach students version control setups, Git branching workflows, and backend engineering basics to help onboard new developers.",
    technologies: [
      { name: "Git", category: "tool" },
      { name: "Node.js", category: "platform" },
    ],
    skills: [
      "Technical Mentoring",
      "Workshop Facilitation",
      "Curriculum Design",
    ],
    featured: false,
    order: 3,
  },
];

export default ExperienceData;
