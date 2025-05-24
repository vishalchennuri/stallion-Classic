"use client";

import RulesRegulationsSection from '@/components/rules/rules'
import TermsConditionsSection from '@/components/rules/terms'
import Footer from '@/components/landing/Footer'
import Navbar from '@/components/landing/Navbar'
import PageTransition from '@/components/ui/PageTransition'
import ScrollToTopButton from '@/components/ui/ScrollToTopButton'
import { LazyMotion, domAnimation } from "framer-motion"
import HeroSection from '@/components/landing/HeroSection';

export default function RulesRegulations() {
  return (
    <LazyMotion features={domAnimation}>
      <PageTransition>
        <div className="min-h-full w-full overflow-x-hidden">
          <Navbar/>
          <HeroSection/>
          <RulesRegulationsSection/>
          <TermsConditionsSection/>
          <Footer/>
          <ScrollToTopButton />
        </div>
      </PageTransition>
    </LazyMotion>
  )
}