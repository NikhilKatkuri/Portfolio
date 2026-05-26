"use client";
import { SolarArrowRightUpBroken } from "@/icons";
import SlideHover from "../ui/SlideHover";
import { useEffect } from "react";
import Image from "next/image";

interface NavbarProps {
  isStatic?: boolean;
}

const Navbar = ({ isStatic = true }: NavbarProps) => {
  const data = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Experience", href: "/experience" },
    { name: "Blog", href: "/blog" },
    { name: "Uses", href: "/uses" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (isStatic) return; // Skip dynamic behavior if static mode is enabled
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
 
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isStatic]);

  return (
    <header className="h-16 flex items-center justify-between w-full sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-(--content-max-width) mx-auto h-16 flex items-center max-lg:px-4 justify-between w-full relative">
        <div
          className="rounded-full bg-gray-200 absolute origin-left"
          style={{
            width: isStatic ? "42px" : "var(--avatar-size)",
            height: isStatic ? "42px" : "var(--avatar-size)",
            top: isStatic ? "" : "var(--avatar-y-coord)",
            transform: isStatic ? "" : "scale(var(--avatar-scale, 1))",
            willChange: isStatic ? "" : "transform, top",
          }}
        >
          <Image
            src="/hero.jpg"
            alt="Avatar"
            fill
            className="rounded-full object-cover"
          />
        </div>

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
