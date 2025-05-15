"use client";
import HeroSection from "@/components/about/HeroSection";
import Navbar from "@/components/landing/Navbar";

import CtaSection from "@/components/landing/Cta";
import Footer from "@/components/landing/Footer";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import { LazyMotion, domAnimation } from "framer-motion";
import PageTransition from "@/components/ui/PageTransition";
import StorySection from "@/components/about/Story";
import VisionariesSection from "@/components/about/Visionaries";
import MissionSection from "@/components/about/Mission";
import VideoSection from "@/components/about/Vid";

export default function About() {
  return (
    <LazyMotion features={domAnimation}>
      <PageTransition>
        <div className="min-h-screen w-full overflow-x-hidden">
          <Navbar/>
          <HeroSection/>
          <StorySection/>
          <VisionariesSection/>
          <MissionSection/>
          <VideoSection/>
          <CtaSection/>
          <Footer/>
          <ScrollToTopButton />
        </div>
      </PageTransition>
    </LazyMotion>
  );
}
