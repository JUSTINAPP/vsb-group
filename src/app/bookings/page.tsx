import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BottomNav from '@/components/BottomNav'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: { absolute: 'Book a Table | South Beach Restaurant' },
  description: 'Make a booking at South Beach Restaurant in Mount Martha. Reserve your table for relaxed coastal dining, fresh food and beachside views on the Mornington Peninsula.',
  alternates: { canonical: 'https://sbmm.com.au/bookings' },
  openGraph: {
    title: 'Book a Table | South Beach Restaurant',
    description: 'Make a booking at South Beach Restaurant in Mount Martha. Reserve your table for relaxed coastal dining, fresh food and beachside views on the Mornington Peninsula.',
    url: 'https://sbmm.com.au/bookings',
    siteName: 'South Beach Restaurant',
    images: [{ url: '/assets/South-Beach-Project-Exterior-05-2400x1300-1.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book a Table | South Beach Restaurant',
    description: 'Make a booking at South Beach Restaurant in Mount Martha. Reserve your table for relaxed coastal dining, fresh food and beachside views on the Mornington Peninsula.',
  },
}

const SEVENROOMS_BOOKING = 'https://www.sevenrooms.com/explore/southbeachproject/reservations/create/search/?date=2026-01-16&venues=southbeachproject%2Cvolpinopizzeriaandwinebar'
const SEVENROOMS_EVENTS  = 'https://www.sevenrooms.com/events/southbeachproject/paella-pintos-night-5599261673078784'

const OPTIONS = [
  {
    label: 'Cafe / Restaurant Bookings',
    eyebrow: 'Dine with us',
    desc: 'Reserve your table online for breakfast, brunch, lunch or an afternoon session at South Beach.',
    cta: 'Book Now',
    href: SEVENROOMS_BOOKING,
    external: true,
    primary: true,
  },
  {
    label: 'Ticketed Events',
    eyebrow: "What's On",
    desc: 'Browse and book tickets to upcoming events, dinners and special evenings at South Beach.',
    cta: 'View Events',
    href: SEVENROOMS_EVENTS,
    external: true,
    primary: false,
  },
  {
    label: 'Functions Enquiries',
    eyebrow: 'Private Events',
    desc: 'Planning a private function, wedding or corporate event? Tell us about your occasion and we\'ll be in touch.',
    cta: 'Enquire Now',
    href: '/functions',
    external: false,
    primary: false,
  },
]

export default function BookingsPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Reservations"
          title="Make a Booking"
          subtitle="Reserve your table at South Beach"
        />

        <section className="bg-white py-[48px] md:py-[64px]">
          <div className="max-w-7xl mx-auto px-6 md:px-[60px]">
            <p className="text-[10px] tracking-[0.2em] uppercase text-sky font-jost font-normal mb-[10px]">
              Book with us
            </p>
            <h2 className="font-cormorant font-light text-[34px] md:text-[42px] text-charcoal leading-[1.05] mb-2 tracking-[0.02em]">
              How would you like to book?
            </h2>
            <p className="font-cormorant italic font-light text-[18px] text-warm mb-10">
              Restaurant · Events · Functions
            </p>

            <div className="grid md:grid-cols-3 gap-5">
              {OPTIONS.map(({ label, eyebrow, desc, cta, href, external, primary }) => (
                <div key={label} className="bg-cream rounded-[4px] border border-[#EDECEA] px-6 py-7 flex flex-col">
                  <p className="text-[9px] tracking-[0.18em] uppercase text-sky font-jost font-normal mb-2">{eyebrow}</p>
                  <h3 className="font-cormorant font-light text-[22px] text-charcoal mb-3 leading-[1.1]">{label}</h3>
                  <p className="text-[12px] text-warm font-jost font-light leading-[1.7] mb-6 flex-1">{desc}</p>
                  {external ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block text-center py-[13px] rounded-[3px] text-[11px] tracking-[0.12em] uppercase font-jost font-normal transition-colors ${
                        primary
                          ? 'bg-sky text-white hover:bg-sky-dark'
                          : 'bg-transparent border border-sky text-sky hover:bg-sky hover:text-white'
                      }`}
                    >
                      {cta}
                    </a>
                  ) : (
                    <Link
                      href={href}
                      className="block text-center py-[13px] rounded-[3px] text-[11px] tracking-[0.12em] uppercase font-jost font-normal bg-transparent border border-sky text-sky hover:bg-sky hover:text-white transition-colors"
                    >
                      {cta}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 px-[16px] py-[14px] bg-sky-light rounded-[4px] border-l-2 border-sky text-[11px] text-sky-dark font-jost font-light leading-[1.8]">
              Sundays incur a 10% surcharge · Public Holidays 20% surcharge · All credit card payments incur a 1.5% surcharge
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BottomNav />
    </>
  )
}
