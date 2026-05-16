import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppbtn from "./components/WhatsAppbtn";
import { eudoxusSans } from "./font";

const siteConfig = {
  name: 'SireHub',
  url: 'https://SireHub.vercel.app',
  author: 'SireHub',
  location: 'Accra, Ghana',
  founded: '2020',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://SireHub.vercel.app'), // Added URL directly
  title: {
    default: 'SireHub | Premier Software Development & Web Design Agency in Ghana',
    template: '%s | SireHub',
  },
  description: 'Ghana\'s premier software development and web design agency. We build custom websites, mobile apps, and digital solutions that drive business growth. 2-4 week delivery. 150+ businesses served.',
  keywords: [
    'software development agency ghana', 'web design company accra', 'digital agency ghana',
    'software agency west africa', 'custom software development ghana', 'IT consulting ghana',
    'tech agency accra', 'web development ghana', 'mobile app development accra',
    'custom website design', 'ecommerce development ghana', 'SEO services ghana',
    'brand design agency', 'website maintenance services', 'graphic design company',
    'SaaS development', 'MVP development agency', 'business software solutions',
    'digital transformation ghana', 'enterprise software development', 'startup tech partner',
    'SME digital solutions', 'corporate web solutions', 'top software agency accra',
    'best web developers ghana', 'reliable IT partner', 'results-driven development',
    'performance guaranteed', '2-4 week delivery', 'lifetime support guarantee',
    'software development accra', 'web design company ghana', 'digital solutions west africa',
    'tech company accra ghana', 'IT services ghana',
  ],
  authors: [{ name: 'SireHub', url: 'https://SireHub.vercel.app' }],
  creator: 'SireHub',
  publisher: 'SireHub Digital Agency',
  openGraph: {
    type: 'website',
    locale: 'en_GH',
    url: 'https://SireHub.vercel.app',
    siteName: 'SireHub Digital Agency',
    title: 'SireHub | Premier Software Development & Web Design Agency in Ghana',
    description: 'Transform your business with custom software, websites, and mobile apps. Trusted by 150+ businesses. 2-4 week delivery. Based in Accra, serving globally.',
    images: [{
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SireHub - Premier Software Development Agency Ghana',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@SireHub',
    creator: '@SirePrince_7',
    title: 'SireHub | Software Development & Web Design Agency',
    description: 'Ghana\'s premier digital agency. Custom software, web design, mobile apps, and SEO. 2-4 week delivery. Results guaranteed.',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://SireHub.vercel.app',
  },
  category: 'Technology',
  verification: {
    google: 'ZO-WKJbTzK6Gg8p5FJgWG5bj-Sy5ADv6AZGIDL_3FB0',
  },
  other: {
    'geo.region': 'GH',
    'geo.placename': 'Accra',
    'geo.position': '5.6037;-0.1870',
    'ICBM': '5.6037, -0.1870',
    'classification': 'Software Development Agency, Web Design Company, Digital Agency',
  },
}







export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={eudoxusSans.variable}>
      <head>
        <meta name="theme-color" content="#17012C" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Business Information */}
        <meta name="business:contact_data:country" content="Ghana" />
        <meta name="business:contact_data:city" content="Accra" />
        
        {/* Facebook Meta Tags */}
        <meta property="fb:app_id" content="your-app-id" />
        
        {/* LinkedIn Meta Tags */}
        <meta name="linkedin:owner" content="SireHub" />
        
        {/* Additional SEO */}
        <meta name="rating" content="General" />
        <meta name="distribution" content="Global" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased min-h-screen">
        <Navbar />
        <WhatsAppbtn />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}