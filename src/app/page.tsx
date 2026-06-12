import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BottomNav from '@/components/BottomNav'
import MenuItemRow from '@/components/MenuItemRow'
import HeroSlideshow from '@/components/HeroSlideshow'
import { ColourDeviceStrip } from '@/components/ColourDeviceStrip'
import { BeachShackBand } from '@/components/BeachShackBand'
import { allDayDining, afternoonMenu } from '@/data/menu'
import { PortableText } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/react'
import { getEvents, getPosts, getNoticeBar } from '@/lib/sanity'

export const metadata: Metadata = {
  title: { absolute: 'South Beach Restaurant | Coastal Dining in Mount Martha' },
  description: 'South Beach Restaurant is a relaxed coastal bistro, bar and kiosk in Mount Martha. Fresh food, beachside views and an easygoing atmosphere on the Mornington Peninsula.',
  alternates: { canonical: 'https://sbmm.com.au' },
  openGraph: {
    title: 'South Beach Restaurant | Coastal Dining in Mount Martha',
    description: 'South Beach Restaurant is a relaxed coastal bistro, bar and kiosk in Mount Martha. Fresh food, beachside views and an easygoing atmosphere on the Mornington Peninsula.',
    url: 'https://sbmm.com.au',
    siteName: 'South Beach Restaurant',
    images: [{ url: '/assets/South-Beach-Project-Exterior-05-2400x1300-1.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'South Beach Restaurant | Coastal Dining in Mount Martha',
    description: 'South Beach Restaurant is a relaxed coastal bistro, bar and kiosk in Mount Martha. Fresh food, beachside views and an easygoing atmosphere on the Mornington Peninsula.',
  },
}

export const dynamic = 'force-dynamic'
export const revalidate = 0

const SEVENROOMS_BOOKING = 'https://www.sevenrooms.com/explore/southbeachproject/reservations/create/search/?date=2026-01-16&venues=southbeachproject%2Cvolpinopizzeriaandwinebar'
const SEVENROOMS_EVENTS  = 'https://www.sevenrooms.com/events/southbeachproject/paella-pintos-night-5599261673078784'

type HomeFeedItem =
  | { kind: 'event'; _id: string; title: string; date: string; description?: PortableTextBlock[]; price?: string; bookingLink?: string; imageUrl?: string }
  | { kind: 'post';  _id: string; title: string; date: string; excerpt?: string; imageUrl?: string; slug: string }

export default async function HomePage() {
  const [events, posts, noticeBar] = await Promise.all([
    getEvents().catch(() => []),
    getPosts().catch(() => []),
    getNoticeBar().catch(() => null),
  ])

  const eventItems = (events as Omit<Extract<HomeFeedItem, { kind: 'event' }>, 'kind'>[]).map(
    (e) => ({ ...e, kind: 'event' as const })
  )
  const postItems = (posts as { _id: string; title: string; publishedAt: string; excerpt?: string; imageUrl?: string; slug: string }[]).map(
    (p) => ({ kind: 'post' as const, _id: p._id, title: p.title, date: p.publishedAt, excerpt: p.excerpt, imageUrl: p.imageUrl, slug: p.slug })
  )

  const upcomingFeed: HomeFeedItem[] = [...eventItems, ...postItems]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)

  const allDayItems   = allDayDining[0]?.items.slice(0, 5) ?? []
  const afternoonItems = afternoonMenu[0]?.items.slice(0, 5) ?? []

  return (
    <>
      {/* ── NOTICE BAR — controlled via Sanity noticeBar document ── */}
      {noticeBar?.enabled === true && (
        <div
          style={{
            background: noticeBar.backgroundColour ?? '#f3efe4',
            color: noticeBar.textColour ?? '#1A1916',
          }}
          className="px-[22px] py-[11px] flex flex-col items-center justify-center text-center gap-[3px]"
        >
          {noticeBar.message && (
            <p className="text-[11px] font-jost font-light tracking-[0.04em]">
              {noticeBar.message}
            </p>
          )}
          {noticeBar.secondaryMessage && (
            <p className="text-[11px] font-jost font-light tracking-[0.04em] opacity-75">
              {noticeBar.secondaryMessage}
            </p>
          )}
        </div>
      )}

      <Nav />

      <main>
        {/* ── HERO ── */}
        <section className="relative h-[480px] md:h-[680px] overflow-hidden">
          <HeroSlideshow />
          <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/60" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <h1 className="font-cormorant italic font-light text-[44px] md:text-[80px] tracking-[0.04em] leading-[1] text-white mb-[22px]">
              Simple. Coastal. Good.
            </h1>
            <div className="w-[44px] h-px bg-white/30 mb-[22px]" />
            <div className="flex flex-col md:flex-row gap-[10px] mb-[22px] items-center">
              <a
                href={SEVENROOMS_BOOKING}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[210px] md:w-auto bg-sky text-white px-[22px] py-[13px] md:py-[14px] md:px-[28px] rounded-[3px] text-[11px] font-normal tracking-[0.12em] uppercase font-jost text-center transition-colors hover:bg-sky-dark"
              >
                Book a Table
              </a>
              <Link
                href="/eat-drink"
                className="w-[210px] md:w-auto bg-transparent text-white border border-white/40 px-[22px] py-[12px] md:py-[13px] md:px-[28px] rounded-[3px] text-[11px] font-normal tracking-[0.12em] uppercase font-jost text-center transition-colors hover:bg-white/10"
              >
                View Menu
              </Link>
              <Link
                href="/functions"
                className="hidden md:inline-block bg-transparent text-white border border-white/40 px-[28px] py-[13px] rounded-[3px] text-[11px] font-normal tracking-[0.12em] uppercase font-jost transition-colors hover:bg-white/10"
              >
                Functions
              </Link>
            </div>
          </div>
        </section>

        {/* ── COLOUR STRIP ── */}
        <ColourDeviceStrip />

        {/* ── OUR STORY ── */}
        <div className="md:grid md:grid-cols-2">
          <section className="bg-cream py-[48px] md:py-[64px] px-6 md:px-[56px]">
            <p className="text-[10px] tracking-[0.2em] uppercase text-sky font-jost font-normal mb-[10px]">
              Our Story
            </p>
            <h2 className="font-cormorant font-light text-[34px] md:text-[44px] text-charcoal leading-[1.05] mb-[6px] tracking-[0.02em]">
              Fresh, coastal,
            </h2>
            <p className="font-cormorant italic font-light text-[34px] md:text-[44px] text-charcoal leading-[1.05] mb-5 tracking-[0.02em]">
              crafted with care
            </p>
            <p className="font-cormorant italic font-light text-[18px] text-warm mb-5">
              A beachfront restaurant &amp; bar in Mount Martha
            </p>
            <p className="text-[13px] leading-[1.8] text-warm font-jost font-light mb-5">
              South Beach is a restaurant, bar, and events venue in Mount Martha, on Victoria&apos;s Mornington
              Peninsula. Overlooking the beachfront, we serve fresh coastal flavours, innovative drinks, and
              showcase relaxed yet stylish spaces. Ideal for casual dining, private events, and sunset drinks,
              South Beach brings the spirit of Mount Martha alive.
            </p>
            <div className="text-[12px] text-warm font-jost font-light leading-[1.9] mb-6">
              Find Us<br />
              464 Esplanade, Mount Martha VIC 3934<br />
              <a href="mailto:events@southbeachproject.com.au" className="hover:text-sky transition-colors">
                events@southbeachproject.com.au
              </a>
            </div>
            <Link
              href="/about"
              className="text-[11px] tracking-[0.12em] uppercase text-sky font-jost font-normal border border-sky px-[22px] py-[12px] rounded-[3px] hover:bg-sky hover:text-white transition-colors inline-block"
            >
              Our Story →
            </Link>
          </section>

          {/* Story image — full height on desktop, fixed height on mobile */}
          <div className="relative h-[260px] md:h-auto min-h-0 md:min-h-[400px]">
            <Image
              src="/assets/sbmm-home-page-image-01.jpg"
              alt="South Beach Mount Martha"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* ── COLOUR STRIP + BEACH SHACK BAND ── */}
        <ColourDeviceStrip />
        <BeachShackBand />

        {/* ── MENU PREVIEW ── */}
        <section className="bg-white py-[48px] md:py-[64px]">
          <div className="max-w-7xl mx-auto px-6 md:px-[60px]">
            <div className="flex items-end justify-between mb-7 md:mb-8">
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-sky font-jost font-normal mb-2">
                  Menu
                </p>
                <h2 className="font-cormorant font-light text-[34px] md:text-[42px] text-charcoal leading-[1.05] tracking-[0.02em]">
                  What we&apos;re serving
                </h2>
                <p className="font-cormorant italic font-light text-[18px] text-warm mt-1">
                  Fresh coastal flavours · Locally sourced · All day dining
                </p>
              </div>
              <Link
                href="/eat-drink"
                className="hidden md:inline-block text-[10px] tracking-[0.12em] uppercase text-sky font-jost font-normal border border-sky px-[18px] py-[10px] rounded-[3px] hover:bg-sky hover:text-white transition-colors shrink-0"
              >
                Full Menu
              </Link>
            </div>

            {/* Two-column on desktop, single column on mobile */}
            <div className="md:grid md:grid-cols-2 md:gap-[56px]">
              {/* Left — All Day Dining */}
              <div>
                <div className="flex items-center gap-[10px] text-[9px] tracking-[0.2em] uppercase text-sky font-jost font-normal pt-2 pb-[10px] border-b border-[#E5E3DF] mb-1">
                  All Day Dining
                  <span className="flex-1 h-px bg-[#F0EDEA]" />
                </div>
                {allDayItems.map((item) => (
                  <MenuItemRow key={item.name} item={item} />
                ))}
              </div>

              {/* Right — Afternoon Menu */}
              <div className="mt-8 md:mt-0">
                <div className="flex items-center gap-[10px] text-[9px] tracking-[0.2em] uppercase text-sky font-jost font-normal pt-2 pb-[10px] border-b border-[#E5E3DF] mb-1">
                  Afternoon Menu — Fri &amp; Sat from 4.30pm
                  <span className="flex-1 h-px bg-[#F0EDEA]" />
                </div>
                {afternoonItems.map((item) => (
                  <MenuItemRow key={item.name} item={item} />
                ))}
              </div>
            </div>

            <div className="mt-6 border-t border-[#EDECEA] pt-4">
              <p className="text-[10px] text-warm font-jost font-light leading-[1.8]">
                (GR) Gluten Reduced · (GRA) Gluten Reduced Available · (V) Vegetarian · (DF) Dairy Free
                <br className="hidden md:block" />
                <span className="hidden md:inline"> · </span>
                Sundays 10% surcharge · Public Holidays 20% · Credit card 1.5%
              </p>
            </div>

            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <Link
                href="/eat-drink"
                className="flex-1 bg-sky text-white py-[14px] rounded-[3px] text-[11px] tracking-[0.12em] uppercase font-jost font-normal text-center hover:bg-sky-dark transition-colors"
              >
                Full Menu
              </Link>
              <Link
                href="/eat-drink"
                className="flex-1 border border-sky text-sky bg-transparent py-[13px] rounded-[3px] text-[11px] tracking-[0.12em] uppercase font-jost font-normal text-center hover:bg-sky hover:text-white transition-colors"
              >
                Drinks Menu
              </Link>
            </div>
          </div>
        </section>

        {/* ── COLOUR STRIP ── */}
        <ColourDeviceStrip />

        {/* ── EVENTS & NEWS ── */}
        <section className="bg-cream py-[48px] md:py-[64px]">
          <div className="max-w-7xl mx-auto px-6 md:px-[60px]">
            <p className="text-[10px] tracking-[0.2em] uppercase text-sky font-jost font-normal mb-[10px]">
              What&apos;s On
            </p>
            <h2 className="font-cormorant font-light text-[34px] md:text-[42px] text-charcoal leading-[1.05] mb-1 tracking-[0.02em]">
              Events &amp; News
            </h2>
            <p className="font-cormorant italic font-light text-[18px] text-warm mb-7">
              Functions, specials &amp; coastal gatherings
            </p>

            {upcomingFeed.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {upcomingFeed.map((item) => {
                  const formattedDate = new Date(item.date).toLocaleDateString('en-AU', {
                    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
                  })
                  return (
                    <div key={item._id} className="bg-white rounded-[4px] overflow-hidden border border-[#EDECEA]">
                      {item.imageUrl ? (
                        <div className="relative h-[160px] md:h-[180px] overflow-hidden">
                          <Image src={item.imageUrl} alt={item.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                          <div className="absolute inset-0 bg-sky-dark/45 flex items-center justify-center">
                            <p className="font-cormorant italic font-light text-[24px] md:text-[26px] tracking-[0.04em] text-white px-4 text-center">
                              {item.title}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="h-[80px] bg-sky/10 flex items-center justify-center">
                          <p className="font-cormorant italic font-light text-[20px] tracking-[0.04em] text-charcoal/50">
                            {item.title}
                          </p>
                        </div>
                      )}
                      <div className="px-5 py-[18px]">
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
                        <h3 className="font-cormorant font-normal text-[19px] text-charcoal mb-2 leading-[1.2]">
                          {item.title}
                        </h3>
                        {item.kind === 'post' && item.excerpt && (
                          <p className="text-[12px] text-warm font-jost font-light leading-[1.65] mb-[14px]">
                            {item.excerpt}
                          </p>
                        )}
                        {item.kind === 'event' && item.description && (
                          <div className="text-[12px] text-warm font-jost font-light leading-[1.65] mb-[14px] [&_p]:mb-2 [&_h3]:font-cormorant [&_h3]:text-[16px] [&_h3]:text-charcoal [&_h3]:mb-1 [&_h4]:font-cormorant [&_h4]:text-[14px] [&_h4]:text-charcoal [&_h4]:mb-1">
                            <PortableText value={item.description} />
                          </div>
                        )}
                        <div className="flex items-center justify-between mt-auto">
                          {item.kind === 'event' && item.price && (
                            <p className="text-[12px] text-charcoal font-jost font-light">{item.price}</p>
                          )}
                          {item.kind === 'post' ? (
                            <Link href={`/whats-on/${item.slug}`} className="text-[10px] tracking-[0.14em] uppercase text-sky font-jost font-normal ml-auto">
                              Read more →
                            </Link>
                          ) : (
                            item.bookingLink && (
                              <a href={item.bookingLink} target="_blank" rel="noopener noreferrer" className="text-[10px] tracking-[0.14em] uppercase text-sky font-jost font-normal ml-auto">
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
            ) : (
              <p className="text-[13px] text-warm font-jost font-light">
                Nothing scheduled right now — check back soon.
              </p>
            )}

            <div className="text-center mt-8">
              <Link
                href="/whats-on"
                className="text-[10px] tracking-[0.14em] uppercase text-sky font-jost font-normal"
              >
                All Events &amp; News →
              </Link>
            </div>
          </div>
        </section>

        {/* ── BOOK CTA ── */}
        <section className="bg-charcoal py-[52px] md:py-[64px] text-white md:text-center">
          <div className="max-w-7xl mx-auto px-6 md:px-[60px]">
            <p className="text-[10px] tracking-[0.2em] uppercase text-gold font-jost font-normal mb-[10px]">
              Reserve your table
            </p>
            <h2 className="font-cormorant font-light text-[34px] md:text-[48px] leading-[1.05] mb-[8px]">
              Book online or call us direct
            </h2>
            <p className="font-cormorant italic font-light text-[18px] text-white/55 mb-8">
              We&apos;d love to welcome you to South Beach
            </p>
            <div className="flex flex-col md:flex-row md:justify-center gap-[10px] md:gap-3 mb-[18px]">
              <a
                href={SEVENROOMS_BOOKING}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sky text-white py-[14px] md:px-[28px] rounded-[3px] text-[11px] tracking-[0.12em] uppercase font-jost font-normal text-center hover:bg-sky-dark transition-colors"
              >
                Book Online
              </a>
              <a
                href={SEVENROOMS_EVENTS}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border border-white/35 text-white py-[13px] md:px-[28px] rounded-[3px] text-[11px] tracking-[0.12em] uppercase font-jost font-normal text-center hover:bg-white/8 transition-colors"
              >
                Ticketed Events
              </a>
              <Link
                href="/functions"
                className="bg-transparent border border-white/35 text-white py-[13px] md:px-[28px] rounded-[3px] text-[11px] tracking-[0.12em] uppercase font-jost font-normal text-center hover:bg-white/8 transition-colors"
              >
                Functions Enquiry
              </Link>
            </div>
            <p className="text-[10px] text-white/28 font-jost font-light leading-[1.8]">
              Sundays incur a 10% surcharge · Public Holidays 20% surcharge · All credit card payments incur a 1.5% surcharge
            </p>
          </div>
        </section>

        {/* ── FIND US ── */}
        <section className="bg-cream py-[48px] md:py-[64px]">
          <div className="max-w-7xl mx-auto px-6 md:px-[60px]">
            <p className="text-[10px] tracking-[0.2em] uppercase text-sky font-jost font-normal mb-[10px]">
              Find Us
            </p>
            <h2 className="font-cormorant font-light text-[34px] md:text-[42px] text-charcoal leading-[1.05] mb-5 tracking-[0.02em]">
              Mount Martha
            </h2>
            <div className="h-px bg-[#EDECEA] mb-5" />

            {/* Info cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
              {[
                {
                  label: 'Address',
                  value: <>464 Esplanade<br />Mount Martha VIC 3934</>,
                },
                {
                  label: 'Hours',
                  value: <>Open daily 7.30am – 2.30pm<br />Afternoon menu Fri &amp; Sat from 4.30pm</>,
                },
                {
                  label: 'Contact',
                  value: (
                    <a href="mailto:events@southbeachproject.com.au" className="hover:text-sky transition-colors break-all">
                      events@southbeachproject.com.au
                    </a>
                  ),
                },
              ].map(({ label, value }) => (
                <div key={label} className="bg-sky-light rounded-[4px] border-l-2 border-sky px-[18px] py-4">
                  <p className="text-[9px] tracking-[0.18em] uppercase text-navy font-jost font-normal mb-1">{label}</p>
                  <p className="text-[13px] text-charcoal font-jost font-light leading-[1.6]">{value}</p>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-[6px] overflow-hidden border border-sky/15">
              <iframe
                src="https://maps.google.com/maps?q=464+Esplanade+Mount+Martha+VIC+3934+Australia&output=embed"
                width="100%"
                className="h-[300px] md:h-[400px] block"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="South Beach Mount Martha location"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BottomNav />
    </>
  )
}
