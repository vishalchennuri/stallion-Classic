"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import AnimatedSection, {
  AnimatedButton,
  StaggerContainer,
  StaggerItem,
} from "../ui/AnimatedComponents";

// Create a counter component for numbers that animate
function Counter({ from = 0, to, duration = 2, className = "" }: { from?: number, to: number, duration?: number, className?: string }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, to, { duration });
    return controls.stop;
  }, [count, to, duration]);

  return <motion.span className={className}>{rounded}</motion.span>;
}

export default function StatsSection() {
  const stats = [
    {
      id: "participants",
      title: "PARTICIPANTS",
      value: "150+ Elite Athletes",
      countTo: 150,
    },
    {
      id: "events",
      title: "EVENTS",
      value: "8+ Years",
      countTo: 8,
    },
    {
      id: "team",
      title: "TEAM MEMBERS",
      value: "25+ Experts",
      countTo: 25,
    },
    {
      id: "collaboration",
      title: "COLLABORATION",
      value: "12+ Global Partners",
      countTo: 12,
    },
  ];

  // Use refs to track when we should start animations
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} className="relative py-20 md:py-10">
      {/* Parallax Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          y: useTransform(useMotionValue(0), [0, 1], [0, 100]),
        }}
      >
        <Image
          src="/images/landing/stats/1.png"
          alt="Crowd background"
          fill
          className="object-cover brightness-50"
        />
      </motion.div>

      <div className="relative z-10 container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white mb-3 font-[impact]">
            STALLION CLASSIC IN NUMBERS
          </h2>
          <p className="text-xl md:text-2xl text-white font-[CreatoDisplay]">
            The Scale Of Excellence
          </p>
        </AnimatedSection>

        <StaggerContainer className="flex flex-wrap justify-center items-center">
          {stats.map((stat, index) => (
            <StaggerItem
              key={stat.id}
              index={index}
              className="flex items-center"
            >
              <div className="text-center px-4 md:px-8 py-4">
                <h3 className="text-2xl md:text-3xl text-white mb-3 font-[impact]">
                  {stat.title}
                </h3>
                <p className="text-xl md:text-3xl text-white font-[CreatoDisplay]">
                  {stat.id === "participants" ? (
                    <>
                      <Counter from={0} to={stat.countTo} /> + Elite Athletes
                    </>
                  ) : stat.id === "events" ? (
                    <>
                      <Counter from={0} to={stat.countTo} /> + Years
                    </>
                  ) : stat.id === "team" ? (
                    <>
                      <Counter from={0} to={stat.countTo} /> + Experts
                    </>
                  ) : (
                    <>
                      <Counter from={0} to={stat.countTo} /> + Global Partners
                    </>
                  )}
                </p>
              </div>
              {index < stats.length - 1 && (
                <motion.div
                  className="hidden md:block h-20 w-0.5 bg-[#dc4a26]"
                  initial={{ height: 0 }}
                  whileInView={{ height: 80 }}
                  transition={{ duration: 0.8, delay: 0.2 * index }}
                  viewport={{ once: true }}
                />
              )}
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection
          className="text-center mt-16"
          animation="fadeInUp"
          delay={0.5}
        >
          <AnimatedButton>
            <Link
              href="/register"
              className="inline-block bg-[#dc4a26] text-white px-8 py-4 font-bold text-lg tracking-wider hover:bg-opacity-90 transition-colors font-[CreatoDisplay]"
            >
              JOIN THE LEGACY, REGISTER NOW
            </Link>
          </AnimatedButton>
        </AnimatedSection>
      </div>
    </section>
  );
}
