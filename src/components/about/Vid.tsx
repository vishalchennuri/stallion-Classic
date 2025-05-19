"use client";

import Link from "next/link";
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
          {/* YouTube Video Embed */}
          <div className="relative aspect-video overflow-hidden rounded-md shadow-xl">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/B5qSKp4cBik?si=o7mnEs69E5JnLZoC" 
              title="Stallion Classic competition video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
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