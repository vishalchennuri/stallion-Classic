"use client";
import DivisionsSection from '@/components/categories/Division'
import HeroSection from '@/components/categories/HeroSection'
import Footer from '@/components/landing/Footer'
import Navbar from '@/components/landing/Navbar'
import TestimonialsSection from '@/components/landing/Testimonials'
import React from 'react'
import PageTransition from '@/components/ui/PageTransition'
import { LazyMotion, domAnimation } from "framer-motion"
import ScrollToTopButton from '@/components/ui/ScrollToTopButton'

export default function Categories() {
  return (
    <LazyMotion features={domAnimation}>
      <PageTransition>
        <div className="min-h-screen w-full overflow-x-hidden">
            <Navbar/>
            <HeroSection/>
            <DivisionsSection/>
            <TestimonialsSection/>
            <Footer/>
            <ScrollToTopButton />
        </div>
      </PageTransition>
    </LazyMotion>
  )
}