"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import AnimatedSection, {
  StaggerContainer,
  StaggerItem,
} from "../ui/AnimatedComponents";
type Champion = {
  id: string;
  name: string;
  division: string;
  quote: string;
  image: string;
  secondaryImage: string;
};

export default function ChampionsSection() {
  const [activeChampion, setActiveChampion] = useState<string | null>(null);
  
  const champions: Champion[]= [
    {
      id: "ajay-vishal",
      name: "AJAY VISHAL",
      division: "Division - Bodybuilding",
      quote: '"Stallion Classic Tested Every Ounce Of My Discipline. The Ultimate Proving Ground"',
      image: "/images/winners/ayay.JPG",
      secondaryImage: "/images/winners/srbdodywinner.JPG"
    },
    {
      id: "taha-khan",
      name: "TAHA KHAN",
      division: "Division: Classic Physique",
      quote: '"That Moment They Called My Name? Pure Electricity"',
      image: "/images/winners/classphyimg.png",
      secondaryImage: "/images/winners/clasicphycis.JPG"
    },
    {
      id: "taha-khan-sr",
      name: "TAHA KHAN",
      division: "Division - Men's Physique",
      quote: '"Stallion Classic Tested Every Ounce Of My Discipline. The Ultimate Proving Ground"',
      image: "/images/winners/sr mens phyic.JPG",
      secondaryImage: "/images/winners/mensphycis.JPG"
    },
  ];

  const handleToggleImage = (id: string): void => {
    setActiveChampion(activeChampion === id ? null : id);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-4xl md:text-4xl text-black mb-4 font-[impact]">
            MEET THE 2024 CHAMPIONS
          </h2>
          <p className="text-xl md:text-2xl text-gray-800 font-[CreatoDisplay]">
            The Legends Of Stallion Classic - Their Legacy Started Here
          </p>
        </AnimatedSection>

        <StaggerContainer className="flex flex-wrap justify-center gap-8">
          {champions.map((champion, index) => (
            <StaggerItem
              key={champion.id}
              index={index}
              className="relative w-full sm:w-[350px] md:w-[400px]"
            >
              {/* Orange background div */}
              <div className="absolute top-3 left-3 w-full h-full bg-[#dc4a26] rounded-lg z-0"></div>
              
              {/* Main card */}
              <div className="relative z-10 rounded-lg overflow-hidden shadow-lg bg-white">
                <div 
                  className="relative aspect-[3/4] group cursor-pointer"
                  onClick={() => handleToggleImage(champion.id)}
                  onMouseEnter={() => setActiveChampion(champion.id)}
                  onMouseLeave={() => setActiveChampion(null)}
                >
                  {/* Primary Image */}
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      opacity: activeChampion === champion.id ? 0 : 1,
                      zIndex: activeChampion === champion.id ? 0 : 10
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={champion.image || "/placeholder.svg"}
                      alt={champion.name}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  
                  {/* Secondary Image */}
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      opacity: activeChampion === champion.id ? 1 : 0,
                      zIndex: activeChampion === champion.id ? 10 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={champion.secondaryImage || "/placeholder.svg"}
                      alt={`${champion.name} - Competition`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  
                  {/* Medal icon with bounce animation */}
                  <motion.div
                    className="absolute top-4 right-4 z-20"
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{
                      y: [0, -5, 0],
                      transition: {
                        duration: 1,
                        repeat: Infinity,
                        repeatType: "reverse",
                      },
                    }}
                  >
                    <Image
                      src="/images/landing/champ/logo.png"
                      alt="Gold Medal"
                      width={50}
                      height={50}
                      className="object-contain"
                    />
                  </motion.div>
                  
                  {/* Enhanced glassmorphism overlay */}
                  <motion.div
                    className="absolute inset-0 z-10 pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* Gradient overlay that fades from bottom to top */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    
                    {/* Frosted glass effect */}
                    <div 
                      className="absolute bottom-0 left-0 right-0 h-1/3"
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(12px) saturate(1.2)',
                        WebkitBackdropFilter: 'blur(12px) saturate(1.2)',
                        maskImage: 'linear-gradient(to top, black 0%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 100%)',
                      }}
                    />
                    
                    {/* Subtle light reflection */}
                    <div 
                      className="absolute bottom-0 left-0 right-0 h-2/3"
                      style={{
                        background: 'linear-gradient(to top, rgba(255,255,255,0.1) 0%, transparent 100%)',
                        maskImage: 'linear-gradient(to top, black 0%, transparent 70%)',
                        WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 70%)',
                      }}
                    />
                  </motion.div>
                  
                  {/* Content container */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 z-20 p-6"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="space-y-3">
                      <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                        {champion.name}
                      </h3>
                      <p className="text-sm text-gray-200 drop-shadow-md">
                        {champion.division}
                      </p>
                      <p className="text-sm italic text-white/90 drop-shadow-md">
                        {champion.quote}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}