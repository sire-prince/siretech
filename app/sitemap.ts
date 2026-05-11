// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vercel.app'

  // List all your static routes here
  const routes = [
    '',
    '/about',
    '/blogs',
    '/contact',
    '/pricing',
    '/projects',
    '/services',
    '/services/brand-design',
    '/services/graphic-design',
    '/services/maintenance',
    '/services/mobile-apps',
    '/services/seo',
    '/services/web-development',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
}
