"use client";
import publicLinks, { Mails } from "@/constants/links";
import { SolarArrowRightUpBroken } from "@/icons";
import SlideHover from "../ui/SlideHover";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";

import { useState, useEffect } from "react";

interface NavbarProps {
  isStatic?: boolean;
}

const Navbar = ({ isStatic = true }: NavbarProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const data = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/project" },
    { name: "Uses", href: "/uses" },
  ];

  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 300], [300, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.1667]);
  const motionStyle =
    isMounted && !isStatic
      ? { width: "var(--avatar-size)", height: "var(--avatar-size)", y, scale }
      : { width: 42, height: 42 };
  const CTA = Mails["lets-build"];

  return (
    <header
      role="banner"
      className="h-16 flex items-center justify-between w-full sticky top-0 z-50 bg-theme-surface "
    >
      <div className="max-w-content-mx mx-auto h-16 flex items-center max-lg:px-4 justify-between w-full relative">
        <motion.div
          className="rounded-full absolute origin-left"
          style={motionStyle}
        >
          <Image
            src="/hero.jpg"
            alt="Avatar"
            fill={true}
            priority={true}
            sizes="(max-width: 768px) 320px, 420px"
            className="rounded-full object-cover"
          />
        </motion.div>

        <div className="h-10 w-10 block" />

        <div className="flex items-center relative max-md:hidden">
          <SlideHover data={data} />
        </div>

        <a
          href={`${publicLinks.mail}?subject=${CTA.subject}&body=${CTA.body}`}
          aria-label="Contact me"
          className="bg-button-primary flex items-center gap-2 cursor-pointer rounded-full text-button-on-primary p-btn-pad hover:bg-button-hover-primary transition-colors duration-200"
        >
          Let&apos;s Build
          <span>
            <SolarArrowRightUpBroken className="stroke-button-on-primary size-5" />
          </span>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
