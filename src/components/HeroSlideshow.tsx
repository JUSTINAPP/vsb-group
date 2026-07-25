'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const slides = [
  '/assets/South-Beach-Project-Exterior-05-2400x1300-1.jpg',
  '/assets/volpino-hero-2.jpg',
  '/assets/South-Beach-Sunset_1500x1000.jpg',
  '/assets/South-Beach-Dusk_1500x1000.jpg',
]

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)
  // Per-slide animation keys — only the newly-active slide's key is
  // incremented on each transition, triggering a remount (and animation
  // restart) for that slide only. The outgoing slide's key is unchanged
  // so its inner div is never remounted, keeping animation-fill-mode:
  // forwards in effect and holding scale(1.08) through the full crossfade.
  const [animKeys, setAnimKeys] = useState<number[]>(() => slides.map((_, i) => i))

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((cur) => {
        const next = (cur + 1) % slides.length
        setPrev(cur)
        setAnimKeys((keys) => {
          const updated = [...keys]
          updated[next] = updated[next] + slides.length
          return updated
        })
        return next
      })
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="absolute inset-0">
      {slides.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            key={animKeys[i]}
            className={`absolute inset-0 ${i === current || i === prev ? 'animate-kenburns' : ''}`}
          >
            <Image
              src={src}
              alt=""
              fill
              priority={i === 0}
              className="object-cover object-center"
              sizes="100vw"
              aria-hidden="true"
            />
          </div>
        </div>
      ))}
    </div>
  )
}
