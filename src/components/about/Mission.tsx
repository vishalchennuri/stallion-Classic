"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem } from "../ui/AnimatedComponents";

export default function MissionSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-[impact] text-[#282828]">
            OUR MISSION: ELEVATE THE SPORT
          </h2>
        </motion.div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" delay={0.2} staggerDelay={0.15}>
          {/* Card 1 - Integrity */}
          <StaggerItem index={0} className="transform transition-all duration-300">
            <motion.div 
              className="border border-[#dc4a26] rounded-md p-4 sm:p-6 md:p-8 flex pb-0 pr-0 flex-col h-full"
              whileHover={{ 
                y: -10, 
                boxShadow: "0 10px 20px rgba(220, 74, 38, 0.2)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-[impact] text-black mb-1">
                  UNCOMPROMISING
                </h3>
                <h4 className="text-xl sm:text-2xl font-[impact] text-[#dc4a26] mb-2 sm:mb-4">
                  INTEGRITY
                </h4>
                <p className="text-gray-700 pr-2 text-sm sm:text-base font-[CreatoDisplay]">
                  Our judging panel uses dual-screen verification and public
                  scorecards. No politics—just physiques.
                </p>
              </div>
              <motion.div 
                className="mt-auto flex justify-end"
                whileHover={{ rotate: [0, -5, 5, -5, 0], transition: { duration: 0.5 } }}
              >
                <Image
                  src="/svg/mission/1.svg"
                  alt="Uncompromising Integrity Icon"
                  width={128}
                  height={128}
                  className="h-24 w-24 sm:h-28 sm:w-28 md:h-36 md:w-36"
                />
              </motion.div>
            </motion.div>
          </StaggerItem>

          {/* Card 2 - Pathways */}
          <StaggerItem index={1} className="transform transition-all duration-300">
            <motion.div 
              className="border border-[#dc4a26] rounded-md p-4 sm:p-6 md:p-8 flex pb-0 pr-0 flex-col h-full"
              whileHover={{ 
                y: -10, 
                boxShadow: "0 10px 20px rgba(220, 74, 38, 0.2)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-[impact] text-black mb-1">
                  ATHLETE-CENTRIC
                </h3>
                <h4 className="text-xl sm:text-2xl font-[impact] text-[#dc4a26] mb-2 sm:mb-4">
                  PATHWAYS
                </h4>
                <p className="text-gray-700 pr-2 text-sm sm:text-base font-[CreatoDisplay]">
                  Through sponsorships, media training, and global exposure, we
                  turn competitors into icons.
                </p>
              </div>
              <motion.div 
                className="mt-auto flex justify-end"
                whileHover={{ rotate: [0, -5, 5, -5, 0], transition: { duration: 0.5 } }}
              >
                <Image
                  src="/svg/mission/2.svg"
                  alt="Athlete-Centric Pathways Icon"
                  width={128}
                  height={128}
                  className="h-24 w-24 sm:h-28 sm:w-28 md:h-36 md:w-36"
                />
              </motion.div>
            </motion.div>
          </StaggerItem>

          {/* Card 3 - History/Future */}
          <StaggerItem index={2} className="transform transition-all duration-300">
            <motion.div 
              className="border border-[#dc4a26] rounded-md p-4 sm:p-6 md:p-8 pb-0 pr-0 flex flex-col h-full"
              whileHover={{ 
                y: -10, 
                boxShadow: "0 10px 20px rgba(220, 74, 38, 0.2)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-[impact] text-black mb-1">
                  HONORING HISTORY,
                </h3>
                <h4 className="text-xl sm:text-2xl font-[impact] text-[#dc4a26] mb-2 sm:mb-4">
                  BUILDING TOMORROW
                </h4>
                <p className="text-gray-700 pr-2 text-sm sm:text-base font-[CreatoDisplay]">
                  Bridging eras through innovation: next-gen athlete analytics
                  meet the timeless pursuit of perfect symmetry.
                </p>
              </div>
              <motion.div 
                className="mt-auto flex justify-end"
                whileHover={{ rotate: [0, -5, 5, -5, 0], transition: { duration: 0.5 } }}
              >
                <Image
                  src="/svg/mission/3.svg"
                  alt="Building Tomorrow Icon"
                  width={128}
                  height={128}
                  className="h-24 w-24 sm:h-28 sm:w-28 md:h-36 md:w-36"
                />
              </motion.div>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
