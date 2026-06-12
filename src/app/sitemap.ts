import type { MetadataRoute } from 'next'
import { client } from '@/lib/sanity'

const BASE = 'https://sbmm.com.au'

const STATIC_ROUTES: { url: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
  { url: '/',                                   priority: 1.0,  changeFrequency: 'weekly' },
  { url: '/eat-drink',                          priority: 0.9,  changeFrequency: 'monthly' },
  { url: '/functions',                          priority: 0.9,  changeFrequency: 'monthly' },
  { url: '/functions/weddings',                 priority: 0.8,  changeFrequency: 'monthly' },
  { url: '/functions/corporate',                priority: 0.8,  changeFrequency: 'monthly' },
  { url: '/functions/birthdays-anniversary',    priority: 0.8,  changeFrequency: 'monthly' },
  { url: '/functions/engagements',              priority: 0.8,  changeFrequency: 'monthly' },
  { url: '/functions/wake',                     priority: 0.7,  changeFrequency: 'monthly' },
  { url: '/bookings',                           priority: 0.8,  changeFrequency: 'monthly' },
  { url: '/about',                              priority: 0.7,  changeFrequency: 'monthly' },
  { url: '/whats-on',                           priority: 0.7,  changeFrequency: 'weekly' },
  { url: '/contact',                            priority: 0.7,  changeFrequency: 'yearly' },
  { url: '/careers',                            priority: 0.6,  changeFrequency: 'monthly' },
  { url: '/faqs',                               priority: 0.6,  changeFrequency: 'monthly' },
  { url: '/privacy-policy',                     priority: 0.3,  changeFrequency: 'yearly' },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()

  const postSlugs: { slug: string; publishedAt: string }[] = await client
    .fetch(`*[_type == "post"] { "slug": slug.current, publishedAt }`)
    .catch(() => [])

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map(({ url, priority, changeFrequency }) => ({
    url: `${BASE}${url}`,
    lastModified: now,
    changeFrequency,
    priority,
  }))

  const postEntries: MetadataRoute.Sitemap = postSlugs.map(({ slug, publishedAt }) => ({
    url: `${BASE}/whats-on/${slug}`,
    lastModified: publishedAt ? new Date(publishedAt) : now,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }))

  return [...staticEntries, ...postEntries]
}
