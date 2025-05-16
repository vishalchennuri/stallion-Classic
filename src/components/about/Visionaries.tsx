"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";
import { motion } from "framer-motion";

export default function VisionariesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto px-6 sm:px-16 max-w-7xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl text-black mb-3 font-[impact]">
            THE VISIONARIES BEHIND THE LEGACY
          </h2>
          <p className="text-xl text-gray-700 font-[CreatoDisplay]">
            Two founders. One relentless standard of excellence
          </p>
        </motion.div>

        {/* First Founder - Jay Acharya */}
        <motion.div
          className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Image on the left */}
          <div className="w-full md:w-2/5 relative">
            {/* Orange background div - clearly visible and offset */}
            <motion.div
              className="absolute top-3 left-3 w-full h-[500px] bg-[#dc4a26] rounded-md z-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            ></motion.div>

            {/* Main image container */}
            <motion.div
              className="relative h-[500px] w-full z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <Image
                src="/images/about/vis/abhi1.JPG"
                alt="Abhilash"
                fill
                className="object-cover rounded-md"
              />
            </motion.div>
          </div>

          {/* Content on the right */}
          <motion.div
            className="w-full md:w-3/5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-3xl md:text-4xl text-black mb-2 font-[impact]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Abhilash
            </motion.h3>
            {/* <motion.p
              className="text-black mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              ICN INDIA - Country President, ICN AUSTRALIA - Mens Physique Pro
            </motion.p> */}

            <motion.p
              className="text-gray-800 text-lg mb-8 leading-relaxed font-[CreatoDisplay]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
            >
              Abhilash is the visionary founder of Stallion Classic, India’s
              premier natural bodybuilding and physique competition. A lifelong
              fitness enthusiast and advocate of drug-free sports, Abhilash
              launched Stallion Classic to create a world-class platform for
              Indian athletes to showcase their dedication and discipline. His
              mission is to raise the standards of competitive bodybuilding in
              India by emphasizing fair play, professionalism, and athlete-first
              experiences. Under his leadership, Stallion Classic has rapidly
              grown in reputation for its international-level production
              quality, transparent judging, and electrifying crowd energy.
              Abhilash is committed to building a sustainable fitness ecosystem
              that empowers young athletes, celebrates natural performance, and
              puts Indian bodybuilding on the global map.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="https://www.instagram.com/abhilash_paravasthu/"
                  passHref
                  legacyBehavior
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-[CreatoDisplay] inline-flex items-center bg-[#dc4a26] text-white px-6 py-3 font-bold tracking-wider hover:bg-opacity-90 transition-colors"
                  >
                    FOLLOW NOW <Instagram className="ml-2 h-5 w-5" />
                  </a>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Second Founder - Raventh */}
        <motion.div
          className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8 md:gap-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Image on the right */}
          <div className="w-full md:w-2/5 relative">
            {/* Orange background div - clearly visible and offset */}
            <motion.div
              className="absolute top-3 left-3 w-full h-[500px] bg-[#dc4a26] rounded-md z-0"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            ></motion.div>

            {/* Main image container */}
            <motion.div
              className="relative h-[500px] w-full z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <Image
                src="/images/about/vis/suresh.JPG"
                alt="Raventh"
                fill
                className="object-cover rounded-md"
              />
            </motion.div>
          </div>

          {/* Content on the left */}
          <motion.div
            className="w-full md:w-3/5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-3xl md:text-4xl font-[impact] text-black mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              SURESH
            </motion.h3>
            {/* <motion.p
              className="text-black mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
            >
              ICN INDIA - Country President, ICN AUSTRALIA - Mens Physique Pro
            </motion.p> */}

            <motion.p
              className="text-gray-800 text-lg mb-8 leading-relaxed font-[CreatoDisplay]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            >
              Suresh brings over a decade of hands-on experience in coaching and
              athlete development to Stallion Classic. As the Head Coach, he
              plays a crucial role in preparing athletes mentally and physically
              for the stage. Known for his strategic coaching style and deep
              understanding of muscle mechanics and posing, Suresh is widely
              respected in the fitness community. He has trained numerous
              regional and national finalists and is a strong advocate for
              evidence-based training and drug-free competition. His presence at
              Stallion Classic ensures that every athlete receives the guidance,
              feedback, and mentorship needed to perform at their peak. Suresh's
              dedication helps reinforce the event's identity as a professional,
              athlete-focused tournament.
            </motion.p>

            <motion.div
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
                  href="https://www.instagram.com/suresh.bhayal.5815/"
                  passHref
                  legacyBehavior
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-[CreatoDisplay] inline-flex items-center bg-[#dc4a26] text-white px-6 py-3 font-bold tracking-wider hover:bg-opacity-90 transition-colors"
                  >
                    FOLLOW NOW <Instagram className="ml-2 h-5 w-5" />
                  </a>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
