"use client";

import { CSSProperties, useEffect, useRef, useState } from "react";
import {
  SolarArrowRightUpBroken,
  SolarAltArrowLeftBroken,
  SolarAltArrowRightBroken,
} from "@/icons/index";

interface ProjectScrollCardProps {
  startXat?: number;
}

const ProjectScrollCard = ({ startXat = 0 }: ProjectScrollCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const firstCardRef = useRef<HTMLDivElement>(null);

  const [cardWidth, setCardWidth] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleLayout = () => {
      if (!firstCardRef.current) return;
      setCardWidth(firstCardRef.current.getBoundingClientRect().width);
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

    window.addEventListener(
      "keydown",
      (e) => {
        if (keysToBlock.includes(e.code)) {
          e.preventDefault();
        }
      },
      { passive: false },
    );
  }, []);
  const scrollByCard = (direction: "left" | "right") => {
    const container = containerRef.current;
    if (!container || cardWidth === 0) return;

    const gapWidth = 16;
    const stepAmount = cardWidth + gapWidth;
    const totalCards = 5;
    let i = 0;
    if (direction === "left") {
      i = activeIndex === 0 ? totalCards - 1 : activeIndex - 1;
    } else {
      i = activeIndex === totalCards - 1 ? 0 : activeIndex + 1;
    }
    setActiveIndex(i);
    console.log(
      direction === "left"
        ? container.scrollLeft + stepAmount * 2
        : container.scrollLeft + stepAmount * 2,
    );
    if (i === 4) {
      container.scrollTo({
        left:
          direction === "left"
            ? container.scrollLeft + stepAmount * 2
            : container.scrollLeft + stepAmount * 2,
        behavior: "smooth",
      });
    }
    container.scrollTo({
      left:
        direction === "left"
          ? container.scrollLeft - stepAmount
          : container.scrollLeft + stepAmount,
      behavior: "smooth",
    });
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const scrollKeys = [
      "ArrowLeft",
      "ArrowRight",
      " ",
      "PageUp",
      "PageDown",
      "Home",
      "End",
    ];
    if (scrollKeys.includes(e.key)) {
      e.preventDefault();
    }
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
        style={{
          paddingLeft: `var(--start-x-at)`,
        }}
        ref={containerRef}
        className="flex gap-4 items-center overflow-x-auto no-scrollbar scroll-smooth"
        onWheel={handleWheel}
        onKeyDown={handleKeyDown}
        // ={handleWheel}
        tabIndex={0}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            ref={i === 0 ? firstCardRef : null}
            style={{
              marginRight: i === 4 ? `calc(var(--start-x-at)*2)` : "0px",
            }}
            className="aspect-video h-64 sm:h-72 lg:h-100 rounded-2xl bg-black/5 "
          >
            {i + 1}
          </div>
        ))}
      </div>
      <div
        style={{
          paddingLeft: `var(--start-x-at)`,
        }}
        className="flex flex-col md:flex-row items-start gap-8 md:gap-12"
      >
        <div>
          <p className="heading-6 my-2">Dynamic Portfolio CMS</p>
          <div className="paragraph-4">
            <p className="max-w-lg text-justify">
              A full-stack portfolio platform with real-time content management,
              ISR-based rendering, and AI-assisted personalization designed for
              scalable performance and long-term maintainability.
            </p>
          </div>
          <div className="my-6 flex gap-4 flex-wrap">
            <a className="cursor-pointer group bg-theme-button-primary flex items-center gap-2  rounded-full text-theme-button-on-primary p-btn-pad">
              Live Link
              <span>
                <SolarArrowRightUpBroken className="stroke-theme-button-on-primary size-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </a>

            <a className="cursor-pointer group inline-flex items-center gap-3 rounded-full text-theme-button-on-secondary border border-(--palette-grey-100) bg-(--palette-grey-100)/30 shadow-xs hover:shadow hover:bg-theme-button-secondary transition-all ease-in-out duration-200 p-btn-pad-2 ">
              Source Code
              <SolarArrowRightUpBroken className="size-5 stroke-theme-on-surface transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
        <div className="flex items-center bg-theme-button-secondary rounded-full max-md:mx-auto">
          <button
            className="flex items-center hover:bg-theme-button-secondary cursor-pointer justify-center w-10 h-10 rounded-full hover:text-theme-button-on-primary"
            onClick={() => scrollByCard("left")}
          >
            <SolarAltArrowLeftBroken className="stroke-theme-on-surface group-hover:stroke-theme-button-on-primary size-5" />
          </button>
          <button
            className="flex items-center hover:bg-theme-button-secondary cursor-pointer justify-center w-10 h-10 rounded-full hover:text-theme-button-on-primary"
            onClick={() => scrollByCard("right")}
          >
            <SolarAltArrowRightBroken className="stroke-theme-on-surface group-hover:stroke-theme-button-on-primary size-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectScrollCard;
