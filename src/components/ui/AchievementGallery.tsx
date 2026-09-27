"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import cn from "@/utils/cn";
import Image from "next/image";

interface AchievementGalleryProps {
  images: string[];
  title: string;
}

const AchievementGallery = ({ images, title }: AchievementGalleryProps) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const scroll = useCallback((direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 280;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + images.length) % images.length : null,
        );
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % images.length : null,
        );
      } else if (e.key === "Escape") {
        setLightboxIndex(null);
      }
    },
    [lightboxIndex, images.length],
  );

  if (images.length === 0) return null;

  return (
    <>
      {/* Carousel */}
      <div className="relative group">
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setLightboxIndex(i)}
              className={cn(
                "relative shrink-0 snap-start rounded-xl overflow-hidden",
                "w-64 h-36 md:w-72 md:h-40",
                "border border-theme-border-on-surface",
                "transition-transform duration-200 hover:scale-[1.02]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-primary",
              )}
              aria-label={`View image ${i + 1} of ${title}`}
            >
              <Image
                height={160}
                width={256}
                src={src}
                alt={`${title} gallery image ${i + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 256px, 288px"
              />
            </button>
          ))}
        </div>

        {/* Navigation arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={() => scroll("left")}
              className={cn(
                "absolute left-2 top-1/2 -translate-y-1/2 z-10",
                "size-8 rounded-full bg-theme-surface/90 backdrop-blur-sm",
                "border border-theme-border-on-surface",
                "flex items-center justify-center",
                "opacity-0 group-hover:opacity-100 transition-opacity",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-primary",
              )}
              aria-label="Scroll gallery left"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              className={cn(
                "absolute right-2 top-1/2 -translate-y-1/2 z-10",
                "size-8 rounded-full bg-theme-surface/90 backdrop-blur-sm",
                "border border-theme-border-on-surface",
                "flex items-center justify-center",
                "opacity-0 group-hover:opacity-100 transition-opacity",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-primary",
              )}
              aria-label="Scroll gallery right"
            >
              <ChevronRight className="size-4" />
            </button>
          </>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxIndex(null)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="dialog"
            aria-modal="true"
            aria-label={`${title} image lightbox`}
          >
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-4 right-4 size-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Close lightbox"
            >
              <X className="size-5" />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
              className="relative max-w-full max-h-[85vh] rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[lightboxIndex]}
                alt={`${title} gallery image ${lightboxIndex + 1}`}
                width={1200}
                height={800}
                className="max-w-full max-h-[85vh] object-contain rounded-xl"
              />
            </motion.div>

            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex((prev) =>
                      prev !== null
                        ? (prev - 1 + images.length) % images.length
                        : null,
                    );
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 size-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex((prev) =>
                      prev !== null ? (prev + 1) % images.length : null,
                    );
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 size-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  aria-label="Next image"
                >
                  <ChevronRight className="size-5" />
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AchievementGallery;
