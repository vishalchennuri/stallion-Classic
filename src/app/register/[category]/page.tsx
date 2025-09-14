"use client";
import { LazyMotion, domAnimation } from "framer-motion";
import PageTransition from "@/components/ui/PageTransition";
import Footer from "@/components/landing/Footer";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import RegistrationForm from "@/components/registration/registrationform";

interface RegisterCategoryProps {
  params: {
    category: string;
  };
}

export default function RegisterCategory({ params }: RegisterCategoryProps) {
  return (
    <LazyMotion features={domAnimation}>
      <PageTransition>
        <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
          <RegistrationForm category={params.category} />
          <Footer />
          <ScrollToTopButton />
        </div>
      </PageTransition>
    </LazyMotion>
  );
}