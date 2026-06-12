import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BottomNav from '@/components/BottomNav'
import PageHero from '@/components/PageHero'
import InfoCard from '@/components/InfoCard'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: { absolute: 'Contact | South Beach Restaurant' },
  description: 'Get in touch with South Beach Restaurant in Mount Martha. Find our contact details, opening hours and location for relaxed coastal dining on the Mornington Peninsula.',
  alternates: { canonical: 'https://sbmm.com.au/contact' },
  openGraph: {
    title: 'Contact | South Beach Restaurant',
    description: 'Get in touch with South Beach Restaurant in Mount Martha. Find our contact details, opening hours and location for relaxed coastal dining on the Mornington Peninsula.',
    url: 'https://sbmm.com.au/contact',
    siteName: 'South Beach Restaurant',
    images: [{ url: '/assets/sbmm-contact-us-image-01.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | South Beach Restaurant',
    description: 'Get in touch with South Beach Restaurant in Mount Martha. Find our contact details, opening hours and location for relaxed coastal dining on the Mornington Peninsula.',
  },
}

const defaultHours = [
  { day: 'Monday',    hours: '7.30am – 2.30pm' },
  { day: 'Tuesday',   hours: '7.30am – 2.30pm' },
  { day: 'Wednesday', hours: '7.30am – 2.30pm' },
  { day: 'Thursday',  hours: '7.30am – 2.30pm' },
  { day: 'Friday',    hours: '7.30am – 2.30pm  +  4.30pm – close' },
  { day: 'Saturday',  hours: '7.30am – 2.30pm  +  4.30pm – close' },
  { day: 'Sunday',    hours: '7.30am – 2.30pm' },
]

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
                <p className="text-[10px] tracking-[0.2em] uppercase text-sky font-jost font-normal mb-[10px]">
                  Visit Us
                </p>
                <h2 className="font-cormorant font-light text-[34px] md:text-[42px] text-charcoal leading-[1.05] mb-3 tracking-[0.02em]">
                  Find us in Mount Martha
                </h2>
                <p className="text-[13px] text-warm font-jost font-light leading-[1.8] mb-6">
                  Whether you&apos;re reserving a table, sharing your thoughts, or simply wanting to know
                  more about South Beach, get in touch anytime. We&apos;re here to make your visit special.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  <InfoCard
                    label="Address"
                    value={<>464 Esplanade<br />Mount Martha VIC 3934</>}
                  />
                  <InfoCard
                    label="Email"
                    value={
                      <a href="mailto:events@southbeachproject.com.au" className="hover:text-sky transition-colors break-all">
                        events@southbeachproject.com.au
                      </a>
                    }
                  />
                </div>

                {/* Opening hours */}
                <div className="bg-sky-light rounded-[4px] border-l-2 border-sky px-[18px] py-4 mb-6">
                  <p className="text-[9px] tracking-[0.18em] uppercase text-sky-dark font-jost font-normal mb-3">
                    Opening Hours
                  </p>
                  <div className="space-y-[6px]">
                    {defaultHours.map(({ day, hours }) => (
                      <div key={day} className="flex justify-between text-[12px] font-jost font-light gap-4">
                        <span className="text-charcoal shrink-0">{day}</span>
                        <span className="text-warm text-right">{hours}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-[10px] text-warm/60 font-jost font-light italic mt-3">
                    Sundays 10% surcharge · Public Holidays 20% surcharge
                  </p>
                </div>

                {/* Map */}
                <div className="rounded-[6px] overflow-hidden border border-sky/15">
                  <iframe
                    src="https://maps.google.com/maps?q=464+Esplanade+Mount+Martha+VIC+3934+Australia&output=embed"
                    width="100%"
                    className="h-[280px] md:h-[340px] block"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="South Beach Restaurant location"
                  />
                </div>
              </div>

              {/* Right: form */}
              <div className="mt-12 md:mt-0">
                <p className="text-[10px] tracking-[0.2em] uppercase text-sky font-jost font-normal mb-[10px]">
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
      </main>
      <Footer />
      <BottomNav />
    </>
  )
}
