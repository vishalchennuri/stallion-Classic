"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

// Animation variants for page transitions
const pageVariants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
      when: 'beforeChildren',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
      when: 'afterChildren',
    },
  },
};

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

export default function PageTransition({ children, className = '' }: PageTransitionProps) {
  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Fade-in-up transition for individual page elements
export function FadeInUp({ 
  children, 
  delay = 0, 
  className = '',
  duration = 0.5
}: { 
  children: ReactNode; 
  delay?: number;
  className?: string;
  duration?: number;
}) {
  const fadeUpVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration,
        delay: delay,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      variants={fadeUpVariants}
      initial="initial"
      animate="enter"
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Staggered children container for page elements
export function StaggeredContainer({ 
  children, 
  className = '',
  delay = 0.1,
  staggerDelay = 0.1
}: { 
  children: ReactNode; 
  className?: string;
  delay?: number;
  staggerDelay?: number;
}) {
  const staggerVariants = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: staggerDelay,
      },
    },
  };

  return (
    <motion.div
      variants={staggerVariants}
      initial="initial"
      animate="enter"
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Staggered child item for page elements
export function StaggeredItem({ 
  children, 
  className = '' 
}: { 
  children: ReactNode; 
  className?: string;
}) {
  const itemVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
