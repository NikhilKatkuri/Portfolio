"use client";
import Projects from "@/constants/projects";
import Link from "next/link";
import { useEffect, useRef } from "react";

// Deterministic "random" values per card so SSR and client match
const GLINTS = [
  { delay: "0s", duration: "2.4s", angle: "110deg" },
  { delay: "0.4s", duration: "2.8s", angle: "125deg" },
  { delay: "0.8s", duration: "2.2s", angle: "100deg" },
  { delay: "1.2s", duration: "3.0s", angle: "115deg" },
  { delay: "0.2s", duration: "2.6s", angle: "108deg" },
  { delay: "0.6s", duration: "2.5s", angle: "120deg" },
  { delay: "1.0s", duration: "2.9s", angle: "105deg" },
  { delay: "0.3s", duration: "2.3s", angle: "130deg" },
];

const ProjectGrid = () => {
  return (
    <>
      <style>{`
        @keyframes shimmer {
          0%   { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(250%)  skewX(-12deg); }
        }
        @keyframes breathe {
          0%, 100% { opacity: 0.55; }
          50%       { opacity: 0.85; }
        }
        @keyframes glint {
          0%        { opacity: 0; transform: translateX(-120%) rotate(0deg); }
          10%       { opacity: 1; }
          90%       { opacity: 1; }
          100%      { opacity: 0; transform: translateX(220%)  rotate(0deg); }
        }
        .project-card:hover .card-shimmer  { animation-play-state: paused; }
        .project-card:hover .card-breathe  { animation-play-state: paused; opacity: 1; }
        .project-card:hover .card-glint    { animation-play-state: paused; opacity: 0; }
        .project-card:hover .card-overlay  { opacity: 1; }
        .project-card:hover .card-label    { transform: translateY(0); opacity: 1; }
        .card-overlay {
          opacity: 0;
          transition: opacity 0.35s ease;
        }
        .card-label {
          transform: translateY(6px);
          opacity: 0;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }
      `}</style>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-2 gap-y-6 flex-1">
        {Projects.map((d, i) => {
          const glint = GLINTS[i % GLINTS.length];
          return (
            <Link
              href={`/project/${d.slug}`}
              key={i}
              className="project-card flex flex-col gap-2 group"
            >
              {/* Thumbnail placeholder */}
              <div className="relative rounded-xl h-64 w-full overflow-hidden bg-neutral-100">
                {/* Base animated breathe */}
                <div
                  className="card-breathe absolute inset-0 bg-linear-to-br from-neutral-200 via-neutral-100 to-neutral-200"
                  style={{
                    animation: `breathe ${glint.duration} ease-in-out infinite`,
                    animationDelay: glint.delay,
                  }}
                />

                {/* Shimmer sweep */}
                <div
                  className="card-shimmer absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.55) 50%, transparent 100%)",
                    animation: `shimmer 1.8s ease-in-out infinite`,
                    animationDelay: glint.delay,
                  }}
                />

                {/* Diagonal glint — one sharp bright streak */}
                <div
                  className="card-glint absolute inset-0"
                  style={{
                    background: `linear-gradient(${glint.angle}, transparent 30%, rgba(255,255,255,0.75) 50%, transparent 70%)`,
                    animation: `glint ${glint.duration} ease-in-out infinite`,
                    animationDelay: glint.delay,
                  }}
                />

                {/* Hover overlay */}
                <div className="card-overlay absolute inset-0 bg-black/5 rounded-xl" />

                {/* Hover label */}
                <div className="card-label absolute bottom-3 right-3 text-xs font-medium text-neutral-400 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full">
                  View project →
                </div>
              </div>

              <p className="text-lg leading-snug group-hover:text-black/70 transition-colors duration-200">
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
