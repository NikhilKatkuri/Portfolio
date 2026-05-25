"use client";
import { SolarArrowRightUpBroken } from "@/icons";
import SlideHover from "./ui/SlideHover";
import { useEffect } from "react";
import Image from "next/image";

const Navbar = () => {
  const data = [
    { name: "About", href: "/" },
    { name: "Projects", href: "/" },
    { name: "Experience", href: "/" },
    { name: "Blog", href: "/" },
    { name: "Uses", href: "/" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Complete transformation smoothly over 300px of scrolling
      const progress = Math.min(1, scrollY / 300);

      // 1. Map Y position: Starts at 300px (Hero), drops 288px to land exactly at 12px (Navbar)
      const currentY = 200 - progress * 288;

      // 2. Map Scale factor: Starts at 1 (240px), scales down to 0.1667 (~40px)
      // 1 - (progress * 0.8333) equals 0.1667 when progress is 1
      const currentScale = 1 - progress * 0.8333;

      // Inject directly into DOM root for raw hardware acceleration
      document.documentElement.style.setProperty(
        "--avatar-y-coord",
        `${currentY}px`,
      );
      document.documentElement.style.setProperty(
        "--avatar-scale",
        `${currentScale}`,
      );
    };

    // Sync initial layout execution immediately on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="h-16 flex items-center justify-between w-full sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-(--content-max-width) mx-auto h-16 flex items-center max-lg:px-4 justify-between w-full relative">
        {/* THE FLOATING AVATAR CONTAINER */}
        <div
          className="rounded-full bg-gray-200 absolute origin-left"
          style={{
            // 1. Link width and height directly to your 240px root footprint configuration
            width: "var(--avatar-size)",
            height: "var(--avatar-size)",

            // 2. Track the dynamic scrolling top property down from 300px
            top: "var(--avatar-y-coord)",

            // 3. Scale down the 240px layer smoothly to fit the navbar context
            transform: "scale(var(--avatar-scale, 1))",

            // 4. Force browser layer isolation for clean 60fps scrolling
            willChange: "transform, top",
          }}
        >
          <Image
            src="/hero.jpg"
            alt="Avatar"
            fill
            className="rounded-full object-cover"
          />
        </div>

        {/* Structural layout anchor to reserve space in the navbar line */}
        <div className="h-10 w-10 block" />

        <ul className="flex items-center relative max-md:hidden">
          <SlideHover data={data} />
        </ul>

        <button className="bg-theme-button-primary flex items-center gap-2 cursor-pointer rounded-full text-theme-button-on-primary p-btn-pad">
          Let&apos;s Build
          <span>
            <SolarArrowRightUpBroken className="stroke-theme-button-on-primary size-5" />
          </span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
