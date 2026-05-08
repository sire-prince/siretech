import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppbtn from "./components/WhatsAppbtn";
import { eudoxusSans } from "./font";


const siteConfig = {
  url: 'https://siretech.vercel.app',
  author: 'Sire Prince',

}

export const metadata: Metadata = {
  title: {
    default: 'Sire Prince | Agile Strategist & Full Stack Developer | Business Engineer', 
    template: '%s | Sire Prince',
  },
  description: 'Official portfolio of Sire Prince, a Business-Focused Software Engineer specializing in MERN stack, SaaS architecture, and Agile strategy.',
  keywords: [
    'Sire Prince', 
    'Full Stack Developer Ghana', 
    'Business Engineer', 
    'MERN Stack Expert', 
    'Software Engineer portfolio', 
    'SaaS Development'
  ],
  metadataBase: new URL('https://siretech.vercel.app'),
  authors: [{ name: 'Sire Prince' }], 
  creator: 'Sire Prince',
  openGraph: {
    type: 'website',
    locale: 'en_GH',
    url: 'https://siretech.vercel.app',
    title: 'Sire Prince | Software Developer | Business-Focused Engineer',
    description: 'Bridging the gap between technical execution and business strategy.',
    siteName: 'Sire Prince Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sire Prince | Full Stack Developer',
    description: 'Building scalable SaaS solutions and high-performance applications.',
    creator: '@Sire-Prince_7', 
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
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased min-h-screen">
        <Navbar />  < WhatsAppbtn />
             <main className="min-h-screen">
          {children}
        </main>
         <Footer /> 
      </body>
    </html>
  )
}
