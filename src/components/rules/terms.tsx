"use client";

import { FileText, Shield, CreditCard, RefreshCw, AlertCircle, Users, Camera, Gavel } from "lucide-react"
import AnimatedSection, { StaggerContainer, StaggerItem } from "../ui/AnimatedComponents"

export default function TermsConditionsSection() {
  const termsSection = [
    {
      icon: <FileText className="h-6 w-6 sm:h-7 sm:w-7 text-[#dc4a26]" />,
      title: "Registration & Participation",
      content: [
        "By registering for this event, participants agree to abide by all rules, regulations, and terms outlined herein.",
        "Registration fees are non-refundable unless the event is cancelled by the organizers.",
        "Participants must provide accurate personal information during registration.",
        "False information may result in immediate disqualification without refund.",
        "Participants under 18 must have parental/guardian consent and supervision."
      ]
    },
    {
      icon: <Shield className="h-6 w-6 sm:h-7 sm:w-7 text-[#dc4a26]" />,
      title: "Liability & Risk Assumption",
      content: [
        "Participants acknowledge that bodybuilding competitions involve inherent risks and participate at their own risk.",
        "The organizers, sponsors, and venue are not liable for any injuries, accidents, or health issues during the event.",
        "Participants must sign a comprehensive waiver of liability before competing.",
        "Medical emergencies will be handled by qualified professionals, but participants assume full responsibility.",
        "Insurance coverage is the responsibility of individual participants."
      ]
    },
    {
      icon: <CreditCard className="h-6 w-6 sm:h-7 sm:w-7 text-[#dc4a26]" />,
      title: "Payment & Refund Policy",
      content: [
        "All registration fees must be paid in full before the registration deadline.",
        "Payment methods accepted: Credit cards, debit cards, and online bank transfers.",
        "Refunds are only provided if the event is cancelled by organizers due to unforeseen circumstances.",
        "Partial refunds may be considered for medical emergencies with proper documentation.",
        "Processing fees may apply to all transactions and are non-refundable."
      ]
    },
    {
      icon: <RefreshCw className="h-6 w-6 sm:h-7 sm:w-7 text-[#dc4a26]" />,
      title: "Event Changes & Cancellations",
      content: [
        "Organizers reserve the right to modify event schedules, venues, or format as necessary.",
        "Participants will be notified of significant changes via email and official website.",
        "In case of force majeure events, the competition may be postponed or cancelled.",
        "Weather-related cancellations will be handled according to venue policies.",
        "Substitute events or rescheduling will be offered when possible."
      ]
    },
    {
      icon: <Camera className="h-6 w-6 sm:h-7 sm:w-7 text-[#dc4a26]" />,
      title: "Media Rights & Privacy",
      content: [
        "Participants consent to being photographed, filmed, and recorded during the event.",
        "Media content may be used for promotional, educational, and commercial purposes.",
        "Participants waive rights to compensation for use of their likeness in event materials.",
        "Personal information will be protected according to applicable privacy laws.",
        "Participants may request removal of specific content within 30 days of the event."
      ]
    },
    {
      icon: <Gavel className="h-6 w-6 sm:h-7 sm:w-7 text-[#dc4a26]" />,
      title: "Judging & Disputes",
      content: [
        "All judging decisions are final and not subject to appeal.",
        "Judges are qualified professionals selected by the organizing committee.",
        "Scoring is based on established IFBB criteria and standards.",
        "Disputes regarding rules violations must be filed within 15 minutes of occurrence.",
        "Disqualification decisions are final and not subject to review."
      ]
    },
    {
      icon: <Users className="h-6 w-6 sm:h-7 sm:w-7 text-[#dc4a26]" />,
      title: "Conduct & Behavior",
      content: [
        "Participants must maintain professional conduct throughout the event.",
        "Harassment, discrimination, or unsportsmanlike behavior will result in immediate disqualification.",
        "Use of prohibited substances is strictly forbidden and subject to testing.",
        "Participants must follow all venue rules and staff instructions.",
        "Violation of conduct rules may result in lifetime bans from future events."
      ]
    },
    {
      icon: <AlertCircle className="h-6 w-6 sm:h-7 sm:w-7 text-[#dc4a26]" />,
      title: "Legal & Compliance",
      content: [
        "These terms are governed by local and national laws where the event takes place.",
        "Any disputes will be resolved through binding arbitration.",
        "Participants must comply with all applicable health and safety regulations.",
        "Immigration and travel requirements are the responsibility of international participants.",
        "Terms may be updated with 30 days notice via official communication channels."
      ]
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-black mb-2 sm:mb-3 font-[impact]">TERMS & CONDITIONS</h2>
          <p className="text-xl sm:text-2xl text-gray-800 font-[CreatoDisplay]">Legal terms and participant obligations</p>
        </AnimatedSection>

        <AnimatedSection className="mb-8 sm:mb-12" delay={0.2}>
          <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-lg p-6 sm:p-8 font-[CreatoDisplay]">
            <div className="flex items-center mb-4 sm:mb-6">
              <AlertCircle className="h-6 w-6 sm:h-7 sm:w-7 text-[#dc4a26] mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-xl sm:text-2xl font-medium text-gray-800">Agreement to Terms</h3>
                <p className="text-sm sm:text-base text-gray-600 mt-1">
                  By participating in this event, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions.
                </p>
              </div>
            </div>
            <div className="bg-[#dc4a26] bg-opacity-10 border-l-4 border-[#dc4a26] p-4 sm:p-6 rounded-r-lg">
              <p className="text-sm sm:text-base text-white leading-relaxed">
                <strong>Last Updated:</strong> January 2025. These terms are effective immediately and supersede all previous versions. 
                Continued participation in our events constitutes acceptance of these updated terms.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <StaggerContainer className="max-w-6xl mx-auto space-y-6 sm:space-y-8 font-[CreatoDisplay]">
          {termsSection.map((section, index) => (
            <StaggerItem key={index} index={index} className="transform transition-all duration-300">
              <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4 sm:space-x-6 mb-4 sm:mb-6">
                  <div className="flex-shrink-0 mt-1">
                    {section.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-medium text-gray-800 mb-4 sm:mb-6">{section.title}</h3>
                    <div className="space-y-3 sm:space-y-4">
                      {section.content.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-[#dc4a26] rounded-full flex-shrink-0 mt-2"></div>
                          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Contact Information */}
        <AnimatedSection className="mt-12 sm:mt-16" delay={0.8}>
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#212121] text-white rounded-lg p-6 sm:p-8 text-center font-[CreatoDisplay]">
              <FileText className="h-8 w-8 sm:h-10 sm:w-10 mx-auto mb-4" />
              <h4 className="text-xl sm:text-2xl font-medium mb-3 sm:mb-4">Questions About These Terms?</h4>
              <p className="text-sm sm:text-base leading-relaxed mb-4">
                If you have any questions regarding these terms and conditions, please contact our legal department.
              </p>
              <div className="space-y-2 text-sm sm:text-base">
                <p><strong>Email:</strong> legal@ifbbpro-events.com</p>
                <p><strong>Phone:</strong> +91 (0) 123-456-7890</p>
                <p><strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM IST</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}