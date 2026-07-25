import Image from 'next/image'

interface PageHeroProps {
  eyebrow: string
  title: string
  subtitle?: string
  image?: string
  imagePosition?: 'center' | 'top'
}

export default function PageHero({ eyebrow, title, subtitle, image, imagePosition = 'center' }: PageHeroProps) {
  return (
    <div className="relative overflow-hidden bg-charcoal">
      {image && (
        <Image
          src={image}
          alt=""
          fill
          priority
          className={imagePosition === 'top' ? 'object-cover object-top' : 'object-cover object-center'}
          sizes="100vw"
          aria-hidden="true"
        />
      )}
      <div
        className={`absolute inset-0 ${
          image
            ? 'bg-gradient-to-b from-black/55 via-black/50 to-black/70'
            : 'bg-charcoal'
        }`}
      />
      <div className="relative z-10 pt-[52px] pb-[40px] md:pt-[72px] md:pb-[56px]">
        <div className="max-w-7xl mx-auto px-6 md:px-[60px]">
          <p className="text-[10px] tracking-[0.22em] uppercase text-white/55 font-sans font-light mb-[10px]">
            {eyebrow}
          </p>
          <h1 className="font-display uppercase font-semibold text-[52px] md:text-[72px] leading-[0.95] tracking-[0.02em] text-white mb-[10px]">
            {title}
          </h1>
          {subtitle && (
            <p className="font-sans font-light text-[16px] text-white/70">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
