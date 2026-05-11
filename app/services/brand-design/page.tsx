import React from 'react'
import { FadeDown, FadeUp } from '@/app/components/Reveal'
import Image from 'next/image';
import Portfolio from '../../components/Projects'
import Testimonials from '../../components/Testimonials'
import Link from 'next/link'

    const  industries = ['Corporate', 'Startups', 'Retail', 'Service Industry']
      const features = [
        'Brand strategy development',
        'Logo and visual identity',
        'Brand guidelines',
        'Packaging design',
        'Brand voice and messaging',
        'Marketing collateral'
      ]
     const benefits = [
        'Build a memorable brand presence',
        'Increase brand recognition by 80%',
        'Attract ideal customers',
        'Command premium pricing',
        'Create brand loyalty'
      ]
const  convincingMessage ="Your brand is more than a logo. It's the entire experience. Let us help you create a brand that people love and trust."
    
  const projects = [
       {
      id: 1,
      title: "E-Commerce Platform",
      category: "retail",
      industry: "Retail",
      service: "web-development",
      description: "Complete online store with inventory management, payment integration, and customer analytics.",
      challenge: "No online presence and manual order management",
      solution: "Full-featured e-commerce platform with Paystack integration",
      results: "150% increase in sales, automated order processing",
      technologies: ["Next.js", "Node.js", "MongoDB", "Paystack"],
      icon: "🛒",
      duration: "4 weeks",
      client: "Fashion Hub GH"
    },
    {
      id: 2,
      title: "School Management System",
      category: "education",
      industry: "Education",
      service: "web-development",
      description: "Complete digital solution for a Ghanaian school with student management, fee tracking, exam management, and parent portal.",
      challenge: "Manual record keeping causing delays and errors",
      solution: "Centralized web platform automating all administrative tasks",
      results: "70% reduction in admin time, 100% fee collection visibility",
      technologies: ["Next.js", "Node.js", "MongoDB", "Paystack"],
      icon: "🎓",
      duration: "3 weeks",
      client: "Royal Heights School"
    },
    {
      id: 3,
      title: "Real Estate Management",
      category: "realestate",
      industry: "Real Estate",
      service: "mobile-apps",
      description: "Property management platform for landlords with tenant portals, rent collection, and maintenance request tracking.",
      challenge: "Manual rent collection and poor tenant communication",
      solution: "Automated platform with mobile money integration and tenant self-service",
      results: "95% on-time rent payments, 50% fewer maintenance delays",
      technologies: ["React Native", "Node.js", "PostgreSQL", "Hubtel"],
      icon: "🏘️",
      duration: "4 weeks",
      client: "Accra Property Group"
    },
    {
      id: 4,
      title: "Hotel Booking System",
      category: "retail",
      industry: "Retail",
      service: "web-development",
      description:"A Hotel Booking System is a digital platform that automates room reservations, payments, and guest management. It syncs real-time availability across websites and travel agencies to prevent overbooking while allowing guests to book 24/7.",
      challenge: "Stock discrepancies across multiple locations",
      solution: "Real-time inventory tracking with offline capabilities",
      results: "40% reduction in stockouts, 30% faster checkouts",
      technologies: ["Next.js", "Express", "SQLite", "Paystack"],
      icon: "🏪",
      duration: "3 weeks",
      client: "City Mart Stores"
    },
    {
      id: 5,
      title: "Barbar Shop SMEs Management Platform",
      category: "religious",
      industry: "Religious",
      service: "web-development",
      description: "A management platform for barber SMEs is a digital command center that unifies bookings, payments, and staff operations. By automating these tasks",
      challenge: "Disconnected member data and low giving engagement",
      solution: "Unified platform with mobile money integration and member portal",
      results: "60% increase in digital giving, centralized member records",
      technologies: ["React", "Firebase", "Paystack", "Tailwind"],
      duration: "2 weeks",
      client: "Victory Chapel International"
    },
    {
      id: 6,
      title: "Restaurant / Lounge Dispatch System",
      category: "logistics",
      industry: "Logistics",
      service: "mobile-apps",
      description: "A Restaurant/Lounge Dispatch System is a central hub that coordinates order flow between the kitchen, servers, and delivery drivers. It streamlines logistics to ensure food and drinks reach guests quickly",
       challenge: "Inefficient route planning and delayed deliveries",
      solution: "AI-powered route optimization and driver mobile app",
      results: "35% fuel savings, 50% faster deliveries",
      technologies: ["React Native", "Node.js", "PostgreSQL", "Google Maps API"],
      duration: "5 weeks",
      client: "Swift Logistics GH"
    },
 
  ];
 
 const services = [
    {
      id: 'web-development',
      title: 'Website Design',
      color: '#113049',
      fullDescription: `We build responsive, fast, and secure web applications that solve real business problems. From corporate websites to complex web platforms, our solutions are tailored to your unique needs.`,
      industries: ['E-commerce', 'Institutional', 'Real Estate', 'Healthcare', 'Hospitality', 'Education', 'Logistics', 'Religious Organizations', 'Startups', 'Corporate'],
      features: [
        'Custom web applications',
        'E-commerce platforms',
        'Content management systems',
        'API development & integration',
        'Progressive web apps',
        'Performance optimization'
      ],
      benefits: [
        'Increase sales by 40% with online presence',
        'Automate manual processes - save 20+ hours per week',
        'Reach customers across Ghana and beyond',
        'Reduce operational costs by 35%',
        'Get real-time business insights'
      ],
      duration: '2-4 weeks delivery',
      convincingMessage: "Stop losing customers to competitors with better websites. Get a professional web solution that works 24/7 to grow your business."
    },
    {
      id: 'mobile-apps',
      title: 'Mobile Apps',
      color: '#5B3AEE',
      fullDescription: `Native and cross-platform mobile applications that engage users and drive business growth. Perfect for startups and established businesses looking to reach customers on the go.`,
      industries: ['Logistics', 'Retail', 'Food Delivery', 'Banking', 'Health Tech', 'Education', 'Real Estate', 'Religious Organizations', 'Startups', 'Corporate'],
      features: [
        'iOS and Android development',
        'Cross-platform solutions',
        'User-centric design',
        'Offline capabilities',
        'Push notifications',
        'App store deployment'
      ],
      benefits: [
        'Stay connected with customers 24/7',
        'Increase customer loyalty by 65%',
        'Reduce operational costs with automation',
        'Gather valuable user data and insights',
        'Scale your business mobile-first'
      ],
      duration: '4-6 weeks delivery',
      convincingMessage: "85% of Ghanaians access the internet via mobile. Don't miss out on this massive market - put your business in their pocket."
    },
    {
      id: 'seo',
      title: 'SEO Optimization',
      color: '#219BE6',
      fullDescription: `Improve your search engine rankings, drive organic traffic, and increase conversions. We focus on sustainable, white-hat techniques that deliver long-term results for Ghanaian businesses.`,
      industries: ['E-commerce', 'Local Services', 'Blogs', 'Real Estate', 'Education'],
      features: [
        'Keyword research and strategy',
        'On-page optimization',
        'Technical SEO audits',
        'Local SEO for Ghana',
        'Content strategy',
        'Performance tracking'
      ],
      benefits: [
        'Get found by customers actively searching for you',
        'Reduce ad spend by 50% with organic traffic',
        'Build long-term sustainable growth',
        'Outrank local competitors',
        'Track ROI with transparent analytics'
      ],
      duration: 'Monthly retainer',
      convincingMessage: "94% of users never click past the first page of Google. Get on page one or stay invisible. It's that simple."
    },
    {
      id: 'maintenance',
      title: 'Web Maintenance',
      color: '#00A9CE',
      fullDescription: `Regular updates, security monitoring, backups, and performance optimization. Focus on your business while we handle the technical side of keeping your website healthy.`,
      industries: ['All Industries'],
      features: [
        '24/7 security monitoring',
        'Regular backups',
        'Performance optimization',
        'Bug fixes and updates',
        'Uptime monitoring',
        'Emergency support'
      ],
      benefits: [
        'Never worry about security breaches or hacks',
        'Save 10+ hours per month on technical management',
        'Faster loading times equals more sales',
        'Peace of mind with professional support',
        'Scale without technical headaches'
      ],
      duration: 'Monthly retainer',
      convincingMessage: "Don't let a hacked or slow website destroy your reputation. Get enterprise-grade security and performance."
    },
    {
      id: 'graphic-design',
      title: 'Graphic Design',
      color: '#00A9CE',
      fullDescription: `From logos to complete brand identities, our designs capture your essence and resonate with your audience. Stand out with professional, memorable visuals across all platforms.`,
      industries: ['Retail', 'Hospitality', 'Media', 'Corporate', 'Startups'],
      features: [
        'Logo and brand identity',
        'Marketing materials',
        'Social media graphics',
        'UI/UX design',
        'Print design',
        'Brand guidelines'
      ],
      benefits: [
        'Create instant brand recognition',
        'Communicate professionalism and trust',
        'Stand out from competitors',
        'Increase customer retention',
        'Build a cohesive brand story'
      ],
      duration: '1-2 weeks delivery',
      convincingMessage: "Your brand is your promise to your customer. Make it memorable, make it professional, make it yours."
    },
    {
      id: 'brand',
      title: 'Brand Design',
      color: '#F39F5F',
      fullDescription: `Design and manage complete brand identities that resonate with your audience. From logos to full brand guidelines, we create cohesive brand experiences across all touchpoints.`,
      industries: ['Corporate', 'Startups', 'Retail', 'Service Industry'],
      features: [
        'Brand strategy development',
        'Logo and visual identity',
        'Brand guidelines',
        'Packaging design',
        'Brand voice and messaging',
        'Marketing collateral'
      ],
      benefits: [
        'Build a memorable brand presence',
        'Increase brand recognition by 80%',
        'Attract ideal customers',
        'Command premium pricing',
        'Create brand loyalty'
      ],
      duration: '2-3 weeks delivery',
      convincingMessage: "Your brand is more than a logo. It's the entire experience. Let us help you create a brand that people love and trust."
    }
  ];
const page = () => {
  return (
    <>   
 <section id="contact" className="relative w-full overflow-hidden" style={{ 
      background: 'transparent',
    }}>             <div className="relative w-full h-[300px] md:h-[350px] overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
               style={{ 
                 backgroundImage: "url('/brand-banner.jpeg')",
               }}>
                 {/* Dark Overlay */}
          <div className="absolute inset-0" style={{ 
            background: 'linear-gradient(135deg, rgba(23,1,44,0.8) 0%, rgba(91,58,238,0.8) 100%)'
          }}></div>

            {/* Content */}
                    
                     <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 mb-3">
                        <FadeDown>
                          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 mx-5">
                        We Keep Your Website Running And<br /> Converting </h1>
                        </FadeDown>
                      </div>
                      
          </div>
     
    </div>
     <div className="max-w-7xl mx-auto mt-12" >
              
           
              <FadeUp>
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-3">
                    We build business oriented mobile apps that  <span className="text-[#F39F5F]">Scale .</span>
                  </h2>
                  <p className="text-[#666666] max-w-2xl mx-auto">
                    Join 150+ businesses that have scaled with our solutions. Choose your path to growth.
                  </p>
                </div>
              </FadeUp>
          {/* Block 1 - Services Tags */}
                <div className="text-center mb-10">
                  <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
                    {["", "Web Development", "ECommerce", "SEO", "Brand Design", "App Development", "Graphic Design", "Website Maintenance", ""].map((tag, index) => (
                      <span 
                        key={index}
                        className="px-4 py-2 rounded-full bg-[#EAF3F8] border border-[#F39F5F]/20 text-sm font-medium hover:border-[#F39F5F]/40 hover:bg-[#ECF8FF] transition-all duration-300 hover:scale-105"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              {/* Services Grid */}
             
       {/* Services Grid */}
          
        <FadeUp>
                  <div className="rounded-2xl p-6 md:p-8 mb-12">
                    <div className="flex flex-col lg:flex-row gap-8">
                      
                      {/* Left Column */}
                      <div className="flex-1">
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4" style={{ color: "#F39F5F" }}>
                        Website / Mobile App Maintenance
                        </h2>
                        <p className="text-[#555555] leading-relaxed mb-6 text-sm md:text-base">
                         We build responsive, fast, and secure web applications that solve real business problems. From corporate websites to complex web platforms, our solutions are tailored to your unique needs.`,
                        </p>
      
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                          <div>
                            <h4 className="font-semibold mb-3">Key Features</h4>
                            <ul className="space-y-2">
                              {features.map((feature, idx) => (
                                <li key={idx} className="text-sm text-[#555555] flex items-start gap-2">
                                  <span className="mt-0.5" style={{ color: "#F39F5F" }}>▸</span>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-3">How We Help Businesses</h4>
                            <ul className="space-y-2">
                              {benefits.map((benefit, idx) => (
                                <li key={idx} className="text-sm text-[#555555] flex items-start gap-2">
                                  <span className="mt-0.5" style={{ color: "#F39F5F" }}>▸</span>
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
      
                      </div>
      
                      {/* Right Column - Package */}
                      <div className="lg:w-96">
                        <div className="rounded-xl p-6 text-center relative overflow-hidden" style={{ backgroundColor: `"#F39F5F"/10`,  boxShadow: `0 8px 25px {"#F39F5F"}/15` }}>
                          <div className="relative z-10">
                            <h4 className="font-bold text-lg mb-4">Industries We Serve</h4>
                            <div className="flex flex-wrap gap-2 justify-center mb-6">
                              {industries.map((industry, idx) => (
                                <span key={idx} className="px-3 py-1.5 rounded-full text-xs md:text-sm font-medium" style={{ backgroundColor: `"#F39F5F"/10`, color: "#F39F5F", border: `1px solid {"#F39F5F"}/15` }}>
                                  {industry}
                                </span>
                              ))}
                            </div>
                          
                             <p className="text-sm font-medium mb-4 text-left">
                        {convincingMessage}
                      </p>
                            <Link href="/contact">
                              <button className="w-[80%] py-3 text-white font-semibold rounded-sm transition-all duration-300 hover:scale-105" style={{ backgroundColor: "#F39F5F" }}>
                                Get Started →
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
        </FadeUp>
            </div>
                      {/* Bottom CTA - More Converting */}
              <FadeUp delay={0.3}>
                <div className="text-center my-16 p-8 bg-linear-to-r from-[#F39F5F]/10 to-[#219BE4]/10 rounded-2xl">
                  <p className="font-bold mb-2">Have a project in mind ?</p>
                  <p className="text-[#666666] mb-4">We build custom solutions tailored to your unique business needs</p>
                   <Link href="/contact">
                              <button className="w-[80%] py-3 text-white font-semibold rounded-sm transition-all duration-300 hover:scale-105" style={{ backgroundColor: "#F39F5F" }}>
                                Get A Project Started →
                              </button>
                            </Link>
                </div>
              </FadeUp>


               {/* Portfolio Section */}
                    <FadeDown>
                      <div className="text-center mt-16 mb-12">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Our Works</h2>
                        <p className="text-base md:text-lg lg:text-xl text-[#666666] max-w-2xl mx-auto">Real solutions delivering real results for businesses across Ghana</p>
                      </div>
                    </FadeDown>
            
                    {/* Projects Grid - All Projects (no filter) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-0">
                      {projects.map((project, index) => (
                        <FadeUp key={project.id} delay={index * 0.1}>
                          <div className="group bg-white overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer" >
                            <div className="relative h-58 overflow-hidden">
                              <Image 
                                src={`/project${project.id}.jpg`}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-100"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              />
                              <div className="absolute inset-0 bg-[#00ACCE]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                                <span className="text-white text-sm font-semibold">Click to view details →</span>
                              </div>
                            </div>
                            <div className="p-4">
                              <h3 className="text-lg font-bold text-[#1A2939] mb-2">{project.title}</h3>
                              <p className="text-[#666666] text-sm leading-relaxed mb-4">{project.description}</p>
                            </div>
                          </div>
                        </FadeUp>
                      ))}
                    </div>
             
              <Testimonials />
    </section>
  
    </>
  
  )
}

export default page
