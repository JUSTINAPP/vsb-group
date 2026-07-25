export function LogoDevice({
  size = 'sm',
  showBar = true,
  className = '',
}: {
  size?: 'sm' | 'lg'
  showBar?: boolean
  className?: string
}) {
  const outerW = size === 'lg' ? 48 : 28
  const outerH = size === 'lg' ? 72 : 44
  const inset = size === 'lg' ? 9 : 5
  const border = size === 'lg' ? '1px solid rgba(240,236,228,0.15)' : '1px solid rgba(240,236,228,0.2)'

  return (
    <div className={`inline-flex items-center gap-2 ${className}`} aria-hidden="true">
      <div className="relative shrink-0" style={{ width: outerW, height: outerH, border }}>
        <div className="absolute" style={{ top: inset, left: inset, right: inset, bottom: inset, border }} />
      </div>
      {showBar && <div className="shrink-0" style={{ width: 2, height: 32, background: '#3DBDB5' }} />}
    </div>
  )
}
