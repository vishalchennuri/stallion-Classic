"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection, {
  StaggerContainer,
  StaggerItem,
} from "../ui/AnimatedComponents";

export default function CategoriesSection() {
  const categories = [
    {
      id: "bodybuilding",
      title: "BODYBUILDING",
      description: "Mass, symmetry, and sheer power.",
      image: "/images/cat/body building/bodybuildingcat1.JPG",
    },
    {
      id: "mens-physique",
      title: "MENS PHYSIQUE",
      description: "Aesthetics, proportion, and stage presence",
      image: "/images/cat/mens physics/7M309891.JPG",
    },
    {
      id: "classic-physique",
      title: "CLASSIC PHYSIQUE",
      description: "Golden-era muscle with modern precision",
      image: "/images/cat/classicphysic/classiccatgory.JPG",
    },
    {
      id: "denim-jeans",
      title: "DENIM JEANS",
      description: "Where rugged denim complements championship conditioning",
      image: "/images/cat/denim jeans/catogeryimg.JPG",
    },
    {
      id: "master-bodybuilding",
      title: "MASTER BODYBUILDING",
      description: "For athletes 40+ who redefine aging",
      image: "/images/cat/master boydabuiding/cat.JPG",
    },
  ];

  return (
    <section className="px-2 sm:px-10 py-16 md:py-24 bg-[#181818]">
      <div className="mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h3 className="text-2xl text-white mb-2 font-[CreatoDisplay]">
            Division & Categories
          </h3>
          <h2 className="text-3xl md:text-5xl text-white font-[impact]">
            YOUR CATEGORY AWAITS
          </h2>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.slice(0, 3).map((category, index) => (
            <StaggerItem key={category.id} index={index}>
              <div className="relative overflow-hidden group">
                <div className="aspect-[3/4] relative overflow-hidden">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Enhanced glassmorphism overlay */}
                  <div className="absolute inset-0 z-10 pointer-events-none">
                    {/* Gradient overlay that fades from bottom to top */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    
                    {/* Frosted glass effect */}
                    <div 
                      className="absolute bottom-0 left-0 right-0 h-2/3"
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
                      className="absolute bottom-0 left-0 right-0 h-1/3"
                      style={{
                        background: 'linear-gradient(to top, rgba(255,255,255,0.1) 0%, transparent 100%)',
                        maskImage: 'linear-gradient(to top, black 0%, transparent 70%)',
                        WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 70%)',
                      }}
                    />
                  </div>

                  {/* Content container */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 z-20 p-6"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="space-y-3 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <h3 className="text-2xl md:text-3xl font-bold text-white text-center drop-shadow-lg">
                        {category.title}
                      </h3>
                      <p className="text-sm text-gray-200 text-center font-[CreatoDisplay] drop-shadow-md">
                        {category.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom row - 2 cards centered */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto"
          delay={0.5}
        >
          {categories.slice(3, 5).map((category, index) => (
            <StaggerItem key={category.id} index={index}>
              <div className="relative overflow-hidden group">
                <div className="aspect-[3/4] relative overflow-hidden">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Enhanced glassmorphism overlay */}
                  <div className="absolute inset-0 z-10 pointer-events-none">
                    {/* Gradient overlay that fades from bottom to top */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    
                    {/* Frosted glass effect */}
                    <div 
                      className="absolute bottom-0 left-0 right-0 h-2/3"
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
                      className="absolute bottom-0 left-0 right-0 h-1/3"
                      style={{
                        background: 'linear-gradient(to top, rgba(255,255,255,0.1) 0%, transparent 100%)',
                        maskImage: 'linear-gradient(to top, black 0%, transparent 70%)',
                        WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 70%)',
                      }}
                    />
                  </div>

                  {/* Content container */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 z-20 p-6"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="space-y-3 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <h3 className="text-2xl md:text-3xl font-bold text-white text-center drop-shadow-lg">
                        {category.title}
                      </h3>
                      <p className="text-sm text-gray-200 text-center font-[CreatoDisplay] drop-shadow-md">
                        {category.description}
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