import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BottomNav from '@/components/BottomNav'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: { absolute: 'Privacy Policy | South Beach Restaurant' },
  description: 'Read the Privacy Policy for South Beach Restaurant in Mount Martha. Learn how we collect, use and protect your personal information.',
  alternates: { canonical: 'https://sbmm.com.au/privacy-policy' },
  openGraph: {
    title: 'Privacy Policy | South Beach Restaurant',
    description: 'Read the Privacy Policy for South Beach Restaurant in Mount Martha.',
    url: 'https://sbmm.com.au/privacy-policy',
    siteName: 'South Beach Restaurant',
    images: [{ url: '/assets/South-Beach-Project-Exterior-05-2400x1300-1.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | South Beach Restaurant',
    description: 'Read the Privacy Policy for South Beach Restaurant in Mount Martha.',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="South Beach · Mount Martha"
          title="Privacy Policy"
          image="/assets/South-Beach-Project-Exterior-05-2400x1300-1.jpg"
        />

        <section className="bg-white py-[48px] md:py-[64px]">
          <div className="max-w-3xl mx-auto px-6 md:px-[60px]">
            <p className="text-[10px] tracking-[0.2em] uppercase text-sky font-jost font-normal mb-[10px]">
              Legal
            </p>
            <h2 className="font-cormorant font-light text-[34px] md:text-[42px] text-charcoal leading-[1.05] mb-2 tracking-[0.02em]">
              How we handle your information
            </h2>
            <p className="font-cormorant italic font-light text-[18px] text-warm mb-10">
              Last updated: April 2025
            </p>

            <div className="text-[13px] leading-[1.9] text-warm font-jost font-light space-y-8">

              <div>
                <h3 className="font-cormorant font-light text-[22px] text-charcoal mb-3">1. Who we are</h3>
                <p>
                  South Beach Restaurant (&ldquo;South Beach&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) operates the website at sbmm.com.au and the restaurant at 464 Esplanade, Mount Martha VIC 3934. This Privacy Policy explains how we collect, use, disclose and protect personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles.
                </p>
              </div>

              <div>
                <h3 className="font-cormorant font-light text-[22px] text-charcoal mb-3">2. Information we collect</h3>
                <p className="mb-3">We may collect the following types of personal information:</p>
                <ul className="space-y-2">
                  {[
                    'Name, email address, phone number — when you make a booking, submit an enquiry or apply for a role',
                    'Dietary requirements and accessibility needs — when provided voluntarily for a booking',
                    'Resume and employment history — when you submit a career application',
                    'IP address, browser type and pages visited — collected automatically when you use our website',
                    'Email subscription status — if you opt in to our mailing list',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-sky mt-1 shrink-0">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-cormorant font-light text-[22px] text-charcoal mb-3">3. How we use your information</h3>
                <p className="mb-3">We use personal information to:</p>
                <ul className="space-y-2">
                  {[
                    'Process and manage table reservations and function bookings',
                    'Respond to enquiries and contact form submissions',
                    'Consider career applications',
                    'Send you newsletters or event updates if you have opted in',
                    'Improve our website and services',
                    'Comply with legal obligations',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-sky mt-1 shrink-0">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-cormorant font-light text-[22px] text-charcoal mb-3">4. Disclosure of your information</h3>
                <p>
                  We do not sell, rent or trade your personal information. We may share your information with trusted third-party service providers who assist us in operating our website and conducting our business, including booking platform providers (SevenRooms), email delivery services (Resend) and website hosting providers. These parties are required to keep your information confidential and use it only for the purposes for which it was disclosed.
                </p>
              </div>

              <div>
                <h3 className="font-cormorant font-light text-[22px] text-charcoal mb-3">5. Data security</h3>
                <p>
                  We take reasonable steps to protect your personal information from misuse, interference, loss, and unauthorised access, modification or disclosure. Our website uses HTTPS encryption and we limit access to personal information to those staff who need it to perform their role. Despite these measures, no data transmission over the internet is completely secure.
                </p>
              </div>

              <div>
                <h3 className="font-cormorant font-light text-[22px] text-charcoal mb-3">6. Cookies and analytics</h3>
                <p>
                  Our website may use cookies and similar technologies to improve your browsing experience and analyse site traffic. You can disable cookies through your browser settings, though this may affect the functionality of some parts of the site. We do not use cookies to identify you personally without your consent.
                </p>
              </div>

              <div>
                <h3 className="font-cormorant font-light text-[22px] text-charcoal mb-3">7. Access and correction</h3>
                <p>
                  You have the right to access the personal information we hold about you and to request that we correct any inaccuracies. To make a request, please contact us at <a href="mailto:events@southbeachproject.com.au" className="text-sky hover:underline">events@southbeachproject.com.au</a>. We will respond within a reasonable time and may need to verify your identity before providing access.
                </p>
              </div>

              <div>
                <h3 className="font-cormorant font-light text-[22px] text-charcoal mb-3">8. Marketing communications</h3>
                <p>
                  If you have subscribed to our mailing list, you may unsubscribe at any time by clicking the unsubscribe link in any email we send, or by contacting us directly. We will not send you marketing communications without your consent.
                </p>
              </div>

              <div>
                <h3 className="font-cormorant font-light text-[22px] text-charcoal mb-3">9. Third-party websites</h3>
                <p>
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to read their privacy policies before providing any personal information.
                </p>
              </div>

              <div>
                <h3 className="font-cormorant font-light text-[22px] text-charcoal mb-3">10. Changes to this policy</h3>
                <p>
                  We may update this Privacy Policy from time to time. The most current version will always be available on this page, with the date of last update noted at the top. Continued use of our website after any changes constitutes your acceptance of the updated policy.
                </p>
              </div>

              <div>
                <h3 className="font-cormorant font-light text-[22px] text-charcoal mb-3">11. Contact us</h3>
                <p>
                  If you have any questions, concerns or complaints about this Privacy Policy or the way we handle your personal information, please contact us:
                </p>
                <div className="mt-4 bg-sky-light rounded-[4px] border-l-2 border-sky px-[18px] py-4">
                  <p className="font-jost font-light text-charcoal text-[13px] leading-[1.8]">
                    South Beach Restaurant<br />
                    464 Esplanade, Mount Martha VIC 3934<br />
                    <a href="mailto:events@southbeachproject.com.au" className="text-sky hover:underline">events@southbeachproject.com.au</a>
                  </p>
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
