import React from 'react'
import { FaGlobe, FaMobile, FaTools, FaPaintBrush, FaArrowCircleUp, FaHandsHelping } from 'react-icons/fa';
import Link from 'next/link'
import { 
  FadeUp, 
  FadeDown, 

} from '../components/Reveal';

const Projects = () => {
  const projectsData = [
    {
      image: '/pro-1.jpg',
      title: 'E-commence Website',
      description: 'A platform offering cloth services with ease',
      href: 'https://sire-e-commence.vercel.app'
    },
    {
      image: '/pro-2.jpg',
      title: 'Real Estate Website',
      description: 'Ensuring easy access to properties worth while',
      href: 'https://sire-estate.vercel.app'
    },
    {
      image: '/pro-3.jpg',
      title: 'A University School Website',
      description: 'Offering a full expirence through the school',
      href: 'https://sire-school.vercel.app'
    },
    {
      image: '/pro-3.jpg',
      title: 'A University School Website',
      description: 'Offering a full expirence through the school',
      href: 'https://sire-school.vercel.app'
    },
       {
      image: '/pro-1.jpg',
      title: 'E-commence Website',
      description: 'A platform offering cloth services with ease',
      href: 'https://sire-e-ecommence.vercel.app'
    },
     
    {
      image: '/pro-1.jpg',
      title: 'E-commence Website',
      description: 'A platform offering cloth services with ease',
      href: 'https://sire-e-commence.vercel.app'
    },
    {
      image: '/pro-2.jpg',
      title: 'Real Estate Website',
      description: 'Ensuring easy access to properties worth while',
      href: 'https://sire-estate.vercel.app'
    },
    {
      image: '/pro-3.jpg',
      title: 'A University School Website',
      description: 'Offering a full expirence through the school',
      href: 'https://sire-school.vercel.app'
    },
    {
      image: '/pro-3.jpg',
      title: 'A University School Website',
      description: 'Offering a full expirence through the school',
      href: 'https://sire-school.vercel.app'
    },
       {
      image: '/pro-1.jpg',
      title: 'E-commence Website',
      description: 'A platform offering cloth services with ease',
      href: 'https://sire-e-ecommence.vercel.app'
    },
     
    {
      image: '/pro-1.jpg',
      title: 'E-commence Website',
      description: 'A platform offering cloth services with ease',
      href: 'https://sire-e-commence.vercel.app'
    },
    {
      image: '/pro-2.jpg',
      title: 'Real Estate Website',
      description: 'Ensuring easy access to properties worth while',
      href: 'https://sire-estate.vercel.app'
    },
    {
      image: '/pro-3.jpg',
      title: 'A University School Website',
      description: 'Offering a full expirence through the school',
      href: 'https://sire-school.vercel.app'
    },
    {
      image: '/pro-3.jpg',
      title: 'A University School Website',
      description: 'Offering a full expirence through the school',
      href: 'https://sire-school.vercel.app'
    },
       {
      image: '/pro-1.jpg',
      title: 'E-commence Website',
      description: 'A platform offering cloth services with ease',
      href: 'https://sire-e-ecommence.vercel.app'
    }
  ];

  return (
       <section id="contact" className="relative w-full overflow-hidden" style={{ 
      background: 'transparent',
    }}>         {/* Section Header */}
           <div className="relative w-full h-[300px] md:h-[350px] overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
               style={{ 
                 backgroundImage: "url('/projects-banner.jpg')",
               }}>
          </div>
          
</div>
  </section> 
  )
}

export default Projects
