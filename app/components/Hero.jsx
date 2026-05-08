'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { FadeUp, FadeLeft } from '../components/Reveal';

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

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Slide data - each with unique image, message, and CTA
  const slides = [
    {
      src: "/hero1.jpg",
      alt: "Digital Agency Hero",
      badge: "🚀 LIMITED OFFER",
      badgeColor: colors.accent,
      headline: "We create amazing websites for world-class tech companies",
      description: "Software development agency crafting world-class websites and digital experiences for tech companies that want to stand out and scale.",
      ctaText: "START YOUR PROJECT",
      ctaLink: "/contact",
      secondaryCta: "View Portfolio",
      secondaryLink: "/portfolio",
      trustText: "Trusted by 10+ businesses"
    },
    {
      src: "/hero2.jpg",
      alt: "Software Development",
      badge: "⚡ FLASH SALE - 30% OFF",
      badgeColor: colors.blue,
      headline: "Best Web Design Company in Ghana for SMEs & Institutions",
      description: "Ghana's leading web design agency serving SMEs and institutions with custom, responsive websites that drive growth and digital transformation.",
      ctaText: "CLAIM 30% OFF NOW",
      ctaLink: "/contact",
      secondaryCta: "See Case Studies",
      secondaryLink: "/#works",
      trustText: "Serving 20+ companies"
    },
    {
      src: "/hero3.jpg",
      alt: "Custom Solutions",
      badge: "🎯 FREE CONSULTATION",
      badgeColor: colors.primaryLight,
      headline: "Tailored Software Solutions for Your Business",
      description: "Custom software solutions built specifically for your business needs. From concept to launch in 2-4 weeks, we deliver MVPs that get results.",
      ctaText: "BOOK FREE CALL",
      ctaLink: "/contact",
      secondaryCta: "View Pricing",
      secondaryLink: "/pricing",
      trustText: "Average 2-week delivery"
    },
    {
      src: "/hero4.jpg",
      alt: "Client Success",
      badge: "🏆 TOP RATED AGENCY",
      badgeColor: colors.accent,
      headline: "The right solutions will help you achieve them faster",
      description: "Get the right software solutions tailored to your goals. Our dedicated full-stack team delivers measurable results with 100% satisfaction guaranteed.",
      ctaText: "GET QUOTE TODAY",
      ctaLink: "/contact",
      secondaryCta: "Our Work",
      secondaryLink: "/#works",
      trustText: "5-star client reviews"
    }
  ];

  // Navigation functions
  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Auto change slide every 10 seconds (slower timing)
  useEffect(() => {
    const timer = setInterval(() => {
      goToNextSlide();
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  const current = slides[currentSlide];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image Carousel */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url('${slide.src}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      ))}

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Left Navigation Arrow - hover color matches current slide's badge color */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-4 md:left-8 z-20 p-2 md:p-3 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm transition-all duration-300 hover:scale-110 cursor-pointer group"
        aria-label="Previous slide"
      >
        <svg 
          className="w-6 h-6 md:w-8 md:h-8 text-white transition-colors" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          style={{ transition: 'color 0.3s' }}
          onMouseEnter={(e) => e.currentTarget.style.color = current.badgeColor}
          onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Navigation Arrow - hover color matches current slide's badge color */}
      <button
        onClick={goToNextSlide}
        className="absolute right-4 md:right-8 z-20 p-2 md:p-3 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm transition-all duration-300 hover:scale-110 cursor-pointer group"
        aria-label="Next slide"
      >
        <svg 
          className="w-6 h-6 md:w-8 md:h-8 text-white transition-colors" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          style={{ transition: 'color 0.3s' }}
          onMouseEnter={(e) => e.currentTarget.style.color = current.badgeColor}
          onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-36">
        <FadeLeft key={currentSlide}>
          <div className="max-w-6xl">
          
            {/* Dynamic Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
              {current.headline} 
            </h1>
            
            {/* Dynamic Description */}
            <p className="text-xl leading-relaxed mt-6 text-gray-200 max-w-lg">
              {current.description}
            </p>
            
            {/* Dynamic CTA Buttons */}
            <div className="flex flex-col items-center sm:flex-row gap-6 mt-10">
              <FadeUp>
                <Link href="/contact" className="shrink-0">
                  <button className="px-6 py-2.5 bg-gradient-to-r from-[#FF5C33] to-[#FF2D46] text-white rounded-sm font-medium hover:from-[#FF2D46] hover:to-[#FF5C33] transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer" style={{ fontFamily: 'Figtree, sans-serif' }}>
                    Get In Touch
                  </button>
                </Link>
              </FadeUp>
              
              <FadeUp delay={0.2}>
                <Link href={current.secondaryLink}>
                  <button 
                    className="px-5 py-2.5 font-semibold rounded-sm transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                    style={{ 
                      background: 'transparent',
                      border: `2px solid white`,
                      color: 'white'
                    }}
                  >
                    {current.secondaryCta} →
                  </button>
                </Link>
              </FadeUp>
            </div>

            {/* Dynamic Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-12 pt-6 border-t border-white/20">
  
   {/* Rating / Reviews */}
  <div className="flex items-center gap-4">
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
        </svg>
      ))}
    </div>
    <div>
      <p className="font-semibold text-white text-sm">4.9/5</p>
      <p className="text-xs text-gray-300">from 50+ reviews</p>
    </div>
  </div>

  

 
  {/* Years of Experience / Projects */}
  <div className="flex items-center gap-3">
    <div className="text-center">
      <p className="font-bold text-white text-xl">150+</p>
      <p className="text-xs text-gray-300">Projects</p>
    </div>
    <div className="w-px h-8 bg-white/20" />
    <div className="text-center">
      <p className="font-bold text-white text-xl">24/7</p>
      <p className="text-xs text-gray-300">Support</p>
    </div>

    <div className="w-px h-8 bg-white/20" />
    <div className="text-center">
      <p className="font-bold text-white text-xl">100%</p>
      <p className="text-xs text-gray-300">Delivery</p>
    </div>
  </div>
</div>
          </div>
        </FadeLeft>
      </div>

      {/* Slide Indicators (Bottom Center) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex gap-3">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide ? 'w-8 h-2' : 'w-2 h-2'
            }`}
            style={{ 
              background: index === currentSlide ? slides[currentSlide].badgeColor : 'rgba(255,255,255,0.5)'
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

   
    </section>
  )
}

export default Hero