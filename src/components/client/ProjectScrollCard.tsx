"use client";

import { CSSProperties, useLayoutEffect, useRef, useState } from "react";
import { SolarArrowRightUpBroken } from "@/icons/index";

interface ProjectScrollCardProps {
  startXat?: number;
}
const ProjectScrollCard = ({ startXat = 0 }: ProjectScrollCardProps) => {
  const firstCardRef = useRef<HTMLDivElement>(null);

  const [cardWidth, setCardWidth] = useState(0);

  useLayoutEffect(() => {
    const handleLayout = () => {
      if (!firstCardRef.current) return;
      setCardWidth(firstCardRef.current.getBoundingClientRect().width);
    };
    handleLayout();
    window.addEventListener("resize", handleLayout, { passive: true });
    return () => {
      window.removeEventListener("resize", handleLayout);
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
        style={{
          paddingLeft: `var(--start-x-at)`,
        }}
        className="flex gap-4 items-center overflow-x-auto no-scrollbar scroll-smooth"
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            ref={i === 0 ? firstCardRef : null}
            style={{
              marginRight: i === 4 ? `calc(var(--start-x-at)*2)` : "0px",
            }}
            className="aspect-video h-100 rounded-2xl bg-black/5 "
          >
            {i}
          </div>
        ))}
      </div>
      <div
        style={{
          paddingLeft: `var(--start-x-at)`,
        }}
        className="flex flex-col gap-2"
      >
        <div className="">
          <p className="heading-6 my-2">Dynamic Portfolio CMS</p>
          <div className="paragraph-4">
            <p className="max-w-lg text-justify">
              A full-stack portfolio platform with real-time content management,
              ISR-based rendering, and AI-assisted personalization designed for
              scalable performance and long-term maintainability.
            </p>
          </div>
            <div className="my-4 flex gap-4 flex-wrap text-sm">
              <button className="bg-theme-button-primary flex items-center gap-2 cursor-pointer rounded-full text-theme-button-on-primary p-btn-pad">
                Live Link
                <span>
                  <SolarArrowRightUpBroken className="stroke-theme-button-on-primary size-5" />
                </span>
              </button>
              <button className="border transition-all ease-in-out duration-300 border-theme-on-surface group hover:bg-theme-button-primary flex items-center gap-2 cursor-pointer rounded-full hover:text-theme-button-on-primary p-btn-pad">
                Source Code
                <span>
                  <SolarArrowRightUpBroken className="stroke-theme-on-surface group-hover:stroke-theme-button-on-primary size-5" />
                </span>
              </button>
            </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default ProjectScrollCard;
