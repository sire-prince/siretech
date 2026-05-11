'use client'

import React, { useState, useRef } from 'react';
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
  const [buttonText, setButtonText] = useState('Send Message');
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setButtonText('Sending...');

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch('https://formspree.io/f/xojrkzgw', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        // Reset form using ref instead of event.currentTarget
        if (formRef.current) {
          formRef.current.reset();
        }
        
        // Change button to "Sent!"
        setButtonText('Sent! ✓');
        setIsSubmitted(true);
        
        // Reset button back to "Send Message" after 3 seconds
        setTimeout(() => {
          setButtonText('Send Message');
          setIsSubmitted(false);
        }, 3000);
      } else {
        setButtonText('Send Message');
        const errorData = await response.json();
        console.error('Form error:', errorData);
        alert('There was an error sending your message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setButtonText('Send Message');
      alert('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  }

  const contactInfo = [
    {
      icon: <FaWhatsapp className="text-lg" />,
      title: "WhatsApp",
      value: "+233 245 546 733",
      link: "https://wa.me/233245546733",
      color: "#25D366",
      description: "Quick response within minutes"
    },
   
    {
      icon: <FaPhone className="text-lg" />,
      title: "Phone",
      value: "+233 245 546 733",
      link: "tel:+233245546733",
      color: colors.primaryLight,
      description: "Mon-Fri, 9am-6pm"
    },
    {
      icon: <FaMapMarkerAlt className="text-lg" />,
      title: "Location",
      value: "Ghana Accra, Tema",
      link: "https://maps.google.com",
      color: colors.blue,
      description: "We also work remotely with clients worldwide"
    }
  ];

  const socialLinks = [
    { icon: <FaFacebook className="w-4 h-4" />, link: "https://www.facebook.com/share/17UH3buTEp/", color: "#1877F2", name: "Facebook" },
    { icon: <FaInstagram className="w-4 h-4" />, link: "https://www.instagram.com/sire_prince_7/", color: "#E4405F", name: "Instagram" },
    { icon: <FaTiktok className="w-4 h-4" />, link: "https://www.tiktok.com/@sire_prince", color: "#010101", name: "TikTok" },
    { icon: <FaLinkedin className="w-4 h-4" />, link: "https://www.linkedin.com/in/sire-prince-037a7a31b/", color: "#0A66C2", name: "LinkedIn" }
  ];

  return (
    <section id="contact" className="relative w-full overflow-hidden" style={{ 
      background: 'transparent',
    }}>
      
      {/* Generic Header - Centered above columns */}
      <div className="relative z-10 w-full text-center px-4 sm:px-6 md:px-8 pt-12 md:pt-16 pb-6 md:pb-8">
        <FadeDown>
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#17012C] mb-3">
              Get In Touch
              <span className="text-[#F39F5F]">  With Us</span>
            </h2>
            <p className="text-[#666666] max-w-2xl mx-auto font-bold">
              Whether you have a project in mind or just want to say hello, we'd love to hear from you.
            </p>
          </div>
        </FadeDown>
      </div>

      {/* Full width layout - two columns */}
      <div className="relative w-full flex flex-col lg:flex-row min-h-[500px]">
        
        {/* LEFT SIDE - With Background Image only */}
        <div className="relative w-full lg:w-1/2 overflow-hidden">
          {/* Background Image with light overlay */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                 style={{ 
                   backgroundImage: "url('/contact-bg.jpeg')",
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
              <h2 className="text-xl md:text-2xl font-bold text-[#17012C] mb-10">
                <span className="text-[#ffffff]"> Our team members will get back to you within 24 business hours to schedule a project discovery call. </span>
              </h2>
            </FadeDown>
            <FadeLeft>
              {/* Contact Cards */}
              <div className="space-y-3">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-3 rounded-sm transition-all duration-300 hover:translate-x-1"
                    style={{ 
                      background: 'rgba(255,255,255,0.1)',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${info.color}20` }}
                    >
                      <div style={{ color: info.color }} className="text-lg">{info.icon}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xs text-gray-300">{info.title}</h3>
                      <p className="text-white font-medium text-sm">{info.value}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{info.description}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 pt-6 mt-4 border-t border-white/10">
                <span className="text-xs text-gray-400">Follow us:</span>
                <div className="flex items-center gap-2">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      target="_blank"
                      href={social.link}
                      className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-all duration-300 hover:bg-white/20"
                      style={{ color: social.color }}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </FadeLeft>
          </div>
        </div>

        {/* RIGHT SIDE - Contact Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-6 sm:px-8 md:px-12 py-12 md:py-16">
          <FadeRight>
            <div className="w-full">
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: colors.primary }}>
                  Send us a message
                </h3>
                <p className="text-sm" style={{ color: colors.textMuted }}>Fill out the form and we will get back to you shortly.</p>
              </div>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: colors.textDark }}>
                    Name or Business Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#F39F5F] focus:ring-2 focus:ring-[#F39F5F]/20 transition-all text-sm"
                    style={{ 
                      background: 'white',
                      borderColor: '#e0e0e0',
                      color: colors.textDark
                    }}
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: colors.textDark }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#F39F5F] focus:ring-2 focus:ring-[#F39F5F]/20 transition-all text-sm"
                    style={{ 
                      background: 'white',
                      borderColor: '#e0e0e0',
                      color: colors.textDark
                    }}
                    placeholder="hello@example.com"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: colors.textDark }}>
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#F39F5F] focus:ring-2 focus:ring-[#F39F5F]/20 transition-all text-sm"
                      style={{ 
                        background: 'white',
                        borderColor: '#e0e0e0',
                        color: colors.textDark
                      }}
                      placeholder="+233 XX XXX XXXX"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: colors.textDark }}>
                      Project Type *
                    </label>
                    <select
                      name="project"
                      required
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#F39F5F] focus:ring-2 focus:ring-[#F39F5F]/20 transition-all text-sm"
                      style={{ 
                        background: 'white',
                        borderColor: '#e0e0e0',
                        color: colors.textDark
                      }}
                    >
                      <option value="">Select project type</option>
                      <option value="website">Website Development</option>
                      <option value="mobile">Mobile App Development</option>
                      <option value="seo">SEO & Digital Marketing</option>
                      <option value="maintenance">Website Maintenance</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: colors.textDark }}>
                    Budget Range (Optional)
                  </label>
                  <select
                    name="budget"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#F39F5F] focus:ring-2 focus:ring-[#F39F5F]/20 transition-all text-sm"
                    style={{ 
                      background: 'white',
                      borderColor: '#e0e0e0',
                      color: colors.textDark
                    }}
                  >
                    <option value="">Select budget range</option>
                    <option value="under-2k">Under GHS 2,000</option>
                    <option value="2k-5k">GHS 2,000 - GHS 5,000</option>
                    <option value="5k-15k">GHS 5,000 - GHS 15,000</option>
                    <option value="15k-30k">GHS 15,000 - GHS 30,000</option>
                    <option value="30k+">GHS 30,000+</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: colors.textDark }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#F39F5F] focus:ring-2 focus:ring-[#F39F5F]/20 transition-all resize-vertical text-sm"
                    style={{ 
                      background: 'white',
                      borderColor: '#e0e0e0',
                      color: colors.textDark
                    }}
                    placeholder="Tell us about your project..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isLoading}
                  className="relative w-full px-6 py-2.5 text-white bg-gradient-to-r from-[#FF5C33] to-[#FF2D46] font-medium hover:from-[#FF2D46] hover:to-[#FF5C33] rounded-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden cursor-pointer text-sm group"
                  style={{ 
                    color: colors.bg,
                    boxShadow: `0 4px 15px ${colors.accent}40`,
                    opacity: isLoading ? 0.8 : 1
                  }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {buttonText}
                    {!isSubmitted && buttonText === 'Send Message' && (
                      <FaArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    )}
                    {buttonText === 'Sent! ✓' && (
                      <FaCheckCircle className="w-3.5 h-3.5" />
                    )}
                  </span>
                </button>

                <p className="text-center text-[10px] mt-4" style={{ color: colors.textMuted }}>
                  By submitting, you have taken the first step towards bringing your vision to life.
                </p>
              </form>
            </div>
          </FadeRight>
        </div>
      </div>
    </section>
  );
};

export default Contact;