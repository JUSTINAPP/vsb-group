import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BottomNav from '@/components/BottomNav'
import PageHero from '@/components/PageHero'
import NewsletterForm from '@/components/NewsletterForm'
import { PortableText } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/react'
import { getEvents, getPosts } from '@/lib/sanity'

export const metadata: Metadata = {
  title: { absolute: "What's On | South Beach Restaurant" },
  description: "See what's on at South Beach Restaurant in Mount Martha. Discover upcoming events, seasonal specials and what's happening at our coastal venue.",
  alternates: { canonical: 'https://sbmm.com.au/whats-on' },
  openGraph: {
    title: "What's On | South Beach Restaurant",
    description: "See what's on at South Beach Restaurant in Mount Martha. Discover upcoming events, seasonal specials and what's happening at our coastal venue.",
    url: 'https://sbmm.com.au/whats-on',
    siteName: 'South Beach Restaurant',
    images: [{ url: '/assets/sbmm-whats-on-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "What's On | South Beach Restaurant",
    description: "See what's on at South Beach Restaurant in Mount Martha. Discover upcoming events, seasonal specials and what's happening at our coastal venue.",
  },
}

export const dynamic = 'force-dynamic'
export const revalidate = 0

type EventItem = {
  _id: string
  kind: 'event'
  title: string
  date: string
  description?: PortableTextBlock[]
  price?: string
  bookingLink?: string
  imageUrl?: string
  bookingsRequired?: boolean
}

type PostItem = {
  _id: string
  kind: 'post'
  title: string
  date: string
  excerpt?: string
  imageUrl?: string
  slug: string
}

type FeedItem = EventItem | PostItem

export default async function WhatsOnPage() {
  const [events, posts] = await Promise.all([
    getEvents().catch(() => []),
    getPosts().catch(() => []),
  ])

  const eventItems: EventItem[] = (events as Omit<EventItem, 'kind'>[]).map((e) => ({
    ...e,
    kind: 'event',
    date: e.date,
  }))

  const postItems: PostItem[] = (posts as { _id: string; title: string; publishedAt: string; excerpt?: string; imageUrl?: string; slug: string }[]).map((p) => ({
    _id: p._id,
    kind: 'post',
    title: p.title,
    date: p.publishedAt,
    excerpt: p.excerpt,
    imageUrl: p.imageUrl,
    slug: p.slug,
  }))

  const feed: FeedItem[] = [...eventItems, ...postItems].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="South Beach · Mount Martha"
          title="What's On"
          subtitle="Events, functions & seasonal happenings"
          image="/assets/sbmm-whats-on-image.jpg"
        />

        <section className="bg-cream py-[48px] md:py-[64px]">
          <div className="max-w-7xl mx-auto px-6 md:px-[60px]">
            <p className="text-[10px] tracking-[0.2em] uppercase text-sky font-jost font-normal mb-[10px]">
              What&apos;s On
            </p>
            <h2 className="font-cormorant font-light text-[34px] md:text-[42px] text-charcoal leading-[1.05] mb-1 tracking-[0.02em]">
              Events &amp; News
            </h2>
            <p className="font-cormorant italic font-light text-[18px] text-warm mb-8">
              Functions, specials &amp; coastal gatherings
            </p>

            {feed.length === 0 ? (
              <p className="text-[14px] text-warm font-jost font-light">
                Nothing scheduled right now — check back soon.
              </p>
            ) : (
              <div className="grid md:grid-cols-2 gap-5">
                {feed.map((item) => {
                  const formattedDate = new Date(item.date).toLocaleDateString('en-AU', {
                    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
                  })

                  return (
                    <div key={item._id} className="bg-white rounded-[6px] overflow-hidden border border-[#EDECEA] flex flex-col">
                      {/* Image */}
                      {item.imageUrl ? (
                        <div className="relative h-[200px] overflow-hidden shrink-0">
                          <Image
                            src={item.imageUrl}
                            alt={item.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                          <div className="absolute inset-0 bg-sky-dark/45 flex items-center justify-center">
                            <p className="font-cormorant italic font-light text-[26px] text-white tracking-[0.04em] px-4 text-center">
                              {item.title}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="h-[80px] bg-sky/10 flex items-center justify-center shrink-0">
                          <p className="font-cormorant italic font-light text-[20px] text-charcoal/50 px-4 text-center">
                            {item.title}
                          </p>
                        </div>
                      )}

                      {/* Body */}
                      <div className="px-5 py-[18px] flex flex-col flex-1">
                        <div className="flex items-center gap-2 mb-[6px]">
                          <p className="text-[10px] tracking-[0.16em] uppercase text-sky font-jost font-normal">
                            {formattedDate}
                          </p>
                          {item.kind === 'post' && (
                            <span className="text-[9px] tracking-[0.08em] uppercase text-white bg-sky px-[6px] py-[2px] rounded-[2px] font-jost">
                              News
                            </span>
                          )}
                        </div>

                        <h3 className="font-cormorant font-normal text-[20px] text-charcoal mb-2 leading-[1.2]">
                          {item.title}
                        </h3>

                        {/* Excerpt / description */}
                        {item.kind === 'post' && item.excerpt && (
                          <p className="text-[13px] text-warm font-jost font-light leading-[1.65] mb-4 flex-1">
                            {item.excerpt}
                          </p>
                        )}
                        {item.kind === 'event' && item.description && (
                          <div className="text-[13px] text-warm font-jost font-light leading-[1.65] mb-4 flex-1 [&_p]:mb-2 [&_h3]:font-cormorant [&_h3]:text-[17px] [&_h3]:text-charcoal [&_h3]:mb-1 [&_h4]:font-cormorant [&_h4]:text-[15px] [&_h4]:text-charcoal [&_h4]:mb-1">
                            <PortableText value={item.description} />
                          </div>
                        )}

                        {/* Footer row */}
                        <div className="flex items-center justify-between gap-3 mt-auto pt-3">
                          <div>
                            {item.kind === 'event' && item.price && (
                              <p className="text-[12px] text-charcoal font-jost font-light">
                                {item.price}
                              </p>
                            )}
                            {item.kind === 'event' && item.bookingsRequired && (
                              <span className="text-[9px] tracking-[0.1em] uppercase text-sky bg-sky-light px-[6px] py-[2px] rounded-[2px] font-jost inline-block mt-1">
                                Bookings required
                              </span>
                            )}
                          </div>

                          {item.kind === 'post' ? (
                            <Link
                              href={`/whats-on/${item.slug}`}
                              className="text-[10px] tracking-[0.14em] uppercase text-sky font-jost font-normal shrink-0 hover:text-sky-dark transition-colors"
                            >
                              Read more →
                            </Link>
                          ) : (
                            item.bookingLink && (
                              <a
                                href={item.bookingLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[10px] tracking-[0.14em] uppercase text-sky font-jost font-normal shrink-0"
                              >
                                Book now →
                              </a>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </section>

        <NewsletterForm />
      </main>
      <Footer />
      <BottomNav />
    </>
  )
}
