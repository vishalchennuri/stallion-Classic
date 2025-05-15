"use client";

import { motion } from "framer-motion";

export default function StorySection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-2xl text-black mb-2 font-[CreatoDisplay]">Our Story</h3>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-black font-[impact]">BUILT ON PASSION, DEFINED BY EXCELLENCE</h2>
        </motion.div>

        <div className="relative max-w-6xl mx-auto mt-8 sm:mt-12 px-4 sm:px-6 md:px-10 py-6 sm:py-8">
          {/* Top-left corner */}
          <motion.div 
            className="absolute left-0 top-0 w-12 sm:w-20 md:w-50 h-1 bg-[#dc4a26]"
            initial={{ width: 0 }}
            whileInView={{ width: "50px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          ></motion.div>
          <motion.div 
            className="absolute left-0 top-0 w-1 h-12 sm:h-20 md:h-50 bg-[#dc4a26]"
            initial={{ height: 0 }}
            whileInView={{ height: "50px" }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          ></motion.div>
          
          {/* Bottom-right corner */}
          <motion.div 
            className="absolute right-0 bottom-0 w-12 sm:w-20 md:w-50 h-1 bg-[#dc4a26]"
            initial={{ width: 0 }}
            whileInView={{ width: "50px" }}
            transition={{ duration: 0.8, delay: 0.9 }}
            viewport={{ once: true }}
          ></motion.div>
          <motion.div 
            className="absolute right-0 bottom-0 w-1 h-12 sm:h-20 md:h-50 bg-[#dc4a26]"
            initial={{ height: 0 }}
            whileInView={{ height: "50px" }}
            transition={{ duration: 0.8, delay: 1.1 }}
            viewport={{ once: true }}
          ></motion.div>

          <div className="text-gray-800 space-y-4 sm:space-y-6 md:space-y-8 text-center font-[CreatoDisplay]">
            <motion.p 
              className="text-base sm:text-lg md:text-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              viewport={{ once: true }}
            >
              The Stallion Classic isn&apos;t just a competition—it&apos;s a celebration of discipline, sacrifice, and the
              relentless pursuit of greatness. Since its inception, this premier event has set the gold standard for
              Bodybuilding, Men&apos;s Physique, and Classic Physique divisions, attracting top-tier athletes who demand a
              stage worthy of their dedication.
            </motion.p>
            
            <motion.p 
              className="text-base sm:text-lg md:text-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              viewport={{ once: true }}
            >
              What sets Stallion Classic apart? Raw authenticity. No gimmicks. Just pure judging rigor, world-class
              production, and an unwavering commitment to honoring the sport&apos;s legacy while pushing its future forward.
              Whether you&apos;re stepping on stage for the first time or defending a title, this is where your physique
              speaks loudest.
            </motion.p>

            <motion.p 
              className="text-base sm:text-lg md:text-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.0 }}
              viewport={{ once: true }}
            >
              The Stallion Classic Wasn&apos;t Born In A Corporate Boardroom—It Was Forged In The Gym. Founded By Athletes
              Who Believed Competitions Should Reward Hard Work, Not Politics, We&apos;ve Stayed True To One Principle: The
              Best Physiques Win, Period.
            </motion.p>

            <motion.p 
              className="text-base sm:text-lg md:text-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.2 }}
              viewport={{ once: true }}
            >
              What Started As A Local Showdown Is Now A Global Phenomenon, But The Heart Of The Event Remains The Same.
              Every Detail—From Our Transparent Judging System To The Championship-Grade Stage Lighting—Is Designed To
              Give Athletes The Platform They Deserve.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
