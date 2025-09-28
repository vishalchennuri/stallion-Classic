"use client";
import Link from "next/link";
import { StaggerContainer, StaggerItem, AnimatedButton } from "../ui/AnimatedComponents";

const CategoriesGrid = () => {
  const categories = [
    {
      id: 'junior',
      name: 'JUNIOR CATEGORIES',
      subtitle: '(Under 23 Years)',
      description: 'For athletes under 23 years of age',
      subcategories: [
        'Men\'s Physique (160-170 cm)',
        'Men\'s Physique (Above 170 cm)',
        'Bodybuilding 55-60 kg',
        'Bodybuilding 60-65 kg',
        'Bodybuilding 70-75 kg',
        'Bodybuilding Above 75 kg'
      ]
    },
    {
      id: 'senior',
      name: 'SENIOR CATEGORIES',
      subtitle: '(Above 23 Years)',
      description: 'For athletes above 23 years of age',
      subcategories: [
        'Classic Physique (Under 170cm)',
        'Classic Physique (Above 170cm)',
        'Men Physique (Under 165 cm)',
        'Men Physique (Above 170 cm)',
        'Bodybuilding 55-60 kg',
        'Bodybuilding 60-65 kg',
        'Bodybuilding 65-70 kg',
        'Bodybuilding 70-75 kg',
        'Bodybuilding 75-80 kg',
        'Bodybuilding 80-85 kg',
        'Bodybuilding 85-90 kg',
        'Bodybuilding 90-95 kg'
      ]
    },
    {
      id: 'womens',
      name: 'WOMEN\'S CATEGORIES',
      subtitle: '',
      description: 'For female athletes',
      subcategories: [
        'Bikini (Open)',
        'Women\'s Body Building (Open)',
      ]
    },
    {
      id: 'star',
      name: 'STAR CATEGORIES',
      subtitle: '',
      description: 'Special showcase categories',
      subcategories: [
        'Denim Jeans (Open)'
      ]
    }
  ];

  return (
    <section className="py-20 sm:py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-3 font-[impact]">
            CHOOSE YOUR CATEGORY
          </h2>
          <p className="text-xl sm:text-2xl text-white-700 font-[CreatoDisplay] max-w-2xl mx-auto">
            Select the competition category that matches your profile
          </p>
        </div>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto" delay={0.2} staggerDelay={0.15}>
          {categories.map((category, index) => (
            <StaggerItem key={category.id} index={index} className="transform transition-all duration-300">
              <div className="bg-[#181818] rounded-lg overflow-hidden text-white h-full flex flex-col hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="p-6 sm:p-8 flex-grow font-[CreatoDisplay]">
                 

                  {/* Category Info */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl sm:text-2xl font-[impact] text-white mb-2">
                      {category.name}
                    </h3>
                    {category.subtitle && (
                      <h4 className="text-sm font-medium text-gray-300 mb-2">
                        {category.subtitle}
                      </h4>
                    )}
                    <p className="text-gray-400 text-sm">
                      {category.description}
                    </p>
                  </div>

                  <div className="border-t border-gray-700 my-6"></div>

                  {/* Subcategories Preview */}
                  <div className="mb-6">
                    <h5 className="text-sm font-bold text-white mb-3 font">
                      AVAILABLE CATEGORIES:
                    </h5>
                    <ul className="space-y-2 text-xs text-gray-400">
                      {category.subcategories.slice(0, 3).map((sub, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-1 h-1 bg-[#dc4a26] rounded-full mr-2 mt-2"></span>
                          {sub}
                        </li>
                      ))}
                      {category.subcategories.length > 3 && (
                        <li className="text-[#dc4a26] font-medium text-sm">
                          +{category.subcategories.length - 3} more categories...
                        </li>
                      )}
                    </ul>
                  </div>
                </div>

                {/* Register Button */}
                <div className="p-6 sm:p-8 pt-0">
                  <AnimatedButton>
                    <Link href={`/register/${category.id}`}>
                      <div className="block text-center bg-[#dc4a26] text-white py-3 font-bold tracking-wider hover:bg-opacity-90 transition-colors rounded-sm text-sm sm:text-base font-[CreatoDisplay]">
                        REGISTER NOW
                      </div>
                    </Link>
                  </AnimatedButton>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Additional Info */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-[impact] text-[#282828] mb-4">NEED HELP?</h3>
            <p className="text-gray-700 font-[CreatoDisplay] mb-6">
              Contact us for any questions regarding registration or categories
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:+919966369842" 
                className="flex items-center space-x-2 text-[#dc4a26] hover:text-[#b83920] transition-colors font-[CreatoDisplay]"
              >
                <span>📞</span>
                <span>+91 9966369842</span>
              </a>
              <a 
                href="tel:+917995181677" 
                className="flex items-center space-x-2 text-[#dc4a26] hover:text-[#b83920] transition-colors font-[CreatoDisplay]"
              >
                <span>📞</span>
                <span>+91 7995181677</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesGrid;