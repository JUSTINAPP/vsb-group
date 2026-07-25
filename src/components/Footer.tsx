import Link from 'next/link'
import Logo from './Logo'

const navigateLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/whats-on', label: "What's On" },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
]

const venueLinks = [
  { href: 'https://volpino.com.au', label: 'Volpino Pizzeria' },
  { href: 'https://sbmm.com.au', label: 'South Beach Restaurant' },
]

const linkClass = 'text-[13px] text-ink/55 font-sans font-normal py-[3px] hover:text-teal transition-colors'
const labelClass = 'text-[10px] tracking-[0.2em] uppercase text-ink/40 font-sans font-medium mb-4'

export default function Footer() {
  return (
    <footer className="bg-void border-t border-ink/8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-8 md:pt-16 md:pb-10">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 md:gap-12">
          {/* Logo + tagline */}
          <div>
            <Logo variant="white" className="h-[42px] mb-4" />
            <p className="font-sans font-light text-[12px] text-ink/45 max-w-[240px]">
              A collection of hospitality venues across Victoria.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <p className={labelClass}>Navigate</p>
            <div className="flex flex-col gap-1">
              {navigateLinks.map((l) => (
                <Link key={l.href} href={l.href} className={linkClass}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Venues */}
          <div>
            <p className={labelClass}>Venues</p>
            <div className="flex flex-col gap-1">
              {venueLinks.map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className={labelClass}>Contact</p>
            <div className="flex flex-col gap-1">
              <a href="mailto:samuel@vsbgroup.com.au" className={linkClass}>
                samuel@vsbgroup.com.au
              </a>
              <a href="#" className={linkClass}>
                Instagram
              </a>
              <a href="#" className={linkClass}>
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 md:mt-14 pt-6 border-t border-ink/8 flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-[11px] text-ink/25 font-sans font-light">
            © {new Date().getFullYear()} VSB Group. All rights reserved.
          </p>
          <Link href="/privacy-policy" className="text-[11px] text-ink/25 font-sans font-light hover:text-teal transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
