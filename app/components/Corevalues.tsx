
"use client"
import React, { useState } from 'react';
import { 
  FaUsers, 
  FaShieldAlt, 
  FaLightbulb, 
  FaStar,
  FaArrowRight
} from 'react-icons/fa';
import { 
  FadeUp, 
  FadeDown 
} from '../components/Reveal';
import Link from 'next/link';

const Corevalues = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const values = [
    {
      id: 1,
      title: "Team Work",
      description: "We are deeply committed to understanding and solving our customers' real problems. Prioritising team work for bigger challenges and celebrating collective wins.",
      question: "How does this create value for our customer?",
      icon: <FaUsers className="text-2xl" />,
      color: "blue",
      bgGradient: "from-blue-50 to-white",
      iconBg: "bg-blue-100",
      iconColor: "#3B82F6",
      borderColor: "group-hover:border-blue-300"
    },
    {
      id: 2,
      title: "Integrity and Trust",
      description: "Being open, honest, and clear in communication with employees, customers, and stakeholders. Building relationships that last beyond projects.",
      question: "Are we proud of how we achieved this result?",
      icon: <FaShieldAlt className="text-2xl" />,
      color: "green",
      bgGradient: "from-green-50 to-white",
      iconBg: "bg-green-100",
      iconColor: "#10B981",
      borderColor: "group-hover:border-green-300"
    },
    {
      id: 3,
      title: "Innovation",
      description: "We champion curiosity and challenge the status quo with elegant solutions. Every problem is an opportunity to innovate and improve.",
      question: "What's the boldest solution we can pursue?",
      icon: <FaLightbulb className="text-2xl" />,
      color: "purple",
      bgGradient: "from-purple-50 to-white",
      iconBg: "bg-purple-100",
      iconColor: "#8B5CF6",
      borderColor: "group-hover:border-purple-300"
    },
    {
      id: 4,
      title: "Excellence",
      description: "A commitment to providing the best in every aspect of the business. We don't just meet expectations—we exceed them.",
      question: "How can I help my colleague succeed today?",
      icon: <FaStar className="text-2xl" />,
      color: "orange",
      bgGradient: "from-orange-50 to-white",
      iconBg: "bg-orange-100",
      iconColor: "#F59E0B",
      borderColor: "group-hover:border-orange-300"
    }
  ];

  return (
  <div className="relative overflow-hidden bg-linear-to-b from-white to-[#f8f9fa] py-20 md:py-28">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
      
   <FadeDown>
                  <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#17012C] mb-3">
              Core Values That
<span className="text-[#F39F5F]">                  Define Our Agency
</span>
                    </h2>
                    <p className="text-[#666666] max-w-2xl mx-auto">
              The principles that guide our work, shape our culture, and drive our commitment to your success
                    </p>
                  </div>
                </FadeDown>
        {/* Values Grid */}
        <FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div
                key={value.id}
                className={`group relative bg-linear-to-br ${value.bgGradient} rounded-2xl border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden`}
                style={{ 
                  boxShadow: hoveredCard === value.id ? `0 20px 40px -15px ${value.iconColor}40` : '0 4px 6px -1px rgba(0,0,0,0.05)',
                  borderColor: hoveredCard === value.id ? value.iconColor : '#e5e7eb'
                }}
                onMouseEnter={() => setHoveredCard(value.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Animated Glow Effect */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                     style={{ 
                       background: `radial-gradient(circle at 50% 0%, ${value.iconColor}15, transparent 70%)`
                     }}></div>

                <div className="relative p-6">
                  {/* Icon Section */}
                  <div className="flex items-center justify-between mb-4">
                    
                    <div className="text-6xl font-bold opacity-5 group-hover:opacity-10 transition-opacity duration-300"
                         style={{ color: value.iconColor }}>
                      {String(value.id).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#17012C] mb-2 group-hover:translate-x-1 transition-transform duration-300">
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {value.description}
                  </p>

                  {/* Key Question Section */}
                  <div className="border-t border-gray-200 pt-4 mt-2">
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full mt-1.5" style={{ backgroundColor: value.iconColor }}></div>
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                          Key Question
                        </p>
                        <p className="text-sm text-gray-700 italic leading-relaxed">
                          "{value.question}"
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Animated Arrow on Hover */}
                  <div className={`absolute bottom-6 right-6 transform transition-all duration-300 ${hoveredCard === value.id ? 'translate-x-0 opacity-100' : 'translate-x-2 opacity-0'}`}>
                    <FaArrowRight style={{ color: value.iconColor }} className="text-sm" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* Bottom CTA */}
        <FadeUp>
          <div className="text-center mt-16">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-linear-to-r from-gray-50 to-white rounded-2xl p-1 border border-gray-200 shadow-sm">
              <span className="text-gray-700 text-sm px-4 py-2">Ready to work with a values-driven agency?</span>
              <Link href="/contact" className="shrink-0">
                <button className="px-6 py-2.5 bg-linear-to-r from-[#FF5C33] to-[#FF2D46] text-white rounded-sm font-medium hover:from-[#FF2D46] hover:to-[#FF5C33] transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer" style={{ fontFamily: 'Figtree, sans-serif' }}>
                  Start A Project
                </button>
              </Link>
            </div>
          </div>
        </FadeUp>
      </div>
    </div>
  );
};

export default Corevalues;