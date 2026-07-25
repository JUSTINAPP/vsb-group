import type { Dietary } from '@/data/menu'

export default function DietaryBadge({ tag }: { tag: Dietary }) {
  return (
    <span className="text-[9px] tracking-[0.06em] uppercase bg-sky-light text-sky-dark px-[6px] py-[2px] rounded-[2px] ml-[6px] font-sans font-normal align-middle inline-block">
      {tag}
    </span>
  )
}
