import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BottomNav from '@/components/BottomNav'
import PageHero from '@/components/PageHero'
import { ColourDeviceStrip } from '@/components/ColourDeviceStrip'
import MenuItemRow from '@/components/MenuItemRow'
import { fullMenu, allergenNote, surchargeNote } from '@/data/menu'

export const metadata: Metadata = {
  title: { absolute: 'Eat & Drink | South Beach Restaurant' },
  description: 'Explore the Eat & Drink offering at South Beach Restaurant in Mount Martha. Fresh coastal dishes, bar favourites, and relaxed beachside dining on the Mornington Peninsula.',
  alternates: { canonical: 'https://sbmm.com.au/eat-drink' },
  openGraph: {
    title: 'Eat & Drink | South Beach Restaurant',
    description: 'Explore the Eat & Drink offering at South Beach Restaurant in Mount Martha. Fresh coastal dishes, bar favourites, and relaxed beachside dining on the Mornington Peninsula.',
    url: 'https://sbmm.com.au/eat-drink',
    siteName: 'South Beach Restaurant',
    images: [{ url: '/assets/South-Beach-Project-Exterior-05-2400x1300-1.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eat & Drink | South Beach Restaurant',
    description: 'Explore the Eat & Drink offering at South Beach Restaurant in Mount Martha. Fresh coastal dishes, bar favourites, and relaxed beachside dining on the Mornington Peninsula.',
  },
}

const MENU_PDF = 'https://sbmm.com.au/wp-content/uploads/2026/01/New_Menu.pdf'

const foodCategoryIds = ['snacks', 'coffee', 'drinks-cold', 'eggs', 'hot-cakes', 'kids', 'all-day', 'afternoon']
const drinkCategoryIds = ['drinks']

export default function EatDrinkPage() {
  const foodCategories = fullMenu.filter((c) => foodCategoryIds.includes(c.id))
  const drinkCategories = fullMenu.filter((c) => drinkCategoryIds.includes(c.id))

  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="South Beach · Mount Martha"
          title="Eat & Drink"
          subtitle="Fresh coastal flavours · Locally sourced · All day"
          image="/assets/sbmm-food-photo-01.jpg"
        />

        {/* Opening hours block */}
        <div className="bg-sky-light border-b border-sky/20">
          <div className="max-w-7xl mx-auto px-6 md:px-[60px] py-5 md:py-6">
            <p className="text-[9px] tracking-[0.2em] uppercase text-sky font-jost font-normal mb-3">
              Summer Hours
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-1">
              {[
                { label: 'Breakfast, Brunch & Lunch', hours: '7.30am – 2.30pm', note: 'Every day' },
                { label: 'Afternoon menu', hours: '4.30pm – close', note: 'Fridays & Saturdays (Dec – Feb)' },
              ].map(({ label, hours, note }) => (
                <div key={label} className="flex items-baseline justify-between gap-4 py-[6px] border-b border-sky/15 last:border-0 sm:last:border-b sm:last:border-sky/15">
                  <span className="font-cormorant font-light text-[16px] text-charcoal">{label}</span>
                  <span className="text-[12px] font-jost font-light text-warm text-right shrink-0">
                    {hours}
                    <span className="hidden sm:inline text-warm/60"> · {note}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PDF downloads */}
        <div className="bg-white border-b border-[#EDECEA]">
          <div className="max-w-7xl mx-auto px-6 md:px-[60px] py-4 flex flex-wrap gap-3">
            <a
              href={MENU_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[10px] tracking-[0.12em] uppercase font-jost font-normal text-sky border border-sky px-[16px] py-[9px] rounded-[3px] hover:bg-sky hover:text-white transition-colors"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              All Day Menu PDF
            </a>
            <a
              href={MENU_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[10px] tracking-[0.12em] uppercase font-jost font-normal text-sky border border-sky px-[16px] py-[9px] rounded-[3px] hover:bg-sky hover:text-white transition-colors"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              Drinks Menu PDF
            </a>
          </div>
        </div>

        <div className="bg-white py-[48px] md:py-[64px]">
          <div className="max-w-7xl mx-auto px-6 md:px-[60px]">

            {/* ── FOOD ── */}
            <div className="mb-2">
              <p className="text-[10px] tracking-[0.2em] uppercase text-sky font-jost font-normal mb-[10px]">
                Food
              </p>
              <h2 className="font-cormorant font-light text-[34px] md:text-[42px] text-charcoal leading-[1.05] mb-2 tracking-[0.02em]">
                From the kitchen
              </h2>
              <p className="font-cormorant italic font-light text-[18px] text-warm mb-8">
                Breakfast, Brunch &amp; Lunch 7.30am – 2.30pm · Afternoon menu Fri &amp; Sat from 4.30pm
              </p>

              {foodCategories.map((category) =>
                category.sections.map((section) => (
                  <div key={`${category.id}-${section.title}`} id={category.id} className="mb-10">
                    <div className="flex items-center gap-[10px] text-[13px] md:text-[14px] tracking-[0.2em] uppercase text-sky font-jost font-normal mt-8 first:mt-0 pt-2 pb-[10px] border-b border-[#E5E3DF] mb-1">
                      {section.title}
                      <span className="flex-1 h-px bg-[#F0EDEA]" />
                    </div>
                    {section.subtitle && (
                      <p className="text-[11px] text-warm font-jost font-light italic mt-2 mb-1">{section.subtitle}</p>
                    )}
                    {section.note && (
                      <p className="text-[11px] text-warm font-jost font-light italic mt-2 mb-1">{section.note}</p>
                    )}
                    {section.items.map((item) => (
                      <MenuItemRow key={item.name} item={item} />
                    ))}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        <ColourDeviceStrip />

        <div className="bg-white py-[48px] md:py-[64px]">
          <div className="max-w-7xl mx-auto px-6 md:px-[60px]">

            {/* ── DRINKS ── */}
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-sky font-jost font-normal mb-[10px]">
                From the Bar
              </p>
              <h2 className="font-cormorant font-light text-[34px] md:text-[42px] text-charcoal leading-[1.05] mb-2 tracking-[0.02em]">
                From the Bar
              </h2>
              <p className="font-cormorant italic font-light text-[18px] text-warm mb-8">
                Wine, beer &amp; cocktails
              </p>

              {drinkCategories.map((category) =>
                category.sections.map((section) => (
                  <div key={`${category.id}-${section.title}`} id={category.id} className="mb-10">
                    <div className="flex items-center gap-[10px] text-[13px] md:text-[14px] tracking-[0.2em] uppercase text-sky font-jost font-normal mt-8 first:mt-0 pt-2 pb-[10px] border-b border-[#E5E3DF] mb-1">
                      {section.title}
                      <span className="flex-1 h-px bg-[#F0EDEA]" />
                    </div>
                    {section.subtitle && (
                      <p className="text-[11px] text-warm font-jost font-light italic mt-2 mb-1">{section.subtitle}</p>
                    )}
                    {section.note && (
                      <p className="text-[11px] text-warm font-jost font-light italic mt-2 mb-1">{section.note}</p>
                    )}
                    {section.items.map((item) => (
                      <MenuItemRow key={item.name} item={item} />
                    ))}
                  </div>
                ))
              )}
            </div>

            {/* Allergen + surcharge */}
            <div className="mt-8 space-y-3">
              <div className="px-[16px] py-[14px] bg-sky-light rounded-[4px] border-l-2 border-sky text-[11px] text-sky-dark font-jost font-light leading-[1.8]">
                {allergenNote}
              </div>
              <div className="px-[16px] py-[14px] bg-sand rounded-[4px] border-l-2 border-warm/30 text-[11px] text-warm font-jost font-light leading-[1.8]">
                {surchargeNote}
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
      <BottomNav />
    </>
  )
}
