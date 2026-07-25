interface InfoCardProps {
  label: string
  value: React.ReactNode
}

export default function InfoCard({ label, value }: InfoCardProps) {
  return (
    <div className="bg-sky-light rounded-[4px] border-l-2 border-sky px-[18px] py-4">
      <p className="text-[9px] tracking-[0.18em] uppercase text-sky-dark font-sans font-normal mb-1">
        {label}
      </p>
      <div className="text-[13px] text-charcoal font-sans font-light leading-[1.6]">
        {value}
      </div>
    </div>
  )
}
