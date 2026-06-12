import type { MenuItem } from '@/data/menu'
import DietaryBadge from './DietaryBadge'

export default function MenuItemRow({ item }: { item: MenuItem }) {
  return (
    <div className="py-4 border-b border-[#F0EDEA] last:border-none flex justify-between items-start gap-[14px]">
      <div className="min-w-0">
        <p className="font-cormorant text-[18px] font-normal text-charcoal leading-[1.2] mb-[3px]">
          {item.name}
          {item.dietary?.map((tag) => <DietaryBadge key={tag} tag={tag} />)}
        </p>
        {item.description && (
          <p className="text-[12px] text-warm font-jost font-light leading-[1.6]">
            {item.description}
          </p>
        )}
        {item.note && (
          <p className="text-[11px] text-sky-dark font-jost font-light italic mt-1">
            {item.note}
          </p>
        )}
      </div>
      <p className="font-cormorant text-[20px] font-normal text-charcoal shrink-0 pt-[2px]">
        {typeof item.price === 'number' ? `$${item.price}` : item.price}
      </p>
    </div>
  )
}
