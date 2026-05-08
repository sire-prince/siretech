'use client'

import React from 'react'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  FaGlobe, FaMobile, FaPaintBrush, FaTools,
  FaArrowCircleUp, FaTimes, FaBars, FaChevronDown, FaBriefcase, 
  FaEnvelope, FaHome, FaDollarSign, FaBlog, FaFolderOpen
} from 'react-icons/fa'

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout>()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
    setIsOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileOpen])

  // Handle dropdown hover with delay
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false)
    }, 200)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Our Works' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/contact', label: 'Contact' },
    { href: '/blogs', label: 'Blogs' },
    
  ]

  const solutions = [
    {
      title: 'Web Development',
      description: 'Your first digital presence',
      icon: <FaGlobe className="w-6 h-6 text-[#FF5C33]" />,
      bgGradient: 'from-[#FF5C33]/10 to-[#FF2D46]/10',
      href: '/services/web-development'
    },
    {
      title: 'Mobile Apps',
      description: 'Custom Apps for Business',
      icon: <FaMobile className="w-6 h-6 text-[#FF5C33]" />,
      bgGradient: 'from-[#FF5C33]/10 to-[#FF2D46]/10',
      href: '/services/mobile-apps'
    },
    {
      title: 'SEO',
      description: 'Let make your presence known',
      icon: <FaArrowCircleUp className="w-6 h-6 text-[#FF5C33] transform rotate-45" />,
      bgGradient: 'from-[#FF5C33]/10 to-[#FF2D46]/10',
      href: '/services/seo'
    },
    {
      title: 'Website Maintenance',
      description: 'Keep your website running smoothly',
      icon: <FaTools className="w-6 h-6 text-[#FF5C33]" />,
      bgGradient: 'from-[#FF5C33]/10 to-[#FF2D46]/10',
      href: '/services/maintenance'
    },
    {
      title: 'Graphic Design',
      description: 'Communicate your brand visually',
      icon: <FaPaintBrush className="w-6 h-6 text-[#FF5C33]" />,
      bgGradient: 'from-[#FF5C33]/10 to-[#FF2D46]/10',
      href: '/services/graphic-design'
    },
    {
      title: 'Brand Design',
      description: 'Create your brand identity and strategy',
      icon: <FaPaintBrush className="w-6 h-6 text-[#FF5C33]" />,
      bgGradient: 'from-[#FF5C33]/10 to-[#FF2D46]/10',
      href: '/services/brand-design'
    }
  ]

  return (
    <>
      {/* Desktop Header */}
      <header className={`w-full fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
        scrolled 
          ? 'bg-[#E9EAEF]/95 backdrop-blur-md shadow-lg' 
          : 'bg-[#E9EAEF] shadow-md'
      } hidden md:block`}>
        <div className="flex-between w-full max-w-7xl mx-auto px-6 py-4">
          <Link href="/" className="group shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-[#FF5C33] to-[#FF2D46] bg-clip-text text-transparent hover:from-[#FF2D46] hover:to-[#FF5C33] transition-all duration-300" style={{ fontFamily: 'Figtree, serif' }}>
              siretech
            </h1>
          </Link>

          <nav className="flex-1 flex justify-center">
            <ul className="flex items-center gap-6">
              {/* About */}
              <li>
                <Link 
                  href={navLinks[0].href}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                    pathname === navLinks[0].href
                      ? 'text-[#FF5C33] font-semibold bg-white/50'
                      : 'text-[#333333] hover:bg-white/50'
                  }`}
                  style={{ fontFamily: 'Figtree, sans-serif' }}
                >
                  <span>{navLinks[0].label}</span>
                </Link>
              </li>

              {/* Our Works */}
              <li>
                <Link 
                  href={navLinks[1].href}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                    pathname === navLinks[1].href
                      ? 'text-[#FF5C33] font-semibold bg-white/50'
                      : 'text-[#333333] hover:bg-white/50'
                  }`}
                  style={{ fontFamily: 'Figtree, sans-serif' }}
                >
                  <span>{navLinks[1].label}</span>
                </Link>
              </li>

              {/* Services Dropdown */}
              <li 
                className="relative"
                ref={dropdownRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link href="/services">
                 <button 
                  onClick={() => setIsOpen(!isOpen)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 cursor-pointer ${
                    isOpen 
                      ? 'text-[#FF5C33] bg-white/50' 
                      : 'text-[#333333] hover:bg-white/50'
                  }`}
                  style={{ fontFamily: 'Figtree, sans-serif' }}
                >
                  
                  <span>Services</span>
                  <FaChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
</Link>
              
                {isOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[650px] z-[9999]">
                    <div className="bg-[#E9EAEF] rounded-2xl shadow-2xl border border-[#FF5C33]/20 overflow-hidden">
                      <div className="grid grid-cols-2 gap-3 p-6">
                        {solutions.map((solution, idx) => (
                          <Link
                            key={idx}
                            href={solution.href}
                            onClick={() => setIsOpen(false)}
                            className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/50 transition-all duration-200"
                          >
                            <div className={`bg-gradient-to-br ${solution.bgGradient} p-3 rounded-xl bg-white/50 group-hover:scale-110 transition-transform duration-200 shrink-0`}>
                              {solution.icon}
                            </div>
                            <div className="flex-1 text-left">
                              <h3 className="font-bold text-[#333333] text-base" style={{ fontFamily: 'Figtree, sans-serif' }}>
                                {solution.title}
                              </h3>
                              <p className="text-sm text-[#868DA6] mt-1" style={{ fontFamily: 'Figtree, sans-serif' }}>
                                {solution.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>

                      <div className="border-t border-[#FF5C33]/20 bg-white/30 px-6 py-4">
                        <Link 
                          href="/services" 
                          onClick={() => setIsOpen(false)}
                          className="text-sm text-[#FF5C33] hover:text-[#FF2D46] font-medium flex items-center gap-2"
                          style={{ fontFamily: 'Figtree, sans-serif' }}
                        >
                           Our Solutions 
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </li>

              {/* Pricing */}
              <li>
                <Link 
                  href={navLinks[2].href}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                    pathname === navLinks[2].href
                      ? 'text-[#FF5C33] font-semibold bg-white/50'
                      : 'text-[#333333] hover:bg-white/50'
                  }`}
                  style={{ fontFamily: 'Figtree, sans-serif' }}
                >
                  <span>{navLinks[2].label}</span>
                </Link>
              </li>


               {/* Portfolio */}
              <li>
                <Link 
                  href={navLinks[3].href}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                    pathname === navLinks[3].href
                      ? 'text-[#FF5C33] font-semibold bg-white/50'
                      : 'text-[#333333] hover:bg-white/50'
                  }`}
                  style={{ fontFamily: 'Figtree, sans-serif' }}
                >
                  <span>{navLinks[3].label}</span>
                </Link>
              </li>

              {/* Blogs */}
              <li>
                <Link 
                  href={navLinks[4].href}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                    pathname === navLinks[4].href
                      ? 'text-[#FF5C33] font-semibold bg-white/50'
                      : 'text-[#333333] hover:bg-white/50'
                  }`}
                  style={{ fontFamily: 'Figtree, sans-serif' }}
                >
                  <span>{navLinks[4].label}</span>
                </Link>
              </li>
            </ul>
          </nav>

          <Link href="/contact" className="shrink-0">
            <button className="px-6 py-2.5 bg-gradient-to-r from-[#FF5C33] to-[#FF2D46] text-white rounded-sm font-medium hover:from-[#FF2D46] hover:to-[#FF5C33] transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer" style={{ fontFamily: 'Figtree, sans-serif' }}>
              Get a Quote
            </button>
          </Link>
        </div>
      </header>

      {/* Mobile Header */}
      <header className={`w-full fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
        scrolled ? 'bg-[#E9EAEF]/95  shadow-lg' : 'bg-[#E9EAEF] shadow-md'
      } block md:hidden`}>
        <div className="flex items-center justify-between px-6 py-4">
          <Link href="/">
            <h1 className="text-xl font-bold bg-gradient-to-r from-[#FF5C33] to-[#FF2D46] bg-clip-text text-transparent" style={{ fontFamily: 'Figtree, sans-serif' }}>
              siretech
            </h1>
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Open Menu"
            className="p-2.5 rounded-xl bg-white/50 text-[#FF5C33] hover:bg-white/70 transition-all duration-200 cursor-pointer"
          >
            {mobileOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-[#333333]/50  z-40"
              onClick={() => setMobileOpen(false)}
            />

            {/* Menu Panel */}
            <div className="fixed top-[73px] left-0 right-0 bottom-0 bg-[#E9EAEF] z-50 overflow-y-auto">
              <div className="flex flex-col h-full">
                <div className="flex-1 px-6 py-8">
                  <ul className="space-y-3">
                    {/* Home */}
                    <li>
                      <Link
                        href={navLinks[0].href}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                          pathname === navLinks[0].href
                            ? 'bg-white/50 text-[#FF5C33] font-semibold'
                            : 'text-[#333333] hover:bg-white/50'
                        }`}
                        style={{ fontFamily: 'Figtree, sans-serif' }}
                      >
                        <span>{navLinks[0].label}</span>
                      </Link>
                    </li>

                    {/* Our Works */}
                    <li>
                      <Link
                        href={navLinks[1].href}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                          pathname === navLinks[1].href
                            ? 'bg-white/50 text-[#FF5C33] font-semibold'
                            : 'text-[#333333] hover:bg-white/50'
                        }`}
                        style={{ fontFamily: 'Figtree, sans-serif' }}
                      >
                        <span>{navLinks[1].label}</span>
                      </Link>
                    </li>

                    {/* Services Dropdown */}
                    <li>
                      <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-[#333333] hover:bg-white/50 transition-all duration-200 cursor-pointer"
                        style={{ fontFamily: 'Figtree, sans-serif' }}
                      >
                        <div className="flex items-center gap-3">
                          <span>Services</span>
                        </div>
                        <FaChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {isOpen && (
                        <div className="mt-3 ml-8 space-y-3">
                          {solutions.map((solution, idx) => (
                            <Link
                              key={idx}
                              href={solution.href}
                              onClick={() => {
                                setMobileOpen(false)
                                setIsOpen(false)
                              }}
                              className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/50 transition-all duration-200"
                            >
                              <div className={`bg-gradient-to-br ${solution.bgGradient} p-2 rounded-lg bg-white/50 shrink-0`}>
                                {solution.icon}
                              </div>
                              <div className="flex-1 text-left">
                                <p className="font-bold text-[#333333] text-sm" style={{ fontFamily: 'Figtree, sans-serif' }}>
                                  {solution.title}
                                </p>
                                <p className="text-xs text-[#868DA6] mt-0.5" style={{ fontFamily: 'Figtree, sans-serif' }}>
                                  {solution.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </li>

                    {/* Pricing */}
                    <li>
                      <Link
                        href={navLinks[2].href}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                          pathname === navLinks[2].href
                            ? 'bg-white/50 text-[#FF5C33] font-semibold'
                            : 'text-[#333333] hover:bg-white/50'
                        }`}
                        style={{ fontFamily: 'Figtree, sans-serif' }}
                      >
                        <span>{navLinks[2].label}</span>
                      </Link>
                    </li>

                    {/* Blogs */}
                    <li>
                      <Link
                        href={navLinks[3].href}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                          pathname === navLinks[3].href
                            ? 'bg-white/50 text-[#FF5C33] font-semibold'
                            : 'text-[#333333] hover:bg-white/50'
                        }`}
                        style={{ fontFamily: 'Figtree, sans-serif' }}
                      >
                        <span>{navLinks[3].label}</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="p-6 border-t border-[#FF5C33]/20 bg-white/30">
                  <Link href="/contact" onClick={() => setMobileOpen(false)}>
                    <button className="w-full px-6 py-3 bg-gradient-to-r from-[#FF5C33] to-[#FF2D46] text-white rounded-xl font-medium hover:from-[#FF2D46] hover:to-[#FF5C33] transition-all duration-200 cursor-pointer" style={{ fontFamily: 'Figtree, serif' }}>
                      <FaEnvelope className="inline mr-2" />
                     Talk to Us
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </header>

      {/* Spacer to prevent content from being hidden under fixed navbar */}
      <div className="h-[73px] md:h-[80px]" />
    </>
  )
}

export default Navbar