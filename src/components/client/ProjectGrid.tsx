"use client";
import { animations } from "@/constants/content/projects";
import Projects from "@/constants/projects";
import Link from "next/link";

const ProjectGrid = () => {
  const GLINTS = animations.GLINTS;
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-2 gap-y-6 flex-1">
        {Projects.map((d, i) => {
          const glint = GLINTS[i % GLINTS.length];
          return (
            <Link
              href={`/project/${d.slug}`}
              key={i}
              className="project-card flex flex-col gap-2 group"
            >
              <div className="relative rounded-xl h-64 w-full overflow-hidden bg-(--color-neutral-100)">
                <div
                  className="card-breathe absolute inset-0"
                  style={{
                    background: `linear-gradient(to bottom right, var(--color-neutral-200), var(--color-neutral-100), var(--color-neutral-200))`,
                    animation: `breathe ${glint.duration} ease-in-out infinite`,
                    animationDelay: glint.delay,
                  }}
                />
                <div
                  className="card-shimmer absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.55) 50%, transparent 100%)",
                    animation: `shimmer 1.8s ease-in-out infinite`,
                    animationDelay: glint.delay,
                  }}
                />

                <div
                  className="card-glint absolute inset-0"
                  style={{
                    background: `linear-gradient(${glint.angle}, transparent 30%, rgba(255,255,255,0.75) 50%, transparent 70%)`,
                    animation: `glint ${glint.duration} ease-in-out infinite`,
                    animationDelay: glint.delay,
                  }}
                />

                <div className="card-overlay absolute inset-0 bg-(--color-black-5) rounded-xl" />
                <div className="card-label absolute bottom-3 right-3 text-xs font-medium text-(--color-neutral-400) bg-(--color-white-80) backdrop-blur-sm px-2 py-1 rounded-full">
                  View project →
                </div>
              </div>

              <p className="text-lg leading-snug ) transition-colors duration-200">
                {d.title}
              </p>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default ProjectGrid;
