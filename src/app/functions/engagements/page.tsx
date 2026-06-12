import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BottomNav from '@/components/BottomNav'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: { absolute: 'Engagement Party Venue Mount Martha | South Beach' },
  description: 'Host your engagement party at South Beach Restaurant in Mount Martha. A beautiful coastal venue on the Mornington Peninsula with private spaces, bespoke menus and bay views.',
  alternates: { canonical: 'https://sbmm.com.au/functions/engagements' },
  openGraph: {
    title: 'Engagement Party Venue Mount Martha | South Beach',
    description: 'Host your engagement party at South Beach Restaurant in Mount Martha. A beautiful coastal venue on the Mornington Peninsula with private spaces and bay views.',
    url: 'https://sbmm.com.au/functions/engagements',
    siteName: 'South Beach Restaurant',
    images: [{ url: '/assets/southbeach_wedding_1080x1080.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Engagement Party Venue Mount Martha | South Beach',
    description: 'Host your engagement party at South Beach Restaurant in Mount Martha.',
  },
}

export default function EngagementsPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Functions & Events"
          title="Engagement Parties"
          subtitle="Celebrate the beginning of forever by the bay"
          image="/assets/southbeach_wedding_1080x1080.jpg"
        />

        <section className="bg-white py-[48px] md:py-[64px]">
          <div className="max-w-7xl mx-auto px-6 md:px-[60px]">
            <div className="md:grid md:grid-cols-2 md:gap-16 items-start">

              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-sky font-jost font-normal mb-[10px]">
                  Engagements
                </p>
                <h2 className="font-cormorant font-light text-[34px] md:text-[42px] text-charcoal leading-[1.05] mb-2 tracking-[0.02em]">
                  The perfect start to forever
                </h2>
                <p className="font-cormorant italic font-light text-[18px] text-warm mb-6">
                  Intimate coastal celebrations for your closest people
                </p>

                <div className="text-[13px] leading-[1.8] text-warm font-jost font-light space-y-4 mb-8">
                  <p>
                    An engagement party at South Beach is a celebration like no other. Our beachside location in Mount Martha offers a naturally romantic backdrop — bay views, golden light, and an atmosphere that&apos;s both elegant and genuinely relaxed.
                  </p>
                  <p>
                    We&apos;ll work with you to design an event that feels personal. From bespoke menus and drinks packages to table styling and private space hire, our events team handles every detail so you can enjoy the moment with the people who matter most.
                  </p>
                  <p>
                    Our Terrace and Garden spaces are especially popular for engagement parties, with the option to expand into the Atrium or The Room for larger groups.
                  </p>
                </div>

                <div className="bg-sky-light rounded-[4px] border-l-2 border-sky px-[18px] py-4 mb-8">
                  <p className="text-[9px] tracking-[0.18em] uppercase text-sky-dark font-jost font-normal mb-2">
                    What&apos;s included
                  </p>
                  <ul className="text-[13px] text-charcoal font-jost font-light leading-[1.8] space-y-1">
                    {[
                      'Private or semi-private space hire',
                      'Bespoke canapé, share-style or set menus',
                      'Beverage packages tailored to your group',
                      'Celebration cake service',
                      'Bay views and beachside ambience',
                      'Dedicated events coordinator',
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
                    alt="Engagement party at South Beach Mount Martha"
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
