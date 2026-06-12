import Link from 'next/link'
import Logo from './Logo'
import { ColourDeviceStrip } from './ColourDeviceStrip'
import { getSettings } from '@/lib/sanity'

const footerLinks = [
  { href: '/eat-drink', label: 'Menu' },
  { href: '/whats-on', label: "What's On" },
  { href: '/bookings', label: 'Bookings' },
  { href: '/functions', label: 'Functions' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
  { href: '/careers', label: 'Careers' },
  { href: '/faqs', label: 'FAQs' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
]

const FALLBACK_INSTAGRAM = 'https://www.instagram.com/southbeachmtmartha/'
const FALLBACK_FACEBOOK  = 'https://www.facebook.com/southbeachmtmartha'

export default async function Footer() {
  const settings = await getSettings().catch(() => null)
  const instagramUrl = settings?.instagramUrl ?? FALLBACK_INSTAGRAM
  const facebookUrl  = settings?.facebookUrl  ?? FALLBACK_FACEBOOK

  return (
    <footer>
      <ColourDeviceStrip height={5} />

      <div className="bg-[#5e5f58] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-[60px] pt-10 pb-7 md:pt-[52px] md:pb-9">
          {/* Logo + tagline */}
          <Logo className="h-[31px] md:h-[36px] w-auto mb-[6px]" />
          <p className="font-cormorant italic font-light text-[15px] text-white mb-[26px]">
            Simple. Coastal. Good.
          </p>

          {/* Links grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-6">
            {footerLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[11px] text-white font-jost font-light py-[3px] hover:text-white/70 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Social pills */}
          <div className="flex gap-[10px] mb-[26px]">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 border border-white text-white px-[14px] py-[7px] rounded-[3px] text-[10px] tracking-[0.1em] uppercase font-jost transition-all duration-200 hover:bg-white hover:text-charcoal active:bg-sky active:border-sky active:scale-[0.96]"
            >
              Instagram
            </a>
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 border border-white text-white px-[14px] py-[7px] rounded-[3px] text-[10px] tracking-[0.1em] uppercase font-jost transition-all duration-200 hover:bg-white hover:text-charcoal active:bg-sky active:border-sky active:scale-[0.96]"
            >
              Facebook
            </a>
          </div>

          {/* Address + copyright */}
          <div className="pt-[18px] border-t border-white/20">
            <p className="text-[11px] text-white font-jost font-light leading-[1.7]">
              464 Esplanade, Mount Martha VIC 3934 ·{' '}
              <a href="mailto:events@southbeachproject.com.au" className="hover:text-white/70 transition-colors">
                events@southbeachproject.com.au
              </a>
              <br />
              © {new Date().getFullYear()} South Beach Mount Martha. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
