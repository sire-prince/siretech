'use client'

import React, { useState } from 'react';
import { 
  FadeUp, 
  FadeDown, 
  FadeLeft, 
  FadeRight 
} from './Reveal';
import { fontFamily } from './theme';
import { 
  FaPlus, 
  FaMinus, 
  FaChevronDown,
  FaChevronUp
} from 'react-icons/fa';

// Your exact color palette
const colors = {
  bg: '#FFFFFF',
  primary: '#17012C',
  primaryLight: '#5B3AEE',
  accent: '#F39F5F',
  accentHover: '#E8893E',
  blue: '#219BE4',
  textDark: '#333333',
  textMuted: '#666666'
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What services does your agency offer?",
      answer: "We offer full-stack development services including web development, mobile app development, SEO optimization, UI/UX design, website maintenance, and custom software solutions tailored to your business needs."
    },
    {
      question: "How long does it take to build a website?",
      answer: "Typically, a standard business website takes 2-4 weeks from start to launch. Complex e-commerce or custom web applications may take 4-8 weeks. We'll provide a clear timeline during our discovery call."
    },
    {
      question: "Do you offer ongoing maintenance and support?",
      answer: "Yes! We offer monthly maintenance packages starting from GHS 1,500/month. This includes hosting, backups, security updates, bug fixes, and up to 5 small changes per month."
    },
    {
      question: "What is your pricing model?",
      answer: "We work on a fixed-price project basis. Each project is quoted based on scope and complexity. We require 50% upfront, 25% at milestone, and 25% upon completion. We also offer monthly retainers for ongoing support."
    },
    {
      question: "Do you work with clients outside Ghana?",
      answer: "Absolutely! We work with clients globally. Our team operates remotely and we've successfully delivered projects for clients in the UK, USA, Canada, and across Africa."
    },
    {
      question: "How do I get started?",
      answer: "Simply click the 'Start Your Project' button or fill out our contact form. We'll schedule a free 15-minute discovery call to understand your needs and provide a customized quote."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative w-full overflow-hidden py-16 md:py-20" style={{ 
      background: 'transparent',
      fontFamily 
    }}>
      
      {/* Animated background blobs */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full mix-blend-screen filter blur-3xl animate-pulse" 
             style={{ background: colors.accent }}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full mix-blend-screen filter blur-3xl animate-pulse delay-1000" 
             style={{ background: colors.blue }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
                <FadeUp>
                  <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#17012C] mb-3">
                            Find answers to  
<span className="text-[#F39F5F]">  FAQ</span>
                    </h2>
                    <p className="text-[#666666] max-w-2xl mx-auto">
                      Find answers to common questions about our services and process
                    </p>
                  </div>
                </FadeUp>

        {/* FAQ Grid */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FadeUp key={index} delay={index * 0.1}>
              <div 
                className="rounded-xl overflow-hidden transition-all duration-300"
                style={{ 
                  background: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors duration-200 cursor-pointer group"
                >
                  <span className="text-base md:text-lg font-semibold" style={{ color: colors.primary }}>
                    {faq.question}
                  </span>
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ 
                      background: openIndex === index ? `${colors.accent}20` : 'rgba(255,255,255,0.1)',
                    }}
                  >
                    {openIndex === index ? (
                      <FaMinus className="w-4 h-4" style={{ color: colors.accent }} />
                    ) : (
                      <FaPlus className="w-4 h-4" style={{ color: colors.accent }} />
                    )}
                  </div>
                </button>

                {/* Answer Panel - Toggles up/down */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-4 pt-2">
                    <div className="h-px w-full mb-4" style={{ background: 'rgba(255,255,255,0.1)' }} />
                    <p className="text-sm md:text-base leading-relaxed" style={{ color: colors.textMuted }}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeUp>
          <div className="text-center mt-12 pt-8">
            <p className="text-sm mb-4" style={{ color: colors.textMuted }}>
              Still have questions?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-[#FF5C33] to-[#FF2D46] gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{ 
                color: colors.bg,
                boxShadow: `0 4px 15px ${colors.accent}40`
              }}
            >
              Contact Our Team
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
           
        </FadeUp>
      </div>
    </section>
  );
};

export default FAQ;