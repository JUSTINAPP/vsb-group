import Link from 'next/link'
import Logo from './Logo'
import { ColourDeviceStrip } from './ColourDeviceStrip'

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/careers', label: 'Careers' },
  { href: '/bookings', label: 'Book Now' },
  { href: '/whats-on', label: "What's On" },
  { href: '/contact', label: 'Contact' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
]

const venueLinks = [
  { href: 'https://volpino.com.au', label: 'Volpino Pizzeria & Wine Bar' },
  { href: 'https://sbmm.com.au', label: 'South Beach Restaurant' },
]

export default function Footer() {
  return (
    <footer>
      <ColourDeviceStrip height={5} />

      <div className="bg-[#5e5f58] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-[60px] pt-10 pb-7 md:pt-[52px] md:pb-9">
          {/* Logo + tagline */}
          <Logo variant="white" className="h-12 mb-3" />
          <p className="font-cormorant italic font-light text-[15px] text-white mb-[26px]">
            Hospitality with heart.
          </p>

          <div className="md:grid md:grid-cols-2 md:gap-12 mb-6">
            {/* Site links */}
            <div>
              <p className="text-[9px] tracking-[0.2em] uppercase text-white/40 font-jost font-light mb-3">
                Group
              </p>
              <div className="grid grid-cols-2 gap-2">
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
            </div>

            {/* Venue links */}
            <div className="mt-6 md:mt-0">
              <p className="text-[9px] tracking-[0.2em] uppercase text-white/40 font-jost font-light mb-3">
                Our Venues
              </p>
              <div className="flex flex-col gap-2">
                {venueLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-white font-jost font-light py-[3px] hover:text-white/70 transition-colors"
                  >
                    {l.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-[18px] border-t border-white/20">
            <p className="text-[11px] text-white font-jost font-light leading-[1.7]">
              <a href="mailto:samuel@vsbgroup.com.au" className="hover:text-white/70 transition-colors">
                samuel@vsbgroup.com.au
              </a>
              <br />
              © {new Date().getFullYear()} VSB Group. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
