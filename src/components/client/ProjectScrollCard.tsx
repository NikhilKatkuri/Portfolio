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
        onWheel={(e) => e.preventDefault()}
        onTouchMove={(e) => e.preventDefault()}
        onPointerDown={(e) => e.preventDefault()}
        onKeyDown={(e) => {
          const scrollKeys = ["ArrowLeft", "ArrowRight", "Home", "End"];
          if (scrollKeys.includes(e.key)) e.preventDefault();
        }}
      >
        {/*
          Leading spacer: pushes the first card's visible left edge to startXat.
          Using flex-shrink-0 so it never collapses.
        */}
        <div
          aria-hidden="true"
          className="shrink-0"
          style={{ width: startXat, minWidth: startXat }}
        />

        {featuredProjects.map((project, i) => (
          <div
            key={i}
            ref={i === 0 ? firstCardRef : null}
            className="shrink-0 aspect-video h-64 mr-4  sm:h-72 lg:h-100 rounded-2xl bg-[var(--color-black-5)] flex items-center justify-center cursor-pointer hover:bg-[var(--color-black-10)] transition-colors"
            onClick={() => handleCardClick(i)}
          >
            <div className="text-center px-4">
              <p className="heading-6 text-theme-on-surface">{project.title}</p>
            </div>
          </div>
        ))}

        {/*
          Trailing spacer: allows the last card to scroll until its left edge
          aligns with startXat. Its width = containerWidth - startXat - cardWidth
          so that scrollLeft_max lands exactly on the last card's startXat position.
          Falls back to startXat before measurements are ready.
        */}
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
              {featuredProjects.length > 0 ? (
                featuredProjects[activeIndex].urls.map((url, index) => {
                  return url.isPrimary ? (
                    <ActiveBtn key={index} name={url.label} link={url.url} />
                  ) : (
                    <InActiveBtn key={index} name={url.label} link={url.url} />
                  );
                })
              ) : null}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center bg-button-secondary rounded-full max-md:mx-auto">
          <button
            className="flex items-center hover:bg-button-secondary cursor-pointer justify-center w-10 h-10 rounded-full hover:text-button-on-primary"
            onClick={() => scrollByCard("left")}
          >
            <SolarAltArrowLeftBroken className="stroke-theme-on-surface group-hover:stroke-button-on-primary size-5" />
          </button>
          <button
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
