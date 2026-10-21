import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

type Tone = 'primary' | 'secondary' | 'tertiary' | 'sun';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  icon?: LucideIcon;
  align?: 'left' | 'center';
  tone?: Tone;
  className?: string;
}

const BADGE_TONES: Record<Tone, string> = {
  primary: 'bg-primary-container text-on-primary-container',
  secondary: 'bg-secondary-container text-on-secondary-container',
  tertiary: 'bg-tertiary-container text-on-tertiary-container',
  sun: 'bg-sun-container text-on-sun-container',
};

const ICON_TONES: Record<Tone, string> = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  tertiary: 'text-tertiary',
  sun: 'text-sun-dim',
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  icon: Icon,
  align = 'center',
  tone = 'primary',
  className = '',
}: SectionHeadingProps) {
  const centered = align === 'center';

  return (
    <div
      className={`flex flex-col gap-4 ${centered ? 'items-center text-center' : 'items-start text-left'} ${className}`}
    >
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[0.72rem] font-extrabold uppercase tracking-[0.16em] ${BADGE_TONES[tone]}`}
        >
          {Icon && <Icon className={`size-4 ${ICON_TONES[tone]}`} aria-hidden="true" />}
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-4xl font-extrabold leading-[1.06] tracking-tight text-balance text-on-surface md:text-5xl">
        {title}
      </h2>
      {description && (
        <p
          className={`max-w-2xl text-lg font-medium leading-relaxed text-on-surface-variant ${centered ? 'mx-auto' : ''}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
