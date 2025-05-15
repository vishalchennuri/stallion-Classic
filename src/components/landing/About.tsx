"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedSection, { AnimatedButton } from "../ui/AnimatedComponents";

export default function AboutSection() {  
  return (
    <section className="pt-12 sm:pt-14 md:pt-16 bg-white relative overflow-hidden">
      {/* Background smoke effect */}
      <div className="absolute sm:-translate-x-56 sm:translate-y-20  inset-0 z-0">
        <Image
          src="/images/landing/about/smoke.png"
          alt="Background smoke"
          fill
          className="object-cover scale-x-[-1]"
        />
      </div>
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-6 sm:gap-8 md:gap-12 lg:gap-16">
          {/* Image - below on mobile, left on desktop */}
          <AnimatedSection
            animation="slideInLeft"
            className="w-full md:w-[40%] relative"
            delay={0.3}
          >
            <Image
              src="/images/landing/about/shw.png"
              alt="Classic bodybuilder pose"
              width={600}
              height={800}
              className="w-[100%] h-auto relative z-10"
            />
          </AnimatedSection>
          
          {/* Content - top on mobile, right on desktop */}
          <div className="w-full md:w-[60%] pl-0 sm:pl-4 md:pl-6 lg:pl-10 pt-0 sm:pt-0 md:pt-10">
            <AnimatedSection
              className="text-base sm:text-lg md:text-2xl lg:text-3xl text-black mb-4 sm:mb-6 font-[CreatoDisplay]"
              animation="slideInRight"
              delay={0.2}
            >
              About Stallion Classic
            </AnimatedSection>

            <AnimatedSection
              className="border-l-3 border-[#dc4a26] pl-4 mb-6 sm:mb-8"
              animation="slideInRight"
              delay={0.3}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black leading-tight font-[impact]">
                THE ULTIMATE PROVING{" "}
                <span className="text-[#dc4a26]">
                  GROUND FOR PHYSIQUE ELITE
                </span>
              </h2>
            </AnimatedSection>

            <AnimatedSection
              className="text-gray-800 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-10 leading-relaxed font-[CreatoDisplay] pr-0 sm:pr-8 md:pr-16 lg:pr-32"
              animation="slideInRight"
              delay={0.4}
            >
              <p>
                The Stallion Classic isn&apos;t just a competition—it&apos;s a
                celebration of discipline, sacrifice, and the relentless pursuit
                of greatness. Since its inception, this premier event has set the
                gold standard for Bodybuilding, Men&apos;s Physique, and Classic
                Physique divisions, attracting top-tier athletes who demand a
                stage worthy of their dedication.
              </p>
            </AnimatedSection>

            <AnimatedSection
              animation="slideInRight"
              delay={0.5}
            >
              <AnimatedButton>
                <Link
                  href="/about"
                  className="inline-block bg-[#dc4a26] text-white px-6 sm:px-7 md:px-8 py-2 sm:py-2.5 md:py-3 font-bold tracking-wider hover:bg-opacity-90 transition-colors"
                >
                  KNOW MORE
                </Link>
              </AnimatedButton>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
