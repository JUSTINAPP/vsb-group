import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BottomNav from '@/components/BottomNav'
import HeroSlideshow from '@/components/HeroSlideshow'
import { LogoDevice } from '@/components/LogoDevice'

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

const VALUES = [
  {
    title: 'Hospitality First',
    body: 'Every venue is built around genuine, attentive service — the kind that makes people want to come back.',
  },
  {
    title: 'Venue Character',
    body: 'Each space has its own identity and point of view, shaped by its location and the people who run it.',
  },
  {
    title: 'People & Place',
    body: 'We invest in our teams and our neighbourhoods, building venues that belong where they stand.',
  },
]

export default function HomePage() {
  return (
    <>
      <Nav />

      <main>
        {/* ── HERO ── */}
        <section className="relative h-screen min-h-[640px] bg-void overflow-hidden flex items-end">
          <HeroSlideshow />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.65) 45%, rgba(0,0,0,0.85) 100%)',
            }}
          />
          <div className="relative z-10 w-full p-6 md:p-16">
            <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-8 md:mb-10">
              <LogoDevice size="sm" />
              <div style={{ width: 2, height: 48, background: '#3DBDB5' }} />
              <p className="text-[10px] uppercase tracking-[0.25em] text-ink/35 font-sans font-normal">
                Victoria · Hospitality Group
              </p>
            </div>

            <h1
              className="font-display font-semibold uppercase text-ink leading-[0.95] tracking-[0.01em] break-words"
              style={{ fontSize: 'clamp(48px, 12vw, 120px)' }}
            >
              Crafting <span className="text-ink/30">remarkable</span> experiences
            </h1>

            <p className="font-sans font-light text-[15px] text-ink/55 max-w-[420px] mt-6">
              A collection of restaurants and venues across Victoria, united by a commitment to food,
              atmosphere and hospitality done well.
            </p>

            <div className="flex flex-wrap items-center gap-4 md:gap-8 mt-8 md:mt-10">
              <a
                href="#venues"
                className="bg-ink text-void px-8 py-[14px] text-[11px] font-sans font-semibold uppercase tracking-[0.12em] hover:opacity-90 transition-opacity"
              >
                Our Venues
              </a>
              <Link
                href="/about"
                className="text-ink text-[11px] font-sans font-medium uppercase tracking-[0.12em] border-b border-ink/20 pb-1 hover:border-ink/50 transition-colors"
              >
                Our Story →
              </Link>
            </div>
          </div>
        </section>

        {/* ── VENUE CARDS ── */}
        <section id="venues" className="bg-[#111111] py-16 px-6 md:py-24 md:px-12">
          <div className="max-w-7xl mx-auto">
            <p className="section-label text-[10px] uppercase tracking-[0.25em] text-ink/35 font-sans font-normal mb-4">
              Our Venues
            </p>
            <h2 className="font-display font-semibold uppercase text-ink leading-none text-[40px] md:text-[64px]">
              The Group <span className="text-ink/30">Collection</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-[2px] mt-14">
              {/* Volpino */}
              <a
                href="https://volpino.com.au"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden aspect-[3/4] block"
                style={{ background: '#1c1510' }}
              >
                <Image
                  src="/assets/volpino-card-1080x720.jpg"
                  alt="Volpino Pizzeria & Wine Bar"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.75) 100%)' }}
                />
                <div className="relative z-10 h-full flex flex-col justify-end p-8">
                  <p className="text-[9px] uppercase tracking-[0.25em] text-ink/45 font-sans font-normal mb-3">
                    Italian · Wine Bar
                  </p>
                  <h3 className="font-display font-semibold uppercase text-[28px] text-ink leading-none mb-2">
                    Volpino Pizzeria
                  </h3>
                  <p className="text-[11px] text-ink/45 font-sans font-normal mb-6">Mornington Peninsula</p>
                  <span className="inline-flex w-fit items-center border-l-2 border-transparent group-hover:border-teal pl-3 text-[10px] uppercase tracking-[0.15em] text-ink/45 group-hover:text-teal font-sans font-normal transition-colors">
                    Visit venue →
                  </span>
                </div>
              </a>

              {/* South Beach */}
              <a
                href="https://sbmm.com.au"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden aspect-[3/4] block"
                style={{ background: '#0f1418' }}
              >
                <Image
                  src="/assets/south-beach-card-1080x744.jpg"
                  alt="South Beach Restaurant"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.75) 100%)' }}
                />
                <div className="relative z-10 h-full flex flex-col justify-end p-8">
                  <p className="text-[9px] uppercase tracking-[0.25em] text-ink/45 font-sans font-normal mb-3">
                    Coastal · Restaurant &amp; Bar
                  </p>
                  <h3 className="font-display font-semibold uppercase text-[28px] text-ink leading-none mb-2">
                    South Beach Restaurant
                  </h3>
                  <p className="text-[11px] text-ink/45 font-sans font-normal mb-6">Mount Martha</p>
                  <span className="inline-flex w-fit items-center border-l-2 border-transparent group-hover:border-teal pl-3 text-[10px] uppercase tracking-[0.15em] text-ink/45 group-hover:text-teal font-sans font-normal transition-colors">
                    Visit venue →
                  </span>
                </div>
              </a>

              {/* Coming Soon */}
              <div
                className="relative overflow-hidden aspect-[3/4] flex flex-col items-center justify-center text-center p-8"
                style={{ background: '#141414' }}
              >
                <Image
                  src="/assets/bay-gather-card-02-1080x816.jpg"
                  alt="Bay & Gather Catering"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.75) 100%)' }}
                />
                <div className="relative z-10 flex flex-col items-center">
                  <LogoDevice size="lg" showBar={false} />
                  <p className="text-[9px] uppercase tracking-[0.25em] text-ink/45 font-sans font-normal mt-8 mb-3">
                    Catering &amp; Events
                  </p>
                  <h3 className="font-display font-semibold uppercase text-[28px] text-ink/70 leading-none mb-2">
                    Bay &amp; Gather Catering
                  </h3>
                  <p className="text-[11px] text-ink/45 font-sans font-normal mb-6">Mornington Peninsula</p>
                  <span className="text-[10px] uppercase tracking-[0.15em] text-ink/25 font-sans font-normal">
                    Coming Soon
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── ABOUT SPLIT ── */}
        <section className="grid grid-cols-1 md:grid-cols-2 md:min-h-[640px]">
          <div className="relative h-[280px] md:h-auto">
            <Image
              src="/assets/south-beach-about-05.jpg"
              alt="The team behind VSB Group"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="bg-void flex flex-col justify-center py-12 md:py-20 px-6 md:px-16">
            <p className="section-label text-[10px] uppercase tracking-[0.25em] text-ink/35 font-sans font-normal mb-4">
              The Group
            </p>
            <h2 className="font-display font-semibold uppercase text-ink leading-[0.95] text-[36px] md:text-[52px] mb-6">
              The people <span className="text-ink/30">behind it</span>
            </h2>
            <p className="font-sans font-light text-[15px] text-ink/60 leading-[1.8] max-w-[420px] mb-8">
              VSB Group is a hospitality company based on Victoria&apos;s Mornington Peninsula. We back
              distinctive, independently-minded venues and the people who run them — investing in
              craft, character and consistency rather than a single house style.
            </p>
            <Link
              href="/about"
              className="self-start text-ink text-[11px] font-sans font-medium uppercase tracking-[0.12em] border-b border-ink/20 pb-1 hover:border-ink/50 transition-colors"
            >
              Our Story →
            </Link>
          </div>
        </section>

        {/* ── VALUES ── */}
        <section className="bg-[#111111] py-16 px-6 md:py-24 md:px-12">
          <div className="max-w-7xl mx-auto">
            <p className="section-label text-[10px] uppercase tracking-[0.25em] text-ink/35 font-sans font-normal mb-4">
              What Drives Us
            </p>
            <h2 className="font-display font-semibold uppercase text-ink leading-none text-[36px] md:text-[52px]">
              Built on three <span className="text-ink/30">principles</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-[2px] mt-14">
              {VALUES.map((v, i) => (
                <div key={v.title} className="bg-[#161616] px-8 py-10 md:px-10 md:py-12">
                  <p className="font-display font-bold text-[56px] text-ink/5 leading-none mb-4">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className="font-display font-semibold uppercase text-[22px] text-ink mb-3">{v.title}</h3>
                  <p className="font-sans font-light text-[13px] text-ink/45 leading-[1.7]">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA BANNER ── */}
        <section className="bg-ink text-void py-16 px-6 md:py-20 md:px-12">
          <div className="max-w-7xl mx-auto flex flex-col items-center text-center md:flex-row md:items-center md:text-left justify-between gap-8">
            <h2
              className="font-display font-semibold uppercase leading-[0.95]"
              style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}
            >
              Ready to make a reservation?
            </h2>
            <Link
              href="/bookings"
              className="shrink-0 bg-void text-ink px-8 py-4 text-[11px] font-sans font-semibold uppercase tracking-[0.12em] hover:opacity-90 transition-opacity"
            >
              Book a Table
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <BottomNav />
    </>
  )
}
