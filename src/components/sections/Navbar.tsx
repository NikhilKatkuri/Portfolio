"use client";
import publicLinks, { Mails } from "@/constants/links";
import { SolarArrowRightUpBroken } from "@/icons";
import SlideHover from "../ui/SlideHover";
import {
  useScroll,
  useTransform,
  motion,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import cn from "@/utils/cn";

interface NavbarProps {
  isStatic?: boolean;
}

const Navbar = ({ isStatic = true }: NavbarProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

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
    <>
      <header
        role="banner"
        className="h-16 flex items-center justify-between w-full sticky top-0 z-50 bg-theme-surface"
      >
        <div className="max-w-content-mx mx-auto h-16 z-0 flex items-center max-lg:px-4 justify-between w-full relative">
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

          <div className="flex items-center gap-3">
            <a
              href={`${publicLinks.mail}?subject=${CTA.subject}&body=${CTA.body}`}
              aria-label="Contact me"
              className="bg-button-primary flex items-center gap-2 cursor-pointer rounded-full text-button-on-primary p-btn-pad hover:bg-button-hover-primary transition-colors duration-200 max-md:hidden"
            >
              Let&apos;s Build
              <span>
                <SolarArrowRightUpBroken className="stroke-button-on-primary size-5" />
              </span>
            </a>

            <button
              onClick={() => {setIsMenuOpen((prev) => !prev)}}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              className={cn(
                "mr-3 p-2 aspect-square rounded-full bg-transparent hover:bg-button-nav-hover active:bg-button-nav-hover transition-colors duration-200 max-md:flex hidden items-center justify-center relative",
              )}
            >
              <div className="w-5 h-4 relative flex flex-col justify-between">
                <motion.span
                  className="block h-0.5 w-full bg-current rounded-full origin-center"
                  animate={
                    isMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="block h-0.5 w-full bg-current rounded-full"
                  animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.15 }}
                />
                <motion.span
                  className="block h-0.5 w-full bg-current rounded-full origin-center"
                  animate={
                    isMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.2 }}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden fixed top-16 left-0 w-full z-100 bg-theme-surface border-t border-button-secondary-border overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-4 gap-1">
              {data.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="py-3 px-3 rounded-lg hover:bg-button-nav-hover transition-colors duration-150 text-base"
                >
                  {item.name}
                </Link>
              ))}
              <a
                href={`${publicLinks.mail}?subject=${CTA.subject}&body=${CTA.body}`}
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 bg-button-primary flex items-center justify-center gap-2 rounded-full text-button-on-primary p-btn-pad hover:bg-button-hover-primary transition-colors duration-200"
              >
                Let&apos;s Build
                <SolarArrowRightUpBroken className="stroke-button-on-primary size-5" />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
