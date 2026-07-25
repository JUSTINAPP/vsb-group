import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BottomNav from '@/components/BottomNav'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: { absolute: "What's On | VSB Group" },
  description:
    "See what's on across our venues — events, specials and happenings at Volpino Pizzeria & Wine Bar and South Beach Restaurant.",
  alternates: { canonical: 'https://vsbgroup.com.au/whats-on' },
  openGraph: {
    title: "What's On | VSB Group",
    description: "See what's on across our venues on the Mornington Peninsula.",
    url: 'https://vsbgroup.com.au/whats-on',
    images: [{ url: '/assets/sbmm-whats-on-image.jpg', width: 1200, height: 630 }],
  },
}

const VENUES = [
  {
    name: 'Volpino Pizzeria & Wine Bar',
    tag: 'Pizzeria & Wine Bar',
    desc: 'Check Volpino\'s website for upcoming events, wine dinners, specials and seasonal happenings.',
    cta: "What's On at Volpino",
    href: 'https://volpino.com.au',
    bg: null,
  },
  {
    name: 'South Beach Restaurant',
    tag: 'Coastal Restaurant & Bar',
    desc: 'Discover upcoming events, ticketed dinners and seasonal specials at South Beach Restaurant in Mount Martha.',
    cta: "What's On at South Beach",
    href: 'https://sbmm.com.au/whats-on',
    bg: '/assets/sbmm-whats-on-image.jpg',
  },
]

export default function WhatsOnPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Across Our Venues"
          title="What's On"
          subtitle="Events and happenings at Volpino & South Beach"
          image="/assets/sbmm-whats-on-image.jpg"
        />

        <section className="bg-cream py-[48px] md:py-[64px]">
          <div className="max-w-7xl mx-auto px-6 md:px-[60px]">
            <p className="text-[10px] tracking-[0.2em] uppercase text-gold font-sans font-normal mb-[10px]">
              Our venues
            </p>
            <h2 className="font-display uppercase tracking-tight font-semibold text-[34px] md:text-[42px] text-charcoal leading-[1.05] mb-2 tracking-[0.02em]">
              Choose a venue
            </h2>
            <p className="font-sans font-light text-[18px] text-warm mb-10">
              Events, specials &amp; seasonal happenings
            </p>

            <div className="grid md:grid-cols-2 gap-5">
              {VENUES.map(({ name, tag, desc, cta, href }) => (
                <div key={name} className="bg-white rounded-[4px] border border-[#EDECEA] px-6 py-7 flex flex-col">
                  <p className="text-[9px] tracking-[0.18em] uppercase text-gold font-sans font-normal mb-2">{tag}</p>
                  <h3 className="font-display uppercase tracking-tight font-semibold text-[24px] text-charcoal mb-3 leading-[1.1]">{name}</h3>
                  <p className="text-[12px] text-warm font-sans font-light leading-[1.7] mb-6 flex-1">{desc}</p>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center py-[13px] rounded-[3px] text-[11px] tracking-[0.12em] uppercase font-sans font-normal bg-transparent border border-gold text-gold hover:bg-gold hover:text-white transition-colors"
                  >
                    {cta} ↗
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-white rounded-[4px] border border-[#EDECEA] px-6 py-6">
              <p className="text-[10px] tracking-[0.16em] uppercase text-gold font-sans font-normal mb-2">
                Group events &amp; private functions
              </p>
              <p className="text-[13px] text-warm font-sans font-light leading-[1.8] mb-4">
                Planning a private event, function or celebration? Both of our venues offer spaces
                for private dining and events. Get in touch with the team to discuss your occasion.
              </p>
              <a
                href="/contact"
                className="text-[11px] tracking-[0.14em] uppercase text-gold font-sans font-normal hover:opacity-70 transition-opacity"
              >
                Make an Enquiry →
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BottomNav />
    </>
  )
}
