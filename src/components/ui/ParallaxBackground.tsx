"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface ParallaxBackgroundProps {
  imageUrl: string;
  children: ReactNode;
  brightness?: number;
  overlayColor?: string;
  overlayOpacity?: number;
  speed?: number;
  className?: string;
  alt?: string;
}

export default function ParallaxBackground({
  imageUrl,
  children,
  brightness = 50,
  overlayColor = "black",
  overlayOpacity = 60,
  speed = 0.15,
  className = "",
  alt = "Background image",
}: ParallaxBackgroundProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax effect transformation
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* Parallax Background */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <Image
          src={imageUrl}
          alt={alt}
          fill
          priority
          quality={90}
          className={`object-cover brightness-${brightness}`}
        />
      </motion.div>

      {/* Overlay for better text readability if needed */}
      {overlayOpacity > 0 && (
        <div
          className={`absolute inset-0 z-[1] bg-${overlayColor} bg-opacity-${overlayOpacity}`}
        ></div>
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

// Simplified version without full parallax, just a subtle movement
export function SubtleParallaxSection({
  imageUrl,
  children,
  brightness = 50,
  className = "",
  alt = "Section background",
}: Omit<ParallaxBackgroundProps, "overlayColor" | "overlayOpacity" | "speed">) {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Subtle movement effect
  const y = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <div ref={sectionRef} className={`relative overflow-hidden ${className}`}>
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <Image
          src={imageUrl}
          alt={alt}
          fill
          className={`object-cover brightness-${brightness}`}
        />
      </motion.div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
