import Navbar from "@/components/sections/Navbar";
import { GithubIcon, LinkedinIcon, MailIcon, NPMjs } from "@/icons";
import Image from "next/image"; 

import type { Metadata } from "next";
import { aboutMetadata } from "@/constants/meta";
export const metadata: Metadata = aboutMetadata; 

const socialLinks = [
  {
    label: "Follow on GitHub",
    href: "https://github.com/nikhilKatkuri",
    icon: GithubIcon,
  },
  {
    label: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/katkurinikhil",
    icon: LinkedinIcon,
  },
  {
    label: "View packages on NPM",
    href: "https://www.npmjs.com/~nikhil07k",
    icon: NPMjs,
  },
  {
    label: "nikhil07.dev@gmail.com",
    href: "mailto:nikhil07.dev@gmail.com",
    icon: MailIcon,
  },
];

const stats = [
  {
    value: "2.1K+",
    label: "NPM Downloads",
  },
  {
    value: "Full Stack",
    label: "Engineering",
  },
  {
    value: "Remote",
    label: "Work Style",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main
        className="relative w-full overflow-hidden"
        style={{
          background: "var(--theme-surface)",
        }}
      >
        {/* Background Glow */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: `
              radial-gradient(
                circle at top,
                rgba(var(--palette-grey-400-rgb), 0.12),
                transparent 35%
              )
            `,
          }}
        />

        <section className="mx-auto flex min-h-screen w-full max-w-(--content-max-width) flex-col px-6 pb-20 pt-32 lg:px-8">
          <div className="grid gap-16 xl:grid-cols-[1fr_480px]">
            {/* LEFT */}
            <div className="max-w-3xl">
              {/* EYEBROW */}
              <div
                className="mb-6 inline-flex items-center rounded-full border px-4 py-2 text-sm backdrop-blur"
                style={{
                  borderColor: "var(--palette-grey-100)",
                  background: "rgba(var(--palette-grey-400-rgb),0.06)",
                  color: "var(--theme-text-secondary)",
                }}
              >
                Full Stack Engineer • Hyderabad, India
              </div>

              {/* TITLE */}
              <h1 className="max-w-4xl heading-4">
                I build software that solves real problems — not tutorial
                projects.
              </h1>

              {/* DESCRIPTION */}
              <p
                className="mt-8 max-w-2xl"
                style={{
                  fontSize: "var(--5xl-paragraph-size)",
                  lineHeight: "var(--5xl-paragraph-line-height)",
                  letterSpacing: "var(--5xl-paragraph-letter-spacing)",
                  color: "var(--theme-text-secondary)",
                }}
              >
                I’m Nikhil Katkuri, a full-stack developer focused on building
                scalable products, developer tooling, and clean frontend systems
                with strong engineering fundamentals.
              </p>

              {/* STATS */}
              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-3xl p-5 transition-all duration-300 hover:-translate-y-1"
                    style={{
                      border: "1px solid var(--palette-grey-100)",
                      background: "rgba(var(--palette-grey-0-rgb),0.7)",
                      backdropFilter: "blur(12px)",
                      boxShadow:
                        "0px 10px 30px rgba(var(--palette-grey-1000-rgb),0.04)",
                    }}
                  >
                    <p className="heading-6">{item.value}</p>

                    <p
                      className="mt-1"
                      style={{
                        fontSize: "0.92rem",
                        color: "var(--theme-text-secondary)",
                      }}
                    >
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* CONTENT */}
              <div className="mt-14 space-y-10">
                {/* SECTION */}
                <div>
                  <h2
                    className="mb-3"
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: 600,
                      color: "var(--theme-text-primary)",
                    }}
                  >
                    Engineering Philosophy
                  </h2>

                  <p
                    className="max-w-2xl"
                    style={{
                      fontSize: "var(--base-size)",
                      lineHeight: "2rem",
                      letterSpacing: "var(--base-letter-spacing)",
                      color: "var(--theme-text-secondary)",
                    }}
                  >
                    I prefer building systems from first principles instead of
                    blindly following tutorials. To understand asynchronous file
                    handling deeply, I built a custom open-source Git utility
                    that crossed 2,100+ organic downloads on NPM without paid
                    promotion.
                  </p>
                </div>

                {/* SECTION */}
                <div>
                  <h2
                    className="mb-3"
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: 600,
                      color: "var(--theme-text-primary)",
                    }}
                  >
                    Experience
                  </h2>

                  <p
                    className="max-w-2xl"
                    style={{
                      fontSize: "var(--base-size)",
                      lineHeight: "2rem",
                      letterSpacing: "var(--base-letter-spacing)",
                      color: "var(--theme-text-secondary)",
                    }}
                  >
                    I’ve worked across full-stack web applications and
                    cross-platform interfaces. During my internship at{" "}
                    <span
                      style={{
                        color: "var(--theme-text-primary)",
                        fontWeight: 600,
                      }}
                    >
                      Galactix Solutions
                    </span>
                    , I focused on solving responsive UI and layout stability
                    problems across complex viewport conditions.
                  </p>
                </div>

                {/* SECTION */}
                <div>
                  <h2
                    className="mb-3"
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: 600,
                      color: "var(--theme-text-primary)",
                    }}
                  >
                    Current Direction
                  </h2>

                  <p
                    className="max-w-2xl"
                    style={{
                      fontSize: "var(--base-size)",
                      lineHeight: "2rem",
                      letterSpacing: "var(--base-letter-spacing)",
                      color: "var(--theme-text-secondary)",
                    }}
                  >
                    I’m currently joining{" "}
                    <span
                      style={{
                        color: "var(--theme-text-primary)",
                        fontWeight: 600,
                      }}
                    >
                      PixelHexa
                    </span>{" "}
                    as a Full Stack Developer Intern while building under my
                    personal engineering brand,{" "}
                    <span
                      style={{
                        color: "var(--theme-text-primary)",
                        fontWeight: 700,
                      }}
                    >
                      Stratify Minds
                    </span>
                    . My focus is modern SaaS infrastructure, developer
                    experience, and scalable frontend architecture.
                  </p>
                </div>
              </div>
            </div>
 
            <div className="xl:sticky xl:top-28 xl:h-fit">
              <div
                className="group relative overflow-hidden rounded-[36px] p-2"
                style={{
                  border: "1px solid var(--palette-grey-100)",
                  background: "rgba(var(--palette-grey-0-rgb),0.7)",
                  boxShadow:
                    "0px 20px 50px rgba(var(--palette-grey-1000-rgb),0.08)",
                }}
              >
                <Image
                  src="/hero.jpg"
                  alt="Nikhil Katkuri"
                  width={520}
                  height={640}
                  priority
                  className="h-auto w-full rounded-[28px] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
 
              <div
                className="mt-6 rounded-4xl p-6"
                style={{
                  border: "1px solid var(--palette-grey-100)",
                  background: "rgba(var(--palette-grey-0-rgb),0.75)",
                  backdropFilter: "blur(20px)",
                  boxShadow:
                    "0px 10px 30px rgba(var(--palette-grey-1000-rgb),0.05)",
                }}
              >
                <div
                  className="pb-5"
                  style={{
                    borderBottom: "1px solid var(--palette-grey-100)",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--theme-text-secondary)",
                    }}
                  >
                    Currently focused on
                  </p>

                  <h3
                    className="mt-2"
                    style={{
                      fontSize: "1.15rem",
                      lineHeight: "1.7rem",
                      fontWeight: 600,
                      color: "var(--theme-text-primary)",
                    }}
                  >
                    SaaS systems, frontend architecture, and developer tooling.
                  </h3>
                </div>
 
                <div className="mt-5 flex flex-col gap-2">
                  {socialLinks.map((item) => {
                    const Icon = item.icon;

                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 rounded-2xl px-3 py-3 transition-all duration-300"
                        style={{
                          transitionTimingFunction: "var(--ease-out-cubic)",
                        }}
                      >
                        <span
                          className="flex h-11 w-11 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-105"
                          style={{
                            border: "1px solid var(--palette-grey-100)",
                            background: "var(--theme-surface-overlay)",
                          }}
                        >
                          <Icon className="h-5 w-5 fill-theme-on-surface" />
                        </span>

                        <span
                          className="transition-all duration-300 group-hover:translate-x-1"
                          style={{
                            color: "var(--theme-text-primary)",
                            fontSize: "0.96rem",
                            fontWeight: 500,
                          }}
                        >
                          {item.label}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
