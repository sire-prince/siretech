'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { 
  FadeUp, 
  FadeDown, 
  FadeLeft, 
  FadeRight 
} from '../components/Reveal';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const testimonialsData = [
    {
      name: "Sarah Mensah",
      company: "Skyline Haven",
      role: "CEO",
      image: "/test1.jpg",
      description: "They delivered a stunning website that increased our conversions by 40%. The attention to detail and understanding of our brand vision was exceptional.",
      rating: 5
    },
    {
      name: "Michael Ofori",
      company: "TechGhana",
      role: "Founder",
      image: "/test2.jpg",
      description: "Working with this web development team transformed our online presence completely. Highly recommended for enterprise-level projects.",
      rating: 5
    },
    {
      name: "Amanda Quaye",
      company: "AfriCommerce",
      role: "Marketing Director",
      image: "/test3.jpg",
      description: "They created a scalable platform that's grown with us, and their strategic insights helped position us perfectly in the market. The ROI has been incredible.",
      rating: 5
    },
    {
      name: "David Appiah",
      company: "Corporate GH",
      role: "Operations Manager",
      image: "/test4.jpg",
      description: "The corporate website redesign project was handled with utmost professionalism. Their project management kept everything on schedule and within budget.",
      rating: 5
    },
    {
      name: "Esi Boateng",
      company: "Creative Studios",
      role: "Artist",
      image: "/test5.jpg",
      description: "I needed a portfolio website that truly showcased my artistic work, and wow, did they deliver! The admin panel is so easy to use - I can update my portfolio in minutes.",
      rating: 5
    },
    {
      name: "Kwame Asare",
      company: "Tasty Bites",
      role: "Owner",
      image: "/test6.jpg",
      description: "Their restaurant-specific solutions transformed our business during challenging times. Online orders increased by 200% within the first month.",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1280) {
        setCardsToShow(3);
      } else if (window.innerWidth >= 768) {
        setCardsToShow(2);
      } else {
        setCardsToShow(1);
      }
    };
    
    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + cardsToShow >= testimonialsData.length ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, testimonialsData.length - cardsToShow) : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const visibleTestimonials = testimonialsData.slice(currentIndex, currentIndex + cardsToShow);
  const totalSlides = Math.ceil(testimonialsData.length / cardsToShow);

  return (
    <div className="relative overflow-hidden bg-linear-to-b from-[#f8f9fa] to-white py-20 md:py-28">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#F39F5F]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#5B3AEE]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="testimonials">
        
        {/* Section Header */}
    
   <FadeUp>
                  <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#17012C] mb-3">
              What Our Clients 
<span className="text-[#F39F5F]">  Say</span>
                    </h2>
                    <p className="text-[#666666] max-w-2xl mx-auto">
              We diliver the best work and experience for our clients — hear from businesses we have helped transform
                    </p>
                  </div>
                </FadeUp>
        {/* Testimonials Carousel */}
        <div className="relative overflow-hidden px-2">
          <div 
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
          >
            {testimonialsData.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 group"
                style={{ width: `${100 / cardsToShow}%` }}
              >
                <FadeUp delay={index * 0.1}>
                  <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 h-full">
                    {/* Quote Icon */}
                    <div className="mb-4">
                      <FaQuoteLeft className="text-3xl text-[#F39F5F]/30" />
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6 line-clamp-4">
                      "{testimonial.description}"
                    </p>
                    
                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-[#F39F5F] text-lg">★</span>
                      ))}
                    </div>
                    
                    {/* Client Info */}
                    <div className="flex items-center gap-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#F39F5F]/20">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#17012C] text-sm md:text-base">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs text-gray-500">
                          {testimonial.role} • {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <FadeLeft>
          <div className="flex justify-center items-center gap-4 mt-10">
            {/* Previous Button */}
            <button 
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white border border-gray-200 hover:bg-[#F39F5F] hover:text-white hover:border-[#F39F5F] transition-all duration-300 cursor-pointer group"
              aria-label="Previous testimonials"
            >
              <FaChevronLeft className="w-4 h-4 text-gray-600 group-hover:text-white" />
            </button>
            
            {/* Dot Indicators */}
            <div className="flex gap-2">
              {[...Array(totalSlides)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index * cardsToShow)}
                  className={`transition-all duration-300 rounded-full ${
                    Math.floor(currentIndex / cardsToShow) === index
                      ? 'w-8 h-2 bg-[#F39F5F]'
                      : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Next Button */}
            <button 
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white border border-gray-200 hover:bg-[#F39F5F] hover:text-white hover:border-[#F39F5F] transition-all duration-300 cursor-pointer group"
              aria-label="Next testimonials"
            >
              <FaChevronRight className="w-4 h-4 text-gray-600 group-hover:text-white" />
            </button>
          </div>
        </FadeLeft>

     
      </div>
    </div>
  );
};

export default Testimonials;