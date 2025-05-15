"use client";

import { useRef,  ReactNode } from "react";
import { motion, useInView, Variant, UseInViewOptions } from "framer-motion";

interface AnimateOnScrollProps {
  children: ReactNode;
  animation?: "fadeIn" | "fadeInUp" | "fadeInLeft" | "fadeInRight" | "zoomIn" | "custom";
  customVariants?: {
    hidden: Variant;
    visible: Variant;
  };
  className?: string;
  delay?: number;
  duration?: number;
  amount?: number;
  margin?: UseInViewOptions["margin"];
  once?: boolean;
}

export default function AnimateOnScroll({
  children,
  animation = "fadeInUp",
  customVariants,
  className = "",
  delay = 0,
  duration = 0.6,
  amount = 0.1,
  margin = "-50px 0px",
  once = true,
}: AnimateOnScrollProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
    amount,
    margin,
  });

  // Animation variants
  const variants = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: {
          duration,
          delay,
          ease: "easeOut",
        },
      },
    },
    fadeInUp: {
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration,
          delay,
          ease: "easeOut",
        },
      },
    },
    fadeInLeft: {
      hidden: { opacity: 0, x: -50 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration,
          delay,
          ease: "easeOut",
        },
      },
    },
    fadeInRight: {
      hidden: { opacity: 0, x: 50 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration,
          delay,
          ease: "easeOut",
        },
      },
    },
    zoomIn: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          duration,
          delay,
          ease: "easeOut",
        },
      },
    },
  };

  // Select the appropriate variant
  const selectedVariant = animation === "custom" 
    ? customVariants 
    : variants[animation];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={selectedVariant}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Collection of items that animate in sequence
export function AnimateInSequence({
  children,
  staggerDelay = 0.1,
  initialDelay = 0.1,
  className = "",
  amount = 0.1,
  once = true,
}: {
  children: ReactNode;
  staggerDelay?: number;
  initialDelay?: number;
  className?: string;
  amount?: number;
  once?: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: initialDelay,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <motion.div key={index} variants={itemVariants}>
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
}

// Component that reveals its content from one side
export function RevealFromSide({
  children,
  direction = "left",
  className = "",
  duration = 0.7,
  delay = 0,
  once = true,
}: {
  children: ReactNode;
  direction?: "left" | "right" | "top" | "bottom";
  className?: string;
  duration?: number;
  delay?: number;
  once?: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.2 });

  // Direction-specific variants
  const variants = {
    left: {
      hidden: { x: "-100%", opacity: 0 },
      visible: { x: 0, opacity: 1 },
    },
    right: {
      hidden: { x: "100%", opacity: 0 },
      visible: { x: 0, opacity: 1 },
    },
    top: {
      hidden: { y: "-100%", opacity: 0 },
      visible: { y: 0, opacity: 1 },
    },
    bottom: {
      hidden: { y: "100%", opacity: 0 },
      visible: { y: 0, opacity: 1 },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants[direction]}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
}
