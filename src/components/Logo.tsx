export default function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-col leading-none ${className}`}>
      <span className="font-cormorant italic font-light text-[22px] tracking-[0.06em]">
        VSB
      </span>
      <span className="font-jost font-light text-[7px] tracking-[0.45em] uppercase mt-[3px]">
        GROUP
      </span>
    </div>
  )
}
