'use client'

import Link from 'next/link'
import { useState } from 'react'
import Logo from './Logo'

const links = [
  { href: '/about', label: 'About' },
  { href: '/whats-on', label: "What's On" },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className="bg-void sticky top-0 z-50 border-b border-ink/8">
        <div className="max-w-7xl mx-auto px-[22px] min-[985px]:px-10 h-[66px] min-[985px]:h-[72px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" aria-label="VSB Group — home" onClick={() => setOpen(false)}>
            <Logo variant="white" className="h-[47px]" />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden min-[985px]:flex gap-6 items-center">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-ink/65 text-[11px] tracking-[0.15em] uppercase font-sans font-medium hover:text-teal transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Right side: Book button + hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/bookings"
              className="hidden min-[985px]:inline-block bg-ink text-void px-5 py-[10px] text-[11px] font-sans font-semibold tracking-[0.15em] uppercase transition-opacity hover:opacity-90"
            >
              Book Now
            </Link>
            {/* Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="flex flex-col justify-center gap-[5px] cursor-pointer min-[985px]:hidden w-6 h-6"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              <span className={`w-5 h-px bg-ink/70 block transition-transform origin-center ${open ? 'translate-y-[6px] rotate-45' : ''}`} />
              <span className={`w-5 h-px bg-ink/70 block transition-opacity ${open ? 'opacity-0' : ''}`} />
              <span className={`w-5 h-px bg-ink/70 block transition-transform origin-center ${open ? '-translate-y-[6px] -rotate-45' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        className={`fixed inset-0 top-[66px] bg-void z-40 flex flex-col pt-6 pb-8 px-8 overflow-y-auto min-[985px]:hidden transition-opacity duration-200 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="text-ink/65 text-[13px] tracking-[0.15em] uppercase font-sans font-medium py-4 border-b border-ink/8 hover:text-teal transition-colors"
          >
            {l.label}
          </Link>
        ))}

        <Link
          href="/bookings"
          onClick={() => setOpen(false)}
          className="mt-6 bg-ink text-void py-[14px] text-[11px] tracking-[0.15em] uppercase font-sans font-semibold text-center transition-opacity hover:opacity-90"
        >
          Book Now
        </Link>
      </div>
    </>
  )
}
