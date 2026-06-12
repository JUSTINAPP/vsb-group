import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BottomNav from '@/components/BottomNav'
import PageHero from '@/components/PageHero'
import CareersForm from '@/components/CareersForm'
import { ColourDeviceStrip } from '@/components/ColourDeviceStrip'

export const metadata: Metadata = {
  title: { absolute: 'Careers | VSB Group' },
  description:
    'Join the team at VSB Group. We operate Volpino Pizzeria & Wine Bar and South Beach Restaurant on Victoria\'s Mornington Peninsula and are always looking for great people.',
  alternates: { canonical: 'https://vsbgroup.com.au/careers' },
  openGraph: {
    title: 'Careers | VSB Group',
    description: 'Join the team at VSB Group on Victoria\'s Mornington Peninsula.',
    url: 'https://vsbgroup.com.au/careers',
    images: [{ url: '/assets/South-Beach-Project-Exterior-05-2400x1300-1.jpg', width: 1200, height: 630 }],
  },
}

const VENUES = [
  {
    name: 'Volpino Pizzeria & Wine Bar',
    roles: ['Front of House', 'Bar Staff', 'Kitchen Crew', 'Pizza Chefs'],
    href: 'https://volpino.com.au',
  },
  {
    name: 'South Beach Restaurant',
    roles: ['Front of House', 'Baristas & Bar Staff', 'Kitchen Crew', 'Events Staff'],
    href: 'https://sbmm.com.au',
  },
]

export default function CareersPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Work with VSB Group"
          title="Careers"
          subtitle="Join our growing team"
          image="/assets/sbmm-staff-photo.jpg"
        />

        <section className="bg-white py-[48px] md:py-[64px]">
          <div className="max-w-7xl mx-auto px-6 md:px-[60px]">
            <div className="md:grid md:grid-cols-2 md:gap-16">

              {/* Left: copy */}
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-gold font-jost font-normal mb-[10px]">
                  Work with us
                </p>
                <h2 className="font-cormorant font-light text-[34px] md:text-[42px] text-charcoal leading-[1.05] mb-2 tracking-[0.02em]">
                  Be part of something special
                </h2>
                <p className="font-cormorant italic font-light text-[18px] text-warm mb-6">
                  Good people, great venues, the Peninsula
                </p>

                <div className="text-[13px] leading-[1.8] text-warm font-jost font-light space-y-4 mb-8">
                  <p>
                    VSB Group is a small, growing hospitality company on Victoria&apos;s Mornington
                    Peninsula. Our venues — Volpino Pizzeria &amp; Wine Bar and South Beach Restaurant
                    — are run by talented, passionate teams, and we&apos;re always looking for great
                    people to join us.
                  </p>
                  <p>
                    Whether you&apos;re experienced in hospitality or just starting out, if you care
                    about the craft and want to be part of something with real character, we&apos;d
                    love to hear from you.
                  </p>
                  <p>
                    We offer flexible arrangements, a supportive team culture, and the chance to
                    work in one of the most beautiful settings on the Peninsula. Casual, part-time
                    and full-time roles available across both venues.
                  </p>
                </div>

                {/* Venues */}
                <div className="space-y-4 mb-8">
                  {VENUES.map(({ name, roles }) => (
                    <div key={name} className="bg-sky-light rounded-[4px] border-l-2 border-gold px-[18px] py-4">
                      <p className="text-[9px] tracking-[0.18em] uppercase text-charcoal font-jost font-normal mb-2">
                        {name}
                      </p>
                      <ul className="text-[12px] text-warm font-jost font-light space-y-[4px]">
                        {roles.map((role) => (
                          <li key={role} className="flex items-center gap-2">
                            <span className="text-gold shrink-0">·</span>
                            {role}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="bg-cream rounded-[4px] border-l-2 border-gold px-[18px] py-4">
                  <p className="text-[9px] tracking-[0.18em] uppercase text-gold font-jost font-normal mb-2">
                    What we look for
                  </p>
                  <ul className="text-[13px] text-charcoal font-jost font-light leading-[1.8] space-y-1">
                    {[
                      'Warm, genuine hospitality',
                      'Reliability and a positive attitude',
                      'Passion for good food and great service',
                      'Team players who thrive in a fast-paced environment',
                      'RSA certification (or willingness to obtain)',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-gold mt-1 shrink-0">·</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right: form */}
              <div className="mt-12 md:mt-0">
                <p className="text-[10px] tracking-[0.2em] uppercase text-gold font-jost font-normal mb-[10px]">
                  Apply now
                </p>
                <h2 className="font-cormorant font-light text-[34px] md:text-[42px] text-charcoal leading-[1.05] mb-2 tracking-[0.02em]">
                  Send us your details
                </h2>
                <p className="font-cormorant italic font-light text-[18px] text-warm mb-8">
                  We&apos;ll be in touch if there&apos;s a good fit
                </p>
                <CareersForm />
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
