import React from 'react'
import { FadeUp } from '../components/Reveal'
import Link from 'next/link'
const Banner = () => {
  return (
    <FadeUp>
      <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 border-1 border-[#EAF3F8] ">
        <div className="max-w-7xl mx-auto">
          
          {/* Block 1 - Services Tags */}
          <div className="text-center mb-10">
            <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
              {["", "Web Development", "ECommerce", "SEO", "Brand Design", "App Development", "Graphic Design", "Website Maintenance", ""].map((tag, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 rounded-full bg-[#EAF3F8] border border-[#5B3AEE]/20 text-[#17012C] text-sm font-medium hover:border-[#F39F5F]/40 hover:bg-[#ECF8FF] transition-all duration-300 hover:scale-105"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Block 2 - Main Headline */}
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#17012C] leading-tight">
              World-class Web Design <span className="text-[#F39F5F]">&</span> <br />
             Digital Marketing Company
            </h2>
          </div>

          {/* Block 3 - Description */}
          <div className="max-w-4xl mx-auto p-3 text-center">
            <p className="text-[#333333] text-base md:text-lg leading-relaxed">
              As a top-rated Ghana web design company and the best among any top ten list of web development companies in Ghana, 
              our team continues to assist companies boost their businesses online by providing customized website design 
              and digital marketing services tailored to meet client objectives effectively and increase revenue. 
              Take a look at our case studies for a preview of the quality results we deliver to our clients.
            </p>
            
            {/* CTA Button */}
                              <Link href="/contact" className="shrink-0">

            <div className="mt-8">
                            <button className="px-6 py-2.5 bg-gradient-to-r from-[#FF5C33] to-[#FF2D46] text-white rounded-sm font-medium hover:from-[#FF2D46] hover:to-[#FF5C33] transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer" style={{ fontFamily: 'Figtree, sans-serif' }}>
                View Our Case Studies →
                            </button>
                       
            </div>
               </Link>
          </div>

        </div>
      </section>
    </FadeUp>
  )
}

export default Banner