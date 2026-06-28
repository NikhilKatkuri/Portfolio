"use client";
import { animations } from "@/constants/content/projects";
import Projects from "@/constants/projects";
import Image from "next/image";
import Link from "next/link";

const ProjectGrid = () => {
  const GLINTS = animations.GLINTS;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-2 gap-y-6 flex-1">
      {Projects.map((d, i) => {
        const glint = GLINTS[i % GLINTS.length];
        return (
          <Link
            href={`/project/${d.slug}`}
            key={i}
            className="group flex flex-col gap-2"
          >
            <div className="relative h-64 w-full overflow-hidden rounded-xl ring-1 ring-(--color-theme-border)">
              <Image
                src={d.featuredImage ?? "/projects/placeholder.jpg"}
                alt={d.title}
                fill
                loading="eager"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
              />

              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, var(--color-theme-overlay) 0%, transparent 60%)",
                }}
              />

              <div
                className="absolute inset-0 pointer-events-none overflow-hidden"
                aria-hidden
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: "100%",
                    width: "55%",
                    background:
                      "linear-gradient(90deg, transparent 0%, var(--color-theme-h-100-80) 50%, transparent 100%)",
                    opacity: 0.12,
                    animation: `shimmerSweep ${glint.duration} linear infinite`,
                    animationDelay: glint.delay,
                    willChange: "transform",
                  }}
                />
              </div>

              <div
                className="absolute inset-0 pointer-events-none"
                aria-hidden
                style={{
                  background:
                    "radial-gradient(circle at 50% 40%, var(--color-theme-overlay), transparent 70%)",
                  animation: `breathe ${glint.duration} ease-in-out infinite`,
                  animationDelay: glint.delay,
                  mixBlendMode: "soft-light",
                }}
              />
              <div
                className="absolute bottom-3 right-3 rounded-full px-3 py-1 text-xs font-medium backdrop-blur-sm"
                style={{
                  background: "var(--color-theme-h-100-80)",
                  color: "var(--color-theme-on-overlay)",
                  border: "1px solid var(--color-theme-border)",
                }}
              >
                View project →
              </div>
            </div>

            <p
              className="text-lg leading-snug transition-colors duration-200"
              style={{ color: "var(--color-theme-on-surface)" }}
            >
              {d.title}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default ProjectGrid;
