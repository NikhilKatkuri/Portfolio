"use client";
import {  useLayoutEffect, useRef, useState } from "react";
import ProjectScrollCard from "./client/ProjectScrollCard";

const FeaturedProject = () => {
   const divRef = useRef<HTMLDivElement>(null);
   const [xAxis, setXAxis] = useState(0);
   const handleLayout = () => {
      if(!divRef.current) return; 
      setXAxis(divRef.current.getBoundingClientRect().x);
   };

    useLayoutEffect(() => {
      handleLayout();
      window.addEventListener("resize", handleLayout, { passive: true });
      return () => {
        window.removeEventListener("resize", handleLayout);
      }
    }, []);
  return (
    <div className="h-screen w-full flex flex-col gap-24  max-lg:px-4 mx-auto">
      <div ref={divRef} className="max-w-(--content-max-width) flex w-full flex-col  mx-auto">
        <h1 className="heading-4 lg:my-3">Featured Projects</h1>
        <p className="paragraph-4 max-w-lg">
          Selected work focused on scalable systems, modern architectures,
          and performance-oriented user experiences.
        </p>
      </div>
      <div className="w-full h-full relative overflow-hidden">
        <ProjectScrollCard startXat={xAxis} />
      </div>
    </div>
  );
};

export default FeaturedProject;
