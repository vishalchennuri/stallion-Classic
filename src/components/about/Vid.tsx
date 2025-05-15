"use client";

import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

export default function VideoSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl text-black mb-2 font-[impact]">
            BLOOD, SWEAT & LEGACY
          </h2>
          <p className="text-xl text-gray-700 font-[CreatoDisplay]">
            90 seconds that capture the Stallion Classic spirit
          </p>
        </motion.div>

        <motion.div 
          className="max-w-5xl mx-auto relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Video Thumbnail */}
          <div className="relative aspect-video overflow-hidden rounded-md shadow-xl">
            <Image
              src="/images/about/vid/1.png"
              alt="Stallion Classic competition video"
              fill
              className="object-cover"
            />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.button
                className="w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center hover:bg-opacity-40 transition-all duration-300 group"
                aria-label="Play video"
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0px 0px 30px rgba(220, 74, 38, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ 
                  opacity: 1, 
                  scale: [1, 1.1, 1],
                  transition: { 
                    duration: 1.5, 
                    delay: 0.8,
                    times: [0, 0.5, 1],
                    repeat: 1
                  }
                }}
              >
                <motion.div 
                  className="w-16 h-16 bg-[#dc4a26] rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <Play className="h-8 w-8 text-white fill-white ml-1" />
                </motion.div>
              </motion.button>
            </div>
          </div>

          {/* Register Button */}
          <motion.div 
            className="mt-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            viewport={{ once: true }}
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/register"
                className="font-[CreatoDisplay] inline-block bg-[#dc4a26] text-white px-8 py-3 font-bold tracking-wider hover:bg-opacity-90 transition-colors"
              >
                REGISTER NOW
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
