"use client";
import {
  SolarAddFolderBroken,
  SolarDatabaseLineDuotone,
  SolarSmartphoneBroken,
  SolarCheckCircleLinear,
  SolarCodeBroken,
  SolarProgrammingLinear,
  SolarLayersMinimalisticBoldDuotone,
  SolarMagicStick3Linear,
} from "@/icons/index";
import { useEffect, useState } from "react";

const icons = [
  SolarAddFolderBroken,
  SolarDatabaseLineDuotone,
  SolarSmartphoneBroken,
  SolarCheckCircleLinear,
  SolarCodeBroken,
  SolarProgrammingLinear,
  SolarLayersMinimalisticBoldDuotone,
  SolarMagicStick3Linear,
];

const IconFlow = () => {
  const quatrpleIcons = [...icons, ...icons, ...icons, ...icons];

  const amplitude = 32;
  const frequency = 0.5;
  const [transformX, setTransformX] = useState(0);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;

      // Moves the track horizontally relative to your scroll depth
      setTransformX((prev) => prev + delta * 0.3);

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex w-full justify-center overflow-hidden my-12 ">
      <div className="flex w-[200vw] -translate-x-50  h-36 relative md:h-64 gap-2 no-scrollbar scroll-smooth items-center px-8">
        {quatrpleIcons.map((Icon, index) => {
          const translateY =
            Math.round(Math.sin(index * frequency) * amplitude * 100) / 100;

          return (
            <div
              key={index}
              style={{
                transform: `translateX(${transformX}px)`,
                transition: "transform 0.1s ease-out",
              }}
            >
              <div
                className="min-w-20 md:min-w-24 aspect-square rounded-full border bg-(--theme-surface-overlay-depth-01) border-(--palette-grey-1000-12) flex items-center justify-center animate-float"
                style={{
                  animationDelay: `${index * 0.15}s`,
                  transform: `translateY(${-translateY}px)`, // Merged cleanly into a single style block
                }}
              >
                <Icon className="stroke-theme-on-surface size-5 md:size-7" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IconFlow;
