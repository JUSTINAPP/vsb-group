import type { Metadata } from 'next'
import { Cormorant, Jost } from 'next/font/google'
import Script from 'next/script'
import ReCaptchaProvider from '@/components/ReCaptchaProvider'
import './globals.css'

const cormorant = Cormorant({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const jost = Jost({
  variable: '--font-jost',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'South Beach Restaurant | Coastal Dining in Mount Martha',
    template: '%s | South Beach Restaurant',
  },
  description:
    "South Beach is a restaurant, bar, and events venue in Mount Martha on Victoria's Mornington Peninsula. Fresh coastal flavours, innovative drinks, and relaxed stylish spaces.",
  metadataBase: new URL('https://sbmm.com.au'),
  icons: {
    icon: [{ url: '/assets/south_beach_512x512.png', type: 'image/png' }],
    apple: [{ url: '/assets/south_beach_512x512.png' }],
    shortcut: '/assets/south_beach_512x512.png',
  },
  openGraph: {
    siteName: 'South Beach Restaurant',
    images: [
      { url: '/assets/South-Beach-Project-Exterior-05-2400x1300-1.jpg', width: 1200, height: 630 },
    ],
    locale: 'en_AU',
    type: 'website',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'South Beach Restaurant',
  alternateName: 'South Beach Mount Martha',
  description: "South Beach Restaurant is a relaxed coastal bistro, bar and events venue in Mount Martha on Victoria's Mornington Peninsula. Fresh coastal flavours, beachside views and a relaxed atmosphere.",
  address: {
    '@type': 'PostalAddress',
    streetAddress: '464 Esplanade',
    addressLocality: 'Mount Martha',
    addressRegion: 'VIC',
    postalCode: '3934',
    addressCountry: 'AU',
  },
  email: 'events@southbeachproject.com.au',
  url: 'https://sbmm.com.au',
  sameAs: [
    'https://www.instagram.com/southbeachmtmartha/',
    'https://www.facebook.com/southbeachmtmartha',
    'https://maps.google.com/maps?q=464+Esplanade+Mount+Martha+VIC+3934+Australia',
  ],
  servesCuisine: ['Coastal', 'Australian', 'Breakfast', 'Brunch', 'Lunch'],
  priceRange: '$20-$40',
  hasMenu: 'https://sbmm.com.au/eat-drink',
  acceptsReservations: 'https://www.sevenrooms.com/explore/southbeachproject/reservations/create/search/?date=2026-01-16&venues=southbeachproject%2Cvolpinopizzeriaandwinebar',
  openingHours: 'Mo-Su 07:30-14:30',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '07:30',
      closes: '14:30',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <head>
        <link rel="icon" href="/assets/south_beach_512x512.png" type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
          }}
        />
      </head>
      <body>
        <ReCaptchaProvider>
          {children}
        </ReCaptchaProvider>
        <Script id="sevenrooms-venue-id" strategy="lazyOnload">
          {`SEVENROOMS_VENUE_ID = "southbeachproject"`}
        </Script>
        <Script src="https://www.sevenrooms.com/widget/embed.js" strategy="lazyOnload" />
        <Script src="https://use.fortawesome.com/cb6d04c8.js" strategy="lazyOnload" />
      </body>
    </html>
  )
}
