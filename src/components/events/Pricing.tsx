"use client";

import { Check } from "lucide-react"
import Link from "next/link"
import AnimatedSection, { StaggerContainer, StaggerItem, AnimatedButton } from "../ui/AnimatedComponents"

export default function PricingSection() {
  const pricingOptions = [
    {
      title: "General Access",
      description: "The essentials to experience the action all events, expo hall, and electric crowd energy",
      price: "Free",
      features: ["Entry to all competition events", "Expo hall access", "Basic event program"],
    },
    {
      title: "VIP Experience",
      description: "Front-row seats, judge insights, and exclusive perks – immerse yourself like never before.",
      price: "₹ 1999",
      features: [
        "Front-row reserved seating",
        "Real-time judge commentary",
        "Exclusive VIP lounge with cash bar",
        "Early venue entry (1 hour)",
      ],
    },
    {
      title: "Platinum Backstage",
      description: "Rub shoulders with champions – pump room access, trophy photos, and elite afterparty",
      price: "₹ 2499",
      features: [
        "Athlete pump room access",
        "Professional photo op with trophies",
        "Afterparty VIP table",
        "Meet-and-greet fast pass",
      ],
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-8 md:px-16">
        <AnimatedSection className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#282828] mb-2 font-[impact]">CHOOSE YOUR EXPERIENCE</h2>
          <p className="text-xl sm:text-2xl text-gray-700 font-[CreatoDisplay]">From casual fan to backstage insider</p>
        </AnimatedSection>
        
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center" delay={0.2} staggerDelay={0.15}>
          {pricingOptions.map((option, index) => (
            <StaggerItem key={index} index={index} className="transform transition-all duration-300">
              <div className="bg-[#181818] rounded-md overflow-hidden text-white text-center font-[CreatoDisplay] max-w-full sm:max-w-[350px] md:max-w-full h-auto sm:h-[500px] md:h-[550px] lg:h-[594px] flex flex-col mx-auto hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="p-4 sm:p-6 md:p-8 flex-grow">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-[impact] mb-2">{option.title}</h3>
                  <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6">{option.description}</p>

                  <div className="border-t border-gray-700 my-4 sm:my-6"></div>

                  <div className="text-3xl sm:text-4xl md:text-5xl font-[impact] text-[#dc4a26] mb-4 sm:mb-6 md:mb-8">{option.price}</div>

                  <ul className="space-y-2 sm:space-y-4 mb-4 sm:mb-6 md:mb-8 text-left">
                    {option.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start pl-4 sm:pl-6">
                        <Check className="h-4 w-4 sm:h-5 sm:w-5 text-white mr-2 mt-0.5" />
                        <span className="text-sm sm:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8">
                  <AnimatedButton>
                    <Link
                      href="/book"
                      className="block text-center bg-[#dc4a26] text-white py-2 sm:py-3 font-bold tracking-wider hover:bg-opacity-90 transition-colors rounded-sm text-sm sm:text-base"
                    >
                      BOOK NOW
                    </Link>
                  </AnimatedButton>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
