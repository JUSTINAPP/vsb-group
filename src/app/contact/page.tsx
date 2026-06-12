import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BottomNav from '@/components/BottomNav'
import PageHero from '@/components/PageHero'
import InfoCard from '@/components/InfoCard'
import ContactForm from '@/components/ContactForm'
import { ColourDeviceStrip } from '@/components/ColourDeviceStrip'

export const metadata: Metadata = {
  title: { absolute: 'Contact | VSB Group' },
  description:
    'Get in touch with VSB Group. For venue-specific bookings and enquiries, visit Volpino or South Beach directly.',
  alternates: { canonical: 'https://vsbgroup.com.au/contact' },
  openGraph: {
    title: 'Contact | VSB Group',
    description: 'Get in touch with VSB Group.',
    url: 'https://vsbgroup.com.au/contact',
    images: [{ url: '/assets/sbmm-contact-us-image-01.jpg', width: 1200, height: 630 }],
  },
}

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Get in Touch"
          title="Contact Us"
          subtitle="We'd love to hear from you"
          image="/assets/sbmm-contact-us-image-01.jpg"
        />

        <section className="bg-white py-[48px] md:py-[64px]">
          <div className="max-w-7xl mx-auto px-6 md:px-[60px]">
            <div className="md:grid md:grid-cols-2 md:gap-16">

              {/* Left: info */}
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-gold font-jost font-normal mb-[10px]">
                  Group enquiries
                </p>
                <h2 className="font-cormorant font-light text-[34px] md:text-[42px] text-charcoal leading-[1.05] mb-3 tracking-[0.02em]">
                  Reach out to VSB Group
                </h2>
                <p className="text-[13px] text-warm font-jost font-light leading-[1.8] mb-6">
                  For general enquiries about VSB Group — including business, partnerships, and
                  media — get in touch using the form or via email.
                </p>
                <p className="text-[13px] text-warm font-jost font-light leading-[1.8] mb-8">
                  For venue-specific bookings, events and dining enquiries, please contact each
                  venue directly via the links below.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  <InfoCard
                    label="Email"
                    value={
                      <a href="mailto:samuel@vsbgroup.com.au" className="hover:text-gold transition-colors break-all">
                        samuel@vsbgroup.com.au
                      </a>
                    }
                  />
                  <InfoCard
                    label="Location"
                    value={<>Mornington Peninsula<br />Victoria, Australia</>}
                  />
                </div>

                {/* Venue contacts */}
                <div className="space-y-3">
                  <p className="text-[9px] tracking-[0.2em] uppercase text-gold font-jost font-normal">
                    Venue Contacts
                  </p>
                  <div className="bg-cream rounded-[4px] border-l-2 border-gold px-[18px] py-4">
                    <p className="text-[11px] font-jost font-normal text-charcoal mb-1">
                      Volpino Pizzeria &amp; Wine Bar
                    </p>
                    <a
                      href="https://volpino.com.au"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-gold font-jost font-light hover:opacity-70 transition-opacity"
                    >
                      volpino.com.au ↗
                    </a>
                  </div>
                  <div className="bg-cream rounded-[4px] border-l-2 border-gold px-[18px] py-4">
                    <p className="text-[11px] font-jost font-normal text-charcoal mb-1">
                      South Beach Restaurant
                    </p>
                    <a
                      href="https://sbmm.com.au/contact"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-gold font-jost font-light hover:opacity-70 transition-opacity"
                    >
                      sbmm.com.au/contact ↗
                    </a>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    href="/bookings"
                    className="text-[11px] tracking-[0.12em] uppercase text-gold font-jost font-normal border border-gold px-[22px] py-[12px] rounded-[3px] hover:bg-gold hover:text-white transition-colors inline-block"
                  >
                    Book a Table →
                  </Link>
                </div>
              </div>

              {/* Right: form */}
              <div className="mt-12 md:mt-0">
                <p className="text-[10px] tracking-[0.2em] uppercase text-gold font-jost font-normal mb-[10px]">
                  Send a Message
                </p>
                <h2 className="font-cormorant font-light text-[34px] md:text-[42px] text-charcoal leading-[1.05] mb-2 tracking-[0.02em]">
                  Get in touch
                </h2>
                <p className="font-cormorant italic font-light text-[18px] text-warm mb-8">
                  We&apos;ll reply within one business day
                </p>
                <ContactForm />
              </div>

            </div>
          </div>
        </section>

        <ColourDeviceStrip />
      </main>
      <Footer />
      <BottomNav />
    </>
  )
}
