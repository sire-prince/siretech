'use client';
import Link from 'next/link';
import { 
  FadeUp,  
} from '../components/Reveal';
import { fontFamily } from './theme'

// Your exact color palette
const colors = {
  primary: '#17012C',
  primaryLight: '#5B3AEE',
  accent: '#F39F5F',
  blue: '#219BE4'
}

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="text-white py-6 px-4 border-t border-white/10" 
      style={{ 
        fontFamily,
        background: `linear-gradient(135deg, ${colors.primary} 0%, #2A0A4A 50%, ${colors.primaryLight} 100%)`
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <FadeUp>
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-300">
                SireTech © copyright {currentYear}. All rights reserved.
              </p>
            </div>
          </FadeUp>
          <FadeUp>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </FadeUp>
        </div>
      </div>
    </footer>
  );
};

export default Footer;