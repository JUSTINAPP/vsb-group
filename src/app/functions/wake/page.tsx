import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BottomNav from '@/components/BottomNav'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: { absolute: 'Wake & Memorial Venue Mount Martha | South Beach' },
  description: 'South Beach Restaurant offers a warm, private setting for wakes and memorial gatherings in Mount Martha. Our compassionate events team will help you create a meaningful tribute.',
  alternates: { canonical: 'https://sbmm.com.au/functions/wake' },
  openGraph: {
    title: 'Wake & Memorial Venue Mount Martha | South Beach',
    description: 'South Beach Restaurant offers a warm, private setting for wakes and memorial gatherings in Mount Martha. Our compassionate team will help you create a meaningful tribute.',
    url: 'https://sbmm.com.au/functions/wake',
    siteName: 'South Beach Restaurant',
    images: [{ url: '/assets/southbeach_function3_1080x1080.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wake & Memorial Venue Mount Martha | South Beach',
    description: 'South Beach Restaurant offers a warm, private setting for wakes and memorial gatherings in Mount Martha.',
  },
}

export default function WakePage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Functions & Events"
          title="Wakes & Memorial Gatherings"
          subtitle="A peaceful, private space to gather and remember"
          image="/assets/southbeach_function3_1080x1080.jpg"
        />

        <section className="bg-white py-[48px] md:py-[64px]">
          <div className="max-w-7xl mx-auto px-6 md:px-[60px]">
            <div className="md:grid md:grid-cols-2 md:gap-16 items-start">

              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-sky font-jost font-normal mb-[10px]">
                  Memorial Events
                </p>
                <h2 className="font-cormorant font-light text-[34px] md:text-[42px] text-charcoal leading-[1.05] mb-2 tracking-[0.02em]">
                  A place to gather and remember
                </h2>
                <p className="font-cormorant italic font-light text-[18px] text-warm mb-6">
                  Thoughtful, private hospitality when it matters most
                </p>

                <div className="text-[13px] leading-[1.8] text-warm font-jost font-light space-y-4 mb-8">
                  <p>
                    South Beach offers a compassionate and private setting for wakes and memorial gatherings. Our peaceful coastal environment, attentive staff and discreet spaces allow families and friends to come together, share memories, and find comfort over good food and good company.
                  </p>
                  <p>
                    We understand that every gathering is unique, and our events team will work sensitively with you to plan an event that honours the person you are remembering. From menu choices and dietary needs to room layout and timing, we take care of every detail.
                  </p>
                  <p>
                    Our indoor spaces — the Atrium and The Room — offer privacy and warmth, while the Garden provides a quieter outdoor option on fine days. We accommodate groups from 15 to 60 guests.
                  </p>
                </div>

                <div className="bg-sky-light rounded-[4px] border-l-2 border-sky px-[18px] py-4 mb-8">
                  <p className="text-[9px] tracking-[0.18em] uppercase text-sky-dark font-jost font-normal mb-2">
                    How we can help
                  </p>
                  <ul className="text-[13px] text-charcoal font-jost font-light leading-[1.8] space-y-1">
                    {[
                      'Private space hire — indoor and outdoor options',
                      'Flexible food and beverage arrangements',
                      'Dietary requirements accommodated with care',
                      'Discreet, compassionate service throughout',
                      'Easy access and parking along the Esplanade',
                      'Dedicated events coordinator from first enquiry',
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
                    src="/assets/southbeach_function3_1080x1080.jpg"
                    alt="Memorial gathering space at South Beach Mount Martha"
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
