const ITEMS = [
  { label: 'Juego', emoji: '🧩' },
  { label: 'Arte', emoji: '🎨' },
  { label: 'Música', emoji: '🎵' },
  { label: 'Naturaleza', emoji: '🌳' },
  { label: 'Amistad', emoji: '🤝' },
  { label: 'Curiosidad', emoji: '🔍' },
  { label: 'Respeto', emoji: '💛' },
];

export default function MarqueeRibbon() {
  return (
    <div className="overflow-hidden py-8">
      <div className="marquee -rotate-1 border-y-2 border-on-sun/15 bg-sun py-3 text-on-sun shadow-[0_10px_30px_-18px_rgba(62,42,0,0.6)]">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="flex shrink-0 items-center"
              aria-hidden={copy === 1 ? 'true' : undefined}
            >
              {ITEMS.map(({ label, emoji }) => (
                <span
                  key={`${copy}-${label}`}
                  className="flex items-center gap-3 px-6 text-sm font-extrabold uppercase tracking-[0.2em]"
                >
                  <span
                    className="text-2xl leading-none tracking-normal"
                    aria-hidden="true"
                  >
                    {emoji}
                  </span>
                  {label}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}