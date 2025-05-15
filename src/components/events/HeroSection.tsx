"use client";

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion";
import { AnimatedButton } from "../ui/AnimatedComponents";

export default function HeroSection() {
  return (    <main className="relative min-h-screen text-white">
      {/* Parallax Background Image */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      >
        <motion.div
          className="w-full h-full"
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          <Image
            src="/images/landing/hero/hero.png"
            alt="Bodybuilding background"
            fill
            className="object-cover brightness-50"
            priority
            quality={90}
           />
        </motion.div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 sm:pt-36 md:pt-40 lg:pt-48 pb-16 sm:pb-20 md:pb-24 lg:pb-32 flex flex-col items-center justify-center text-center min-h-screen">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-normal leading-tight tracking-wider mb-4 sm:mb-6 font-[impact]"
        >
          DEFY LIMITS. DOMINATE THE STAGE.
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex items-center justify-center w-full mb-4 sm:mb-6"
        >
          <div className="h-1 bg-[#dc4a26] w-12 sm:w-20 md:w-32 lg:w-48"></div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl mx-2 sm:mx-4 md:mx-6 lg:mx-8 font-[impact]">STALLION CLASSIC</h2>
          <div className="h-1 bg-[#dc4a26] w-12 sm:w-20 md:w-32 lg:w-48"></div>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 md:mb-12 max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto font-[CreatoDisplay]"
        >
          The Ultimate Stage For Bodybuilding, Men&apos;s Physique & Classic Physique Champions
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <AnimatedButton>
            <Link
              href="/register"
              className="bg-[#dc4a26] text-white px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 font-bold text-base sm:text-lg tracking-wider hover:bg-opacity-90 transition-colors font-[CreatoDisplay]"
            >
              REGISTER NOW
            </Link>
          </AnimatedButton>
        </motion.div>
      </div>
    </main>
  )
}
