import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BottomNav from '@/components/BottomNav'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: { absolute: 'Corporate Events Mount Martha | South Beach Restaurant' },
  description: 'Host your next corporate event, team lunch or product launch at South Beach Restaurant in Mount Martha. Private dining spaces with bay views and tailored catering on the Mornington Peninsula.',
  alternates: { canonical: 'https://sbmm.com.au/functions/corporate' },
  openGraph: {
    title: 'Corporate Events Mount Martha | South Beach Restaurant',
    description: 'Host your next corporate event, team lunch or product launch at South Beach Restaurant in Mount Martha.',
    url: 'https://sbmm.com.au/functions/corporate',
    siteName: 'South Beach Restaurant',
    images: [{ url: '/assets/SouthBeach_function1.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corporate Events Mount Martha | South Beach Restaurant',
    description: 'Host your next corporate event, team lunch or product launch at South Beach Restaurant in Mount Martha.',
  },
}

export default function CorporatePage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Functions & Events"
          title="Corporate Events"
          subtitle="Professional settings, relaxed coastal atmosphere"
          image="/assets/SouthBeach_function1.jpg"
        />

        <section className="bg-white py-[48px] md:py-[64px]">
          <div className="max-w-7xl mx-auto px-6 md:px-[60px]">
            <div className="md:grid md:grid-cols-2 md:gap-16 items-start">

              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-sky font-jost font-normal mb-[10px]">
                  Corporate
                </p>
                <h2 className="font-cormorant font-light text-[34px] md:text-[42px] text-charcoal leading-[1.05] mb-2 tracking-[0.02em]">
                  Events your team will remember
                </h2>
                <p className="font-cormorant italic font-light text-[18px] text-warm mb-6">
                  Team lunches, product launches, client dinners and retreats
                </p>

                <div className="text-[13px] leading-[1.8] text-warm font-jost font-light space-y-4 mb-8">
                  <p>
                    South Beach offers a unique setting for corporate events on the Mornington Peninsula. Our Atrium and The Room are purpose-built for professional gatherings — light-filled, flexible spaces with bay views that impress clients and energise teams.
                  </p>
                  <p>
                    From working lunches to end-of-year celebrations, our team handles every detail so you can focus on the people in the room. We offer AV support, tailored menus, beverage packages and dedicated event coordinators for groups of all sizes.
                  </p>
                  <p>
                    Whether you need a boardroom-style long-table setup or a cocktail reception, we&apos;ll configure the space to suit your brief.
                  </p>
                </div>

                <div className="bg-sky-light rounded-[4px] border-l-2 border-sky px-[18px] py-4 mb-8">
                  <p className="text-[9px] tracking-[0.18em] uppercase text-sky-dark font-jost font-normal mb-2">
                    Popular corporate formats
                  </p>
                  <ul className="text-[13px] text-charcoal font-jost font-light leading-[1.8] space-y-1">
                    {[
                      'Team lunches and working dinners',
                      'Client entertainment and private dining',
                      'Product launches and brand activations',
                      'End-of-year and milestone celebrations',
                      'Offsite meetings and retreats',
                      'Cocktail receptions and networking events',
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
                    src="/assets/SouthBeach_function1.jpg"
                    alt="Corporate event at South Beach Mount Martha"
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
