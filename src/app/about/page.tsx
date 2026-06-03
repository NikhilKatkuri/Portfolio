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

      <main className="relative w-full overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: `
              radial-gradient(
                circle at top,
                rgba(var(--palette-400), 0.12),
                transparent 35%
              )
            `,
          }}
        />

        <section className="mx-auto flex min-h-screen w-full max-w-content-mx flex-col px-6 pb-20 pt-32 lg:px-8">
          <div className="grid gap-16 xl:grid-cols-[1fr_480px]">
            {/* LEFT */}
            <div className="max-w-3xl">
              {/* EYEBROW */}
              <div className="mb-6 inline-flex bg-theme-surface items-center  border-theme-border-on-surface rounded-full border px-4 py-2 text-sm backdrop-blur">
                Full Stack Engineer • Hyderabad, India
              </div>

              {/* TITLE */}
              <h1 className="max-w-4xl heading-4 text-primary">
                I build software that solves real problems — not tutorial
                projects.
              </h1>

              {/* DESCRIPTION */}
              <p
                className="mt-8 max-w-2xl "
                style={{
                  fontSize: "var(--text-lg-size)",
                  lineHeight: "var(--text-lg-lh)",
                  letterSpacing: "var(--text-lg-ls)",
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
                    className="rounded-3xl p-5 transition-all bg-white duration-300 hover:-translate-y-1"
                    style={{
                      boxShadow:
                        "0px 10px 30px rgba(var(--palette-1000),0.04)",
                    }}
                  >
                    <p className="heading-6 text-primary">{item.value}</p>

                    <p
                      className="mt-1"
                      style={{
                        fontSize: "0.92rem",
                        color: "var(--color-secondary)",
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
                    className="mb-3 text-primary"
                    style={{
                      fontSize: "1.4rem",
                      fontWeight: 450,
                    }}
                  >
                    Engineering Philosophy
                  </h2>

                  <p
                    className="max-w-2xl"
                    style={{
                      fontSize: "var(--text-base-size)",
                      lineHeight: "2rem",
                      letterSpacing: "var(--text-base-ls)",
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
                    className="mb-3 text-primary"
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: 450,
                    }}
                  >
                    Experience
                  </h2>

                  <p
                    className="max-w-2xl"
                    style={{
                      fontSize: "var(--text-base-size)",
                      lineHeight: "2rem",
                      letterSpacing: "var(--text-base-ls)",
                    }}
                  >
                    I’ve worked across full-stack web applications and
                    cross-platform interfaces. During my internship at{" "}
                    <span
                      style={{
                        color: "var(--color-primary)",
                        fontWeight: 450,
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
                    className="mb-3 text-primary"
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: 450,
                    }}
                  >
                    Current Direction
                  </h2>

                  <p
                    className="max-w-2xl"
                    style={{
                      fontSize: "var(--text-base-size)",
                      lineHeight: "2rem",
                      letterSpacing: "var(--text-base-ls)",
                    }}
                  >
                    I’m currently joining{" "}
                    <span
                      style={{
                        fontWeight: 450,
                      }}
                      className="text-primary"
                    >
                      PixelHexa
                    </span>{" "}
                    as a Full Stack Developer Intern while building under my
                    personal engineering brand,{" "}
                    <span
                      style={{
                        fontWeight: 700,
                      }}
                      className="text-primary"
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
                  border: "1px solid var(--palette-100)",
                  background: "rgba(var(--palette-0-rgb),0.7)",
                  boxShadow:
                    "0px 20px 50px rgba(var(--palette-1000),0.08)",
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
                className="mt-6 rounded-4xl p-6 border border-theme-border-on-surface"
                style={{
                  background: "rgba(var(--palette-0-rgb),0.75)",
                  backdropFilter: "blur(20px)",
                  boxShadow:
                    "0px 10px 30px rgba(var(--palette-1000),0.03)",
                }}
              >
                <div
                  className="pb-5"
                  style={{
                    borderBottom: "1px solid var(--palette-200)",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.9rem",
                    }}
                  >
                    Currently focused on
                  </p>

                  <h3
                    className="mt-2 text-primary"
                    style={{
                      fontSize: "1.15rem",
                      lineHeight: "1.7rem",
                      fontWeight: 450,
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
                          transitionTimingFunction:
                            "cubic-bezier(0.16, 1, 0.3, 1)",
                        }}
                      >
                        <span
                          className="flex h-11 w-11 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-105"
                          style={{
                            border: "1px solid var(--palette-100)",
                            background:
                              "rgba(var(--palette-400), 0.1)",
                          }}
                        >
                          <Icon className="h-5 w-5 fill-theme-on-surface" />
                        </span>

                        <span
                          className="transition-all text-primary duration-300 group-hover:translate-x-1"
                          style={{
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
