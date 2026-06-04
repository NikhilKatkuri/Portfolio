"use client";
import { useLayoutEffect, useRef, useState } from "react";
import ProjectScrollCard from "../client/ProjectScrollCard"; 
import { decisions } from "@/constants/content/home";

const FeaturedProject = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const [xAxis, setXAxis] = useState(0);
  
  const handleLayout = () => {
    if (!divRef.current) return;
    setXAxis(divRef.current.getBoundingClientRect().x);
  };

  useLayoutEffect(() => {
    handleLayout();
    window.addEventListener("resize", handleLayout, { passive: true });
    return () => {
      window.removeEventListener("resize", handleLayout);
    };
  }, []);

  const { featuredProjects } = decisions;
  return (
    <div
      id="featured-projects"
      className="min-h-screen w-full flex flex-col pt-12 gap-8  mx-auto"
    >
      <div
        ref={divRef}
        className="max-w-content-mx flex w-full flex-col max-lg:px-4 mx-auto"
      >
        <h2 className="heading-4 text-primary lg:my-3">
          {featuredProjects.title}
        </h2>
        <p className="paragraph-4 max-w-lg whitespace-pre-wrap">
          {featuredProjects.body}
        </p>
      </div>
      <div className="w-full h-full relative overflow-x-hidden pb-12 max-lg:px-4 ">
        <ProjectScrollCard startXat={xAxis} />
      </div>
    </div>
  );
};

export default FeaturedProject;
