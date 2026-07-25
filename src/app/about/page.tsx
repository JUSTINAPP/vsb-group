import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BottomNav from '@/components/BottomNav'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: { absolute: 'About | VSB Group' },
  description:
    'VSB Group is a hospitality company based on Victoria\'s Mornington Peninsula, operating Volpino Pizzeria & Wine Bar and South Beach Restaurant.',
  alternates: { canonical: 'https://vsbgroup.com.au/about' },
  openGraph: {
    title: 'About | VSB Group',
    description:
      'VSB Group is a hospitality company based on Victoria\'s Mornington Peninsula, operating Volpino Pizzeria & Wine Bar and South Beach Restaurant.',
    url: 'https://vsbgroup.com.au/about',
    images: [{ url: '/assets/South-Beach-Project-Exterior-05-2400x1300-1.jpg', width: 1200, height: 630 }],
  },
}

const VALUES = [
  {
    title: 'Quality First',
    body: 'Every decision — from the produce on the plate to the design of our spaces — is made with care and intention. We hold ourselves to a high standard because our guests deserve it.',
  },
  {
    title: 'Genuine Hospitality',
    body: 'Hospitality isn\'t a transaction, it\'s a relationship. We build venues where guests feel genuinely welcomed — not just served.',
  },
  {
    title: 'Rooted in Place',
    body: 'The Mornington Peninsula is where we call home, and it shapes everything we do — from the local produce we source to the communities we invest in.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="VSB Group"
          title="Our Story"
          subtitle="Hospitality with heart"
          image="/assets/South-Beach-Project-Exterior-05-2400x1300-1.jpg"
        />

        {/* Our Story */}
        <section className="bg-white py-[48px] md:py-[64px]">
          <div className="max-w-7xl mx-auto px-6 md:px-[60px]">
            <div className="md:grid md:grid-cols-2 md:gap-16 items-start">
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-gold font-sans font-normal mb-[10px]">
                  About Us
                </p>
                <h2 className="font-display uppercase tracking-tight font-semibold text-[34px] md:text-[42px] text-charcoal leading-[1.05] mb-2 tracking-[0.02em]">
                  A hospitality group with a sense of place
                </h2>
                <p className="font-sans font-light text-[18px] text-warm mb-6">
                  Based on Victoria&apos;s Mornington Peninsula
                </p>
                <div className="text-[13px] leading-[1.8] text-warm font-sans font-light space-y-5 max-w-xl">
                  <p>
                    VSB Group is a hospitality company based on Victoria&apos;s Mornington Peninsula.
                    We operate and develop distinctive dining venues — each with its own identity,
                    team, and sense of place.
                  </p>
                  <p>
                    Our venues are built around a shared belief: that great hospitality is about more
                    than just food. It&apos;s about the feeling of welcome, the quality of the experience,
                    and the community you create around the table.
                  </p>
                  <p>
                    Today, VSB Group operates two venues on the Mornington Peninsula: Volpino Pizzeria
                    &amp; Wine Bar and South Beach Restaurant. We&apos;re proud of what both teams have
                    built, and excited about what&apos;s ahead.
                  </p>
                </div>
              </div>
              <div className="relative mt-10 md:mt-0 h-[280px] md:h-[460px] rounded-[4px] overflow-hidden">
                <Image
                  src="/assets/SOUTH-BEACH_2400x1300_DSC_9232.jpg"
                  alt="VSB Group dining"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-cream py-[48px] md:py-[64px]">
          <div className="max-w-7xl mx-auto px-6 md:px-[60px]">
            <p className="text-[10px] tracking-[0.2em] uppercase text-gold font-sans font-normal mb-[10px]">
              What we stand for
            </p>
            <h2 className="font-display uppercase tracking-tight font-semibold text-[34px] md:text-[42px] text-charcoal leading-[1.05] mb-8 tracking-[0.02em]">
              Our values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {VALUES.map(({ title, body }) => (
                <div key={title}>
                  <h3 className="font-display uppercase tracking-tight font-semibold text-[22px] text-charcoal mb-3">{title}</h3>
                  <p className="text-[13px] text-warm font-sans font-light leading-[1.8]">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Venues */}
        <section className="bg-white py-[48px] md:py-[64px]">
          <div className="max-w-7xl mx-auto px-6 md:px-[60px]">
            <p className="text-[10px] tracking-[0.2em] uppercase text-gold font-sans font-normal mb-[10px]">
              Where to find us
            </p>
            <h2 className="font-display uppercase tracking-tight font-semibold text-[34px] md:text-[42px] text-charcoal leading-[1.05] mb-2 tracking-[0.02em]">
              Our venues
            </h2>
            <p className="font-sans font-light text-[18px] text-warm mb-8">
              Each one distinct. Each one ours.
            </p>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="bg-cream rounded-[4px] border border-[#EDECEA] px-6 py-7">
                <p className="text-[9px] tracking-[0.18em] uppercase text-gold font-sans font-normal mb-2">
                  Pizzeria &amp; Wine Bar
                </p>
                <h3 className="font-display uppercase tracking-tight font-semibold text-[26px] text-charcoal mb-3 leading-[1.1]">
                  Volpino Pizzeria &amp; Wine Bar
                </h3>
                <p className="text-[12px] text-warm font-sans font-light leading-[1.7] mb-5">
                  Wood-fired pizza, handmade pasta, and an exceptional wine list in a warm, convivial
                  atmosphere. Volpino brings a genuine Italian spirit to the Peninsula.
                </p>
                <a
                  href="https://volpino.com.au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] tracking-[0.14em] uppercase text-gold font-sans font-normal hover:opacity-70 transition-opacity"
                >
                  Visit Volpino ↗
                </a>
              </div>

              <div className="bg-cream rounded-[4px] border border-[#EDECEA] px-6 py-7">
                <p className="text-[9px] tracking-[0.18em] uppercase text-gold font-sans font-normal mb-2">
                  Coastal Restaurant &amp; Bar
                </p>
                <h3 className="font-display uppercase tracking-tight font-semibold text-[26px] text-charcoal mb-3 leading-[1.1]">
                  South Beach Restaurant
                </h3>
                <p className="text-[12px] text-warm font-sans font-light leading-[1.7] mb-5">
                  Fresh coastal flavours, beachside views and a relaxed atmosphere at 464 Esplanade,
                  Mount Martha. Open daily for breakfast, brunch and lunch.
                </p>
                <a
                  href="https://sbmm.com.au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] tracking-[0.14em] uppercase text-gold font-sans font-normal hover:opacity-70 transition-opacity"
                >
                  Visit South Beach ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-charcoal py-[48px] md:py-[56px] text-white">
          <div className="max-w-7xl mx-auto px-6 md:px-[60px]">
            <p className="text-[10px] tracking-[0.2em] uppercase text-gold font-sans font-normal mb-[10px]">
              Get in touch
            </p>
            <h2 className="font-display uppercase tracking-tight font-semibold text-[34px] md:text-[42px] leading-[1.05] mb-6">
              Ready to dine?
            </h2>
            <div className="flex gap-3 flex-wrap">
              <Link
                href="/bookings"
                className="bg-gold text-charcoal px-[22px] py-[13px] rounded-[3px] text-[11px] tracking-[0.12em] uppercase font-sans font-normal hover:opacity-90 transition-opacity"
              >
                Book Now
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border border-white/40 text-white px-[22px] py-[12px] rounded-[3px] text-[11px] tracking-[0.12em] uppercase font-sans font-normal hover:bg-white/8 transition-colors"
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
