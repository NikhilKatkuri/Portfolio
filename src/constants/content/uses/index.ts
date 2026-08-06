const setupSections = [
  {
    category: "Development",
    items: [
      {
        title: "VS Code",
        description:
          "Primary editor for TypeScript, React, Next.js, Node.js, and full-stack development.",
      },
      {
        title: "Git & GitHub",
        description:
          "Version control, collaboration, pull requests, and CI-driven workflows.",
      },
    ],
  },
  {
    category: "Design",
    items: [
      {
        title: "Figma",
        description:
          "Used for interface planning, component systems, and responsive layout design.",
      },
    ],
  },
  {
    category: "Mobile",
    items: [
      {
        title: "Android Studio",
        description:
          "Used for React Native debugging, emulator testing, and mobile development workflows.",
      },
    ],
  },
  {
    category: "Environment",
    items: [
      {
        title: "Windows 11 & Ubuntu",
        description:
          "Dual-boot setup used for frontend, backend, and Linux-based development workflows.",
      },
      {
        title: "PowerShell & Bash",
        description:
          "Used for automation, scripting, package management, and development operations.",
      },
    ],
  },
  {
    category: "AI-Assisted Workflow",
    items: [
      {
        title: "ChatGPT, Gemini, Copilot & Ollama",
        description:
          "Used for technical research, debugging, code generation, and exploring local AI workflows.",
      },
    ],
  },
];

const intro = {
  title: "Tools and environment behind my workflow.",
  body: "The development stack I use daily for building full-stack web applications, React Native apps, and developer tooling across Windows and Ubuntu environments.",
};

const decisions = {
  intro,
};

export { setupSections, decisions };
