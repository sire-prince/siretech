'use client'

import React, { useState } from 'react';
import Corevalues from '../components/Corevalues';
import Testimonials from '../components/Testimonials';
import Myprocess from '../components/Myprocess';
import Faq from '../components/Faq';
import { 
  FadeUp, 
  FadeDown, 
  FadeLeft, 
  FadeRight 
} from '../components/Reveal';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaClock,
  FaWhatsapp,
  FaCheckCircle,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaArrowRight,
  FaRegClock
} from 'react-icons/fa';

// Your exact color palette from hero section
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

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch('https://formspree.io/f/xqaozrnb', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        event.currentTarget.reset();
        
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsLoading(false);
    }
  }

  const contactInfo = [
    {
      icon: <FaWhatsapp className="text-lg" />,
      title: "WhatsApp",
      value: "+233 245 546 7337",
      link: "https://wa.me/233245546733",
      color: "#25D366",
      description: "Quick response within minutes"
    },
    {
      icon: <FaEnvelope className="text-lg" />,
      title: "Email",
      value: "prince.akpadie@gmail.com",
      link: "mailto:prince.akpadie@gmail.com",
      color: colors.accent,
      description: "We reply within 24 hours"
    },
    {
      icon: <FaPhone className="text-lg" />,
      title: "Phone",
      value: "+233 233 245 546 733",
      link: "tel:+233 233 245 546 733",
      color: colors.primaryLight,
      description: "Mon-Fri, 9am-6pm"
    },
    {
      icon: <FaMapMarkerAlt className="text-lg" />,
      title: "Location",
      value: "Accra Digital Centre",
      link: "https://maps.google.com",
      color: colors.blue,
      description: "Accra, Ghana"
    }
  ];

  const socialLinks = [
    { icon: <FaFacebook className="w-4 h-4" />, link: "https://www.facebook.com/share/17UH3buTEp/", color: "#1877F2", name: "Facebook" },
    { icon: <FaInstagram className="w-4 h-4" />, link: "https://www.instagram.com/sire_prince_7/", color: "#E4405F", name: "Instagram" },
    { icon: <FaTiktok className="w-4 h-4" />, link: "https://www.tiktok.com/@sire_prince", color: "#010101", name: "TikTok" },
    { icon: <FaLinkedin className="w-4 h-4" />, link: "https://www.linkedin.com/in/sire-prince-037a7a31b/", color: "#0A66C2", name: "LinkedIn" }
  ];

  return (
  
    <>
    
      <section id="contact" className="relative w-full overflow-hidden" style={{ 
      background: 'transparent',
    }}>
      
      {/* Generic Header - Centered above columns */}
    <div className="relative w-full h-[300px] md:h-[350px] overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
       style={{ 
         backgroundImage: "url('/about-banner.jpg')",
       }}>
  </div>
  
  {/* Dark Overlay */}
  <div className="absolute inset-0" style={{ 
    background: 'linear-gradient(135deg, rgba(23,1,44,0.8) 0%, rgba(91,58,238,0.8) 100%)'
  }}></div>
  
  {/* Content */}
  <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
    <FadeDown>
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 mx-5">
     We are Ghana's trusted leader in  software  <br />and business solutions.</h1>
    </FadeDown>
  </div>
</div>
   <div className="relative z-10 w-full text-center px-4 sm:px-6 md:px-8 pt-12 md:pt-16 pb-6 md:pb-8">
        <FadeDown>
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#17012C] mb-3">
                 About
               <span className="text-[#F39F5F]"> US</span>
            </h2>
            <p className="text-[#666666] max-w-2xl mx-auto">
We are a software development agency based in Accra, Ghana, dedicated to turning business ideas into powerful digital solutions            </p>
          </div>
        </FadeDown>
      </div>
      {/* Full width layout - two columns */}
      <div className="relative w-full flex flex-col lg:flex-row min-h-[300px]">
        
        {/* LEFT SIDE - With Background Image only */}
        <div className="relative w-full lg:w-1/2 overflow-hidden">
          {/* Background Image with light overlay */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                 style={{ 
                   backgroundImage: "url('/about-bg.jpg')",
                 }}>
            </div>
            {/* Very light overlay for text readability */}
            <div className="absolute inset-0" style={{ 
              background: 'linear-gradient(135deg, rgba(23,1,44,0.8) 0%, rgba(91,58,238,0.8) 100%)'
            }}></div>
          </div>

          {/* Animated blobs on left side */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 rounded-full mix-blend-screen filter blur-3xl animate-pulse" 
                 style={{ background: colors.accent }}></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full mix-blend-screen filter blur-3xl animate-pulse delay-1000" 
                 style={{ background: colors.blue }}></div>
          </div>

          {/* Left Side Content - Contact Cards */}
          <div className="relative z-10 flex flex-col justify-center h-full px-6 sm:px-8 md:px-12 py-12 md:py-16">
            <FadeDown>
              <h2 className="text-xl md:text-6xl font-bold text-[#17012C] mb-10">
                <span className="text-[#ffffff]"> 
We build solutions that solve real business problems       
           </span>
              </h2>
            </FadeDown>
          
          </div>
        </div>

      {/* RIGHT SIDE - Contact Form - FULL WIDTH */}
<div className="w-full lg:w-1/2 flex items-center justify-center px-6 sm:px-8 md:px-12 py-12 md:py-16">
  <FadeRight>
    <div className="w-full">
      <div className="mb-8">
        <h3 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: colors.primary }}>
          Making a Difference Together
        </h3>
        <p className="text-md leading-relaxed" style={{ color: colors.textMuted }}>
          <strong>SireTech</strong> specializes in the design, development, and implementation of custom applications, software, and digital marketing solutions. Founded with a vision to make quality technology accessible, we have grown into a trusted partner for businesses across Ghana and beyond.
        </p>
        <p className="text-md leading-relaxed mt-4" style={{ color: colors.textMuted }}>
          <strong>What makes us different?</strong>
          <br />
          We are technology agnostic — meaning we select the right tools for each unique project rather than locking you into a single platform. This approach ensures innovative solutions that align precisely with your specific needs.
        </p>
        <p className="text-md leading-relaxed mt-4" style={{ color: colors.textMuted }}>
          What truly sets us apart is our dedication to building lasting relationships. We believe in lifetime commitment to our clients through reliable, exceptional, and trustworthy support — from launch day and every day after.
        </p>
      </div>
      
      <div className="mb-6">
        <h3 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: colors.primary }}>
          Why SireTech?
        </h3>
        <p className="text-md leading-relaxed mb-4" style={{ color: colors.textMuted }}>
          You have a vision. Perhaps it is an application that simplifies a complex process. A website that authentically represents your brand. Software that saves your team valuable time each week.
        </p>
        
        <div className="space-y-4">
          <div>
            <strong className="block text-[#17012C] mb-1">1. Speed That Respects Your Time</strong>
            <p className="text-sm" style={{ color: colors.textMuted }}>We deliver working MVPs in 2–4 weeks — fast enough to maintain momentum, thorough enough to deliver quality.</p>
          </div>
          
          <div>
            <strong className="block text-[#17012C] mb-1">2. Technology Agnostic — We Speak Your Language</strong>
            <p className="text-sm" style={{ color: colors.textMuted }}>React, Next.js, Node.js, Python, Flutter — we listen to your needs first, then select the right technology for your project.</p>
          </div>
          
          <div>
            <strong className="block text-[#17012C] mb-1">3. Built for Business Success</strong>
            <p className="text-sm" style={{ color: colors.textMuted }}>Every line of code serves a business goal — whether automating workflows, generating leads, or improving operational efficiency.</p>
          </div>
          
          <div>
            <strong className="block text-[#17012C] mb-1">4. Lifetime Commitment Beyond Launch</strong>
            <p className="text-sm" style={{ color: colors.textMuted }}>We provide ongoing support, regular maintenance, and a dedicated team invested in your long-term success — before, during, and after launch.</p>
          </div>
          
          <div>
            <strong className="block text-[#17012C] mb-1">5. Performance-Driven Results</strong>
            <p className="text-sm" style={{ color: colors.textMuted }}>We build solutions designed to deliver measurable outcomes — increased sales, faster operations, and improved user engagement.</p>
          </div>
          
          <div>
            <strong className="block text-[#17012C] mb-1">6. Local Roots, Global Reach</strong>
            <p className="text-sm" style={{ color: colors.textMuted }}>Based in Accra, we understand the local business landscape — from mobile money integrations to offline-first considerations — while serving clients worldwide.</p>
          </div>
          
          <div>
            <strong className="block text-[#17012C] mb-1">7. Built on Referrals</strong>
            <p className="text-sm" style={{ color: colors.textMuted }}>Our growth comes from client referrals and trusted partnerships — a testament to the quality and reliability of our work.</p>
          </div>
          
          <div>
            <strong className="block text-[#17012C] mb-1">8. Transparent Pricing, Clear Expectations</strong>
            <p className="text-sm" style={{ color: colors.textMuted }}>Fixed prices with clear milestones: 50% upfront, 25% at milestone completion, 25% upon final delivery. No hidden fees, straightforward billing.</p>
          </div>
        </div>
      </div>
    </div>
  </FadeRight>
</div>
      </div>
    </section>
      <Corevalues />
    <Testimonials />
    <Myprocess />
    <Faq/>
    </>
  );
};

export default Contact;