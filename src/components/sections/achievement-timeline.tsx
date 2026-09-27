"use client";

import { useMemo, useState, lazy, Suspense } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { achievements, type Achievement } from "@/lib/data/achievements";
import AchievementCard from "@/components/ui/AchievementCard";
import { getAccentStyles } from "@/lib/utils/achievement-accent";
import cn from "@/utils/cn";

const AchievementDialog = lazy(() => import("@/components/ui/AchievementDialog"));

const AchievementTimeline = () => {
  const [selectedAchievement, setSelectedAchievement] =
    useState<Achievement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const groupedByYear = useMemo(() => {
    const groups: Record<string, Achievement[]> = {};
    for (const a of achievements) {
      const year = a.timeline.split(" ")[1] || a.timeline;
      if (!groups[year]) groups[year] = [];
      groups[year].push(a);
    }
    return Object.entries(groups).sort(([a], [b]) => b.localeCompare(a));
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: prefersReducedMotion ? 0 : i * 0.08,
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    }),
  };

  return (
    <section className="w-full py-16 md:py-24">
      <div className="mx-auto max-w-content-mx px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16"
        >
          <p className="text-xs font-mono uppercase tracking-wider text-theme-on-surface-variant mb-3">
            Milestones
          </p>
          <h2 className="heading-4 text-primary">Achievement Timeline</h2>
          <p className="paragraph-4 mt-4 max-w-xl text-theme-on-surface-variant">
            Hackathons, internships, certifications, and milestones that have
            shaped my journey.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-theme-border-on-surface md:-translate-x-px" />

          {groupedByYear.map(([year, yearAchievements]) => (
            <div key={year} className="relative mb-12 last:mb-0">
              {/* Year label */}
              <div className="relative flex items-center mb-8">
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                  <div className="flex items-center justify-center rounded-full bg-theme-surface border border-theme-border-on-surface px-3 py-1">
                    <span className="text-xs font-mono font-medium text-theme-on-surface">
                      {year}
                    </span>
                  </div>
                </div>
              </div>

              {/* Cards grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {yearAchievements.map((achievement, index) => {
                  const accent = getAccentStyles(achievement.accent);
                  return (
                    <motion.div
                      key={achievement.id}
                      custom={index}
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-40px" }}
                      className="relative"
                    >
                      {/* Timeline dot */}
                      <div
                        className={cn(
                          "absolute -left-4 md:left-1/2 top-6 -translate-x-1/2 z-10",
                          "size-3 rounded-full ring-4 ring-theme-surface",
                          accent.dot,
                        )}
                      />
                      <AchievementCard
                        achievement={achievement}
                        onClick={() => setSelectedAchievement(achievement)}
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dialog - lazy loaded */}
      <Suspense fallback={null}>
        <AchievementDialog
          achievement={selectedAchievement}
          onClose={() => setSelectedAchievement(null)}
        />
      </Suspense>
    </section>
  );
};

export default AchievementTimeline;
