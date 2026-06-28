import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.vkacademy.co.in'
  
  const routes = [
    '',
    '/academic-divisions',
    '/batches',
    '/contact',
    '/faculty',
    '/student-life',
    '/wall-of-fame',
  ]
  
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }))
}
