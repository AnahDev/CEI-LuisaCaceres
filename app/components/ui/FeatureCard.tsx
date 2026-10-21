import type { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  iconColor: string;
  iconBg: string;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon: Icon,
  iconColor,
  iconBg,
  title,
  description,
}: FeatureCardProps) {
  return (
    <article className="card-clay group flex h-full flex-col p-6 md:p-7">
      <div
        className={`icon-tile mb-6 size-14 shrink-0 ${iconBg} ${iconColor}`}
        aria-hidden="true"
      >
        <Icon className="size-7" strokeWidth={2.2} />
      </div>

      <h3 className="font-display text-xl font-extrabold leading-snug text-on-surface">
        {title}
      </h3>
      <p className="mt-2.5 text-sm font-medium leading-relaxed text-on-surface-variant">
        {description}
      </p>

      <span
        aria-hidden="true"
        className={`absolute right-5 top-5 size-2.5 rounded-full ${iconBg} opacity-80`}
      />
    </article>
  );
}
