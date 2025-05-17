"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import AnimatedSection from "../ui/AnimatedComponents";

export default function PartnersSection() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marqueeElement = marqueeRef.current;
    if (!marqueeElement) return;

    const handleLoad = () => {
      const scrollWidth = marqueeElement.scrollWidth / 2;

      const baseSpeed = 1;
      const speed = baseSpeed;

      let position = 0;
      let animationId: number;

      const scroll = () => {
        position += speed;

        if (position >= scrollWidth) {
          position -= scrollWidth;
        }

        marqueeElement.style.transform = `translateX(${-position}px)`;
        animationId = requestAnimationFrame(scroll);
      };

      scroll();

      return () => {
        cancelAnimationFrame(animationId);
      };
    };

    const timer = setTimeout(handleLoad, 100);
    return () => clearTimeout(timer);
  }, []);

  const partners = [
    { name: "Lifespan", logo: "/svg/lifespan.PNG" },
    { name: "xtan", logo: "/svg/xtan.PNG" },
    { name: "rahul raj", logo: "/svg/rahulraj.jpg" },
    { name: "improve", logo: "/svg/improve.jpg" },
    { name: "interior", logo: "/svg/bnb.jpg" },
    { name: "fitandfury", logo: "/svg/fitandfury.PNG" },
    { name: "ADHURI", logo: "/svg/adhuri.jpg" },
    { name: "maxfit1", logo: "/svg/maxfit.jpg" },
    { name: "ssws", logo: "/svg/ssws.png" },
    { name: "ic", logo: "/svg/ic.jpg" },
    { name: "Nutrinest", logo: "/svg/nutrinest.jpg" },
  ];

  const displayPartners = [...partners, ...partners, ...partners];

  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection className="mb-8">
          <h2 className="text-2xl md:text-3xl uppercase tracking-wider text-center text-black mb-2 font-['impact']">
            Powered by the best in fitness
          </h2>
          <p className="text-center text-gray-600 mb-8 md:mb-12 text-lg md:text-2xl tracking-wider font-[CreatoDisplay]">
            Global brands fueling the future of physique sports
          </p>
        </AnimatedSection>

        <div className="relative overflow-hidden">
          <div
            ref={marqueeRef}
            className="flex items-center whitespace-nowrap"
            style={{ willChange: "transform" }}
          >
            {displayPartners.map((partner, i) => (
              <div
                key={i}
                className="py-6 md:py-8 flex items-center justify-center min-w-[160px] md:min-w-[200px] w-[240px] md:w-[300px] px-6 md:px-8"
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={300} // increased from 240
                  height={160} // increased from 120
                  className="h-24 md:h-32 w-auto" // increased from h-20 md:h-28
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
