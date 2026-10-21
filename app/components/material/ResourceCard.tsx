import { Download, FileText } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ResourceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  tone?: 'primary' | 'secondary' | 'tertiary';
}

const TONES = {
  primary: {
    tile: 'bg-primary-container text-primary',
    badge: 'bg-primary-container text-on-primary-container',
  },
  secondary: {
    tile: 'bg-secondary-container text-secondary',
    badge: 'bg-secondary-container text-on-secondary-container',
  },
  tertiary: {
    tile: 'bg-tertiary-container text-tertiary',
    badge: 'bg-tertiary-container text-on-tertiary-container',
  },
};

export default function ResourceCard({
  icon: Icon,
  title,
  description,
  href,
  tone = 'primary',
}: ResourceCardProps) {
  const palette = TONES[tone];

  return (
    <a
      href={href}
      download
      className="card-clay group flex h-full flex-col gap-4 p-6"
    >
      <div className="flex items-start justify-between gap-3">
        <span className={`icon-tile size-14 ${palette.tile}`} aria-hidden="true">
          <Icon className="size-7" strokeWidth={2.1} />
        </span>
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.65rem] font-extrabold uppercase tracking-[0.1em] ${palette.badge}`}
        >
          <FileText className="size-3.5" aria-hidden="true" />
          PDF
        </span>
      </div>

      <div className="flex flex-col gap-1.5">
        <h3 className="font-display text-lg font-extrabold leading-snug text-on-surface">
          {title}
        </h3>
        <p className="text-sm font-medium leading-relaxed text-on-surface-variant">
          {description}
        </p>
      </div>

      <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-extrabold text-primary">
        Descargar
        <Download
          className="size-4 transition-transform duration-300 group-hover:translate-y-0.5"
          aria-hidden="true"
        />
      </span>
    </a>
  );
}
