"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

interface Data {
  name: string;
  href: string;
}

interface SlideHoverProps<T> {
  data: T[];
}

interface SliderStyle {
  width: number;
  left: number;
  opacity: number;
}

const SlideHover = <T extends Data>({ data }: SlideHoverProps<T>) => {
  const [sliderStyle, setSliderStyle] = useState<SliderStyle>({
    width: 0,
    left: 0,
    opacity: 0,
  });

  const handleMouseEnter = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const target = event.currentTarget;
    const { offsetWidth, offsetLeft } = target;
    setSliderStyle({ width: offsetWidth, left: offsetLeft, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setSliderStyle((prev) => ({ ...prev, opacity: 0 }));
  };

  const pn = usePathname();
  const isActive = (href: string) => {
    return pn === href;
  };
  return (
    <>
      {data.map((item, index) => ( 
          <Link
            id={`${index}`}
            key={index}
            className={`p-btn-pad rounded-full smooth-transition ${isActive(item.href) ? "bg-button-nav-hover" : ""} text-button-on-secondary `}
            href={item.href}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {item.name}
          </Link> 
      ))}
      <div
        className="absolute top-0 bottom-0 left-0 rounded-full bg-button-nav-hover transition-all duration-300 ease-out pointer-events-none"
        style={{
          width: sliderStyle.width,
          left: sliderStyle.left,
          opacity: sliderStyle.opacity,
        }}
      />
    </>
  );
};

export default SlideHover;
