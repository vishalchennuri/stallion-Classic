"use client";

import { Clock, MapPin } from "lucide-react"
import Link from "next/link"
import AnimatedSection, { StaggerContainer, StaggerItem, AnimatedButton } from "../ui/AnimatedComponents"

export default function ScheduleSection() {
  const events = [
    {
      id: 1,
      day: "12",
      month: "May",
      time: "09:00 am - 05:00 pm",
      location: "Hyderabad",
      title: "Events - Preliminary Judging",
      highlights:
        "Highlights - Witness 20+ athletes vie for IFBB Pro status in the most rigorous judging session of the year.",
    },
    {
      id: 2,
      day: "13",
      month: "May",
      time: "09:00 am - 05:00 pm",
      location: "Hyderabad",
      title: "Events - Preliminary Judging",
      highlights:
        "Highlights - Witness 20+ athletes vie for IFBB Pro status in the most rigorous judging session of the year.",
    },
    {
      id: 3,
      day: "14",
      month: "May",
      time: "09:00 am - 05:00 pm",
      location: "Hyderabad",
      title: "Events - Preliminary Judging",
      highlights:
        "Highlights - Witness 20+ athletes vie for IFBB Pro status in the most rigorous judging session of the year.",
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-black mb-2 sm:mb-3 font-[impact]">MARK YOUR CALENDAR</h2>
          <p className="text-xl sm:text-2xl text-gray-800 font-[CreatoDisplay]">Three days of pure athletic greatness</p>
        </AnimatedSection>

        <StaggerContainer className="space-y-4 sm:space-y-6 max-w-6xl mx-auto font-[CreatoDisplay]">
          {events.map((event, index) => (
            <StaggerItem key={event.id} index={index} className="transform transition-all duration-300">
              <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col md:flex-row w-full">
                  {/* Date Column */}
                  <div className="p-3 sm:p-4 md:p-6 md:w-[20%] flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-gray-200">
                    <div className="text-[#dc4a26] text-center">
                      <div className="text-lg sm:text-xl md:text-2xl font-medium">{event.month}</div>
                      <div className="text-4xl sm:text-5xl md:text-7xl font-bold leading-none">{event.day}</div>
                    </div>
                  </div>                
                  
                  <div className="flex flex-col md:flex-row md:w-[80%]">
                    {/* Time & Location Column */}
                    <div className="p-3 sm:p-4 md:p-6 w-full md:w-1/3 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-200">
                      <div className="flex items-center mb-2 sm:mb-3 text-gray-600">
                        <Clock className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-gray-500" />
                        <span className="text-xs sm:text-sm md:text-base">{event.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-gray-500" />
                        <span className="text-xs sm:text-sm md:text-base">{event.location}</span>
                      </div>
                    </div>

                    {/* Event Title Column */}
                    <div className="p-3 sm:p-4 md:p-6 w-full md:w-1/3 flex items-center border-b md:border-b-0 md:border-r border-gray-200">
                      <div className="text-gray-800 text-xs sm:text-sm md:text-base">{event.title}</div>
                    </div>

                    {/* Highlights Column */}
                    <div className="p-3 sm:p-4 md:p-6 w-full md:w-1/3 flex items-center">
                      <div className="text-gray-600 text-xs md:text-sm">{event.highlights}</div>
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        
        <AnimatedSection className="w-full flex flex-col sm:flex-row justify-center items-center mt-8 sm:mt-10 gap-4 sm:gap-8 md:gap-16" animation="fadeInUp" delay={0.5}>
          <AnimatedButton>
            <Link href="/register" className="block text-white bg-[#dc4a26] py-1 px-8 sm:px-10 font-[CreatoDisplay] text-lg sm:text-xl cursor-pointer w-full sm:w-auto">
              Register Now
            </Link>
          </AnimatedButton>
          <AnimatedButton>
            <Link href="/book" className="block text-white bg-[#212121] py-1 px-10 sm:px-12 font-[CreatoDisplay] text-lg sm:text-xl cursor-pointer w-full sm:w-auto mt-3 sm:mt-0">
              Book Now
            </Link>
          </AnimatedButton>
        </AnimatedSection>
      </div>
    </section>
  )
}
