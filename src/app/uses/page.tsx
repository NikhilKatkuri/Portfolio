import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";
import { Metadata } from "next";
import { usesMetadata } from "@/constants/meta";
export const metadata: Metadata = usesMetadata;

const setupSections = [
  {
    category: "Hardware",
    items: [
      {
        title: "Ryzen 3 Laptop • 8GB RAM",
        description:
          "My primary machine for full-stack development, UI engineering, and daily workflow management. Not the most powerful setup, but it forces me to optimize performance, manage resources carefully, and build efficiently.",
      },
    ],
  },

  {
    category: "Development",
    items: [
      {
        title: "VS Code",
        description:
          "My primary editor for frontend, TypeScript, React, and full-stack web workflows. I rely heavily on extensions, Git integration, snippets, and fast iteration cycles.",
      },
    ],
  },

  {
    category: "Java & Backend",
    items: [
      {
        title: "IntelliJ IDEA",
        description:
          "Used mainly for Java development, backend systems, object-oriented programming, and deeper debugging workflows where stronger IDE tooling becomes valuable.",
      },
    ],
  },

  {
    category: "Design",
    items: [
      {
        title: "Figma",
        description:
          "Used for interface exploration, layout planning, component systems, and visual structure before implementation.",
      },
    ],
  },

  {
    category: "Mobile Development",
    items: [
      {
        title: "Android Studio",
        description:
          "Used for mobile experimentation, emulator testing, and cross-platform development workflows.",
      },
    ],
  },

  {
    category: "Environment",
    items: [
      {
        title: "Windows 11",
        description:
          "My primary operating system optimized for compatibility, multitasking, and development tooling across web and mobile workflows.",
      },
      {
        title: "PowerShell",
        description:
          "Used daily for Git workflows, package management, CLI tooling, automation tasks, and development operations.",
      },
      {
        title: "Google Chrome",
        description:
          "Still the best balance for frontend debugging, DevTools inspection, extension support, and responsive layout testing.",
      },
    ],
  },

  {
    category: "Productivity",
    items: [
      {
        title: "Git & GitHub",
        description:
          "Version control, collaboration, open-source contributions, and workflow management across all projects.",
      },
      {
        title: "Notion",
        description:
          "Used for organizing project planning, engineering notes, ideas, and long-term workflow tracking.",
      },
    ],
  },
  {
    category: "AI Tools",
    items: [
      {
        title: "Ollama",
        description:
          "Used for experimenting with local LLM workflows using models like Llama 3, exploring offline inference, lightweight AI tooling, and understanding local model ecosystems outside cloud-based platforms.",
      },
      {
        title: "Gemini",
        description:
          "Used for resolving doubts, brainstorming ideas, exploring unfamiliar topics, and general learning workflows beyond direct coding tasks.",
      },
      {
        title: "ChatGPT",
        description:
          "Used extensively for technical research, debugging support, architecture discussions, concept exploration, and accelerating problem-solving workflows during development.",
      },

      {
        title: "GitHub Copilot",
        description:
          "Used selectively for reducing repetitive coding tasks, generating boilerplate, and improving development iteration speed without replacing core problem-solving.",
      },

      {
        title: "Claude",
        description:
          "Helpful for long-form reasoning, structured technical thinking, implementation planning, and breaking down complex engineering concepts.",
      },

      {
        title: "Perplexity",
        description:
          "Primarily used for fast documentation lookup, technical research, source discovery, and verifying information across multiple references.",
      },
    ],
  },
];

const page = () => {
  return (
    <>
      <Navbar />

      <main className="relative w-full min-h-dvh">
        <div className="max-w-content-mx mx-auto pb-12  mt-32 max-lg:px-4 justify-between w-full relative h-auto ">
          <div className="my-6">
            <h1 className="heading-4 max-w-2xl">
              The tools, systems, and environment behind my workflow.
            </h1>
            <p className="paragraph-4 mt-6 max-w-2xl">
              A look into the hardware, software, and development tools I use
              daily to design, build, debug, and ship products efficiently.
            </p>
          </div>
          <div className="mt-16 flex flex-col gap-14 max-w-3xl">
            {setupSections.map((section) => (
              <div
                key={section.category}
                className="grid grid-cols-1 gap-6 md:grid-cols-[180px_1fr]"
              >
                <div>
                  <h3 className="sticky top-18 pt-6 paragraph-4 text-primary">
                    {section.category}
                  </h3>
                </div>
                <div className="flex flex-col gap-4">
                  {section.items.map((item) => (
                    <div
                      key={item.title}
                      className="group rounded-[28px]  cursor-pointer hover:bg-theme-h-100-80 transition-all ease-in-out duration-200 p-6 flex flex-col justify-between h-auto  w-full"
                    >
                      <h4 className="transition-all duration-300 group-hover:translate-x-1 paragraph-4 text-primary">
                        {item.title}
                      </h4>
                      <p className="mt-3 max-w-2xl">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default page;
