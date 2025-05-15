"use client";
import HeroSection from '@/components/events/HeroSection'
import MainEventSection from '@/components/events/MainEvents'
import PricingSection from '@/components/events/Pricing'
import ScheduleSection from '@/components/events/Schedule'
import Footer from '@/components/landing/Footer'
import Navbar from '@/components/landing/Navbar'
import TestimonialsSection from '@/components/landing/Testimonials'
import PageTransition from '@/components/ui/PageTransition'
import { LazyMotion, domAnimation } from "framer-motion"
import ScrollToTopButton from '@/components/ui/ScrollToTopButton'

export default function Events() {
  return (
    <LazyMotion features={domAnimation}>
      <PageTransition>
        <div className="min-h-screen w-full overflow-x-hidden">
            <Navbar/>
            <HeroSection/>
            <ScheduleSection/>
            <MainEventSection/>
            <PricingSection/>
            <TestimonialsSection/>
            <Footer/>
            <ScrollToTopButton />
        </div>
      </PageTransition>
    </LazyMotion>
  )
}