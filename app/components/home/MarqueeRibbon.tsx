import { Star } from 'lucide-react';

const ITEMS = [
  'Juego',
  'Arte',
  'Música',
  'Naturaleza',
  'Amistad',
  'Curiosidad',
  'Respeto',
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
              {ITEMS.map((item) => (
                <span
                  key={`${copy}-${item}`}
                  className="flex items-center gap-3 px-6 text-sm font-extrabold uppercase tracking-[0.2em]"
                >
                  <Star className="size-4 fill-current" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
