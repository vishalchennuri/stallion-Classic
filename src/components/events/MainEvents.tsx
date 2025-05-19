"use client";

import Link from "next/link"
import AnimatedSection, { StaggerContainer, StaggerItem, AnimatedButton } from "../ui/AnimatedComponents"

export default function MainEventSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-[#181818]">
      <div className="container mx-auto px-4 sm:px-8 md:px-16">
        <AnimatedSection className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[impact] text-white mb-2">MAIN EVENT SHOWDOWN</h2>
          <p className="text-xl sm:text-2xl text-white font-[CreatoDisplay]">The moment everything builds toward</p>
        </AnimatedSection>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          {/* YouTube Video on the left */}
          <AnimatedSection 
            className="w-full md:w-3/5"
            animation="slideInLeft"
            delay={0.2}
          >
            <div className="relative w-full aspect-video max-w-[800px] overflow-hidden rounded-md mx-auto">
              {/* YouTube Video Embed */}
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/B5qSKp4cBik?si=o7mnEs69E5JnLZoC" 
                title="Bodybuilding competition" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
          </AnimatedSection>

          {/* Content on the right */}
          <div className="w-full md:w-2/5">
            <AnimatedSection className="mb-6 sm:mb-10 md:mb-14" animation="slideInRight" delay={0.3}>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-[impact] text-white">WHY IT MATTERS</h3>
            </AnimatedSection>

            <StaggerContainer className="space-y-8 sm:space-y-12 md:space-y-20 font-[CreatoDisplay]" delay={0.4} staggerDelay={0.15}>
              <StaggerItem index={0}>
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold text-white inline-block">Pro Cards - </h4>
                  <span className="text-white text-base sm:text-xl">5 IFBB pro qualifications up for grabs</span>
                </div>
              </StaggerItem>

              <StaggerItem index={1}>
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold text-white inline-block">Broadcast - </h4>
                  <span className="text-white text-base sm:text-xl">Live on ESPN3 with instant replays</span>
                </div>
              </StaggerItem>

              <StaggerItem index={2}>
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold text-white inline-block">Guest Poser - </h4>
                  <span className="text-white text-base sm:text-xl">Famous Bodybuilder makes special appearance</span>
                </div>
              </StaggerItem>

              <StaggerItem index={3}>
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold text-white inline-block">Prize pool - </h4>
                  <span className="text-white text-base sm:text-xl">Largest in Stallion History</span>
                </div>
              </StaggerItem>
            </StaggerContainer>

            <AnimatedSection className="mt-8 sm:mt-12 md:mt-16" animation="fadeInUp" delay={0.9}>
              <AnimatedButton>
                <Link
                  href="/register"
                  className="inline-block bg-[#dc4a26] text-white px-6 sm:px-8 py-2 sm:py-3 font-bold tracking-wider hover:bg-opacity-90 transition-colors text-sm sm:text-base"
                >
                  REGISTER NOW
                </Link>
              </AnimatedButton>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}