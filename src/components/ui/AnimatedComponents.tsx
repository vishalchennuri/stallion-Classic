"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  duration?: number;
  threshold?: number;
  animation?: "fadeInUp" | "slideInLeft" | "slideInRight" | "zoomIn" | "none";
}

export default function AnimatedSection({
  children,
  className = "",
  variants,
  delay = 0,
  duration = 0.6,
  threshold = 0.2,
  animation = "fadeInUp",
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });

  // Default animation variants
  let defaultVariants: Variants;

  switch (animation) {
    case "fadeInUp":
      defaultVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0, 
          transition: { 
            duration, 
            delay,
            ease: "easeOut" 
          } 
        }
      };
      break;
    case "slideInLeft":
      defaultVariants = {
        hidden: { opacity: 0, x: -60 },
        visible: { 
          opacity: 1, 
          x: 0, 
          transition: { 
            duration, 
            delay,
            ease: "easeOut" 
          } 
        }
      };
      break;
    case "slideInRight":
      defaultVariants = {
        hidden: { opacity: 0, x: 60 },
        visible: { 
          opacity: 1, 
          x: 0, 
          transition: { 
            duration, 
            delay,
            ease: "easeOut" 
          } 
        }
      };
      break;
    case "zoomIn":
      defaultVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { 
          opacity: 1, 
          scale: 1, 
          transition: { 
            duration, 
            delay,
            ease: "easeOut" 
          } 
        }
      };
      break;
    default:
      defaultVariants = {
        hidden: { opacity: 1 },
        visible: { opacity: 1 }
      };
  }

  const finalVariants = variants || defaultVariants;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={finalVariants}
    >
      {children}
    </motion.div>
  );
}

// Animated item with hover effect
export function AnimatedCard({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        transition: { 
          duration, 
          delay,
          ease: "easeOut" 
        } 
      }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ 
        scale: 1.05, 
        y: -5, 
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
        transition: { duration: 0.2 } 
      }}
    >
      {children}
    </motion.div>
  );
}

// Staggered container for animated children
export function StaggerContainer({
  children,
  className = "",
  delay = 0.2,
  staggerDelay = 0.1,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: staggerDelay,
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {children}
    </motion.div>
  );
}

// Staggered child item
export function StaggerItem({
  children,
  className = "",
  index = 0,
}: {
  children: React.ReactNode;
  className?: string;
  index?: number;
}) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: custom * 0.1,
      },
    }),
  };

  return (
    <motion.div
      className={className}
      variants={itemVariants}
      custom={index}
      whileHover={{ 
        scale: 1.05, 
        y: -5, 
        transition: { duration: 0.2 } 
      }}
    >
      {children}
    </motion.div>
  );
}

// Animated button
export function AnimatedButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      whileHover={{ 
        scale: 1.05, 
        transition: { duration: 0.2 } 
      }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  );
}
