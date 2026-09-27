"use client";

import { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronRight, MapPin } from "lucide-react";
import Image from "next/image";

import type { Achievement } from "@/lib/data/achievements";
import { getAccentStyles } from "@/lib/utils/achievement-accent";
import AchievementTypeIcon from "./AchievementTypeIcon";
import cn from "@/utils/cn";

interface AchievementCardProps {
  achievement: Achievement;
  onClick: () => void;
}

const AchievementCard = memo(function AchievementCard({ achievement, onClick }: AchievementCardProps) {
  const accent = getAccentStyles(achievement.accent);
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={prefersReducedMotion ? undefined : { y: -4, scale: 1.01 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.99 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "group relative flex h-full w-full flex-col overflow-hidden rounded-3xl border border-theme-border-on-surface bg-theme-surface text-left transition-shadow duration-300 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-primary",
        accent.shadow,
      )}
      aria-label={`View details for ${achievement.title}`}
    >
      {/* Background gradient */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-60",
          accent.gradient,
        )}
      />

      <div className="relative flex h-full flex-col p-5 md:p-6">
        {/* Timeline + Icon */}
        <div className="mb-4 flex items-center justify-between">
          <span
            className={cn(
              "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
              accent.chip,
            )}
          >
            {achievement.timeline}
          </span>

          <AchievementTypeIcon
            type={achievement.type}
            className={accent.icon}
          />
        </div>

        {/* Title */}
        <div className="mb-3">
          <h3 className="text-lg font-semibold leading-snug text-theme-on-surface">
            {achievement.title}
          </h3>

          {achievement.subtitle && (
            <p className="mt-1 text-sm text-theme-on-surface-variant">
              {achievement.subtitle}
            </p>
          )}
        </div>

        {/* Description */}
        <p className="line-clamp-2 text-sm leading-relaxed text-theme-on-surface-variant">
          {achievement.description}
        </p>

        <div className="flex-1" />

        {/* Footer */}
        <div className="mt-5 flex items-center justify-between border-t border-theme-border-on-surface/50 pt-4">
          <div className="flex items-center gap-3">
            {/* Avatar stack */}
            <div className="flex -space-x-2">
              {achievement.team.slice(0, 4).map((member) => (
                <Image
                  key={`${achievement.id}-${member.name}`}
                  src={member.image}
                  alt={member.name}
                  width={24}
                  height={24}
                  sizes="24px"
                  className="size-6 rounded-full border-2 border-theme-surface object-cover"
                />
              ))}
            </div>

            {/* Location */}
            <span className="flex items-center gap-1 text-xs text-theme-on-surface-variant">
              <MapPin className="size-3" />
              {achievement.location.split(",")[0]}
            </span>
          </div>

          <ChevronRight className="size-4 text-theme-on-surface-variant transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </motion.button>
  );
});

export default AchievementCard;
