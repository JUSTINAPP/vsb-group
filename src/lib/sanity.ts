import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? 'fmo1x798',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
})

export async function getEvents() {
  return client.fetch(
    `*[_type == "event" && published != false] | order(date desc) {
      _id, title, slug, date, description, price, bookingsRequired, bookingLink,
      "imageUrl": image.asset->url
    }`
  )
}

export async function getPosts() {
  return client.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      _id, title, "slug": slug.current, publishedAt, excerpt,
      "imageUrl": image.asset->url,
      "imageAlt": image.alt
    }`
  )
}

export async function getPost(slug: string) {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id, title, "slug": slug.current, publishedAt, excerpt,
      "imageUrl": image.asset->url,
      "imageAlt": image.alt,
      seoTitle, seoDescription,
      "ogImageUrl": ogImage.asset->url,
      body
    }`,
    { slug }
  )
}

export async function getNoticeBar() {
  return client.fetch(
    `*[_type == "noticeBar"][0] { enabled, message, backgroundColour, textColour }`
  )
}

export async function getSettings() {
  return client.fetch(
    `*[_type == "settings"][0] {
      bookingUrl, email, functionsEmail, instagramUrl, facebookUrl
    }`
  )
}
