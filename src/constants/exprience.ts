import { ExperienceRecord } from "@/types";

const rawExperienceData: ExperienceRecord[] = [
  {
    id: "galactix-android-intern",
    title: "Android Developer Intern",
    company: "Galactix Solutions Pvt. Ltd.",
    startDate: "2026-03",
    isCurrent: true,
    employmentType: "internship",
    workMode: "remote",
    summary:
      "Developing mobile app features and resolving cross-device layout and storage issues using React Native and Expo.",
    description:
      "Developed mobile app features using React Native and Expo. Fixed layout bugs across different screen sizes, resolved local storage issues, and prepared assets for app deployment.",
    technologies: [
      { name: "React Native", category: "framework" },
      { name: "Expo", category: "platform" },
    ],
    featured: true,
    order: 1,
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
    order: 2,
  },
];

export const ExperienceData = rawExperienceData.toSorted(
  (a, b) => (a.order ?? Infinity) - (b.order ?? Infinity),
);

export default ExperienceData;
