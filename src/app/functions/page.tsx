import type { Metadata } from 'next'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BottomNav from '@/components/BottomNav'
import PageHero from '@/components/PageHero'
import { ColourDeviceStrip } from '@/components/ColourDeviceStrip'
import FunctionsEnquiryForm from '@/components/FunctionsEnquiryForm'

export const metadata: Metadata = {
  title: { absolute: 'Functions & Events | South Beach Restaurant' },
  description: 'Host your next event at South Beach Restaurant in Mount Martha. Four flexible spaces for weddings, corporate events and celebrations with bay views.',
  alternates: { canonical: 'https://sbmm.com.au/functions' },
  openGraph: {
    title: 'Functions & Events | South Beach Restaurant',
    description: 'Host your next event at South Beach Restaurant in Mount Martha. Four flexible spaces for weddings, corporate events and celebrations with bay views.',
    url: 'https://sbmm.com.au/functions',
    siteName: 'South Beach Restaurant',
    images: [{ url: '/assets/South-Beach-Project-Exterior-05-2400x1300-1.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Functions & Events | South Beach Restaurant',
    description: 'Host your next event at South Beach Restaurant in Mount Martha. Four flexible spaces for weddings, corporate events and celebrations with bay views.',
  },
}

const SPACES = [
  {
    name: 'Terrace',
    pax: '15–30 guests',
    image: '/assets/southbeach_wedding_1080x1080.jpg',
    copy: 'Our north and beach-facing terrace is perfect for al fresco dining and sunset drinks. Bathed in sunlight throughout the day, it\'s ideal for cocktail-style functions or seated group meals with views of the bay just beyond the railing.',
  },
  {
    name: 'Garden',
    pax: '15–35 guests',
    image: '/assets/southbeach_function_1080x1080.jpg',
    copy: 'Nestled in a beach-facing corner and shaded beneath a large magnolia tree, the Garden is a semi-private outdoor area that feels both relaxed and refined. A guest favourite in warmer months — perfect for brunches, baby showers, or casual receptions.',
  },
  {
    name: 'Atrium',
    pax: '20–40 guests',
    image: '/assets/SouthBeach_function1.jpg',
    copy: 'The Atrium is a flexible, light-filled space with oversized windows framing sweeping bay views. Designed with multiple layout options in mind, it\'s ideal for long-table lunches, private meetings, or product launches.',
  },
  {
    name: 'The Room',
    pax: '40–60 guests',
    image: '/assets/southbeach_function3_1080x1080.jpg',
    copy: 'For those cooler months or larger groups, The Room offers indoor comfort without losing the view. Featuring two fireplaces, moody lighting, and a cozy but open floor plan, it\'s perfect for winter weddings, intimate parties, or special occasions.',
  },
]

export default function FunctionsPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="South Beach · Mount Martha"
          title="Functions & Events"
          subtitle="Private dining · Weddings · Corporate · Celebrations"
          image="/assets/southbeach_wedding_1080x1080.jpg"
        />

        {/* Intro */}
        <section className="bg-white py-[48px] md:py-[64px]">
          <div className="max-w-7xl mx-auto px-6 md:px-[60px]">
            <p className="text-[10px] tracking-[0.2em] uppercase text-sky font-jost font-normal mb-[10px]">
              Private &amp; Corporate Events
            </p>
            <h2 className="font-cormorant font-light text-[34px] md:text-[42px] text-charcoal leading-[1.05] mb-2 tracking-[0.02em]">
              Your occasion, our space
            </h2>
            <p className="font-cormorant italic font-light text-[18px] text-warm mb-6">
              Birthdays, anniversaries, weddings, corporate events and celebrations
            </p>
            <div className="text-[13px] leading-[1.8] text-warm font-jost font-light max-w-2xl space-y-4">
              <p>
                South Beach offers beautifully designed spaces for private and corporate events, from
                garden gatherings to full-venue celebrations. Complete the form below and our team will
                respond with availability and options.
              </p>
              <p>
                Please email us at{' '}
                <a
                  href="mailto:events@southbeachproject.com.au"
                  className="text-sky hover:text-sky-dark transition-colors"
                >
                  events@southbeachproject.com.au
                </a>
              </p>
            </div>
          </div>
        </section>

        <ColourDeviceStrip />

        {/* Four spaces */}
        <section className="bg-cream py-[48px] md:py-[64px]">
          <div className="max-w-7xl mx-auto px-6 md:px-[60px]">
            <p className="text-[10px] tracking-[0.2em] uppercase text-sky font-jost font-normal mb-[10px]">
              Our Spaces
            </p>
            <h2 className="font-cormorant font-light text-[34px] md:text-[42px] text-charcoal leading-[1.05] mb-8 tracking-[0.02em]">
              Four beautifully designed spaces
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {SPACES.map(({ name, pax, image, copy }) => (
                <div key={name} className="bg-white rounded-[4px] overflow-hidden border border-[#EDECEA]">
                  <div className="relative h-[220px] md:h-[260px]">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 px-5 pb-4">
                      <h3 className="font-cormorant font-light text-[26px] text-white leading-[1.1]">{name}</h3>
                      <p className="text-[10px] tracking-[0.12em] uppercase text-white/65 font-jost font-light mt-[2px]">{pax}</p>
                    </div>
                  </div>
                  <div className="px-5 py-5">
                    <p className="text-[13px] text-warm font-jost font-light leading-[1.8]">{copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ColourDeviceStrip />

        {/* Enquiry form */}
        <section className="bg-charcoal py-[52px] md:py-[64px]">
          <div className="max-w-7xl mx-auto px-6 md:px-[60px]">
            <p className="text-[10px] tracking-[0.2em] uppercase text-gold font-jost font-normal mb-[10px]">
              Get in touch
            </p>
            <h2 className="font-cormorant font-light text-[34px] md:text-[42px] text-white leading-[1.05] mb-2">
              Enquire about your event
            </h2>
            <p className="font-cormorant italic font-light text-[18px] text-white/55 mb-8">
              We&apos;ll be in touch within 24 hours
            </p>

            <FunctionsEnquiryForm />

            <p className="text-[11px] text-white/35 mt-5 font-jost font-light leading-[1.6]">
              We&apos;ll be in touch within 24 hours &nbsp;·&nbsp;{' '}
              <a href="mailto:events@southbeachproject.com.au" className="underline hover:text-white/60 transition-colors">
                events@southbeachproject.com.au
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <BottomNav />
    </>
  )
}
