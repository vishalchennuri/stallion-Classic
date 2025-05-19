"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedButton } from "../ui/AnimatedComponents";
import { Instagram, Facebook, Youtube, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Categories", path: "/categories" },
    { name: "Events", path: "/events" },
  ];

  const socialLinks = [
    { 
      name: "Instagram", 
      icon: <Instagram size={20} />, 
      url: "https://www.instagram.com/stallionclassic/reels/?api=Cassino%E3%80%90PG.CYOU%E3%80%91.jslr&hl=zh-cn" 
    },
    { 
      name: "Facebook", 
      icon: <Facebook size={20} />, 
      url: "https://www.facebook.com/p/Stallion-Xtreme-Fitness-100084922102459/" 
    },
    { 
      name: "Youtube", 
      icon: <Youtube size={20} />, 
      url: "https://www.youtube.com/@StallionXtremefitness" 
    },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 mx-auto px-4 sm:px-6 lg:px-12 py-1 sm:py-2 flex items-center justify-between ${
        scrolled ? "bg-black bg-opacity-65 shadow-md" : ""
      } transition-all duration-300`}
    >
      <div className="flex items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="flex items-center"
        >
          <Image
            src="/images/landing/hero/classic.png"
            alt="Stallion Classic Logo"
            width={65}
            height={65}
            className="mr-2"
            priority
          />
        </motion.div>
      </div>
      
      {/* Desktop Navigation */}
      <div className="flex-1 flex justify-center">
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="hidden md:flex items-center justify-center space-x-5 lg:space-x-10 font-[CreatoDisplay] w-full"
        >
          {navItems.map((item, index) => {
            const isActive = pathname === item.path;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3 + index * 0.1,
                  duration: 0.4,
                }}
                whileHover={{ y: -3 }}
              >
                <Link
                  href={item.path}
                  className={`text-sm lg:text-base font-medium transition-colors relative ${
                    isActive ? "text-[#dc4a26]" : "text-white hover:text-[#dc4a26]"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#dc4a26]"
                    />
                  )}
                </Link>
              </motion.div>
            );
          })}
        </motion.nav>
      </div>
      
      {/* Mobile Menu Button */}
      <motion.div className="md:hidden flex justify-end z-50">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-white p-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
            className="fixed inset-0 bg-black bg-opacity-95 z-40 md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full">
              {/* Mobile Logo */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="mb-8"
              >
                <Image
                  src="/images/landing/hero/classic.png"
                  alt="Stallion Classic Logo"
                  width={100}
                  height={100}
                  priority
                />
              </motion.div>

              <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.2 } }}
                className="flex flex-col items-center space-y-6 font-[CreatoDisplay] w-full px-8"
              >
                {navItems.map((item, index) => {
                  const isActive = pathname === item.path;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: { delay: 0.2 + index * 0.1 },
                      }}
                      className="w-full text-center"
                    >
                      <Link
                        href={item.path}
                        className={`block text-xl py-2 border-b border-gray-800 ${
                          isActive
                            ? "text-[#dc4a26] font-semibold"
                            : "text-white hover:text-[#dc4a26]"
                        } transition-colors`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  );
                })}
                
                {/* Registration Button - Mobile */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.6 },
                  }}
                  className="w-full mt-4"
                >
                  <AnimatedButton>
                    <Link
                      href="/registration"
                      className="bg-[#dc4a26] text-white px-8 py-3 text-lg font-bold tracking-wider hover:bg-opacity-90 transition-colors block text-center w-full"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      REGISTRATION
                    </Link>
                  </AnimatedButton>
                </motion.div>
                
                {/* Social Media Links - Mobile */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.7 },
                  }}
                  className="flex justify-center space-x-6 mt-8"
                >
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-white hover:text-[#dc4a26] transition-colors p-2 bg-gray-900 rounded-full"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </motion.div>
                
                {/* Additional Mobile Nav Content */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.8 } }}
                  className="mt-10 text-center text-gray-400 text-sm"
                >
                  <p>© 2025 Stallion Classic</p>
                  <p className="mt-2">All rights reserved</p>
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
        transition={{ delay: 0.5, duration: 0.4 }}
      >
        <AnimatedButton>
          <Link
            href="/registration"
            className="hidden md:block bg-[#dc4a26] text-white px-4 sm:px-5 py-1 sm:py-1.5 text-xs sm:text-sm font-bold tracking-wider hover:bg-opacity-90 transition-colors font-[CreatoDisplay]"
          >
            REGISTRATION
          </Link>
        </AnimatedButton>
      </motion.div>
    </motion.header>
  );
}