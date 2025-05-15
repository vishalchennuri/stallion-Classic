"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AnimatedButton } from "../ui/AnimatedComponents"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="absolute top-0 left-0 right-0 z-50 mx-auto px-4 sm:px-8 lg:px-16 py-4 sm:py-6 flex items-center justify-between"
    >
      <div className="flex items-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex items-center"
        >
          <Image
            src="/images/landing/hero/logo.png"
            alt="Stallion Classic Logo"
            width={90}
            height={90}
            className="mr-2 sm:mr-4 sm:w-[110px] sm:h-[110px] md:w-[120px] md:h-[120px]"
          />
        </motion.div>
      </div>{/* Desktop Navigation */}      <div className="flex-1 flex justify-center">
        <motion.nav 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="hidden md:flex items-center justify-center space-x-6 lg:space-x-12 font-[CreatoDisplay] w-full"
        >
          {['Home', 'About', 'Categories', 'Events'].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.3 + (index * 0.1), 
                duration: 0.5 
              }}
              whileHover={{ y: -5 }}
            >
              <Link
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="text-white hover:text-[#dc4a26] transition-colors text-sm lg:text-base"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </motion.nav>
      </div>{/* Mobile Menu Button */}
      <motion.div className="md:hidden flex justify-end z-50">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-white flex flex-col space-y-1.5 z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-8 h-1 bg-white transition-transform duration-300 ${
              mobileMenuOpen ? "rotate-45 translate-y-2.5" : ""
            }`}
          ></span>
          <span
            className={`block w-8 h-1 bg-white transition-opacity duration-300 ${
              mobileMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block w-8 h-1 bg-white transition-transform duration-300 ${
              mobileMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          ></span>
        </motion.button>
      </motion.div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-40 md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full">
              <motion.nav 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.2 } }}
                className="flex flex-col items-center space-y-8 font-[CreatoDisplay]"
              >
                {['Home', 'About', 'Categories', 'Events'].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { delay: 0.2 + (index * 0.1) } 
                    }}
                    whileHover={{ scale: 1.05, x: 5 }}
                  >
                    <Link
                      href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                      className="text-white hover:text-[#dc4a26] transition-colors text-2xl"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 0.6 } 
                  }}
                >
                  <AnimatedButton>
                    <Link
                      href="/registration"
                      className="bg-[#dc4a26] text-white px-8 py-3 font-bold text-xl tracking-wider hover:bg-opacity-90 transition-colors mt-4"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      REGISTRATION
                    </Link>
                  </AnimatedButton>
                </motion.div>
              </motion.nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Registration Button - Desktop */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <AnimatedButton>
          <Link
            href="/registration"
            className="hidden md:block bg-[#dc4a26] text-white px-4 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-base font-bold tracking-wider hover:bg-opacity-90 transition-colors font-[CreatoDisplay]"
          >
            REGISTRATION
          </Link>
        </AnimatedButton>
      </motion.div>
    </motion.header>
  )
}
