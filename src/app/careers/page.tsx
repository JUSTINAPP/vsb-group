import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BottomNav from '@/components/BottomNav'
import PageHero from '@/components/PageHero'
import CareersForm from '@/components/CareersForm'

export const metadata: Metadata = {
  title: { absolute: 'Careers | South Beach Restaurant' },
  description: "Join the team at South Beach Restaurant in Mount Martha. We're a relaxed coastal venue looking for people who care about good food, great service and a friendly beachside atmosphere.",
  alternates: { canonical: 'https://sbmm.com.au/careers' },
  openGraph: {
    title: 'Careers | South Beach Restaurant',
    description: "Join the team at South Beach Restaurant in Mount Martha.",
    url: 'https://sbmm.com.au/careers',
    siteName: 'South Beach Restaurant',
    images: [{ url: '/assets/South-Beach-Project-Exterior-05-2400x1300-1.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers | South Beach Restaurant',
    description: "Join the team at South Beach Restaurant in Mount Martha.",
  },
}

export default function CareersPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Join the Team"
          title="Careers at South Beach"
          image="/assets/South-Beach-Project-Exterior-05-2400x1300-1.jpg"
        />

        <section className="bg-white py-[48px] md:py-[64px]">
          <div className="max-w-7xl mx-auto px-6 md:px-[60px]">
            <div className="md:grid md:grid-cols-2 md:gap-16">

              {/* Left: copy */}
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-sky font-jost font-normal mb-[10px]">
                  Work with us
                </p>
                <h2 className="font-cormorant font-light text-[34px] md:text-[42px] text-charcoal leading-[1.05] mb-2 tracking-[0.02em]">
                  Be part of something coastal
                </h2>
                <p className="font-cormorant italic font-light text-[18px] text-warm mb-6">
                  Good people, good food, great views
                </p>

                <div className="text-[13px] leading-[1.8] text-warm font-jost font-light space-y-4 mb-8">
                  <p>
                    South Beach Restaurant is a growing coastal venue in the heart of Mount Martha on
                    Victoria&apos;s Mornington Peninsula. We&apos;re a team that takes genuine pride in what
                    we do — from the food on the plate to the welcome at the door — and we&apos;re always
                    looking for people who share that same care and energy.
                  </p>
                  <p>
                    Whether you&apos;re an experienced hospitality professional or someone just starting
                    out, if you love a relaxed, beachside atmosphere and believe that good service
                    makes all the difference, we&apos;d love to hear from you.
                  </p>
                  <p>
                    We offer flexible hours, a supportive team environment and the chance to work in
                    one of the most beautiful settings on the Peninsula. Roles span front of house,
                    kitchen, bar and events — and we&apos;re open to casual, part-time and full-time
                    arrangements depending on the position.
                  </p>
                </div>

                <div className="bg-sky-light rounded-[4px] border-l-2 border-sky px-[18px] py-4">
                  <p className="text-[9px] tracking-[0.18em] uppercase text-sky-dark font-jost font-normal mb-2">
                    What we&apos;re looking for
                  </p>
                  <ul className="text-[13px] text-charcoal font-jost font-light leading-[1.8] space-y-1">
                    {[
                      'Warm, genuine hospitality',
                      'Reliability and a positive attitude',
                      'Passion for good food and coastal living',
                      'Team players who enjoy a fast-paced environment',
                      'RSA certification (or willingness to obtain)',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-sky mt-1 shrink-0">·</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right: form */}
              <div className="mt-12 md:mt-0">
                <p className="text-[10px] tracking-[0.2em] uppercase text-sky font-jost font-normal mb-[10px]">
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
      </main>
      <Footer />
      <BottomNav />
    </>
  )
}
