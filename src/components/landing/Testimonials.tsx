"use client";

import Image from "next/image";
import AnimatedSection, { StaggerContainer, StaggerItem } from "../ui/AnimatedComponents";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      quote:
        "I'd done local shows for years but always hesitated to go pro. Stallion Classic changed everything—the backstage organization was military-precise, the judges gave actual constructive feedback (not just politics), and the crowd energy... man, it was like electricity.",
      name: "Devon Carter",
      title: "2025 Men's Physique Finalist",
      image: "/images/landing/test/1.png",
    },
    {
      id: 2,
      quote:
        "I'd done local shows for years but always hesitated to go pro. Stallion Classic changed everything—the backstage organization was military-precise, the judges gave actual constructive feedback (not just politics), and the crowd energy... man, it was like electricity.",
      name: "Devon Carter",
      title: "2025 Men's Physique Finalist",
      image: "/images/landing/test/2.png",
    },
    {
      id: 3,
      quote:
        "I'd done local shows for years but always hesitated to go pro. Stallion Classic changed everything—the backstage organization was military-precise, the judges gave actual constructive feedback (not just politics), and the crowd energy... man, it was like electricity.",
      name: "Devon Carter",
      title: "2025 Men's Physique Finalist",
      image: "/images/landing/test/3.png",
    },
  ]

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: "#181818" }}>
      <div className="container mx-auto px-4 font-[CreatoDisplay]">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-3">THE STALLION STANDARD</h2>
          <p className="text-xl text-gray-300">Don&apos;t take our word for it—hear from those who&apos;ve lived it</p>
        </AnimatedSection>
        
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (            <StaggerItem key={testimonial.id} index={index} className="transform transition-all duration-300">
              <div
                className="rounded-lg overflow-hidden relative h-full hover-card"
                style={{
                  backgroundColor: "#2c2c2c",
                  border: "1px solid #dc4a26",
                }}
              >
                <div className="px-6 pt-6 h-full flex flex-col">
                  {/* Quote mark */}
                  <div className="text-[#dc4a26] text-9xl font-serif leading-none -mb-10">&ldquo;</div>

                  {/* Testimonial text */}
                  <p className="text-white mb-6 text-sm md:text-base flex-grow">{testimonial.quote}</p>

                  {/* Horizontal line */}
                  <div className="h-px bg-[#dc4a26] opacity-30 mb-6"></div>

                  {/* Author info */}
                  <div className="flex items-center pb-6">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image 
                        src={testimonial.image || "/placeholder.svg"} 
                        alt={testimonial.name} 
                        width={48} 
                        height={48} 
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <h4 className="text-white font-bold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
