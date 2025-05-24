"use client";

import { CheckCircle, AlertTriangle, Users, Trophy, Calendar, MapPin } from "lucide-react"
import AnimatedSection, { StaggerContainer, StaggerItem } from "../ui/AnimatedComponents"

export default function RulesRegulationsSection() {
  const eligibilityRules = [
    {
      icon: <Users className="h-5 w-5 sm:h-6 sm:w-6 text-[#dc4a26]" />,
      title: "Age Requirements",
      description: "Participants must be 18 years or older. Valid ID required for verification."
    },
    {
      icon: <Trophy className="h-5 w-5 sm:h-6 sm:w-6 text-[#dc4a26]" />,
      title: "Competition Categories",
      description: "Athletes must compete in their designated category based on experience level and weight class."
    },
    {
      icon: <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-[#dc4a26]" />,
      title: "Health Certification",
      description: "Medical clearance certificate from a licensed physician required within 30 days of competition."
    },
    {
      icon: <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-[#dc4a26]" />,
      title: "Registration Deadline",
      description: "All registrations must be completed 7 days prior to the event date."
    }
  ];

  const competitionRules = [
    {
      title: "Judging Criteria",
      points: [
        "Symmetry and proportion (25%)",
        "Muscularity and conditioning (35%)",
        "Presentation and posing (25%)",
        "Overall stage presence (15%)"
      ]
    },
    {
      title: "Mandatory Poses",
      points: [
        "Front double biceps",
        "Front lat spread",
        "Side chest (left and right)",
        "Back double biceps",
        "Rear lat spread",
        "Side triceps",
        "Abdominal and thigh"
      ]
    },
    {
      title: "Competition Rounds",
      points: [
        "Prejudging: Mandatory poses and comparisons",
        "Individual posing routine (60-90 seconds)",
        "Final posedown for top 5 finalists",
        "Awards ceremony immediately following"
      ]
    },
    {
      title: "Attire Requirements",
      points: [
        "Competition trunks/bikinis must be solid colored",
        "No logos, text, or graphics permitted",
        "Professional spray tan recommended",
        "Jewelry limited to wedding rings only"
      ]
    }
  ];

  const conductRules = [
    "Respect all judges, officials, and fellow competitors at all times",
    "No use of prohibited substances - random drug testing may be conducted",
    "Arrive for check-in and weigh-ins at designated times",
    "Follow all backstage protocols and staff instructions",
    "Maintain professional conduct during interviews and photo sessions",
    "No outside coaching or assistance during prejudging",
    "Cell phones and recording devices prohibited in competition areas",
    "Disputes must be filed within 15 minutes of the competition conclusion"
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-black mb-2 sm:mb-3 font-[impact]">RULES & REGULATIONS</h2>
          <p className="text-xl sm:text-2xl text-gray-800 font-[CreatoDisplay]">Competition guidelines for all participants</p>
        </AnimatedSection>

        {/* Eligibility Requirements */}
        <AnimatedSection className="mb-12 sm:mb-16">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl sm:text-3xl md:text-4xl text-black mb-6 sm:mb-8 font-[impact] text-center">ELIGIBILITY REQUIREMENTS</h3>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 font-[CreatoDisplay]">
              {eligibilityRules.map((rule, index) => (
                <StaggerItem key={index} index={index} className="transform transition-all duration-300">
                  <div className="border border-gray-200 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="flex-shrink-0 mt-1">
                        {rule.icon}
                      </div>
                      <div>
                        <h4 className="text-lg sm:text-xl font-medium text-gray-800 mb-2">{rule.title}</h4>
                        <p className="text-sm sm:text-base text-gray-600">{rule.description}</p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </AnimatedSection>

        {/* Competition Rules */}
        <AnimatedSection className="mb-12 sm:mb-16" delay={0.2}>
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl sm:text-3xl md:text-4xl text-black mb-6 sm:mb-8 font-[impact] text-center">COMPETITION RULES</h3>
            <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 font-[CreatoDisplay]">
              {competitionRules.map((section, index) => (
                <StaggerItem key={index} index={index} className="transform transition-all duration-300">
                  <div className="border border-gray-200 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300">
                    <h4 className="text-xl sm:text-2xl font-medium text-gray-800 mb-4 sm:mb-6">{section.title}</h4>
                    <ul className="space-y-2 sm:space-y-3">
                      {section.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start space-x-3">
                          <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[#dc4a26] flex-shrink-0 mt-0.5" />
                          <span className="text-sm sm:text-base text-gray-600">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </AnimatedSection>

        {/* Code of Conduct */}
        <AnimatedSection delay={0.4}>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl md:text-4xl text-black mb-6 sm:mb-8 font-[impact] text-center">CODE OF CONDUCT</h3>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 sm:p-8 font-[CreatoDisplay]">
              <div className="flex items-center mb-4 sm:mb-6">
                <AlertTriangle className="h-5 w-5 sm:h-6 sm:w-6 text-[#dc4a26] mr-3" />
                <span className="text-lg sm:text-xl font-medium text-gray-800">All participants must adhere to the following:</span>
              </div>
              <StaggerContainer className="space-y-3 sm:space-y-4">
                {conductRules.map((rule, index) => (
                  <StaggerItem key={index} index={index}>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#dc4a26] rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-sm sm:text-base text-gray-700">{rule}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </AnimatedSection>

        {/* Important Notice */}
        <AnimatedSection className="mt-12 sm:mt-16" delay={0.6}>
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#dc4a26] text-white rounded-lg p-6 sm:p-8 text-center font-[CreatoDisplay]">
              <AlertTriangle className="h-8 w-8 sm:h-10 sm:w-10 mx-auto mb-4" />
              <h4 className="text-xl sm:text-2xl font-medium mb-3 sm:mb-4">IMPORTANT NOTICE</h4>
              <p className="text-sm sm:text-base leading-relaxed">
                Violation of any rules or regulations may result in immediate disqualification without refund. 
                All decisions made by judges and officials are final. Participants compete at their own risk 
                and must sign a waiver of liability before competing.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}