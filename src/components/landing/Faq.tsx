"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import AnimatedSection, { StaggerContainer, StaggerItem } from "../ui/AnimatedComponents"

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: "Can I compete in multiple divisions?",
      answer: "Yes, but with a 2-hour minimum between stage times. Max 2 divisions.",
    },
    {
      question: "Are cameras allowed?",
      answer:
        "Yes, personal cameras are allowed for spectators. Professional equipment requires media credentials which can be requested through our website.",
    },
    {
      question: "How do I know which division is right for me?",
      answer:
        "Review the category descriptions on our website or consult with your coach. You can also email our team at info@stallionclassic.com for personalized guidance based on your physique and goals.",
    },
    {
      question: "Can we sample products",
      answer:
        "Yes, our vendor expo area will have numerous supplement and apparel companies offering samples and special event discounts throughout all three days.",
    },
    {
      question: "Is there athlete weigh-in access?",
      answer:
        "Yes, athletes will have scheduled weigh-in times the day before their competition. Details will be provided in the competitor information packet after registration.",
    },
  ]

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-4xl md:text-4xl text-black mb-3 font-[impact]">GOT QUESTIONS? WE&apos;VE GOT ANSWERS</h2>
          <p className="text-xl text-gray-800 font-[CreatoDisplay]">Quick help for competitors, fans, and sponsors</p>
        </AnimatedSection>
        
        <StaggerContainer className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <StaggerItem key={index} index={index} className="mb-4 font-[CreatoDisplay]">
              <motion.button
                className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors rounded-lg text-left"
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-gray-900 text-xl">{faq.question}</span>
                <span className="flex-shrink-0 ml-2">
                  {openIndex === index ? (
                    <Minus className="h-5 w-5 text-[#dc4a26]" />
                  ) : (
                    <Plus className="h-5 w-5 text-[#dc4a26]" />
                  )}
                </span>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 bg-gray-100 rounded-b-lg mt-px">
                      <p className="text-gray-700 text-xl">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
