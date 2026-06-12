import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BottomNav from '@/components/BottomNav'
import PageHero from '@/components/PageHero'
import { BeachShackBand } from '@/components/BeachShackBand'
import { ColourDeviceStrip } from '@/components/ColourDeviceStrip'

export const metadata: Metadata = {
  title: { absolute: 'About | South Beach Restaurant' },
  description: 'South Beach Restaurant is a coastal bistro, bar and kiosk in Mount Martha. Our story is shaped by good food, relaxed spaces and the beach culture of the Mornington Peninsula.',
  alternates: { canonical: 'https://sbmm.com.au/about' },
  openGraph: {
    title: 'About | South Beach Restaurant',
    description: 'South Beach Restaurant is a coastal bistro, bar and kiosk in Mount Martha. Our story is shaped by good food, relaxed spaces and the beach culture of the Mornington Peninsula.',
    url: 'https://sbmm.com.au/about',
    siteName: 'South Beach Restaurant',
    images: [{ url: '/assets/South-Beach-Project-Exterior-05-2400x1300-1.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | South Beach Restaurant',
    description: 'South Beach Restaurant is a coastal bistro, bar and kiosk in Mount Martha. Our story is shaped by good food, relaxed spaces and the beach culture of the Mornington Peninsula.',
  },
}

const HOW_WE_DO_IT = [
  {
    title: 'Coastal & Fresh',
    body: 'Our menu changes with the seasons and the tides. We source locally wherever possible — from the Peninsula\'s farms, fishermen and makers.',
  },
  {
    title: 'All Day',
    body: 'From golden morning pastries to long lunches and sunset drinks, South Beach is open from 7.30am every day. Drop in, stay a while.',
  },
  {
    title: 'Events & Functions',
    body: 'Four beautifully designed spaces for 15–60 guests. From garden brunches to waterfront weddings, we make every occasion special.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="South Beach · Mount Martha"
          title="About South Beach"
          subtitle="Simple, coastal, good"
          image="/assets/about-top-image-view.jpg"
        />

        {/* Our Story */}
        <section className="bg-white py-[48px] md:py-[64px]">
          <div className="max-w-7xl mx-auto px-6 md:px-[60px]">
            <div className="md:grid md:grid-cols-2 md:gap-16 items-start">
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-sky font-jost font-normal mb-[10px]">
                  Our Story
                </p>
                <h2 className="font-cormorant font-light text-[34px] md:text-[42px] text-charcoal leading-[1.05] mb-2 tracking-[0.02em]">
                  A restaurant, bar &amp; events venue by the sea
                </h2>
                <p className="font-cormorant italic font-light text-[18px] text-warm mb-6">
                  Overlooking the beachfront at Mount Martha
                </p>
                <div className="text-[13px] leading-[1.8] text-warm font-jost font-light space-y-5 max-w-xl">
                  <p>
                    South Beach is a restaurant, bar, and events venue in Mount Martha, on Victoria&apos;s
                    Mornington Peninsula. Overlooking the beachfront, we serve fresh coastal flavours,
                    innovative drinks, and showcase relaxed yet stylish spaces. Ideal for casual dining,
                    private events, and sunset drinks, South Beach brings the spirit of Mount Martha alive.
                  </p>
                  <p className="font-jost font-normal tracking-[0.1em] uppercase text-[12px] text-charcoal">
                    Simple. Coastal. Good.
                  </p>
                </div>
              </div>
              <div className="relative mt-10 md:mt-0 h-[280px] md:h-[440px] rounded-[4px] overflow-hidden">
                <Image
                  src="/assets/south-beach-about-05.jpg"
                  alt="South Beach Restaurant"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        <ColourDeviceStrip />
        <BeachShackBand />

        {/* How we do it */}
        <section className="bg-cream py-[48px] md:py-[64px]">
          <div className="max-w-7xl mx-auto px-6 md:px-[60px]">
            <p className="text-[10px] tracking-[0.2em] uppercase text-sky font-jost font-normal mb-[10px]">
              What we&apos;re about
            </p>
            <h2 className="font-cormorant font-light text-[34px] md:text-[42px] text-charcoal leading-[1.05] mb-8 tracking-[0.02em]">
              How we do it
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {HOW_WE_DO_IT.map(({ title, body }) => (
                <div key={title}>
                  <h3 className="font-cormorant font-normal text-[22px] text-charcoal mb-3">{title}</h3>
                  <p className="text-[13px] text-warm font-jost font-light leading-[1.8]">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ColourDeviceStrip />

        {/* Team */}
        <section className="bg-white py-[48px] md:py-[64px]">
          <div className="max-w-7xl mx-auto px-6 md:px-[60px]">
            <p className="text-[10px] tracking-[0.2em] uppercase text-sky font-jost font-normal mb-[10px]">
              The team
            </p>
            <h2 className="font-cormorant font-light text-[34px] md:text-[42px] text-charcoal leading-[1.05] mb-2 tracking-[0.02em]">
              The people behind South Beach
            </h2>
            <p className="font-cormorant italic font-light text-[18px] text-warm mb-8">
              A tight team who love what they do
            </p>
            <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
              <div className="relative h-[260px] md:h-[360px] rounded-[4px] overflow-hidden mb-8 md:mb-0">
                <Image
                  src="/assets/sbmm-staff-photo.jpg"
                  alt="South Beach team"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <p className="text-[13px] leading-[1.8] text-warm font-jost font-light">
                  South Beach is a community restaurant through and through. Every decision — from the
                  produce on the plate to the wine in the glass — is made with care and intention.
                  We&apos;re proud to have built something that feels genuinely local, genuinely coastal,
                  and genuinely ours.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-charcoal py-[48px] md:py-[56px] text-white">
          <div className="max-w-7xl mx-auto px-6 md:px-[60px]">
            <p className="text-[10px] tracking-[0.2em] uppercase text-gold font-jost font-normal mb-[10px]">
              Visit Us
            </p>
            <h2 className="font-cormorant font-light text-[34px] md:text-[42px] leading-[1.05] mb-6">
              Come find us
            </h2>
            <p className="text-[13px] text-white/55 font-jost font-light mb-6">
              464 Esplanade, Mount Martha VIC 3934
            </p>
            <div className="flex gap-3 flex-wrap">
              <a
                href="https://www.sevenrooms.com/explore/southbeachproject/reservations/create/search/?date=2026-01-16&venues=southbeachproject%2Cvolpinopizzeriaandwinebar"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sky text-white px-[22px] py-[13px] rounded-[3px] text-[11px] tracking-[0.12em] uppercase font-jost font-normal hover:bg-sky-dark transition-colors"
              >
                Book a Table
              </a>
              <Link
                href="/contact"
                className="bg-transparent border border-white/40 text-white px-[22px] py-[12px] rounded-[3px] text-[11px] tracking-[0.12em] uppercase font-jost font-normal hover:bg-white/8 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BottomNav />
    </>
  )
}
