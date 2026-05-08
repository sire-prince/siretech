'use client';
import React from 'react';
import { FadeUp, FadeLeft, FadeRight } from '../components/Reveal';
import Link from 'next/link';
import Image from 'next/image';

const About = () => {
  const services = [
    { name: 'Website Development', color: '#F39F5F', icon: '🌐' },
    { name: 'Mobile Applications', color: '#5B3AEE', icon: '📱' },
    { name: 'SEO Optimization', color: '#219BE6', icon: '📈' },
    { name: 'Brand Identity', color: '#00ACCE', icon: '🎨' },
    { name: 'Graphic Design', color: '#17012C', icon: '✏️' },
    { name: 'E-commerce Solutions', color: '#F39F5F', icon: '🛒' },
    { name: 'Social Media Management', color: '#5B3AEE', icon: '📢' },
    { name: 'Website Hosting', color: '#219BE6', icon: '☁️' }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed', color: '#F39F5F' },
    { number: '98%', label: 'Client Retention', color: '#5B3AEE' },
    { number: '24/7', label: 'Customer Support', color: '#219BE6' },
    { number: '2-4', label: 'Weeks Delivery', color: '#00ACCE' }
  ];

  return (
    <div id="about" className="w-full px-4 sm:px-6 md:px-8 py-20 md:py-28 bg-gradient-to-b from-white to-[#f8f9fa]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <FadeUp>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F39F5F]/10 mb-4">
              <span className="text-[#F39F5F] text-lg">⚡</span>
              <span className="text-[#F39F5F] text-sm font-semibold tracking-wide">Accra, Ghana</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#17012C] mb-4 leading-tight">
              Ghana's Premier Digital
              <span className="block text-[#F39F5F]">Solutions Agency</span>
            </h2>
            <p className="text-base md:text-lg text-[#666666] max-w-2xl mx-auto">
              We build clean, accessible websites and web applications that deliver real results
            </p>
          </div>
        </FadeUp>



        {/* Two Column Layout */}
        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Left Column - Main Story */}
          <FadeLeft>
            <div className="lg:w-1/2">
              {/* Hero Image */}
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-8 shadow-xl">
                <Image
                  src="/about-hero.jpg"
                  alt="Sire Prince Agency Team"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#17012C]/40 to-transparent"></div>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-[#17012C] mb-4">
                Your Vision, Our Expertise
              </h3>
              
              <p className="text-[#555555] leading-relaxed mb-4">
                Headquartered in Accra, Ghana, <strong className="text-[#F39F5F]">Sire Prince Agency</strong> has established itself as the provider of choice for top companies and small businesses alike. We specialize in building clean, accessible websites and web applications that drive measurable results.
              </p>
              
              <p className="text-[#555555] leading-relaxed mb-4">
                Our creative web services consistently exceed customer expectations, generating traffic that converts into qualified leads. From responsive website design and e-commerce solutions to branding and SEO, we help businesses stand out in Ghana's competitive market.
              </p>
              
              <p className="text-[#555555] leading-relaxed mb-6">
                We go beyond traditional offerings with complimentary services including social media management, website hosting, and digital printing — making us a true full-service digital partner.
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-[#F39F5F] text-xl">🏆</span>
                  <span className="text-sm font-medium text-[#17012C]">Top Rated Agency</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#F39F5F] text-xl">⭐</span>
                  <span className="text-sm font-medium text-[#17012C]">5-Star Client Reviews</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#F39F5F] text-xl">🇬🇭</span>
                  <span className="text-sm font-medium text-[#17012C]">Proudly Ghanaian</span>
                </div>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, idx) => (
                  <div key={idx} className="text-center p-3 bg-white rounded-xl shadow-sm">
                    <div className="text-xl md:text-2xl font-bold" style={{ color: stat.color }}>{stat.number}</div>
                    <div className="text-xs text-[#666666]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeLeft>

          {/* Right Column - Services & CTA */}
          <FadeRight>
            <div className="lg:w-1/2">
              
              {/* Services Card */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 mb-8">
                <h4 className="font-bold text-xl text-[#17012C] mb-6 text-center">
                  What We Deliver
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {services.map((service, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#f8f9fa] transition-all duration-200">
                      <div className="text-xl">{service.icon}</div>
                      <div>
                        <div className="w-2 h-2 rounded-full mb-1" style={{ backgroundColor: service.color }}></div>
                        <span className="text-sm text-[#555555]">{service.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-gradient-to-br from-[#17012C] to-[#2A0A4A] rounded-2xl p-6 md:p-8 mb-8 text-white">
                <h4 className="font-bold text-xl mb-4">Why Choose Sire Prince Agency?</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-[#F39F5F] text-lg">✓</span>
                    <span className="text-sm text-gray-200">Full-service digital solutions under one roof</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#F39F5F] text-lg">✓</span>
                    <span className="text-sm text-gray-200">Clean, accessible websites that drive results</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#F39F5F] text-lg">✓</span>
                    <span className="text-sm text-gray-200">Trusted by top companies and small businesses</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#F39F5F] text-lg">✓</span>
                    <span className="text-sm text-gray-200">Accra-based with round-the-clock support</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#F39F5F] text-lg">✓</span>
                    <span className="text-sm text-gray-200">Proven track record of exceeding expectations</span>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="text-center">
                <Link href="/contact">
                  <button className="w-full px-8 py-4 bg-[#F39F5F] text-white font-bold rounded-xl hover:bg-[#E8893E] transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    Start Your Project Today →
                  </button>
                </Link>
                <p className="text-xs text-[#999999] mt-4">
                  Join 50+ satisfied businesses across Ghana
                </p>
              </div>
            </div>
          </FadeRight>
        </div>

        {/* Bottom Quote */}
        <FadeUp>
          <div className="text-center mt-16 pt-8 border-t border-gray-200">
            <p className="text-[#17012C] text-lg md:text-xl italic">
              "Arguably one of the finest web design agencies you can find in Accra, Ghana"
            </p>
            <p className="text-[#F39F5F] text-sm mt-2 font-semibold">— Trusted by clients across Ghana</p>
          </div>
        </FadeUp>
      </div>
    </div>
  );
};

export default About;