"use client";

import { decisions } from "@/constants/content/home";
import { SolarArrowRightUpBroken } from "@/icons/index";
import Link from "next/link";

import ResumeButton from "@/components/client/ResumeButton";
import Layer from "./Layer";
const Hero = () => {
  const { hero } = decisions;
  return (
    <div className="w-full h-screen relative">
      <Layer />
      <div
        className="w-full pointer-events-none transition-all duration-75"
        style={{
          height: "400px",
        }}
      />
      <div className="relative isolate h-screen w-full max-w-content-mx mx-auto pb-16  lg:pb-32 max-lg:px-4">
        <h1 className="relative z-10 landing-main text-surface">
          {hero.title.map((part, index) => (
            <p key={index}>{part}</p>
          ))}
        </h1>
        <div className="relative z-10 my-4 landing-secondary text-tertiary">
          <p className="">{hero.body}</p>
        </div>
        <div className="relative z-10 flex flex-wrap gap-4">
          <Link
            href="#featured-projects"
            scroll={true}
            className="group bg-button-primary flex items-center gap-3 cursor-pointer rounded-full text-button-on-primary p-btn-pad-2"
          >
            View Projects
            <span>
              <SolarArrowRightUpBroken className="stroke-button-on-primary size-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </Link>

          <ResumeButton />
        </div>
      </div>
    </div>
  );
};

export default Hero;
