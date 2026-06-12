import Image from 'next/image'

export default function SpoonsBand() {
  return (
    <div className="h-20 bg-sky overflow-hidden">
      <Image
        src="/assets/Volpino_spoons_2228x1086.png"
        alt=""
        width={2228}
        height={1086}
        className="w-full h-full object-cover object-center"
        aria-hidden="true"
      />
    </div>
  )
}
