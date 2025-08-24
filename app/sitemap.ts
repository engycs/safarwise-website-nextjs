import type { MetadataRoute } from 'next'
import { BASE_URL } from '@/utils/metadata'

const locales = ['en', 'ar'] as const;
const routes = ['', '/investors', '/partners', '/tools/labeeb', '/tools/travelycs', '/tools/concierge', '/tools/smarthub'];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  const urls: MetadataRoute.Sitemap = [];
  for(const l of locales){
    for(const r of routes){
      urls.push({
        url: `${BASE_URL}/${l}${r}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: r === '' ? 1 : 0.7
      });
    }
  }
  return urls;
}
