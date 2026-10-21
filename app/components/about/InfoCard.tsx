import type { LucideIcon } from 'lucide-react';

export interface InfoCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  tone?: 'primary' | 'secondary' | 'tertiary';
}

const TONES = {
  primary: {
    tile: 'bg-primary-container text-primary',
  },
  secondary: {
    tile: 'bg-secondary-container text-secondary',
  },
  tertiary: {
    tile: 'bg-tertiary-container text-tertiary',
  },
};

export default function InfoCard({
  title,
  description,
  icon: Icon,
  tone = 'primary',
}: InfoCardProps) {
  return (
    <article className="card-clay group flex h-full flex-col p-7 md:p-8">
      <span className={`icon-tile size-14 ${TONES[tone].tile}`} aria-hidden="true">
        <Icon className="size-7" strokeWidth={2.1} />
      </span>

      <h3 className="mt-5 font-display text-2xl font-extrabold text-on-surface">
        {title}
      </h3>

      <p className="mt-3 text-base font-medium leading-relaxed text-on-surface-variant">
        {description}
      </p>
    </article>
  );
}
