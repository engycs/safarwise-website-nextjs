import type { MetadataRoute } from 'next'
import { BASE_URL } from '@/utils/metadata'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/private/']
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL
  }
}
