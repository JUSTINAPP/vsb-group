import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BottomNav from '@/components/BottomNav'
import PageHero from '@/components/PageHero'
import { ColourDeviceStrip } from '@/components/ColourDeviceStrip'

export const metadata: Metadata = {
  title: { absolute: 'Book Now | VSB Group' },
  description:
    'Make a booking at Volpino Pizzeria & Wine Bar or South Beach Restaurant on Victoria\'s Mornington Peninsula.',
  alternates: { canonical: 'https://vsbgroup.com.au/bookings' },
  openGraph: {
    title: 'Book Now | VSB Group',
    description: 'Make a booking at one of our venues on the Mornington Peninsula.',
    url: 'https://vsbgroup.com.au/bookings',
    images: [{ url: '/assets/South-Beach-Project-Exterior-05-2400x1300-1.jpg', width: 1200, height: 630 }],
  },
}

const SEVENROOMS_SOUTHBEACH =
  'https://www.sevenrooms.com/explore/southbeachproject/reservations/create/search/'

const VENUES = [
  {
    name: 'Volpino Pizzeria & Wine Bar',
    tag: 'Pizzeria & Wine Bar',
    desc: 'Reserve your table at Volpino for wood-fired pizza, handmade pasta, and exceptional wine in a warm, convivial atmosphere.',
    cta: 'Book at Volpino',
    href: 'https://volpino.com.au',
    external: true,
    primary: true,
    note: null,
  },
  {
    name: 'South Beach Restaurant',
    tag: 'Coastal Restaurant & Bar',
    desc: 'Reserve your table at South Beach for relaxed coastal dining, fresh food and beachside views at 464 Esplanade, Mount Martha.',
    cta: 'Book at South Beach',
    href: SEVENROOMS_SOUTHBEACH,
    external: true,
    primary: false,
    note: 'Powered by SevenRooms',
  },
]

export default function BookingsPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Reservations"
          title="Book Now"
          subtitle="Choose your venue"
        />

        <section className="bg-white py-[48px] md:py-[64px]">
          <div className="max-w-7xl mx-auto px-6 md:px-[60px]">
            <p className="text-[10px] tracking-[0.2em] uppercase text-gold font-jost font-normal mb-[10px]">
              Our venues
            </p>
            <h2 className="font-cormorant font-light text-[34px] md:text-[42px] text-charcoal leading-[1.05] mb-2 tracking-[0.02em]">
              Where would you like to dine?
            </h2>
            <p className="font-cormorant italic font-light text-[18px] text-warm mb-10">
              Volpino · South Beach
            </p>

            <div className="grid md:grid-cols-2 gap-5">
              {VENUES.map(({ name, tag, desc, cta, href, primary, note }) => (
                <div key={name} className="bg-cream rounded-[4px] border border-[#EDECEA] px-6 py-7 flex flex-col">
                  <p className="text-[9px] tracking-[0.18em] uppercase text-gold font-jost font-normal mb-2">{tag}</p>
                  <h3 className="font-cormorant font-light text-[24px] text-charcoal mb-3 leading-[1.1]">{name}</h3>
                  <p className="text-[12px] text-warm font-jost font-light leading-[1.7] mb-6 flex-1">{desc}</p>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-center py-[13px] rounded-[3px] text-[11px] tracking-[0.12em] uppercase font-jost font-normal transition-all ${
                      primary
                        ? 'bg-gold text-white hover:opacity-90'
                        : 'bg-transparent border border-gold text-gold hover:bg-gold hover:text-white'
                    }`}
                  >
                    {cta}
                  </a>
                  {note && (
                    <p className="text-[10px] text-warm/50 font-jost font-light text-center mt-2">{note}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-[12px] text-warm font-jost font-light mb-3">
                Need help planning a private event or function?
              </p>
              <Link
                href="/contact"
                className="text-[11px] tracking-[0.12em] uppercase text-gold font-jost font-normal border border-gold px-[22px] py-[11px] rounded-[3px] hover:bg-gold hover:text-white transition-colors inline-block"
              >
                Group Enquiries →
              </Link>
            </div>
          </div>
        </section>

        <ColourDeviceStrip />
      </main>
      <Footer />
      <BottomNav />
    </>
  )
}
