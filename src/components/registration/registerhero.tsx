"use client";
import AnimatedSection from "../ui/AnimatedComponents";

const RegisterHero = () => {
  return (
    <section className="py-24 sm:py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-3 sm:mb-4 font-[impact]">
            STALLION CLASSIC 2025
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#dc4a26] mb-4 sm:mb-6 font-[impact]">
            REGISTRATION
          </h2>
          

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 sm:p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-[impact] text-[#282828] mb-6">REQUIRED DOCUMENTS</h3>
            <div className="grid md:grid-cols-3 gap-6 text-gray-700 font-[CreatoDisplay]">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl text-[#dc4a26] mb-3">📄</div>
                <p className="text-sm sm:text-base">Aadhar Card OR Birth Certificate</p>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl text-[#dc4a26] mb-3">🎓</div>
                <p className="text-sm sm:text-base">SSC Memo (Original)</p>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl text-[#dc4a26] mb-3">🆔</div>
                <p className="text-sm sm:text-base">Government ID (Junior Categories Only)</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default RegisterHero;