'use client'

import React from 'react'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link' 
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { 
  FaGlobe, FaMobile, FaPaintBrush, FaTools,
  FaArrowCircleUp, FaTimes, FaBars, FaChevronDown, 
  FaEnvelope
} from 'react-icons/fa'

const Navbar = () => {
  // Separate states for mobile and desktop
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false)
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

  // Close all menus on route change
  useEffect(() => {
    setMobileOpen(false)
    setMobileServicesOpen(false)
    setDesktopServicesOpen(false)
  }, [pathname])

  // Handle body scroll lock
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

  // Desktop dropdown hover handlers
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setDesktopServicesOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDesktopServicesOpen(false)
    }, 200)
  }

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDesktopServicesOpen(false)
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

  // Navigation order: About, Our Works, Services (dropdown), Pricing, Contact, Blogs
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
      description: 'Make your presence known',
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

  // Close all menus
  const closeAllMenus = () => {
    setMobileOpen(false)
    setMobileServicesOpen(false)
    setDesktopServicesOpen(false)
    document.body.style.overflow = 'unset'
  }

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen)
    if (!mobileOpen) {
      setMobileServicesOpen(false)
    }
  }

  return (
    <>
      {/* Desktop Header */}
      <header className={`w-full fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
        scrolled 
          ? 'bg-[#E9EAEF]/95 backdrop-blur-md shadow-lg' 
          : 'bg-[#E9EAEF] shadow-md'
      } hidden md:block`}>
        <div className="flex-between w-full max-w-7xl mx-auto px-6 py-4">
          {/* Logo + Text - Plain light black */}
          <Link href="/" className="group shrink-0 flex items-center gap-3" onClick={closeAllMenus}>
            <div className="relative w-10 h-10 rounded-full overflow-hidden bg-white shadow-md">
              <Image 
                src="/logo.jpg"
                alt="SireTech Logo"
                fill
                className="object-cover"
                sizes="40px"
              />
            </div>
            <span className="text-2xl font-bold text-[#333333] hover:text-[#FF5C33] transition-all duration-300" style={{ fontFamily: 'Figtree, sans-serif' }}>
              SireTech
            </span>
          </Link>

          <nav className="flex-1 flex justify-center">
            <ul className="flex items-center gap-6">
              {/* 1. About */}
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

              {/* 2. Our Works */}
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

              {/* 3. Services Dropdown - Desktop */}
              <li 
                className="relative"
                ref={dropdownRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button 
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 cursor-pointer ${
                    desktopServicesOpen 
                      ? 'text-[#FF5C33] bg-white/50' 
                      : 'text-[#333333] hover:bg-white/50'
                  }`}
                  style={{ fontFamily: 'Figtree, sans-serif' }}
                >
                  <span>Services</span>
                  <FaChevronDown className={`w-3 h-3 transition-transform duration-200 ${desktopServicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {desktopServicesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[650px] z-[9999]">
                    <div className="bg-[#E9EAEF] rounded-2xl shadow-2xl border border-[#FF5C33]/20 overflow-hidden">
                      <div className="grid grid-cols-2 gap-3 p-6">
                        {solutions.map((solution, idx) => (
                          <Link
                            key={idx}
                            href={solution.href}
                            onClick={() => setDesktopServicesOpen(false)}
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
                          onClick={() => setDesktopServicesOpen(false)}
                          className="text-sm text-[#FF5C33] hover:text-[#FF2D46] font-medium flex items-center gap-2"
                          style={{ fontFamily: 'Figtree, sans-serif' }}
                        >
                          View All Services 
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </li>

              {/* 4. Pricing */}
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

              {/* 5. Contact */}
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

              {/* 6. Blogs */}
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

          <Link href="/contact" className="shrink-0" onClick={closeAllMenus}>
            <button className="px-6 py-2.5 bg-gradient-to-r from-[#FF5C33] to-[#FF2D46] text-white rounded-sm font-medium hover:from-[#FF2D46] hover:to-[#FF5C33] transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer" style={{ fontFamily: 'Figtree, sans-serif' }}>
              Get a Quote
            </button>
          </Link>
        </div>
      </header>

      {/* Mobile Header */}
      <header className={`w-full fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
        scrolled ? 'bg-[#E9EAEF]/95 backdrop-blur-md shadow-lg' : 'bg-[#E9EAEF] shadow-md'
      } block md:hidden`}>
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo + Text for Mobile */}
          <Link href="/" className="group shrink-0 flex items-center gap-2" onClick={closeAllMenus}>
            <div className="relative w-8 h-8 rounded-full overflow-hidden bg-white shadow-sm">
              <Image 
                src="/logo.jpg"
                alt="SireTech Logo"
                fill
                className="object-cover"
                sizes="32px"
              />
            </div>
            <span className="text-lg font-bold text-[#333333] hover:text-[#FF5C33] transition-all duration-300" style={{ fontFamily: 'Figtree, serif' }}>
              SireTech
            </span>
          </Link>

          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
            className="p-2 rounded-lg bg-white/50 text-[#FF5C33] hover:bg-white/70 transition-all duration-200 cursor-pointer"
          >
            {mobileOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={closeAllMenus}
          />

          {/* Menu Panel */}
          <div className="fixed left-0 right-0 bottom-0 bg-[#E9EAEF] z-50 md:hidden overflow-y-auto" style={{ top: '57px' }}>
            <div className="flex flex-col h-full">
              <div className="flex-1 px-4 py-4">
                <nav className="flex flex-col space-y-1">
                  <Link href="/about" onClick={closeAllMenus} className={`px-4 py-3 rounded-lg transition-all duration-200 ${pathname === '/about' ? 'text-[#FF5C33] font-semibold bg-white/50' : 'text-[#333333] hover:bg-white/50'}`}>About</Link>
                  <Link href="/projects" onClick={closeAllMenus} className={`px-4 py-3 rounded-lg transition-all duration-200 ${pathname === '/projects' ? 'text-[#FF5C33] font-semibold bg-white/50' : 'text-[#333333] hover:bg-white/50'}`}>Our Works</Link>
                  
                  <div>
                    <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)} className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 ${mobileServicesOpen ? 'text-[#FF5C33] bg-white/50' : 'text-[#333333] hover:bg-white/50'}`}>
                      <span>Services</span>
                      <FaChevronDown className={`w-3 h-3 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileServicesOpen && (
                      <div className="mt-2 space-y-1 ml-4">
                        <Link href="/services/web-development" onClick={closeAllMenus} className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/50">
                          <div className="bg-gradient-to-br from-[#FF5C33]/10 to-[#FF2D46]/10 p-2 rounded-lg"><FaGlobe className="w-5 h-5 text-[#FF5C33]" /></div>
                          <div><p className="font-medium text-[#333333] text-sm">Web Development</p><p className="text-xs text-[#868DA6]">Your first digital presence</p></div>
                        </Link>
                        <Link href="/services/mobile-apps" onClick={closeAllMenus} className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/50">
                          <div className="bg-gradient-to-br from-[#FF5C33]/10 to-[#FF2D46]/10 p-2 rounded-lg"><FaMobile className="w-5 h-5 text-[#FF5C33]" /></div>
                          <div><p className="font-medium text-[#333333] text-sm">Mobile Apps</p><p className="text-xs text-[#868DA6]">Custom Apps for Business</p></div>
                        </Link>
                        <Link href="/services/seo" onClick={closeAllMenus} className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/50">
                          <div className="bg-gradient-to-br from-[#FF5C33]/10 to-[#FF2D46]/10 p-2 rounded-lg"><FaArrowCircleUp className="w-5 h-5 text-[#FF5C33] transform rotate-45" /></div>
                          <div><p className="font-medium text-[#333333] text-sm">SEO</p><p className="text-xs text-[#868DA6]">Make your presence known</p></div>
                        </Link>
                        <Link href="/services/maintenance" onClick={closeAllMenus} className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/50">
                          <div className="bg-gradient-to-br from-[#FF5C33]/10 to-[#FF2D46]/10 p-2 rounded-lg"><FaTools className="w-5 h-5 text-[#FF5C33]" /></div>
                          <div><p className="font-medium text-[#333333] text-sm">Website Maintenance</p><p className="text-xs text-[#868DA6]">Keep your website running smoothly</p></div>
                        </Link>
                        <Link href="/services/graphic-design" onClick={closeAllMenus} className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/50">
                          <div className="bg-gradient-to-br from-[#FF5C33]/10 to-[#FF2D46]/10 p-2 rounded-lg"><FaPaintBrush className="w-5 h-5 text-[#FF5C33]" /></div>
                          <div><p className="font-medium text-[#333333] text-sm">Graphic Design</p><p className="text-xs text-[#868DA6]">Communicate your brand visually</p></div>
                        </Link>
                        <Link href="/services/brand-design" onClick={closeAllMenus} className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/50">
                          <div className="bg-gradient-to-br from-[#FF5C33]/10 to-[#FF2D46]/10 p-2 rounded-lg"><FaPaintBrush className="w-5 h-5 text-[#FF5C33]" /></div>
                          <div><p className="font-medium text-[#333333] text-sm">Brand Design</p><p className="text-xs text-[#868DA6]">Create your brand identity</p></div>
                        </Link>
                        <Link href="/services" onClick={closeAllMenus} className="block text-center text-[#FF5C33] text-sm font-medium py-2 mt-2 hover:underline">View All Services →</Link>
                      </div>
                    )}
                  </div>
                  
                  <Link href="/pricing" onClick={closeAllMenus} className={`px-4 py-3 rounded-lg transition-all duration-200 ${pathname === '/pricing' ? 'text-[#FF5C33] font-semibold bg-white/50' : 'text-[#333333] hover:bg-white/50'}`}>Pricing</Link>
                  <Link href="/contact" onClick={closeAllMenus} className={`px-4 py-3 rounded-lg transition-all duration-200 ${pathname === '/contact' ? 'text-[#FF5C33] font-semibold bg-white/50' : 'text-[#333333] hover:bg-white/50'}`}>Contact</Link>
                  <Link href="/blogs" onClick={closeAllMenus} className={`px-4 py-3 rounded-lg transition-all duration-200 ${pathname === '/blogs' ? 'text-[#FF5C33] font-semibold bg-white/50' : 'text-[#333333] hover:bg-white/50'}`}>Blogs</Link>
                </nav>
              </div>

              <div className="p-4 border-t border-[#FF5C33]/20 bg-white/30">
                <Link href="/contact" onClick={closeAllMenus}>
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-[#FF5C33] to-[#FF2D46] text-white rounded-lg font-medium hover:from-[#FF2D46] hover:to-[#FF5C33] transition-all duration-200 cursor-pointer text-sm">
                    <FaEnvelope className="inline mr-2" /> Get a Quote
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Spacer */}
      <div className="h-[57px] md:h-[80px]" />
    </>
  )
}

export default Navbar