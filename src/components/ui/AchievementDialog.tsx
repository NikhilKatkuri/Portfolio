"use client";

import { useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { lazy, Suspense } from "react";
import { X, MapPin, Calendar, Building2, ExternalLink } from "lucide-react";
import type { Achievement } from "@/lib/data/achievements";
import { getAccentStyles } from "@/lib/utils/achievement-accent";
import AchievementTypeIcon from "./AchievementTypeIcon";
import AchievementVideo from "./AchievementVideo";
import cn from "@/utils/cn";
import Image from "next/image";

const AchievementGallery = lazy(() => import("./AchievementGallery"));
const AchievementTeam = lazy(() => import("./AchievementTeam"));

interface AchievementDialogProps {
  achievement: Achievement | null;
  onClose: () => void;
}

const AchievementDialog = ({
  achievement,
  onClose,
}: AchievementDialogProps) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (achievement) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      dialogRef.current?.focus();
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [achievement, handleKeyDown]);

  if (!achievement) return null;

  const accent = getAccentStyles(achievement.accent);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

        {/* Dialog */}
        <motion.div
          ref={dialogRef}
          initial={{
            opacity: 0,
            y: prefersReducedMotion ? 0 : 40,
            scale: prefersReducedMotion ? 1 : 0.98,
          }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{
            opacity: 0,
            y: prefersReducedMotion ? 0 : 40,
            scale: prefersReducedMotion ? 1 : 0.98,
          }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.3,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          onClick={(e) => e.stopPropagation()}
          className={cn(
            "relative w-full sm:max-w-2xl lg:max-w-3xl xl:max-w-4xl max-h-[90vh] overflow-y-auto",
            "bg-theme-surface rounded-t-3xl sm:rounded-3xl",
            "border border-theme-border-on-surface",
            "shadow-2xl",
          )}
          role="dialog"
          aria-modal="true"
          aria-label={achievement.title}
          tabIndex={-1}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className={cn(
              "absolute top-4 right-4 z-10 size-9 rounded-full",
              "bg-theme-surface/80 backdrop-blur-sm border border-theme-border-on-surface",
              "flex items-center justify-center",
              "transition-colors hover:bg-theme-surface",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-primary",
            )}
            aria-label="Close dialog"
          >
            <X className="size-4" />
          </button>

          {/* Cover image */}
          <div className="relative w-full aspect-video overflow-hidden rounded-t-3xl sm:rounded-t-3xl">
            <Image
              src={achievement.coverImage}
              alt={achievement.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 768px, 1024px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-4 left-4 flex items-center gap-2">
              <span
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium",
                  "bg-white/20 backdrop-blur-sm text-white",
                )}
              >
                <AchievementTypeIcon
                  type={achievement.type}
                  className="size-3.5"
                />
                {achievement.type}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-5 md:p-8 space-y-6">
            {/* Header */}
            <div>
              <h2 className="heading-5 text-primary mb-2">
                {achievement.title}
              </h2>
              {achievement.subtitle && (
                <p className="text-lg text-theme-on-surface-variant">
                  {achievement.subtitle}
                </p>
              )}
            </div>

            {/* Meta info */}
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 text-sm text-theme-on-surface-variant">
                <Building2 className="size-4" />
                {achievement.organization}
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm text-theme-on-surface-variant">
                <Calendar className="size-4" />
                {achievement.date}
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm text-theme-on-surface-variant">
                <MapPin className="size-4" />
                {achievement.location}
              </span>
            </div>

            {/* Result badge */}
            {achievement.result && (
              <div
                className={cn(
                  "inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium",
                  accent.badge,
                )}
              >
                {achievement.result}
              </div>
            )}

            {/* Description */}
            <p className="paragraph-4 text-theme-on-surface-variant leading-relaxed">
              {achievement.description}
            </p>

            {/* Divider */}
            <div className="border-t border-theme-border-on-surface" />

            {/* Video */}
            {achievement.videoUrl && (
              <AchievementVideo
                videoUrl={achievement.videoUrl}
                title={achievement.title}
              />
            )}

            {/* Gallery */}
            {achievement.gallery.length > 0 && (
              <Suspense fallback={<div className="h-40 rounded-xl bg-theme-surface-depth/50 animate-pulse" />}>
                <AchievementGallery
                  images={achievement.gallery}
                  title={achievement.title}
                />
              </Suspense>
            )}

            {/* Technologies */}
            {achievement.technologies.length > 0 && (
              <div>
                <h4 className="text-sm font-medium text-theme-on-surface mb-3">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {achievement.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={cn(
                        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
                        "bg-theme-surface-depth border border-theme-border-on-surface",
                        "text-theme-on-surface-variant",
                        "transition-colors hover:border-theme-primary hover:text-theme-primary",
                      )}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Team */}
            <Suspense fallback={<div className="h-20 rounded-xl bg-theme-surface-depth/50 animate-pulse" />}>
              <AchievementTeam team={achievement.team} />
            </Suspense>

            {/* Action buttons */}
            {(achievement.githubUrl || achievement.blogUrl) && (
              <div className="flex flex-wrap gap-3 pt-2">
                {achievement.githubUrl && (
                  <a
                    href={achievement.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium",
                      "bg-theme-primary text-theme-on-primary",
                      "transition-colors hover:bg-theme-hover-primary",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-primary",
                    )}
                  >
                    <ExternalLink className="size-4" />
                    View on GitHub
                  </a>
                )}
                {achievement.blogUrl && (
                  <a
                    href={achievement.blogUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium",
                      "bg-theme-surface border border-theme-border-on-surface text-theme-on-surface",
                      "transition-colors hover:bg-theme-hover-surface",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-primary",
                    )}
                  >
                    <ExternalLink className="size-4" />
                    Read Blog
                  </a>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AchievementDialog;
