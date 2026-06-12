import Image from 'next/image'

export function BeachShackBand() {
  return (
    <div className="bg-[#fdfbf1] flex items-center justify-center px-6 md:px-[60px] py-4 md:py-5">
      <Image
        src="/assets/beach-shack-images.png"
        alt=""
        width={1200}
        height={300}
        className="w-full h-[39px] md:h-[59px] object-contain"
        aria-hidden="true"
      />
    </div>
  )
}
