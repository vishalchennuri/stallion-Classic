"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

interface FloatingBadgeProps {
  text: string | ReactNode;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  color?: "primary" | "secondary" | "dark" | "light";
  href?: string;
  size?: "sm" | "md" | "lg";
  isAnimated?: boolean;
  onClick?: () => void;
  className?: string;
}

export default function FloatingBadge({
  text,
  position = "top-right",
  color = "primary",
  href,
  size = "md",
  isAnimated = true,
  onClick,
  className = "",
}: FloatingBadgeProps) {
  // Position classes
  const positionClasses = {
    "top-left": "top-4 left-4",
    "top-right": "top-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "bottom-right": "bottom-4 right-4",
  };

  // Color classes
  const colorClasses = {
    primary: "bg-[#dc4a26] text-white",
    secondary: "bg-black text-white",
    dark: "bg-gray-800 text-white",
    light: "bg-white text-black border border-gray-200",
  };

  // Size classes
  const sizeClasses = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-3 py-1.5",
    lg: "text-base px-4 py-2",
  };

  // Animation variants
  const badgeAnimation = isAnimated
    ? {
        initial: { scale: 0.8, opacity: 0 },
        animate: { 
          scale: 1, 
          opacity: 1,
          transition: {
            duration: 0.5,
            ease: "easeOut",
          }
        },
        whileHover: { scale: 1.1 },
        whileTap: { scale: 0.95 },
      }
    : {};

  // Floating animation
  const floatingAnimation = isAnimated
    ? {
        animate: {
          y: [0, -5, 0],
          transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse" as const,
          },
        },
      }
    : {};

  // Badge content
  const BadgeContent = (
    <motion.div
      {...badgeAnimation}
      {...floatingAnimation}
      className={`absolute ${positionClasses[position]} ${colorClasses[color]} ${sizeClasses[size]} rounded-full font-bold z-10 shadow-md ${className}`}
      onClick={onClick}
    >
      {text}
    </motion.div>
  );

  // Return with link if href is provided
  if (href) {
    return <Link href={href}>{BadgeContent}</Link>;
  }

  return BadgeContent;
}

// Notification badge with count
export function NotificationBadge({
  count,
  position = "top-right",
  maxCount = 99,
}: {
  count: number;
  position?: "top-right" | "top-left";
  maxCount?: number;
}) {
  const displayCount = count > maxCount ? `${maxCount}+` : count;
  
  const positionClasses = {
    "top-right": "-top-2 -right-2",
    "top-left": "-top-2 -left-2",
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className={`absolute ${positionClasses[position]} bg-[#dc4a26] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold`}
    >
      {displayCount}
    </motion.div>
  );
}

// Pulse effect badge
export function PulseBadge({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 0, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="absolute inset-0 rounded-full bg-[#dc4a26] -z-10"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
