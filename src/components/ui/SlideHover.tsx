"use client";

import Link from 'next/link'
import { useState } from 'react';

interface Data {
      name: string,
      href: string,
}

interface SlideHoverProps<T> {
      data: T[],

}

interface SliderStyle {
      width: number,
      left: number,
      opacity: number,
}

const SlideHover = <T extends Data>({ data }: SlideHoverProps<T>) => {

      const [sliderStyle, setSliderStyle] = useState<SliderStyle>({ width: 0, left: 0, opacity: 0 });

      const handleMouseEnter = (event: React.MouseEvent<HTMLAnchorElement>) => {
            const target = event.currentTarget;
            const { offsetWidth, offsetLeft } = target;
            setSliderStyle({ width: offsetWidth, left: offsetLeft, opacity: 1 });
      };

      const handleMouseLeave = () => {
            setSliderStyle(prev => ({ ...prev, opacity: 0 }));

      };

      return (
            <>
                  {data.map((item, index) => (
                        <Link
                              id={`${index}`}
                              key={index}
                              className='p-btn-pad rounded-full smooth-transition'
                              href={item.href}
                              onMouseEnter={handleMouseEnter}
                              onMouseLeave={handleMouseLeave}
                        >
                              {item.name}
                        </Link>
                  ))}
                  <div
                        className="absolute top-0 bottom-0 left-0 rounded-full bg-theme-button-secondary transition-all duration-300 ease-out pointer-events-none" style={{
                              width: sliderStyle.width,
                              left: sliderStyle.left,
                              opacity: sliderStyle.opacity,
                        }}
                  />
            </>
      )
}

export default SlideHover