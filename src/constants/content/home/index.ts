const hero = {
  title: [
    "Designing systems that feel simple.",
    "Engineering systems that scale.",
  ],
  body: "I'm Nikhil, a Full-Stack and Android Engineer focused on designing, maintaining, and evolving performant systems. I specialize in building clean architectures that balance deep backend engineering with seamless user experiences.",
};

const featuredProjects = {
  title: "Featured Projects",
  body: "Selected work focused on scalable systems, modern architectures, and performance-oriented user experiences.",
};

const technicalBreakThrough = [
  {
    flag: "01 / SERVER",
    title: "Backend Foundations",
    body: " Structuring modular backend environments with Node.js and Express. Experienced in implementing stateless token-based authentication, designing secure RESTful API routing architectures, and optimizing data payloads.",
  },
  {
    flag: "02 / INTERFACES",
    title: "Frontend Development",
    body: "Building highly interactive single-page and server-side interfaces using React and Next.js. Focused on managing dynamic client-side application states, constructing reusable component design tokens, and styling modern responsive layouts via Tailwind CSS.",
  },
  {
    flag: "03 / MOBILE",
    title: "Mobile Development",
    body: "Developing mobile software using React Native and the Expo framework ecosystem. Experienced with offline-first client operations utilizing AsyncStorage persistence layers and resolving UI rendering lags across diverse screen resolutions.",
  },
  {
    flag: "04 / TOOLING",
    title: "Tooling & Automation",
    body: "Designing custom terminal utilities distributed through the public Node Package Manager (NPM) registry. Expert in building interactive command structures, automated environment bootstrapping templates, and script integrations leveraging secure GitHub OAuth workflows.",
  },
];

const technicalExpertise = {
  title: "Technical Systems & Tooling",
  body: "A precise breakdown of my development capabilities. I specialize in engineering automated terminal utilities, building clean web layouts, and developing cross-platform mobile synchronization layers.",
  technicalBreakThrough,
};

const engineeringValues = [
  {
    flag: "01 / METRICS",
    title: "Ship to Validate",
    body: "Real user feedback loops beat imagined, closed-door perfection every time. I favor getting functional code across the deployment line early, tracking failures via structured logs, and iteratively refining edge cases under real-world traffic metrics.",
  },
  {
    flag: "02 / AUTONOMY",
    title: "Technical Autonomy",
    body: "When a system breaks, I isolate the runtime environment, trace the stack dump, and read the raw specifications before escalating. I spend dedicated cycles resolving complex blocks on my own so that when I do consult senior engineers, I present structured diagnoses.",
  },
  {
    flag: "03 / OWNERSHIP",
    title: "System Ownership",
    body: "Code quality impacts user experience regardless of an sengineer's title. If I notice a sluggish database query slayout, an unoptimized asset payload, or responsive breakage on suncommon viewports, I actively flag it and advocate for slong-term maintainability.",
  },
  {
    flag: "04 / TRANSPARENCY",
    title: "Honest Assessment",
    body: "I maintain complete clarity regarding my skillset. While confident across the core TypeScript, Node.js, and React Native ecosystems, I am actively investing deeper focus into advanced asynchronous error handling, automated end-to-end testing layers, and system design paradigms.",
  },
];

const philosophy = {
  quote:
    "I don't build software for ideal scenarios — I execute for runtime velocity, clear debugging loops, and modularity that accommodates changing specs.",
  title: "Engineering Philosophy",
  body: [
    "I started teaching myself full-stack development and mobile architectures in mid-2024 — not to fulfill a course curriculum, but because I wanted to engineer tangible utilities. By early 2026, that targeted curiosity had materialized into a professional product internship.",
    "While early in my career timeline, I bring genuine execution momentum, an honest assessment of my engineering gaps, and a track record of navigating complex documentation and production constraints independently.",
  ],
  engineeringValues,
};

const experience = {
  title: "Experience",
  body: "A breakdown of the languages, frameworks, and tools I use to build software. I focus on writing clean code, fixing performance bottlenecks, and delivering responsive web and mobile projects.",
};

const decisions = {
  hero,
  featuredProjects,
  technicalExpertise,
  philosophy,
  experience,
};

export { decisions };
