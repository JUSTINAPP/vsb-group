import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BottomNav from '@/components/BottomNav'

export const metadata: Metadata = {
  title: { absolute: 'Thank You | South Beach Restaurant' },
  description: 'Thank you for contacting South Beach Restaurant in Mount Martha. We\'ll be in touch shortly.',
  alternates: { canonical: 'https://sbmm.com.au/thank-you' },
}

export default function ThankYouPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-white min-h-[calc(100vh-80px)] flex items-center">
          <div className="max-w-2xl mx-auto px-6 md:px-[60px] py-[80px] md:py-[120px] text-center">
            <div className="w-[48px] h-[48px] rounded-full bg-sky-light border border-sky/20 flex items-center justify-center mx-auto mb-8">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-sky">
                <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <p className="text-[10px] tracking-[0.2em] uppercase text-sky font-sans font-normal mb-[10px]">
              Message received
            </p>
            <h1 className="font-display uppercase tracking-tight font-semibold text-[48px] md:text-[64px] text-charcoal leading-[0.95] tracking-[0.04em] mb-4">
              Thank You
            </h1>
            <p className="font-sans font-light text-[20px] text-warm mb-6">
              We appreciate you getting in touch
            </p>
            <p className="text-[13px] leading-[1.8] text-warm font-sans font-light mb-10 max-w-md mx-auto">
              Thank you for getting in touch with South Beach Restaurant. We&apos;ll be back to you shortly.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/"
                className="bg-sky text-white py-[14px] px-8 rounded-[3px] text-[11px] tracking-[0.12em] uppercase font-sans font-normal text-center hover:bg-sky-dark transition-colors"
              >
                Back to Home
              </Link>
              <Link
                href="/eat-drink"
                className="border border-sky text-sky bg-transparent py-[13px] px-8 rounded-[3px] text-[11px] tracking-[0.12em] uppercase font-sans font-normal text-center hover:bg-sky hover:text-white transition-colors"
              >
                View Menu
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BottomNav />
    </>
  )
}
