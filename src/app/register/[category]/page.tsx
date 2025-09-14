"use client";
import { LazyMotion, domAnimation } from "framer-motion";
import { use } from "react";
import PageTransition from "@/components/ui/PageTransition";
import Footer from "@/components/landing/Footer";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import RegistrationForm from "@/components/registration/registrationform";

interface RegisterCategoryProps {
  params: Promise<{
    category: string;
  }>;
}

export default function RegisterCategory({ params }: RegisterCategoryProps) {
  // Use React's use() hook to unwrap the Promise
  const { category } = use(params);

  return (
    <LazyMotion features={domAnimation}>
      <PageTransition>
        <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
          <RegistrationForm category={category} />
          <Footer />
          <ScrollToTopButton />
        </div>
      </PageTransition>
    </LazyMotion>
  );
}