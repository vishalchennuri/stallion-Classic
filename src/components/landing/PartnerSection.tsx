"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"
import AnimatedSection from "../ui/AnimatedComponents"

export default function PartnersSection() {
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const marqueeElement = marqueeRef.current
    if (!marqueeElement) return

    // Need to wait until images are loaded for accurate measurements
    const handleLoad = () => {
      // const firstItemWidth = marqueeElement.querySelector('div')?.offsetWidth || 0
      const scrollWidth = marqueeElement.scrollWidth / 2 // Half because we duplicate the items
      
      // Much slower speed for a very gentle continuous scroll
      const baseSpeed = 0.25  // Reduced from 0.15 to make it much slower
      const speed = baseSpeed

      let position = 0
      let animationId: number

      const scroll = () => {
        position += speed
        
        // Reset position in a way that creates a seamless loop
        // This prevents the visual gap at the end
        if (position >= scrollWidth) {
          position -= scrollWidth
        }
        
        marqueeElement.style.transform = `translateX(${-position}px)`
        animationId = requestAnimationFrame(scroll)
      }

      // Start animation
      scroll()

      return () => {
        cancelAnimationFrame(animationId)
      }
    }

    // Start after a short delay to ensure all images are loaded and measured
    const timer = setTimeout(handleLoad, 100)
    
    return () => {
      clearTimeout(timer)
    }
  }, [])

  const partners = [
    { name: "Oracle", logo: "/svg/oracle.svg" },
    { name: "Nutanix", logo: "/svg/nutanix.svg" },
    { name: "Intel", logo: "/svg/intel.svg" },
    { name: "New Balance", logo: "/svg/newbalance.svg" },
    { name: "CrossLead", logo: "/svg/crosslead.png" },
  ]
  // Create multiple duplications for truly seamless infinite scrolling
  // Triple the items to ensure we always have enough content on screen
  const displayPartners = [...partners, ...partners, ...partners]
  
  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection className="mb-8">
          <h2 className="text-2xl md:text-3xl uppercase tracking-wider text-center text-black mb-2 font-['impact'] ">Powered by the best in fitness</h2>
          <p className="text-center text-gray-600 mb-8 md:mb-12 text-lg md:text-2xl tracking-wider font-[CreatoDisplay]">Global brands fueling the future of physique sports</p>
        </AnimatedSection>

        <div className="relative overflow-hidden">
          <div 
            ref={marqueeRef} 
            className="flex items-center whitespace-nowrap" 
            style={{ willChange: "transform" }}
          >
            {displayPartners.map((partner, i) => (
              <div
                key={i}
                className="border-2 py-12 md:py-20 flex items-center justify-center min-w-[150px] md:min-w-[200px] w-[250px] md:w-[300px] px-8 md:px-12 border-r border-gray-300"
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="h-8 md:h-10 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
