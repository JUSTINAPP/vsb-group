'use client'

import { useState } from 'react'

export type FaqItem = { q: string; a: string }

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="divide-y divide-[#EDECEA]">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between py-5 text-left gap-4"
            aria-expanded={open === i}
          >
            <span className="font-cormorant font-light text-[19px] md:text-[21px] text-charcoal leading-[1.2]">
              {item.q}
            </span>
            <span
              className={`shrink-0 w-[22px] h-[22px] rounded-full border border-sky flex items-center justify-center text-sky transition-transform duration-200 ${open === i ? 'rotate-45' : ''}`}
              aria-hidden="true"
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <line x1="5" y1="0" x2="5" y2="10" stroke="currentColor" strokeWidth="1.4" />
                <line x1="0" y1="5" x2="10" y2="5" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            </span>
          </button>
          {open === i && (
            <div className="pb-5 pr-8">
              <p className="text-[13px] text-warm font-jost font-light leading-[1.8]">{item.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
