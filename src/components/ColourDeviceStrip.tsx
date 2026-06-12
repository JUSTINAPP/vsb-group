const COLOURS = [
  '#2A9AB8', '#1A5C7A', '#F0ECE4', '#D4A017', '#1A5C7A',
  '#D4A017', '#F0ECE4', '#B83228', '#E07050', '#2A9AB8',
  '#7EC4C4', '#F0ECE4', '#8A9A88', '#5A6A68', '#F0ECE4',
  '#D4D830', '#2AB8E0',
]

export function ColourDeviceStrip({ height = 8 }: { height?: number }) {
  return (
    <div className="flex w-full" style={{ height }}>
      {COLOURS.map((c, i) => (
        <div key={i} className="flex-1" style={{ background: c }} />
      ))}
    </div>
  )
}
