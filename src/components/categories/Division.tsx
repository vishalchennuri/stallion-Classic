import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Simple hover card component
const HoverCard = ({
  children,
  scale = 1.05,
}: {
  children: React.ReactNode;
  scale?: number;
}) => {
  return (
    <motion.div
      whileHover={{
        scale: scale,
        transition: { duration: 0.2 },
      }}
    >
      {children}
    </motion.div>
  );
};

const divisions = [
  {
    id: "bodybuilding",
    title: "BODYBUILDING",
    subtitle: "The Ultimate Test Of Size, Symmetry, And Stage Presence",
    image: "/images/cat/division/1a.png",
    keyFacts: [
      "Judged 60% Muscularity, 30% Symmetry, 10% Conditioning",
      "No Weight Limits - Pure Mass Rules",
      "8 Mandatory Poses (Front Lat Spread To Most Muscular)",
    ],
    categories: [
      "Bodybuilding 55 to 60 KG",
      "Bodybuilding 60 to 65 KG",
      "Bodybuilding 65 to 70 KG",
      "Bodybuilding 70 to 75 KG",
      "Bodybuilding 75 to 80 KG",
      "Bodybuilding 80 to 85 KG",
      "Bodybuilding 85 to 90 KG",
      "Bodybuilding 90 to 95 KG",
      "Bodybuilding 95+ KG",
    ],
    galleryImages: [
      "/images/cat/division/1b.png",
      "/images/cat/division/1c.png",
      "/images/cat/division/1d.png",
    ],
  },
  {
    id: "mens-physique",
    title: "MENS PHYSIQUE",
    subtitle: "Aesthetics, Proportion, and Stage Presence",
    image: "/images/cat/division/2a.png",
    keyFacts: [
      "Judged on V-taper, Shoulder-to-Waist Ratio",
      "Board Shorts Required - No Bodybuilding Posing Trunks",
      "4 Quarter Turns - No Mandatory Poses",
    ],
    categories: [
      "Men's Physique Up to 170 cm",
      "Men's Physique Up to 173 cm",
      "Men's Physique Up to 176 cm",
      "Men's Physique Up to 179 cm",
      "Men's Physique Up to 182 cm",
      "Men's Physique Up to 185 cm",
      "Men's Physique Up to 188 cm",
      "Men's Physique Over 188 cm",
      "Men's Physique Masters 40+",
    ],
    galleryImages: [
      "/images/cat/division/2b.png",
      "/images/cat/division/2c.png",
      "/images/cat/division/2d.png",
    ],
  },
  {
    id: "classic-physique",
    title: "CLASSIC PHYSIQUE",
    subtitle: "Golden-era Muscle with Modern Precision",
    image: "/images/cat/division/3a.png",
    keyFacts: [
      "Weight Limits Based on Height",
      "Blend of Bodybuilding Mass and Aesthetic Lines",
      "Classic Poses Including Vacuum Pose Required",
    ],
    categories: [
      "Classic Physique Up to 168 cm",
      "Classic Physique Up to 171 cm",
      "Classic Physique Up to 175 cm",
      "Classic Physique Up to 180 cm",
      "Classic Physique Up to 185 cm",
      "Classic Physique Up to 190 cm",
      "Classic Physique Up to 195 cm",
      "Classic Physique Over 195 cm",
      "Classic Physique Masters 40+",
    ],
    galleryImages: [
      "/images/cat/division/3b.png",
      "/images/cat/division/3c.png",
      "/images/cat/division/3d.png",
    ],
  },
  {
    id: "fitness-model",
    title: "FITNESS MODEL",
    subtitle: "Commercial Appeal with Athletic Conditioning",
    image: "/images/cat/division/4a.png",
    keyFacts: [
      "Judged on Marketability and Commercial Appeal",
      "Athletic, Lean Physique - Not Extreme Muscularity",
      "Includes Swimwear and Fashion Rounds",
    ],
    categories: [
      "Fitness Model Male Up to 175 cm",
      "Fitness Model Male Up to 180 cm",
      "Fitness Model Male Up to 185 cm",
      "Fitness Model Male Over 185 cm",
      "Fitness Model Female Up to 163 cm",
      "Fitness Model Female Up to 168 cm",
      "Fitness Model Female Up to 173 cm",
      "Fitness Model Female Over 173 cm",
      "Fitness Model Masters 35+",
    ],
    galleryImages: [
      "/images/cat/division/4b.png",
      "/images/cat/division/4c.png",
      "/images/cat/division/4d.png",
    ],
  },
  {
    id: "sports-model",
    title: "SPORTS MODEL",
    subtitle: "Athletic Performance Meets Aesthetic Appeal",
    image: "/images/cat/division/5a.png",
    keyFacts: [
      "Focus on Athletic Functionality and Aesthetics",
      "Includes Fitness Performance Elements",
      "Judged on Muscle Tone, Not Size",
    ],
    categories: [
      "Sports Model Male Beginner",
      "Sports Model Male Novice",
      "Sports Model Male Open",
      "Sports Model Male Masters 40+",
      "Sports Model Female Beginner",
      "Sports Model Female Novice",
      "Sports Model Female Open",
      "Sports Model Female Masters 35+",
      "Sports Model Teams",
    ],
    galleryImages: [
      "/images/cat/division/5b.png",
      "/images/cat/division/5c.png",
      "/images/cat/division/5d.png",
    ],
  },
];

// Animation variants for staggered animations
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function DivisionsSection() {
  return (
    <section className="py-8 pt-16 bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
        {divisions.map((division, index) => (
          <motion.div
            key={division.id}
            className="mb-16 last:mb-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 * Math.min(index, 3) }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {" "}
            <motion.div
              className="border border-[#dc4a26] rounded-md p-2 sm:p-4 mb-6 bg-white"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl py-2 text-center text-black font-[impact]">
                DISCOVER THE PERFECT DIVISION FOR YOUR BODYBUILDING JOURNEY
              </h2>
            </motion.div>
            <div className="border border-[#dc4a26] rounded-md overflow-hidden p-1">
              <div className="bg-black text-white rounded-md">
                <div className="relative">
                  <motion.div
                    className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] relative"
                    initial={{ opacity: 0.7, scale: 1.05 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}
                  >
                    <Image
                      src={division.image || "/placeholder.svg"}
                      alt={`${division.title} division`}
                      fill
                      className="object-cover object-center rounded-md"
                    />
                  </motion.div>{" "}
                  <div className="absolute inset-0 flex flex-col items-center justify-center translate-y-12 sm:translate-y-20 md:translate-y-28 lg:translate-y-32">
                    <motion.h2
                      className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-[impact] text-white mb-2 text-center px-4"
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.3,
                      }}
                      viewport={{ once: true }}
                    >
                      {division.title}
                    </motion.h2>
                    <motion.p
                      className="text-base sm:text-lg md:text-xl text-white font-[CreatoDisplay] text-center px-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.5,
                      }}
                      viewport={{ once: true }}
                    >
                      {division.subtitle}
                    </motion.p>
                  </div>
                </div>

                <div className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-[#090a05] to-black">
                  {" "}
                  <motion.div
                    className="mb-10 sm:mb-12 md:mb-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {" "}
                    <motion.h3
                      className="text-xl sm:text-2xl md:text-3xl font-[impact] text-center mb-4 sm:mb-6 md:mb-8"
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      KEY FACTS{" "}
                    </motion.h3>
                    <motion.div
                      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 max-w-5xl mx-auto"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-50px" }}
                      variants={{
                        hidden: { opacity: 0 },
                        visible: {
                          opacity: 1,
                          transition: {
                            staggerChildren: 0.1,
                          },
                        },
                      }}
                    >                      {division.keyFacts.map((fact, factIndex) => (
                        <motion.div
                          key={factIndex}
                          variants={{
                            hidden: { opacity: 0, y: 15 },
                            visible: {
                              opacity: 1,
                              y: 0,
                              transition: {
                                duration: 0.5,
                                ease: "easeOut",
                              },
                            },
                          }}
                        >
                          <HoverCard>
                            <div className="bg-[#1e1e1a] border border-[#dc4a26] rounded-lg px-4 text-center text-sm sm:text-base h-20 sm:h-20 flex items-center justify-center">
                              {fact}
                            </div>
                          </HoverCard>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                  {/* Categories */}
                  <motion.div
                    className="mb-10 sm:mb-12 md:mb-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    {" "}
                    <motion.h3
                      className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6 md:mb-8"
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      CATEGORIES{" "}
                    </motion.h3>
                    <motion.div
                      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 max-w-5xl mx-auto"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-50px" }}
                      variants={staggerContainer}
                    >
                      {division.categories
                        .slice(0, 8)
                        .map((category, catIndex) => (
                          <motion.div key={catIndex} variants={staggerItem}>
                            <HoverCard>
                              <div className="border border-[#dc4a26] rounded px-2 sm:px-4 py-2 bg-[#1f1f1b] text-center text-sm sm:text-base font-[CreatoDisplay]">
                                {category}
                              </div>
                            </HoverCard>
                          </motion.div>
                        ))}
                    </motion.div>
                    {division.categories.length > 8 && (
                      <motion.div
                        className="flex justify-center mt-3"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        viewport={{ once: true }}
                      >
                        <HoverCard>
                          <div className="border border-[#dc4a26] rounded px-2 sm:px-4 py-2 bg-[#1f1f1b] text-center text-sm sm:text-base font-[CreatoDisplay]">
                            {division.categories[8]}
                          </div>
                        </HoverCard>
                      </motion.div>
                    )}
                  </motion.div>{" "}
                  {/* Register button */}
                  <motion.div
                    className="text-center mb-6 sm:mb-8"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <HoverCard scale={1.1}>
                      <Link
                        href="/register"
                        className="inline-block bg-[#dc4a26] text-white px-6 sm:px-8 py-2 sm:py-3 font-bold tracking-wider hover:bg-opacity-90 transition-colors font-[CreatoDisplay] text-sm sm:text-base"
                      >
                        JOIN THE LEGACY, REGISTER NOW
                      </Link>
                    </HoverCard>
                  </motion.div>
                </div>
              </div>
              {/* Bottom images */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.15,
                    },
                  },
                }}
              >
                {division.galleryImages.map((image, imgIndex) => (
                  <motion.div
                    key={imgIndex}
                    className="aspect-[4/3] relative overflow-hidden"
                    variants={{
                      hidden: { opacity: 0, scale: 1.05 },
                      visible: {
                        opacity: 1,
                        scale: 1,
                        transition: {
                          duration: 0.7,
                          ease: "easeOut",
                        },
                      },
                    }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${division.title} pose ${imgIndex + 1}`}
                      fill
                      className="object-cover transition-transform duration-500"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
