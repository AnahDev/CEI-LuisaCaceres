import { Sparkles } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

type Tone = 'primary' | 'secondary' | 'tertiary' | 'sun';

interface PageHeroProps {
  badge: string;
  title: ReactNode;
  description?: ReactNode;
  icon?: LucideIcon;
  tone?: Tone;
  children?: ReactNode;
}

const BADGES: Record<Tone, string> = {
  primary: 'bg-primary-container text-on-primary-container',
  secondary: 'bg-secondary-container text-on-secondary-container',
  tertiary: 'bg-tertiary-container text-on-tertiary-container',
  sun: 'bg-sun-container text-on-sun-container',
};

const BLOBS: Record<Tone, [string, string]> = {
  primary: ['bg-primary-container/60', 'bg-sun-container/70'],
  secondary: ['bg-secondary-container/60', 'bg-primary-container/50'],
  tertiary: ['bg-tertiary-container/60', 'bg-sun-container/60'],
  sun: ['bg-sun-container/70', 'bg-tertiary-container/50'],
};

export default function PageHero({
  badge,
  title,
  description,
  icon: Icon,
  tone = 'primary',
  children,
}: PageHeroProps) {
  const [firstBlob, secondBlob] = BLOBS[tone];

  return (
    <section className="relative overflow-hidden border-b border-outline-variant/30">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className={`blob-shape -left-24 -top-32 h-72 w-72 opacity-70 blur-2xl ${firstBlob}`}
        />
        <div
          className={`blob-shape -right-20 top-10 h-60 w-60 opacity-60 blur-2xl ${secondBlob}`}
        />
        <div className="absolute inset-0 bg-dots opacity-[0.35]" />
      </div>

      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-4 px-6 pb-14 pt-10 text-center md:pb-20 md:pt-14">
        <span
          className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[0.72rem] font-extrabold uppercase tracking-[0.16em] ${BADGES[tone]}`}
        >
          {Icon ? (
            <Icon className="size-4" aria-hidden="true" />
          ) : (
            <Sparkles className="size-4" aria-hidden="true" />
          )}
          {badge}
        </span>

        <h1 className="font-display text-4xl font-extrabold leading-[1.04] tracking-tight text-balance text-on-surface sm:text-5xl md:text-6xl">
          {title}
        </h1>

        {description && (
          <p className="max-w-2xl text-base font-medium leading-relaxed text-on-surface-variant md:text-lg">
            {description}
          </p>
        )}

        {children}
      </div>
    </section>
  );
}
