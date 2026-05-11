'use client';
import React, { useState } from 'react';
import { FadeUp, FadeDown } from '../components/Reveal';
import Image from 'next/image';
import Link from 'next/link';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeService, setActiveService] = useState(null);

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
      color: '#17012C',
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

  const projects = [
       {
      id: 1,
      title: "E-Commerce Platform",
      category: "retail",
      industry: "Retail",
      url:"project1",
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
    title: "Property Management Platform",
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
     {
    id: 6,
    title: "Logistics Dispatch System",
    category: "logistics",
    industry: "Logistics",
    service: "mobile-apps",
    description: "Real-time logistics designed for speed and built for scale, it is the only tool you need to ensure your goods arrive exactly when and where they should.",
    challenge: "Inefficient route planning and delayed deliveries",
    solution: "AI-powered route optimization and real-time tracking",
    results: "95% on-time deliveries, 50% reduction in delays",
    technologies: ["React Native", "Node.js", "PostgreSQL", "Google Maps API"],
    icon: "🚚",
    duration: "4 weeks",
    client: "Swift Logistics GH"
  },
  ];

  const getProjectsByService = (serviceId) => projects.filter(p => p.service === serviceId);

  return (
    <div id="projects" className="w-full px-4 sm:px-6 md:px-8 py-16 md:py-20 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <FadeUp>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#17012C] mb-3">
              How We Can Transform Your <span className="text-[#F39F5F]">Business</span>
            </h2>
            <p className="text-[#666666] max-w-2xl mx-auto">
              Serving a wide range of industries with professional website and digital solutions
            </p>
          </div>
        </FadeUp>

        {/* Services Grid */}
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
            <div className="rounded-2xl p-6 md:p-8 mb-12">
              <div className="flex flex-col lg:flex-row gap-8">
                
                {/* Left Column */}
                <div className="flex-1">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4" style={{ color: activeService.color }}>
                    {activeService.title}
                  </h2>
                  <p className="text-[#555555] leading-relaxed mb-6 text-sm md:text-base">
                    {activeService.fullDescription}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                    <div>
                      <h4 className="font-semibold text-[#17012C] mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {activeService.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-[#555555] flex items-start gap-2">
                            <span className="mt-0.5" style={{ color: activeService.color }}>▸</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#17012C] mb-3">How We Help Businesses</h4>
                      <ul className="space-y-2">
                        {activeService.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-sm text-[#555555] flex items-start gap-2">
                            <span className="mt-0.5" style={{ color: activeService.color }}>▸</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>

                {/* Right Column - Package */}
                <div className="lg:w-96">
                  <div className="rounded-xl p-6 text-center relative overflow-hidden" style={{ backgroundColor: `${activeService.color}08`, border: `1px solid ${activeService.color}20`, boxShadow: `0 8px 25px ${activeService.color}15` }}>
                    <div className="relative z-10">
                      <h4 className="font-bold text-lg mb-4">Industries We Serve</h4>
                      <div className="flex flex-wrap gap-2 justify-center mb-6">
                        {activeService.industries.map((industry, idx) => (
                          <span key={idx} className="px-3 py-1.5 rounded-full text-xs md:text-sm font-medium" style={{ backgroundColor: `${activeService.color}15`, color: activeService.color, border: `1px solid ${activeService.color}25` }}>
                            {industry}
                          </span>
                        ))}
                      </div>
                    
                      <p className="text-sm font-medium mb-4 text-left">
                        {activeService.convincingMessage}
                      </p>
                      <Link href="/contact">
                        <button className="w-[80%] py-3 text-white font-semibold rounded-sm transition-all duration-300 hover:scale-105" style={{ backgroundColor: activeService.color }}>
                          Get Started →
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        )}

        {/* Portfolio Section */}
        <FadeDown>
          <div className="text-center mt-16 mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#17012C] mb-4">Our Works</h2>
            <p className="text-base md:text-lg lg:text-xl text-[#666666] max-w-2xl mx-auto">Real solutions delivering real results for businesses across Ghana</p>
          </div>
        </FadeDown>

        {/* Projects Grid - All Projects (no filter) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-0">
          {projects.map((project, index) => (
            <FadeUp key={project.id} delay={index * 0.1}>
              <div className="group bg-white overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer" onClick={() => setSelectedProject(project)}>
                <div className="relative h-58 overflow-hidden">
                  <Image 
                    src={`/proj${project.id}.jpg`}
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

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
                <h3 className="text-2xl font-bold text-[#17012C]">{selectedProject.title}</h3>
                <button onClick={() => setSelectedProject(null)} className="text-[#666666] hover:text-[#F39F5F] text-2xl">✕</button>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <div className="text-8xl mb-4 text-center">{selectedProject.icon}</div>
                    <p className="text-[#666666] leading-relaxed">{selectedProject.description}</p>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-[#17012C] mb-1">The Challenge</h4>
                      <p className="text-sm text-[#666666]">{selectedProject.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#17012C] mb-1">The Solution</h4>
                      <p className="text-sm text-[#666666]">{selectedProject.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#17012C] mb-1">The Results</h4>
                      <p className="text-sm text-[#666666]">{selectedProject.results}</p>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-xs text-[#666666] mb-1">Client</h4>
                      <p className="font-semibold text-[#17012C]">{selectedProject.client}</p>
                    </div>
                    <div>
                      <h4 className="text-xs text-[#666666] mb-1">Duration</h4>
                      <p className="font-semibold text-[#17012C]">{selectedProject.duration}</p>
                    </div>
                  </div>
                  <h4 className="text-xs text-[#666666] mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span key={idx} className="text-sm text-[#5B3AEE] bg-[#5B3AEE]/10 px-3 py-1 rounded-full">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-6 mt-4 flex gap-4">
                  <Link href="/contact">
                    <button className="px-6 py-2.5 bg-[#F39F5F] text-white font-semibold rounded-lg hover:bg-[#E8893E] transition-colors">Start a Similar Project</button>
                  </Link>
                  <button onClick={() => setSelectedProject(null)} className="px-6 py-2.5 border border-gray-300 text-[#666666] rounded-lg hover:bg-gray-50">Close</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
    </div>
  );
};

export default Portfolio;