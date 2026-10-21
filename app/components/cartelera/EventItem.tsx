import { ArrowUpRight } from 'lucide-react';

interface EventItemProps {
  day: string;
  month: string;
  title: string;
  category: string;
  categoryColor: string;
}

export default function EventItem({
  day,
  month,
  title,
  category,
  categoryColor,
}: EventItemProps) {
  return (
    <article className="card-clay group flex items-center gap-4 p-4">
      <div className="flex size-16 shrink-0 flex-col items-center justify-center rounded-2xl bg-primary-container text-primary">
        <span className="font-display text-2xl font-extrabold leading-none">{day}</span>
        <span className="text-[0.65rem] font-extrabold uppercase tracking-[0.12em]">
          {month}
        </span>
      </div>

      <div className="flex min-w-0 flex-col gap-1.5">
        <h4 className="truncate font-display text-base font-extrabold text-on-surface">
          {title}
        </h4>
        <span
          className={`w-max rounded-full px-2.5 py-1 text-[0.68rem] font-extrabold uppercase tracking-[0.08em] ${categoryColor}`}
        >
          {category}
        </span>
      </div>

      <ArrowUpRight
        className="ml-auto size-5 shrink-0 text-primary opacity-0 transition-opacity group-hover:opacity-100"
        aria-hidden="true"
      />
    </article>
  );
}
