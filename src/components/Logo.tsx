import Image from 'next/image'

export default function Logo({
  variant = 'white',
  className = 'h-10',
}: {
  variant?: 'white' | 'dark'
  className?: string
}) {
  const src =
    variant === 'dark'
      ? '/dark_logo_transparent_background.png'
      : '/white_logo_transparent_background.png'

  return (
    <Image
      src={src}
      alt="VSB Group"
      width={3400}
      height={2747}
      priority
      className={`w-auto ${className}`}
    />
  )
}
