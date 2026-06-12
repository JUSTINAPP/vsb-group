import Image from 'next/image'

export default function Logo({ className = 'h-[26px] w-auto' }: { className?: string }) {
  return (
    <Image
      src="/assets/South-Beach-Project_logo_no_subline_1465x495.png"
      alt="South Beach Mount Martha"
      width={1465}
      height={495}
      className={`brightness-0 invert ${className}`}
      priority
    />
  )
}
