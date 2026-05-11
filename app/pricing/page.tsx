'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  FadeUp, 
  FadeDown, 
  FadeLeft, 
  FadeRight 
} from '../components/Reveal';
import { 
  FaCheckCircle, 
  FaArrowRight,
  FaGlobe,
  FaMobile,
  FaSearch,
  FaTools,
  FaPaintBrush,
  FaPalette
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

const ServicesPricing = () => {
  const [activeService, setActiveService] = useState(null);
  const [showPricing, setShowPricing] = useState(true);

 const services = [
  {
    id: 'web-development',
    title: 'Web Development',
    icon: <FaGlobe className="w-5 h-5" />,
    color: '#334153',
    fullDescription: `High-performance web applications built with Next.js and the MERN stack. We build responsive, fast, and secure solutions that solve real business problems, optimized for the Ghanaian market.`,
    industries: ['E-commerce', 'Institutional', 'Real Estate', 'Healthcare', 'Hospitality', 'Education', 'Logistics', 'Religious Organizations', 'Startups', 'Corporate'],
    pricing: {
      starter: 2500,
      business: 7500, // Adjusted for Next.js/MERN value
      enterprise: 25000 // Scaled for custom software & AI integration
    },
    features: {
      starter: [
        'Up to 5 Pages (Next.js/React)',
        'Mobile-First Responsive Design',
        'Direct WhatsApp Link Integration',
        'Basic SEO & Meta Tags setup',
        'Social Media Integration',
        'Google Analytics 4 Setup',
        '30 Days Technical Support'
      ],
      business: [
        'Up to 15 Pages / Custom CMS',
        'Progressive Web App (PWA) Capability',
        'WhatsApp Business API Automation',
        'Advanced On-page SEO Optimization',
        'Paystack / Hubtel / MoMo Integration',
        'Custom Database (MongoDB/PostgreSQL)',
        'Google Search Console Setup',
        '3 Months Priority Support'
      ],
      enterprise: [
        'Unlimited Custom Functionality',
        'AI-Powered Customer Support Bot',
        'Scalable Microservices Architecture',
        'Enterprise SEO Strategy',
        'Advanced Analytics & Heatmaps',
        'Full E-commerce Ecosystem',
        'API Design & Integration',
        '24/7 Priority Support (SLA)',
        '12 Months Managed Support'
      ]
    },
    deliveryTime: {
      starter: '2-3 weeks',
      business: '4-6 weeks',
      enterprise: '10-14 weeks'
    }
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Apps',
    icon: <FaMobile className="w-5 h-5" />,
    color: '#5B3AEE',
    fullDescription: `Native and cross-platform mobile applications using React Native and Flutter. Reach your customers on both iOS and Android with integrated local payment solutions.`,
    industries: ['Logistics', 'Retail', 'Food Delivery', 'Banking', 'Health Tech', 'Education', 'Real Estate', 'Religious Organizations', 'Startups', 'Corporate'],
    pricing: {
      starter: 18000, 
      business: 55000,
      enterprise: 150000
    },
    features: {
      starter: [
        'Single Platform (iOS or Android)',
        'User Auth (OTP/SMS Integration)',
        'Modern UI/UX Design',
        'Basic Push Notifications',
        'Basic Analytics',
        'App Store/Play Store Submission',
        '1 Month Support'
      ],
      business: [
        'Cross-platform (iOS & Android)',
        'Social Login (Google/Apple)',
        'Mobile Money (MoMo) Integration',
        'Advanced Push Notifications',
        'Real-time Database Sync',
        'Offline Mode Functionality',
        'In-App Analytics & Behavior Tracking',
        '3 Months Priority Support'
      ],
      enterprise: [
        'Full Ecosystem (App + Web Admin)',
        'Biometric Auth (FaceID/Fingerprint)',
        'AI-Driven User Insights',
        'Advanced ASO Strategy',
        'Multiple Payment Gateways',
        'Custom API Integrations',
        '24/7 Priority Support',
        '1 Year Maintenance & SLA'
      ]
    },
    deliveryTime: {
      starter: '4-6 weeks',
      business: '8-10 weeks',
      enterprise: '16+ weeks'
    }
  },
  {
    id: 'seo',
    title: 'SEO',
    icon: <FaSearch className="w-5 h-5" />,
    color: '#219BE4',
    fullDescription: `Drive organic traffic and increase conversions with sustainable, white-hat techniques tailored for Ghanaian search trends and international competition.`,
    industries: ['E-commerce', 'Local Services', 'Blogs', 'Real Estate', 'Education'],
    pricing: {
      starter: 1500,
      business: 4000, // Adjusted for link building costs
      enterprise: 8500 // Adjusted for International & Conversion SEO
    },
    features: {
      starter: [
        'Keyword Research & Strategy',
        'On-page Optimization',
        'Meta Tags & Technical Audit',
        'Google My Business Setup',
        'Monthly Performance Report',
        'Local SEO (Tema/Accra focus)'
      ],
      business: [
        'Advanced Keyword Research',
        'Full Site Content Strategy',
        'Technical SEO Implementation',
        'Authority Link Building',
        'Competitor Gap Analysis',
        'Weekly Performance Reports',
        'Local & National SEO Focus'
      ],
      enterprise: [
        'Enterprise Keyword Strategy',
        'Full Site UI/UX Optimization',
        'Advanced Technical SEO & Schema',
        'High-Authority PR Link Building',
        'Real-time Data Dashboards',
        'International SEO targeting',
        'Conversion Rate Optimization (CRO)'
      ],
      deliveryTime: {
        starter: 'Monthly Retainer',
        business: 'Monthly Retainer',
        enterprise: 'Monthly Retainer'
      }
    }
  },
  {
    id: 'maintenance',
    title: 'Maintenance',
    icon: <FaTools className="w-5 h-5" />,
    color: '#00A9CE',
    fullDescription: `Security monitoring, daily backups, and performance optimization. We handle the technical operations so you can focus on growing your business.`,
    industries: ['All Industries'],
    pricing: {
      starter: 1000,
      business: 2500,
      enterprise: 6000 // Scaled for 24/7 dedicated monitoring
    },
    features: {
      starter: [
        'Weekly Cloud Backups',
        'Security & Uptime Monitoring',
        'Critical Bug Fixes',
        'Content Updates (5/month)',
        'Monthly Health Report',
        'Email Support'
      ],
      business: [
        'Daily Cloud Backups',
        'Advanced Firewall Protection',
        'Real-time Uptime Alerts',
        'Priority Technical Support',
        'Content Updates (20/month)',
        'Performance & Speed Optimization',
        'Weekly Reports'
      ],
      enterprise: [
        'Real-time Continuous Backups',
        'Enterprise Security Suite',
        '24/7 Dedicated Monitoring',
        'Immediate Emergency Fixes',
        'Unlimited Content Updates',
        '24/7 Priority Slack/Call Support',
        'Quarterly Security Audits',
        'SLA Guarantee (99.9% Uptime)'
      ],
      deliveryTime: {
        starter: 'Monthly Retainer',
        business: 'Monthly Retainer',
        enterprise: 'Monthly Retainer'
      }
    }
  },
  {
    id: 'brand-design',
    title: 'Brand Design',
    icon: <FaPalette className="w-5 h-5" />,
    color: '#F39F5F',
    fullDescription: `We build cohesive brand identities that resonate with your audience. From strategic discovery to comprehensive visual systems and launch strategies.`,
    industries: ['Corporate', 'Startups', 'Retail', 'Service Industry'],
    pricing: {
      starter: 2000,
      business: 6000,
      enterprise: 15000
    },
    features: {
      starter: [
        'Brand Discovery Session',
        'Primary & Secondary Logo',
        'Brand Color Palette',
        'Typography Selection',
        'Basic Style Sheet',
        '2 Weeks Delivery'
      ],
      business: [
        'Deep Strategy Discovery',
        'Multiple Logo Concepts',
        'Full Visual Identity System',
        'Brand Patterns & Illustrations',
        'Stationery Suite (Business Cards, etc.)',
        'Full Brand Messaging Guide',
        'Comprehensive Guidelines PDF'
      ],
      enterprise: [
        'Full Brand Architecture & Strategy',
        'Premium Multi-use Logo Suite',
        'Custom Iconography/Typography',
        'Full Marketing Collateral Set',
        'Brand Voice & Persona Guide',
        'Digital Asset Management Library',
        'Market Launch Strategy'
      ],
      deliveryTime: {
        starter: '2 weeks',
        business: '4 weeks',
        enterprise: '8 weeks'
      }
    }
  }
];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-GH', {
      style: 'currency',
      currency: 'GHS',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <section className="relative w-full overflow-hidden" style={{ background: 'transparent' }}>
      
      {/* Banner Section */}
      <div className="relative w-full h-[300px] md:h-[350px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
             style={{ backgroundImage: "url('/about-banner.jpg')" }}>
        </div>
        <div className="absolute inset-0" style={{ 
          background: 'linear-gradient(135deg, rgba(23,1,44,0.8) 0%, rgba(91,58,238,0.8) 100%)'
        }}>
          
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
         {/* Section Header */}
        <FadeDown>
          <div className="text-center mb-4">
        
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white/80 ">
           Get Custom Pricing
          
            </h1>
            
            <p className="text-sm md:text-base max-w-2xl mx-auto text-white/70" >
              Serving a wide range of industries with professional website and digital solutions
            </p>
          </div>
        </FadeDown>
        </div>
      </div>

      {/* Animated background blobs */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full mix-blend-screen filter blur-3xl animate-pulse" 
             style={{ background: colors.accent }}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full mix-blend-screen filter blur-3xl animate-pulse delay-1000" 
             style={{ background: colors.blue }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        
 {/* Section Header */}
        <FadeDown>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 backdrop-blur-sm mx-auto w-fit"
                 style={{ 
                   background: `${colors.accent}15`, 
                   border: `1px solid ${colors.accent}40` 
                 }}>
          </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: colors.primary }}>
           Browse Our Services & Get Custom Pricing
          
            </h1>
            
            <p className="text-sm md:text-base max-w-2xl mx-auto text-gray-500 font-bold">
              Scale As You Grow Start With A Tier And Add Specific Features Later <br />
              For GH₵ 300 – GH₵ 1,200 per upgrade
            </p>
          </div>
        </FadeDown>
        {/* Services Grid - Portfolio Style */}
      
 <FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 mb-16">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(activeService?.id === service.id ? null : service)}
                className="group p-4 transition-all duration-300 text-left w-full cursor-pointer"
                style={{
                  background: activeService?.id === service.id ? `linear-gradient(135deg, ${service.color}, ${service.color}DD)` : 'transparent',
                  borderBottom: `1px solid ${service.color}15`,
                  borderRadius: '8px'
                }}
              >
                <div className="flex flex-col w-full">
                  <h3 className="text-base md:text-lg font-semibold transition-colors duration-300" style={{ color: activeService?.id === service.id ? 'white' : service.color }}>
                    {service.title}
                  </h3>
                  <span className={`text-sm transition-transform duration-300 mt-2 ${activeService?.id === service.id ? 'rotate-180' : ''}`} style={{ color: activeService?.id === service.id ? 'rgba(255,255,255,0.7)' : service.color }}>
                    ▼
                  </span>
                </div>
              </button>
            ))}
          </div>
        </FadeUp>
        {/* Active Service Details */}
        {activeService && (
          <FadeUp>
            <div className="rounded-2xl p-6 md:p-8 mb-8" style={{ 
              background: `${activeService.color}08`,
              border: `1px solid ${activeService.color}20`
            }}>
              
              {/* Service Header with Toggle */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl" style={{ background: `${activeService.color}20` }}>
                    <div className="w-6 h-6" style={{ color: activeService.color }}>{activeService.icon}</div>
                  </div>
                  <h2 className="text-2xl font-bold" style={{ color: activeService.color }}>
                    {activeService.title}
                  </h2>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowPricing(true)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${showPricing ? 'text-white' : 'text-gray-600'}`}
                    style={{ background: showPricing ? activeService.color : '#f0f0f0' }}
                  >
                    Pricing & Packages
                  </button>
                  <button
                    onClick={() => setShowPricing(false)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${!showPricing ? 'text-white' : 'text-gray-600'}`}
                    style={{ background: !showPricing ? activeService.color : '#f0f0f0' }}
                  >
                    Overview
                  </button>
                </div>
              </div>

              {/* Overview Tab */}
              {!showPricing && (
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-1">
                    <p className="text-[#555555] leading-relaxed mb-6 text-sm md:text-base">
                      {activeService.fullDescription}
                    </p>
                    <div className="grid grid-cols-1 gap-5">
                      <div>
                        <h4 className="font-semibold text-[#17012C] mb-3">Industries We Serve</h4>
                        <div className="flex flex-wrap gap-2">
                          {activeService.industries.slice(0, 8).map((industry, idx) => (
                            <span key={idx} className="px-3 py-1.5 rounded-full text-xs font-medium" style={{ backgroundColor: `${activeService.color}15`, color: activeService.color }}>
                              {industry}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#17012C] mb-3">Delivery Time</h4>
                        <p className="text-sm text-gray-600">⏱ {activeService.deliveryTime.business}</p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-80">
                    <div className="rounded-xl p-6 text-center relative overflow-hidden" style={{ backgroundColor: `${activeService.color}15`, border: `1px solid ${activeService.color}30` }}>
                      <p className="text-sm font-medium mb-4 text-left">
                        {activeService.id === 'web-development' && "Stop losing customers to competitors with better websites. Get a professional web solution that works 24/7 to grow your business."}
                        {activeService.id === 'mobile-apps' && "85% of Ghanaians access the internet via mobile. Don't miss out on this massive market - put your business in their pocket."}
                        {activeService.id === 'seo' && "94% of users never click past the first page of Google. Get on page one or stay invisible. It's that simple."}
                        {activeService.id === 'maintenance' && "Don't let a hacked or slow website destroy your reputation. Get enterprise-grade security and performance."}
                        {activeService.id === 'graphic-design' && "Your brand is your promise to your customer. Make it memorable, make it professional, make it yours."}
                        {activeService.id === 'brand-design' && "Your brand is more than a logo. It's the entire experience. Let us help you create a brand that people love and trust."}
                      </p>
                      <Link href="/contact">
                        <button className="w-full py-3 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105" style={{ backgroundColor: activeService.color }}>
                          Get Started →
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* Pricing Tab */}
              {showPricing && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Starter Plan */}
                  <div className="rounded-xl p-5 transition-all duration-300 hover:-translate-y-1" style={{ 
                    background: 'white',
                    border: `1px solid ${activeService.color}15`
                  }}>
                    <h3 className="text-lg font-bold mb-2" style={{ color: colors.primary }}>Starter</h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold" style={{ color: activeService.color }}>
                        {formatPrice(activeService.pricing.starter)}
                      </span>
                      <span className="text-sm text-gray-500">
                        {activeService.deliveryTime.starter.includes('retainer') ? '/month' : ''}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mb-4">Delivery: {activeService.deliveryTime.starter}</p>
                    <ul className="space-y-2 mb-10">
                      {activeService.features.starter.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 py-1 text-sm">
                          <FaCheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: activeService.color }} />
                          <span className="text-gray-500 font-bold">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact">
                      <button className="w-full py-2.5 rounded-lg font-medium transition-all duration-300 text-sm" style={{ background: `${activeService.color}15`, color: activeService.color }}>
                        Get Started
                      </button>
                    </Link>
                  </div>

                  {/* Business Plan - Most Popular */}
                  <div className="rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden" style={{ 
                    background: 'white',
                    border: `2px solid ${activeService.color}`
                  }}>
                    <div className="absolute top-0 right-0">
                      <div className="text-white text-xs font-bold px-3 py-1 rounded-bl-lg" style={{ background: activeService.color }}>MOST POPULAR</div>
                    </div>
                    <h3 className="text-lg font-bold mb-2" style={{ color: colors.primary }}>Business</h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold" style={{ color: activeService.color }}>
                        {formatPrice(activeService.pricing.business)}
                      </span>
                      <span className="text-sm text-gray-500">
                        {activeService.deliveryTime.business.includes('retainer') ? '/month' : ''}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mb-4">Delivery: {activeService.deliveryTime.business}</p>
                    <ul className="space-y-2 mb-10">
                      {activeService.features.business.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 py-1 text-sm">
                          <FaCheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: activeService.color }} />
                          <span className="text-gray-500 font-bold">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact">
                      <button className="w-full py-2.5 rounded-lg font-medium transition-all duration-300 text-sm text-white" style={{ background: activeService.color }}>
                        Get Started
                      </button>
                    </Link>
                  </div>

                  {/* Enterprise Plan */}
                  <div className="rounded-xl p-5 transition-all duration-300 hover:-translate-y-1" style={{ 
                    background: 'white',
                    border: `1px solid ${activeService.color}15`
                  }}>
                    <h3 className="text-lg font-bold mb-2" style={{ color: colors.primary }}>Enterprise</h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold" style={{ color: activeService.color }}>
                        {formatPrice(activeService.pricing.enterprise)}
                      </span>
                      <span className="text-sm text-gray-500">
                        {activeService.deliveryTime.enterprise.includes('retainer') ? '/month' : ''}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mb-4">Delivery: {activeService.deliveryTime.enterprise}</p>
                    <ul className="space-y-2 mb-10">
                      {activeService.features.enterprise.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 py-1 text-sm">
                          <FaCheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: activeService.color }} />
                          <span className="text-gray-500 font-bold">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact">
                      <button className="w-full py-2.5 rounded-lg font-medium transition-all duration-300 text-sm" style={{ background: `${activeService.color}15`, color: activeService.color }}>
                        Contact Sales
                      </button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </FadeUp>
        )}

        {/* Help Section */}
        <FadeUp delay={0.2}>
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500 font-bold" >
              Need a custom package? 
              <Link href="/contact" className="ml-1 ffont-bold hover:underline" style={{ color: colors.accent }}>
                Contact us for a tailored quote →
              </Link>
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default ServicesPricing;