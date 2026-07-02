"use client";
import { AnimatePresence, motion } from "framer-motion";
import { CSSProperties, useEffect, useMemo, useRef, useState } from "react";
import {
  SolarArrowRightUpBroken,
  SolarAltArrowLeftBroken,
  SolarAltArrowRightBroken,
} from "@/icons/index";
import { ProjectRecord } from "@/types";
import Projects from "@/constants/projects";
import Image from "next/image";

interface ProjectScrollCardProps {
  startXat?: number;
}

const ActiveBtn = ({ name, link }: { name: string; link: string }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer group bg-button-primary flex items-center gap-2 rounded-full text-button-on-primary p-btn-pad"
    >
      {name}
      <span>
        <SolarArrowRightUpBroken className="stroke-button-on-primary size-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </a>
  );
};

const InActiveBtn = ({ name, link }: { name: string; link: string }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer group inline-flex items-center gap-3 rounded-full text-button-on-tertiary border border-button-tertiary-border bg-button-tertiary   hover:bg-button-hover-tertiary transition-all ease-in-out duration-200 p-btn-pad-2"
    >
      {name}
      <SolarArrowRightUpBroken className="size-5 stroke-theme-on-surface transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
};

const ProjectScrollCard = ({ startXat = 0 }: ProjectScrollCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const firstCardRef = useRef<HTMLDivElement>(null);

  const [cardWidth, setCardWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  useEffect(() => {
    const handleLayout = () => {
      if (!firstCardRef.current || !containerRef.current) return;
      setCardWidth(firstCardRef.current.getBoundingClientRect().width);
      setContainerWidth(containerRef.current.getBoundingClientRect().width);
    };

    handleLayout();
    window.addEventListener("resize", handleLayout, { passive: true });
    return () => window.removeEventListener("resize", handleLayout);
  }, []);

  useEffect(() => {
    const keysToBlock = [
      "Space",
      "ArrowUp",
      "ArrowDown",
      "PageUp",
      "PageDown",
      "End",
      "Home",
    ];

    const handleKeyDown = (e: KeyboardEvent) => {
      if (keysToBlock.includes(e.code)) {
        e.preventDefault();
      }
    };

    window.addEventListener("keydown", handleKeyDown, { passive: false });
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const featuredProjects = useMemo(
    () =>
      (Projects as ProjectRecord[])
        .filter((project) => project.featured)
        .slice(0, 5),
    [],
  );

  // Scroll to an absolute card index.
  // The leading spacer (width = startXat) is a flex child, so index 0 sits at
  // scrollLeft = 0 and the first card's visible left edge is already at startXat.
  const scrollToIndex = (index: number) => {
    const container = containerRef.current;
    if (!container || cardWidth === 0) return;

    const gapWidth = 16;
    const stepAmount = cardWidth + gapWidth;

    container.scrollTo({
      left: index * stepAmount,
      behavior: "smooth",
    });
  };

  const scrollByCard = (dir: "left" | "right") => {
    setDirection(dir);

    const totalCards = featuredProjects.length;
    if (totalCards === 0) return;

    const nextIndex =
      dir === "left"
        ? (activeIndex - 1 + totalCards) % totalCards
        : (activeIndex + 1) % totalCards;

    setActiveIndex(nextIndex);
    scrollToIndex(nextIndex);
  };

  // Clicking a card scrolls to it and sets animation direction.
  const handleCardClick = (i: number) => {
    setDirection(i > activeIndex ? "right" : "left");
    setActiveIndex(i);
    scrollToIndex(i);
  };

  useEffect(() => {
    const element = containerRef.current;
    const handle = (e: any) => e.preventDefault();
    const keyDown = (e: any) => {
      const scrollKeys = ["ArrowLeft", "ArrowRight", "Home", "End"];
      if (scrollKeys.includes(e.key)) handle(e);
    };
    if (!element) return;
    element.addEventListener("wheel", handle);
    element.addEventListener("touchmove", handle);
    element.addEventListener("pointerdown", handle);
    element.addEventListener("keydown", keyDown);
    return () => {
      element.removeEventListener("wheel", handle);
      element.removeEventListener("touchmove", handle);
      element.removeEventListener("pointerdown", handle);
      element.removeEventListener("keydown", keyDown);
    };
  }, []);

  return (
    <div
      className="flex flex-col gap-4"
      style={
        {
          "--start-x-at": `${startXat}px`,
        } as CSSProperties
      }
    >
      <div
        ref={containerRef}
        className="flex items-center overflow-x-hidden no-scrollbar scroll-smooth"
      >
        <div
          aria-hidden="true"
          className="shrink-0"
          style={{ width: startXat, minWidth: startXat }}
        />

        {featuredProjects.map((project, i) => (
          <div
            key={i}
            ref={i === 0 ? firstCardRef : null}
            className="relative shrink-0 aspect-video w-[calc(100%-0.4rem)] mr-4 sm:w-96 lg:w-xl rounded-2xl overflow-hidden cursor-pointer group"
            onClick={() => handleCardClick(i)}
          >
            {/* Image */}
            <Image
              src={project.featuredImage ?? "/projects/placeholder.jpg"}
              alt={project.title}
              fill
              loading="eager"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width:640px) 100vw, (max-width:1024px) 384px, 576px"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  "/projects/placeholder.jpg";
              }}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent" />
          </div>
        ))}

        <div
          aria-hidden="true"
          className="shrink-0"
          style={{
            width:
              containerWidth > 0 && cardWidth > 0
                ? Math.max(0, containerWidth - startXat - cardWidth)
                : startXat,
          }}
        />
      </div>

      <div
        style={{
          paddingLeft: `var(--start-x-at)`,
        }}
        className="flex flex-col md:flex-row items-start gap-8 md:gap-24"
      >
        <div className="max-w-lg w-full">
          <AnimatePresence mode="wait">
            <motion.p
              key={activeIndex}
              className="heading-6 my-2 text-primary"
              initial={{ opacity: 0, y: direction === "right" ? 20 : -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: direction === "right" ? -20 : 20 }}
              transition={{ duration: 0.4 }}
            >
              {featuredProjects[activeIndex]?.title}
            </motion.p>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeIndex}-desc`}
              className="paragraph-4 "
              initial={{ opacity: 0, y: direction === "right" ? 20 : -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: direction === "right" ? -20 : 20 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <p className="max-w-lg text-justify">
                {featuredProjects[activeIndex]?.summary}
              </p>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeIndex}-buttons`}
              className="my-6 flex gap-4 flex-wrap"
              initial={{ opacity: 0, y: direction === "right" ? 20 : -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: direction === "right" ? -20 : 20 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              {featuredProjects.length > 0
                ? featuredProjects[activeIndex].urls.map((url, index) => {
                    return url.isPrimary ? (
                      <ActiveBtn key={index} name={url.label} link={url.url} />
                    ) : (
                      <InActiveBtn
                        key={index}
                        name={url.label}
                        link={url.url}
                      />
                    );
                  })
                : null}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center bg-button-secondary rounded-full max-md:mx-auto">
          <button
            aria-label="Scroll Left"
            className="flex items-center hover:bg-button-secondary cursor-pointer justify-center w-10 h-10 rounded-full hover:text-button-on-primary"
            onClick={() => scrollByCard("left")}
          >
            <SolarAltArrowLeftBroken className="stroke-theme-on-surface group-hover:stroke-button-on-primary size-5" />
          </button>
          <button
            aria-label="Scroll Right"
            className="flex items-center hover:bg-button-secondary cursor-pointer justify-center w-10 h-10 rounded-full hover:text-button-on-primary"
            onClick={() => scrollByCard("right")}
          >
            <SolarAltArrowRightBroken className="stroke-theme-on-surface group-hover:stroke-button-on-primary size-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectScrollCard;
