import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

export interface ContactDetail {
  icon: LucideIcon;
  label: string;
  value: ReactNode;
}

export interface ContactCardProps {
  title: string;
  mainIcon: LucideIcon;
  details: ContactDetail[];
  tone?: 'primary' | 'secondary' | 'tertiary';
}

const TONES = {
  primary: {
    tile: 'bg-primary-container text-primary',
    line: 'bg-primary',
  },
  secondary: {
    tile: 'bg-secondary-container text-secondary',
    line: 'bg-secondary',
  },
  tertiary: {
    tile: 'bg-tertiary-container text-tertiary',
    line: 'bg-tertiary',
  },
};

export default function ContactCard({
  title,
  mainIcon: MainIcon,
  details,
  tone = 'primary',
}: ContactCardProps) {
  const palette = TONES[tone];

  return (
    <article className="card-clay relative overflow-hidden p-7 md:p-8">
      <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-1.5 ${palette.line}`} />

      <div className="flex items-center gap-4 border-b border-outline-variant/40 pb-5">
        <span className={`grid size-14 place-items-center rounded-2xl ${palette.tile}`}>
          <MainIcon className="size-7" aria-hidden="true" />
        </span>
        <h2 className="font-display text-2xl font-extrabold leading-tight text-on-surface">
          {title}
        </h2>
      </div>

      <div className="mt-6 flex flex-col gap-5">
        {details.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.label} className="flex items-start gap-3.5">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-surface-container-low text-primary">
                <Icon className="size-[18px]" aria-hidden="true" />
              </span>

              <div className="flex flex-col">
                <span className="text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-on-surface-variant">
                  {item.label}
                </span>
                <div className="mt-1 text-sm font-semibold leading-relaxed text-on-surface md:text-base">
                  {item.value}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
}
