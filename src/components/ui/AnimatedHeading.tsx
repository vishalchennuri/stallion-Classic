"use client";

import { motion } from "framer-motion";


interface AnimatedHeadingProps {
  title: string;
  subtitle?: string;
  titleColor?: string;
  subtitleColor?: string;
  align?: "left" | "center" | "right";
  titleSize?: "sm" | "md" | "lg" | "xl" | "2xl";
  subtitleSize?: "sm" | "md" | "lg";
  accent?: boolean;
  className?: string;
}

export default function AnimatedHeading({
  title,
  subtitle,
  titleColor = "text-black",
  subtitleColor = "text-gray-800",
  align = "center",
  titleSize = "lg",
  subtitleSize = "md",
  accent = true,
  className = "",
}: AnimatedHeadingProps) {
  // Title size classes
  const titleSizeClasses = {
    sm: "text-2xl md:text-3xl",
    md: "text-3xl md:text-4xl",
    lg: "text-4xl md:text-5xl",
    xl: "text-5xl md:text-6xl",
    "2xl": "text-6xl md:text-7xl",
  };

  // Subtitle size classes
  const subtitleSizeClasses = {
    sm: "text-base md:text-lg",
    md: "text-lg md:text-xl",
    lg: "text-xl md:text-2xl",
  };

  // Alignment classes
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div className={`${alignClasses[align]} mb-8 md:mb-12 ${className}`}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        className={`${titleSizeClasses[titleSize]} ${titleColor} mb-2 md:mb-3 font-[impact]`}
      >
        {accent ? (
          <div className="flex items-center justify-center">
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "100%", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className={`hidden md:block h-1 bg-[#dc4a26] flex-1 max-w-[100px] ${
                align === "center" ? "mr-6" : align === "right" ? "mr-6" : ""
              }`}
            ></motion.div>
            <span>{title}</span>
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "100%", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className={`hidden md:block h-1 bg-[#dc4a26] flex-1 max-w-[100px] ${
                align === "center" ? "ml-6" : align === "left" ? "ml-6" : ""
              }`}
            ></motion.div>
          </div>
        ) : (
          title
        )}
      </motion.h2>
      
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className={`${subtitleSizeClasses[subtitleSize]} ${subtitleColor} font-[CreatoDisplay]`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

// Section divider component with animation
export function AnimatedDivider({ 
  className = "",
  color = "bg-[#dc4a26]"
}: { 
  className?: string;
  color?: string;
}) {
  return (
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: "100%" }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`h-1 ${color} max-w-[200px] mx-auto ${className}`}
    ></motion.div>
  );
}
