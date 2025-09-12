"use client";
import { LazyMotion, domAnimation } from "framer-motion";
import PageTransition from "@/components/ui/PageTransition";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import RegisterHero from "@/components/registration/registerhero";
import CategoriesGrid from "@/components/registration/categoriesgrid";
import { features } from "process";

export default function Register() {
  return (
    <LazyMotion features={domAnimation}>
      <PageTransition>
        <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
          <Navbar />
          {/* <RegisterHero /> */}
          <CategoriesGrid />
          <Footer />
          <ScrollToTopButton />
        </div>
      </PageTransition>
    </LazyMotion>
  );
}