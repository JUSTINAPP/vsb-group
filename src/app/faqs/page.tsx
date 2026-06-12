import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BottomNav from '@/components/BottomNav'
import PageHero from '@/components/PageHero'
import FaqAccordion from '@/components/FaqAccordion'
import type { FaqItem } from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: { absolute: 'FAQs | South Beach Restaurant' },
  description: 'Find answers to common questions about South Beach Restaurant in Mount Martha, including bookings, menus, dietary options, accessibility and venue details.',
  alternates: { canonical: 'https://sbmm.com.au/faqs' },
  openGraph: {
    title: 'FAQs | South Beach Restaurant',
    description: 'Find answers to common questions about South Beach Restaurant in Mount Martha.',
    url: 'https://sbmm.com.au/faqs',
    siteName: 'South Beach Restaurant',
    images: [{ url: '/assets/South-Beach-Project-Exterior-05-2400x1300-1.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQs | South Beach Restaurant',
    description: 'Find answers to common questions about South Beach Restaurant in Mount Martha.',
  },
}

const FAQS: FaqItem[] = [
  {
    q: 'Do I need to make a booking?',
    a: 'Bookings are recommended, especially on weekends and during peak season. Walk-ins are always welcome, but we can\'t guarantee a table without a reservation. You can book online via our Bookings page or through SevenRooms.',
  },
  {
    q: 'What are your opening hours?',
    a: 'We\'re open every day from 7:30am to 2:30pm for breakfast, brunch and lunch. An afternoon menu runs on Fridays and Saturdays from 4:30pm during summer (December to February). Check our homepage or contact us for any special closures or holiday hours.',
  },
  {
    q: 'Where are you located?',
    a: '464 Esplanade, Mount Martha VIC 3934 — right on the beachfront. We\'re easy to find with plenty of street parking along the Esplanade and surrounding streets.',
  },
  {
    q: 'Is there parking nearby?',
    a: 'Yes — there is free street parking along the Esplanade directly in front of the venue, and additional parking available on surrounding streets. Parking fills quickly on summer weekends, so we recommend arriving early.',
  },
  {
    q: 'Do you cater for dietary requirements?',
    a: 'Yes. Our menu features gluten-reduced, vegetarian, vegetarian available, and dairy-free options, clearly marked with dietary badges (GR, GRA, V, VA, DF). Please let your server know about any allergies or requirements — our kitchen takes all dietary needs seriously, though we cannot guarantee a 100% allergen-free environment.',
  },
  {
    q: 'Do you have a kids menu?',
    a: 'Yes, we have a dedicated kids menu with options including egg & bacon toast, cheese toastie, kids hot cake, banana bread, cheese burger and kids fish & chips.',
  },
  {
    q: 'Is there a surcharge on weekends or public holidays?',
    a: 'A 10% surcharge applies on Sundays. A 20% surcharge applies on public holidays. All credit card payments incur a 1.5% surcharge.',
  },
  {
    q: 'Can I host a private function at South Beach?',
    a: 'Absolutely. We have four beautiful spaces — Terrace, Garden, Atrium and The Room — accommodating groups from 15 to 60 guests. Visit our Functions page or email events@southbeachproject.com.au to enquire about availability.',
  },
  {
    q: 'Do you take large group bookings?',
    a: 'Yes. For groups of 10 or more, we recommend contacting us directly at events@southbeachproject.com.au to discuss availability and menu options. Group bookings may be subject to a set menu or minimum spend.',
  },
  {
    q: 'Can I bring my own cake?',
    a: 'Yes, you\'re welcome to bring a cake for celebrations. A small cake cutting and plating fee applies — please let us know in advance when making your booking so we can prepare.',
  },
  {
    q: 'Is the venue dog-friendly?',
    a: 'Dogs are welcome in our outdoor areas, including the Terrace and Garden. Please keep dogs on a lead and let your server know when booking so we can seat you appropriately.',
  },
  {
    q: 'Is South Beach accessible?',
    a: 'Yes. The main dining areas are step-free and accessible. If you have specific accessibility requirements, please contact us in advance at events@southbeachproject.com.au and we\'ll do our best to accommodate.',
  },
  {
    q: 'Do you offer gift vouchers?',
    a: 'Yes. Gift vouchers are available — please email events@southbeachproject.com.au to arrange.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major credit and debit cards including Visa, Mastercard and American Express. Please note a 1.5% surcharge applies to all card payments. We do not accept cash.',
  },
]

export default function FaqsPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="South Beach · Mount Martha"
          title="Frequently Asked Questions"
          image="/assets/South-Beach-Project-Exterior-05-2400x1300-1.jpg"
        />

        <section className="bg-white py-[48px] md:py-[64px]">
          <div className="max-w-3xl mx-auto px-6 md:px-[60px]">
            <p className="text-[10px] tracking-[0.2em] uppercase text-sky font-jost font-normal mb-[10px]">
              Need help?
            </p>
            <h2 className="font-cormorant font-light text-[34px] md:text-[42px] text-charcoal leading-[1.05] mb-2 tracking-[0.02em]">
              Your questions answered
            </h2>
            <p className="font-cormorant italic font-light text-[18px] text-warm mb-10">
              Can&apos;t find what you&apos;re looking for? Get in touch.
            </p>

            <FaqAccordion items={FAQS} />

            <div className="mt-12 pt-8 border-t border-[#EDECEA] flex flex-col sm:flex-row gap-3">
              <Link
                href="/bookings"
                className="flex-1 bg-sky text-white py-[14px] rounded-[3px] text-[11px] tracking-[0.12em] uppercase font-jost font-normal text-center hover:bg-sky-dark transition-colors"
              >
                Make a Booking
              </Link>
              <Link
                href="/contact"
                className="flex-1 border border-sky text-sky bg-transparent py-[13px] rounded-[3px] text-[11px] tracking-[0.12em] uppercase font-jost font-normal text-center hover:bg-sky hover:text-white transition-colors"
              >
                Contact Us
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
