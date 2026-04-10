const ITEMS = [
  'Handcrafted Excellence',
  'Paris Atelier',
  'Autumn Winter 2025',
  'Limited Edition',
  'Made to Measure',
  'Since 1987',
]

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS]

  return (
    <div className="overflow-hidden bg-[#c9a96e] py-4">
      <div
        className="flex whitespace-nowrap"
        style={{ animation: 'marquee 22s linear infinite' }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center">
            <span
              className="text-[#0a0a0a] font-medium mr-16"
              style={{ fontSize: '0.6rem', letterSpacing: '0.4em', textTransform: 'uppercase' }}
            >
              {item}
            </span>
            <span className="inline-block w-1 h-1 rounded-full bg-[#0a0a0a] opacity-40 mr-16" />
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
