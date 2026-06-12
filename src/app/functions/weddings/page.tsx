import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BottomNav from '@/components/BottomNav'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: { absolute: 'Wedding Venue Mount Martha | South Beach Restaurant' },
  description: 'South Beach Restaurant is a stunning wedding venue in Mount Martha on the Mornington Peninsula. Coastal views, four beautiful spaces and a dedicated events team for your perfect day.',
  alternates: { canonical: 'https://sbmm.com.au/functions/weddings' },
  openGraph: {
    title: 'Wedding Venue Mount Martha | South Beach Restaurant',
    description: 'South Beach Restaurant is a stunning wedding venue in Mount Martha on the Mornington Peninsula. Coastal views, four beautiful spaces and a dedicated events team for your perfect day.',
    url: 'https://sbmm.com.au/functions/weddings',
    siteName: 'South Beach Restaurant',
    images: [{ url: '/assets/southbeach_wedding_1080x1080.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wedding Venue Mount Martha | South Beach Restaurant',
    description: 'South Beach Restaurant is a stunning wedding venue in Mount Martha on the Mornington Peninsula.',
  },
}

export default function WeddingsPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Functions & Events"
          title="Weddings at South Beach"
          subtitle="A coastal ceremony for your most important day"
          image="/assets/southbeach_wedding_1080x1080.jpg"
        />

        <section className="bg-white py-[48px] md:py-[64px]">
          <div className="max-w-7xl mx-auto px-6 md:px-[60px]">
            <div className="md:grid md:grid-cols-2 md:gap-16 items-start">

              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-sky font-jost font-normal mb-[10px]">
                  Weddings
                </p>
                <h2 className="font-cormorant font-light text-[34px] md:text-[42px] text-charcoal leading-[1.05] mb-2 tracking-[0.02em]">
                  Say &lsquo;I do&rsquo; by the bay
                </h2>
                <p className="font-cormorant italic font-light text-[18px] text-warm mb-6">
                  Intimate celebrations with views over Port Phillip Bay
                </p>

                <div className="text-[13px] leading-[1.8] text-warm font-jost font-light space-y-4 mb-8">
                  <p>
                    South Beach Restaurant offers an exceptional setting for weddings on Victoria&apos;s Mornington Peninsula. Perched on the Esplanade in Mount Martha with panoramic bay views, our venue blends coastal elegance with relaxed warmth — the perfect backdrop for your most important day.
                  </p>
                  <p>
                    Whether you&apos;re planning an intimate ceremony and reception or a full-venue celebration, our experienced events team will work with you to create an experience that reflects your style. From bespoke menus and florals to lighting and room layouts, every detail is handled with care.
                  </p>
                  <p>
                    Our four spaces — Terrace, Garden, Atrium and The Room — can host weddings from 15 to 60 guests. Ceremonies on the beachfront terrace at golden hour are truly unforgettable.
                  </p>
                </div>

                <div className="bg-sky-light rounded-[4px] border-l-2 border-sky px-[18px] py-4 mb-8">
                  <p className="text-[9px] tracking-[0.18em] uppercase text-sky-dark font-jost font-normal mb-2">
                    What we offer
                  </p>
                  <ul className="text-[13px] text-charcoal font-jost font-light leading-[1.8] space-y-1">
                    {[
                      'Ceremony and reception packages',
                      'Bespoke menus — canapé, set or share-style',
                      'Dedicated events coordinator',
                      'Bay views and beachside terrace access',
                      'Flexible spaces for 15–60 guests',
                      'Full beverage packages available',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-sky mt-1 shrink-0">·</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/functions#enquiry"
                    className="bg-sky text-white py-[14px] px-8 rounded-[3px] text-[11px] tracking-[0.12em] uppercase font-jost font-normal text-center hover:bg-sky-dark transition-colors"
                  >
                    Enquire Now
                  </Link>
                  <a
                    href="mailto:events@southbeachproject.com.au"
                    className="border border-sky text-sky bg-transparent py-[13px] px-8 rounded-[3px] text-[11px] tracking-[0.12em] uppercase font-jost font-normal text-center hover:bg-sky hover:text-white transition-colors"
                  >
                    Email Us
                  </a>
                </div>
              </div>

              <div className="mt-12 md:mt-0">
                <div className="relative h-[380px] md:h-[520px] rounded-[4px] overflow-hidden">
                  <Image
                    src="/assets/southbeach_wedding_1080x1080.jpg"
                    alt="Wedding at South Beach Mount Martha"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="mt-4 bg-[#F8F6F3] rounded-[4px] px-5 py-4">
                  <p className="text-[9px] tracking-[0.18em] uppercase text-sky-dark font-jost font-normal mb-1">Contact our events team</p>
                  <a href="mailto:events@southbeachproject.com.au" className="text-[13px] text-sky font-jost font-light hover:underline">
                    events@southbeachproject.com.au
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BottomNav />
    </>
  )
}
