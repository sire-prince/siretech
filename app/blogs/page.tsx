'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FadeUp, 
  FadeDown, 
  FadeLeft, 
  FadeRight 
} from '../components/Reveal';
import { 
  FaCalendarAlt, 
  FaUser, 
  FaTag, 
  FaArrowRight,
  FaSearch,
  FaClock,
  FaEye
} from 'react-icons/fa';

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

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Web Development', 'Mobile Apps', 'SEO', 'Design', 'Business'];

  const blogPosts = [
    {
      id: 1,
      title: "How to Choose the Right Tech Stack for Your Project",
      excerpt: "Selecting the right technology stack is crucial for your project's success. Learn about the factors to consider when choosing between MERN, MEAN, LAMP, and other stacks.",
      image: "/blog1.jpg",
      author: "SireTech",
      date: "May 15, 2025",
      readTime: "8 min read",
      views: 1240,
      category: "Web Development",
      tags: ["Tech Stack", "Development", "Best Practices"],
      slug: "choose-right-tech-stack"
    },
    {
      id: 2,
      title: "The Future of Mobile App Development in Africa",
      excerpt: "Africa's mobile-first market presents unique opportunities. Discover the trends shaping mobile app development across the continent and how businesses can capitalize.",
      image: "/blog2.jpg",
      author: "SireTech",
      date: "May 10, 2025",
      readTime: "6 min read",
      views: 890,
      category: "Mobile Apps",
      tags: ["Mobile", "Africa", "Trends"],
      slug: "future-mobile-app-development-africa"
    },
    {
      id: 3,
      title: "SEO Strategies That Actually Work in 2025",
      excerpt: "Search engine algorithms keep evolving. Stay ahead with these proven SEO strategies that deliver real results for Ghanaian businesses.",
      image: "/blog3.jpg",
      author: "SireTech",
      date: "May 5, 2025",
      readTime: "10 min read",
      views: 2100,
      category: "SEO",
      tags: ["SEO", "Marketing", "Growth"],
      slug: "seo-strategies-2025"
    },
    {
      id: 4,
      title: "Why Your Business Needs a Custom Website (Not Template)",
      excerpt: "Templates might seem cost-effective, but custom websites offer unique advantages. Find out why investing in custom development pays off long-term.",
      image: "/blog4.jpg",
      author: "SireTech",
      date: "April 28, 2025",
      readTime: "7 min read",
      views: 1560,
      category: "Web Development",
      tags: ["Web Design", "Custom Development", "Business"],
      slug: "custom-website-vs-template"
    },
    {
      id: 5,
      title: "UI/UX Trends That Will Dominate 2025",
      excerpt: "From glassmorphism to micro-interactions, discover the UI/UX trends that will shape digital experiences this year.",
      image: "/blog5.jpg",
      author: "SireTech",
      date: "April 20, 2025",
      readTime: "5 min read",
      views: 980,
      category: "Design",
      tags: ["UI", "UX", "Trends"],
      slug: "ui-ux-trends-2025"
    },
    {
      id: 6,
      title: "Digital Transformation: A Guide for SMEs",
      excerpt: "Small and medium enterprises can thrive in the digital age. Learn practical steps to transform your business operations and reach more customers online.",
      image: "/blog6.jpg",
      author: "SireTech",
      date: "April 15, 2025",
      readTime: "9 min read",
      views: 1430,
      category: "Business",
      tags: ["Digital Transformation", "SME", "Strategy"],
      slug: "digital-transformation-guide-smes"
    }
  ];

  // Filter posts based on search and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Featured post (first post)
  const featuredPost = blogPosts[0];

  return (
    <section id="blog" className="relative w-full overflow-hidden py-16 md:py-20" style={{ 
      background: 'transparent',
      
    }}>
      
      {/* Animated background blobs */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full mix-blend-screen filter blur-3xl animate-pulse" 
             style={{ background: colors.accent }}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full mix-blend-screen filter blur-3xl animate-pulse delay-1000" 
             style={{ background: colors.blue }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 
    {/* Section Header */}
                <FadeUp>
                  <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#17012C] mb-3">
              Latest Insights & 
<span className="text-[#F39F5F]">  Articles</span>
                    </h2>
                   <p className="text-sm md:text-base" style={{ color: colors.textMuted }}>
              Stay updated with the latest trends in web development, design, and digital marketing
            </p>
                  </div>
                </FadeUp>
        {/* Search and Filter Bar */}
        <FadeUp>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
            {/* Search Box */}
            <div className="relative w-full md:w-80">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border rounded-lg focus:outline-none focus:border-[#F39F5F] transition-all text-sm"
                style={{ 
                  background: 'white',
                  borderColor: '#e0e0e0',
                  color: colors.textDark
                }}
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                  style={{
                    background: selectedCategory === category ? colors.accent : 'transparent',
                    border: selectedCategory === category ? 'none' : `1px solid #e0e0e0`
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Featured Post */}
        {searchTerm === '' && selectedCategory === 'All' && (
          <FadeUp>
            <div className="mb-12">
              <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
                <div className="relative h-[400px] md:h-[500px]">
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/50 to-transparent z-10" />
                  <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                    {/* Placeholder for featured image */}
                    <div className="text-center text-gray-500">[Featured Image: {featuredPost.title}]</div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 z-20 p-6 md:p-8">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4" style={{ background: colors.accent, color: 'white' }}>
                    {featuredPost.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-200 text-sm md:text-base mb-4 max-w-2xl">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-gray-300 text-xs mb-4">
                    <span className="flex items-center gap-1">
                      <FaUser className="w-3 h-3" />
                      {featuredPost.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt className="w-3 h-3" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaClock className="w-3 h-3" />
                      {featuredPost.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaEye className="w-3 h-3" />
                      {featuredPost.views} views
                    </span>
                  </div>
                  <Link href={`/blog/${featuredPost.slug}`}>
                    <button className="flex items-center gap-2 text-white font-semibold text-sm hover:gap-3 transition-all duration-200">
                      Read Article <FaArrowRight className="w-3 h-3" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </FadeUp>
        )}

        {/* Blog Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, index) => (
              <FadeUp key={post.id} delay={index * 0.1}>
                <Link href={`/blog/${post.slug}`}>
                  <div className="group rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
                       style={{ 
                         background: 'white',
                         border: '1px solid #f0f0f0',
                         boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                       }}>
                    {/* Image */}
                    <div className="relative h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                      <div className="text-gray-400 text-sm">[Image]</div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-1 rounded text-[10px] font-medium" style={{ background: `${colors.accent}10`, color: colors.accent }}>
                          {post.category}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-bold mb-2 line-clamp-2 transition-colors duration-200 group-hover:text-[#F39F5F]" 
                          style={{ color: colors.primary }}>
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-500 text-sm mb-3 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <FaCalendarAlt className="w-3 h-3" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <FaClock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                        </div>
                        <span className="flex items-center gap-1">
                          <FaEye className="w-3 h-3" />
                          {post.views}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <span className="flex items-center gap-1 text-xs text-gray-500">
                          <FaUser className="w-3 h-3" />
                          {post.author}
                        </span>
                        <span className="text-[#F39F5F] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read More <FaArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No posts found matching your criteria.</p>
          </div>
        )}

       
      </div>
    </section>
  );
};

export default Blog;