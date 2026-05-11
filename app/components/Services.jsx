'use client'
import React from 'react'
import { FadeUp } from '../components/Reveal'
import Link from 'next/link'

const Services = () => {
 const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Get a stunning website that attracts customers and grows your business online.",
    convertingMessage: "Get more customers online | Sell products 24/7 | Look professional",
    features: ["Beautiful Website", "Sell Online", "Mobile Friendly"],
    color: "#F39F5F",
    link: "/services/web-development",
    bgImage: "/service1.jpg"
  },
  {
    id: 2,
    title: "Mobile Apps",
    description: "Reach your customers wherever they are with a custom mobile app for your business.",
    convertingMessage: "Connect with customers anytime | Send instant offers | Build loyalty",
    features: ["Customer Engagement", "Instant Updates", "Easy to Use"],
    color: "#219BE4",
    link: "/services/mobile-apps",
    bgImage: "/service2.jpeg"
  },
  {
    id: 3,
    title: "SEO",
    description: "Get found on Google when customers are searching for what you offer.",
    convertingMessage: "Appear on page 1 of Google | Get more calls | Beat competitors",
    features: ["More Website Traffic", "Local Customers", "Grow Sales"],
    color: "#5B3AEE",
    link: "/services/seo",
    bgImage: "/service3.jpg"
  },
  {
    id: 4,
    title: "Web Maintenance",
    description: "Keep your website safe, fast, and running smoothly without any technical hassle.",
    convertingMessage: "Never worry about hackers | Always up and running | Peace of mind",
    features: ["24/7 Protection", "Fast Loading", "Automatic Backups"],
    color: "#F39F5F",
    link: "/services/maintenance",
    bgImage: "/service4.png"
  },
  {
    id: 5,
    title: "Graphic Design",
    description: "Make your business look professional and trustworthy with stunning designs.",
    convertingMessage: "Look professional | Get noticed | Build customer trust",
    features: ["Logo Design", "Business Cards", "Social Media Graphics"],
    color: "#219BE4",
    link: "/services/graphic-design",
    bgImage: "/service5.png"
  },
  {
    id: 6,
    title: "Brand Design",
    description: "Create a strong brand identity that customers remember and love.",
    convertingMessage: "Stand out from competition | Attract ideal customers | Grow fast",
    features: ["Brand Recognition", "Customer Loyalty", "Professional Image"],
    color: "#5B3AEE",
    link: "/services/brand-design",
    bgImage: "/service6.jpeg"
  }
]

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <FadeUp>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#17012C] mb-3">
              Transform Your <span className="text-[#F39F5F]">Business Today</span>
            </h2>
            <p className="text-[#666666] max-w-2xl mx-auto">
              Join 150+ businesses that have scaled with our solutions. Choose your path to growth.
            </p>
          </div>
        </FadeUp>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeUp key={service.id} delay={0.1 * index}>
              <div 
                className="group relative bg-cover bg-center rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                style={{ backgroundImage: `url('${service.bgImage}')` }}
              >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#02c2ed/70]  via-[#00A9CE]/60 to-[#17012C]/60 transition-all duration-300 group-hover:bg-[#17012C]/80" />
                
                <div className="relative z-10 p-8 min-h-[420px] flex flex-col">
                  
                  {/* Converting Message Badge */}
                  <div className="mb-4 flex items-end gap-2">
                    <span 
                      className="inline-block px-3 py-1.5 rounded-full text-xs font-bold animate-pulse"
                      style={{ 
                        background: `linear-gradient(135deg, ${service.color}, ${service.color}cc)`,
                        color: 'white'
                      }}
                    >
                      
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h3>

                  {/* Converting Message - New */}
                  <p className="text-white text-sm font-semibold mb-3">
                    {service.convertingMessage}
                  </p>

                  {/* Description */}
                  <p className="text-gray-200 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Features Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {service.features.map((feature, i) => (
                      <span 
                        key={i}
                        className="px-2 py-1 bg-white/10 backdrop-blur-sm text-white/90 text-xs rounded-md"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Learn More CTA */}
                <Link href={service.link} className="mt-auto">
                    <button    className="px-5 py-2.5 flex items-center font-semibold rounded-sm transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                    style={{ 
                      background: 'transparent',
                      border: `2px solid white`,
                      color: 'white'
                    }}>
                      Learn More
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Bottom CTA - More Converting */}
        <FadeUp delay={0.3}>
          <div className="text-center mt-16 p-8 bg-gradient-to-r from-[#F39F5F]/10 to-[#219BE4]/10 rounded-2xl">
            <p className="text-[#17012C] font-bold mb-2">Don't see what you're looking for?</p>
            <p className="text-[#666666] mb-4">We build custom solutions tailored to your unique business needs</p>
            <Link href="/contact">
              <button className="px-6 py-2.5 bg-gradient-to-r from-[#FF5C33] to-[#FF2D46] text-white rounded-sm font-medium hover:from-[#FF2D46] hover:to-[#FF5C33] transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer" style={{ fontFamily: 'Figtree, sans-serif' }}>
                      Get Free Consultation →
              </button>
            </Link>
          </div>
        </FadeUp>

      </div>
    </section>
  )
}

export default Services