import type { Metadata } from 'next'
import { Barlow_Condensed, DM_Sans } from 'next/font/google'
import ReCaptchaProvider from '@/components/ReCaptchaProvider'
import './globals.css'

const barlowCondensed = Barlow_Condensed({
  variable: '--font-barlow-condensed',
  subsets: ['latin'],
  weight: ['300', '600', '700'],
  display: 'swap',
})

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'VSB Group | Mornington Peninsula Hospitality',
    template: '%s | VSB Group',
  },
  description:
    'VSB Group is a hospitality company operating Volpino Pizzeria & Wine Bar and South Beach Restaurant on Victoria\'s Mornington Peninsula.',
  metadataBase: new URL('https://vsbgroup.com.au'),
  icons: {
    icon: [{ url: '/assets/south_beach_512x512.png', type: 'image/png' }],
    apple: [{ url: '/assets/south_beach_512x512.png' }],
    shortcut: '/assets/south_beach_512x512.png',
  },
  openGraph: {
    siteName: 'VSB Group',
    images: [
      { url: '/assets/South-Beach-Project-Exterior-05-2400x1300-1.jpg', width: 1200, height: 630 },
    ],
    locale: 'en_AU',
    type: 'website',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'VSB Group',
  description: 'VSB Group is a hospitality company operating Volpino Pizzeria & Wine Bar and South Beach Restaurant on Victoria\'s Mornington Peninsula.',
  url: 'https://vsbgroup.com.au',
  email: 'samuel@vsbgroup.com.au',
  areaServed: {
    '@type': 'Place',
    name: "Mornington Peninsula, Victoria, Australia",
  },
  subOrganization: [
    {
      '@type': 'Restaurant',
      name: 'Volpino Pizzeria & Wine Bar',
      url: 'https://volpino.com.au',
    },
    {
      '@type': 'Restaurant',
      name: 'South Beach Restaurant',
      url: 'https://sbmm.com.au',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${barlowCondensed.variable} ${dmSans.variable}`}>
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
      </body>
    </html>
  )
}
