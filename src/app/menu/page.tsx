import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BottomNav from '@/components/BottomNav'
import PageHero from '@/components/PageHero'
import TileStrip from '@/components/TileStrip'
import MenuItemRow from '@/components/MenuItemRow'
import { fullMenu, allergenNote } from '@/data/menu'

export const metadata: Metadata = {
  title: { absolute: 'Menu | South Beach Restaurant' },
  description:
    'View the full South Beach menu — fresh coastal flavours, all day dining, and drinks. Mount Martha, Mornington Peninsula.',
  alternates: { canonical: '/menu' },
  openGraph: {
    title: 'Menu | South Beach Restaurant',
    description: 'Fresh coastal flavours, all day dining and drinks at South Beach, Mount Martha.',
    images: [{ url: '/assets/South-Beach-Project-Exterior-05-2400x1300-1.jpg', width: 1200, height: 630 }],
  },
}

const foodCategoryIds = ['snacks', 'eggs', 'hot-cakes', 'kids', 'all-day', 'afternoon']
const drinkCategoryIds = ['coffee', 'drinks-cold', 'drinks']

export default function MenuPage() {
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
          image="/assets/South-Beach-Project-Exterior-05-2400x1300-1.jpg"
        />

        <div className="bg-white py-[48px] md:py-[64px]">
          <div className="max-w-7xl mx-auto px-6 md:px-[60px]">
          {/* FOOD */}
          <div className="mb-12">
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
                <div key={`${category.id}-${section.title}`} id={`${category.id}`} className="mb-10">
                  <div className="flex items-center gap-[10px] text-[13px] md:text-[14px] tracking-[0.2em] uppercase text-sky font-jost font-normal mt-8 first:mt-0 pt-2 pb-[10px] border-b border-[#E5E3DF] mb-1">
                    {section.title}
                    <span className="flex-1 h-px bg-[#F0EDEA]" />
                  </div>
                  {section.subtitle && (
                    <p className="text-[11px] text-warm font-jost font-light italic mt-2 mb-1">
                      {section.subtitle}
                    </p>
                  )}
                  {section.note && (
                    <p className="text-[11px] text-warm font-jost font-light italic mt-2 mb-1">
                      {section.note}
                    </p>
                  )}
                  {section.items.map((item) => (
                    <MenuItemRow key={item.name} item={item} />
                  ))}
                </div>
              ))
            )}
          </div>

          <TileStrip />

          {/* DRINKS */}
          <div className="mt-12">
            <p className="text-[10px] tracking-[0.2em] uppercase text-sky font-jost font-normal mb-[10px]">
              Drinks
            </p>
            <h2 className="font-cormorant font-light text-[34px] md:text-[42px] text-charcoal leading-[1.05] mb-2 tracking-[0.02em]">
              From the bar
            </h2>
            <p className="font-cormorant italic font-light text-[18px] text-warm mb-8">
              Coffee, juice, cocktails &amp; wine
            </p>

            {drinkCategories.map((category) =>
              category.sections.map((section) => (
                <div key={`${category.id}-${section.title}`} id={`${category.id}`} className="mb-10">
                  <div className="flex items-center gap-[10px] text-[13px] md:text-[14px] tracking-[0.2em] uppercase text-sky font-jost font-normal mt-8 first:mt-0 pt-2 pb-[10px] border-b border-[#E5E3DF] mb-1">
                    {section.title}
                    <span className="flex-1 h-px bg-[#F0EDEA]" />
                  </div>
                  {section.subtitle && (
                    <p className="text-[11px] text-warm font-jost font-light italic mt-2 mb-1">
                      {section.subtitle}
                    </p>
                  )}
                  {section.note && (
                    <p className="text-[11px] text-warm font-jost font-light italic mt-2 mb-1">
                      {section.note}
                    </p>
                  )}
                  {section.items.map((item) => (
                    <MenuItemRow key={item.name} item={item} />
                  ))}
                </div>
              ))
            )}
          </div>

          {/* Allergen */}
          <div className="mt-8 px-[16px] py-[14px] bg-sky-light rounded-[4px] border-l-2 border-sky text-[11px] text-sky-dark font-jost font-light leading-[1.7]">
            {allergenNote}
          </div>
          </div>
        </div>
      </main>
      <Footer />
      <BottomNav />
    </>
  )
}
