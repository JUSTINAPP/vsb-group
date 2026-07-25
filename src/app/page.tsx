import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BottomNav from '@/components/BottomNav'
import { ColourDeviceStrip } from '@/components/ColourDeviceStrip'

export const metadata: Metadata = {
  title: { absolute: 'VSB Group | Mornington Peninsula Hospitality' },
  description:
    'VSB Group is a hospitality company operating Volpino Pizzeria & Wine Bar and South Beach Restaurant on Victoria\'s Mornington Peninsula.',
  alternates: { canonical: 'https://vsbgroup.com.au' },
  openGraph: {
    title: 'VSB Group | Mornington Peninsula Hospitality',
    description:
      'VSB Group is a hospitality company operating Volpino Pizzeria & Wine Bar and South Beach Restaurant on Victoria\'s Mornington Peninsula.',
    url: 'https://vsbgroup.com.au',
    images: [{ url: '/assets/South-Beach-Project-Exterior-05-2400x1300-1.jpg', width: 1200, height: 630 }],
  },
}

export default function HomePage() {
  return (
    <>
      <Nav />

      <main>
        {/* ── HERO ── */}
        <section className="relative h-[520px] md:h-[720px] overflow-hidden">
          <Image
            src="/assets/South-Beach-Project-Exterior-05-2400x1300-1.jpg"
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <p className="text-[10px] tracking-[0.28em] uppercase text-white/60 font-jost font-light mb-5">
              Mornington Peninsula, Victoria
            </p>
            <h1 className="font-cormorant italic font-light text-[46px] md:text-[84px] tracking-[0.03em] leading-[1] text-white mb-4">
              Crafted dining.<br className="hidden md:block" /> Distinctive venues.
            </h1>
            <div className="w-[44px] h-px bg-white/30 mb-5" />
            <p className="font-cormorant italic font-light text-[17px] md:text-[20px] text-white/75 mb-8 max-w-lg">
              VSB Group operates some of the Peninsula&apos;s most celebrated dining experiences
            </p>
            <div className="flex flex-col md:flex-row gap-[10px] items-center">
              <a
                href="#venues"
                className="w-[210px] md:w-auto bg-gold text-charcoal px-[26px] py-[13px] md:py-[14px] md:px-[32px] rounded-[3px] text-[11px] font-normal tracking-[0.12em] uppercase font-jost text-center transition-all hover:opacity-90"
              >
                Our Venues
              </a>
              <Link
                href="/bookings"
                className="w-[210px] md:w-auto bg-transparent text-white border border-white/40 px-[26px] py-[12px] md:py-[13px] md:px-[32px] rounded-[3px] text-[11px] font-normal tracking-[0.12em] uppercase font-jost text-center transition-colors hover:bg-white/10"
              >
                Book Now
              </Link>
            </div>
          </div>
        </section>

        <ColourDeviceStrip />

        {/* ── VENUES ── */}
        <section id="venues" className="bg-cream py-[52px] md:py-[72px]">
          <div className="max-w-7xl mx-auto px-6 md:px-[60px]">
            <p className="text-[10px] tracking-[0.2em] uppercase text-gold font-jost font-normal mb-[10px]">
              Our Venues
            </p>
            <h2 className="font-cormorant font-light text-[34px] md:text-[48px] text-charcoal leading-[1.05] mb-2 tracking-[0.02em]">
              Where to find us
            </h2>
            <p className="font-cormorant italic font-light text-[18px] text-warm mb-10">
              Two venues. One peninsula.
            </p>

            <div className="grid md:grid-cols-3 gap-5">
              {/* Volpino */}
              <div className="relative rounded-[4px] overflow-hidden h-[420px] md:h-[500px] flex flex-col justify-end group">
                <div
                  className="absolute inset-0"
                  style={{ background: 'radial-gradient(ellipse at 35% 45%, #3D1A0A 0%, #100702 100%)' }}
                />
                {/* Decorative texture overlay */}
                <div className="absolute inset-0 opacity-[0.07]" style={{
                  backgroundImage: `repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)`,
                  backgroundSize: '8px 8px',
                }} />
                <div className="relative z-10 p-7 pb-8">
                  <p className="text-[9px] tracking-[0.2em] uppercase text-gold font-jost font-light mb-3">
                    Pizzeria &amp; Wine Bar
                  </p>
                  <h3 className="font-cormorant italic font-light text-[38px] md:text-[42px] text-white leading-[1] mb-2">
                    Volpino
                  </h3>
                  <p className="font-jost font-light text-[12px] text-white/55 tracking-[0.06em] mb-6">
                    Mount Martha, VIC
                  </p>
                  <a
                    href="https://volpino.com.au"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border border-white/40 text-white px-[18px] py-[10px] rounded-[3px] text-[10px] tracking-[0.14em] uppercase font-jost font-light hover:bg-white/10 transition-colors"
                  >
                    Visit Volpino ↗
                  </a>
                </div>
              </div>

              {/* South Beach */}
              <div className="relative rounded-[4px] overflow-hidden h-[420px] md:h-[500px] flex flex-col justify-end group">
                <Image
                  src="/assets/South-Beach-Summer_1500x1000.jpg"
                  alt="South Beach Restaurant"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="relative z-10 p-7 pb-8">
                  <p className="text-[9px] tracking-[0.2em] uppercase text-gold font-jost font-light mb-3">
                    Coastal Restaurant &amp; Bar
                  </p>
                  <h3 className="font-cormorant italic font-light text-[38px] md:text-[42px] text-white leading-[1] mb-2">
                    South Beach
                  </h3>
                  <p className="font-jost font-light text-[12px] text-white/55 tracking-[0.06em] mb-6">
                    Mount Martha, VIC
                  </p>
                  <a
                    href="https://sbmm.com.au"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border border-white/40 text-white px-[18px] py-[10px] rounded-[3px] text-[10px] tracking-[0.14em] uppercase font-jost font-light hover:bg-white/10 transition-colors"
                  >
                    Visit South Beach ↗
                  </a>
                </div>
              </div>

              {/* Coming Soon */}
              <div className="relative rounded-[4px] overflow-hidden h-[420px] md:h-[500px] flex flex-col justify-end border border-dashed border-[#C4B89A]/40">
                <div className="absolute inset-0 bg-charcoal" />
                <div className="relative z-10 p-7 pb-8">
                  <p className="text-[9px] tracking-[0.2em] uppercase text-gold/60 font-jost font-light mb-3">
                    Coming Soon
                  </p>
                  <h3 className="font-cormorant italic font-light text-[38px] md:text-[42px] text-white/40 leading-[1] mb-2">
                    New Venue
                  </h3>
                  <p className="font-jost font-light text-[12px] text-white/30 tracking-[0.06em] mb-6">
                    Mornington Peninsula
                  </p>
                  <span className="inline-block border border-white/15 text-white/30 px-[18px] py-[10px] rounded-[3px] text-[10px] tracking-[0.14em] uppercase font-jost font-light">
                    More to come
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ColourDeviceStrip />

        {/* ── ABOUT ── */}
        <section className="bg-white py-[48px] md:py-[64px]">
          <div className="max-w-7xl mx-auto px-6 md:px-[60px] mb-9 md:mb-11">
            <p className="text-[10px] tracking-[0.2em] uppercase text-gold font-jost font-normal mb-[10px]">
              About VSB Group
            </p>
            <h2 className="font-cormorant font-light text-[34px] md:text-[44px] text-charcoal leading-[1.05] mb-[6px] tracking-[0.02em]">
              The group behind
            </h2>
            <p className="font-cormorant italic font-light text-[34px] md:text-[44px] text-charcoal leading-[1.05] mb-5 tracking-[0.02em]">
              the experience
            </p>
            <p className="font-cormorant italic font-light text-[18px] text-warm mb-5">
              Hospitality with heart, on the Mornington Peninsula
            </p>
            <p className="text-[13px] leading-[1.8] text-warm font-jost font-light mb-7 max-w-2xl">
              VSB Group is a hospitality company based on Victoria&apos;s Mornington Peninsula. We operate
              distinctive dining venues — each with its own personality — united by a shared commitment
              to exceptional food, genuine service, and warm, memorable hospitality.
            </p>
            <Link
              href="/about"
              className="text-[11px] tracking-[0.12em] uppercase text-gold font-jost font-normal border border-gold px-[22px] py-[12px] rounded-[3px] hover:bg-gold hover:text-white transition-colors inline-block"
            >
              Our Story →
            </Link>
          </div>

          <div className="relative w-full h-[320px] md:h-[560px]">
            <Image
              src="/assets/south-beach-about-05.jpg"
              alt="The team behind VSB Group"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        </section>

        <ColourDeviceStrip />

        {/* ── BOOK CTA ── */}
        <section className="bg-charcoal py-[52px] md:py-[72px] text-white md:text-center">
          <div className="max-w-7xl mx-auto px-6 md:px-[60px]">
            <p className="text-[10px] tracking-[0.2em] uppercase text-gold font-jost font-normal mb-[10px]">
              Dine with us
            </p>
            <h2 className="font-cormorant font-light text-[34px] md:text-[52px] leading-[1.05] mb-[8px]">
              Ready to book?
            </h2>
            <p className="font-cormorant italic font-light text-[18px] text-white/55 mb-8">
              Make a reservation at either of our venues
            </p>
            <div className="flex flex-col md:flex-row md:justify-center gap-[10px] md:gap-3">
              <Link
                href="/bookings"
                className="bg-gold text-charcoal py-[14px] md:px-[32px] rounded-[3px] text-[11px] tracking-[0.12em] uppercase font-jost font-normal text-center hover:opacity-90 transition-opacity"
              >
                Book Now
              </Link>
              <Link
                href="/whats-on"
                className="bg-transparent border border-white/35 text-white py-[13px] md:px-[32px] rounded-[3px] text-[11px] tracking-[0.12em] uppercase font-jost font-normal text-center hover:bg-white/8 transition-colors"
              >
                What&apos;s On
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border border-white/35 text-white py-[13px] md:px-[32px] rounded-[3px] text-[11px] tracking-[0.12em] uppercase font-jost font-normal text-center hover:bg-white/8 transition-colors"
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
