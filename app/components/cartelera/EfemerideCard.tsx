import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

interface EfemerideCardProps {
  image: string;
  day: string;
  month: string;
  title: string;
  description: string;
}

export default function EfemerideCard({
  image,
  day,
  month,
  title,
  description,
}: EfemerideCardProps) {
  return (
    <article className="card-clay group overflow-hidden">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 350px"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#03212c]/45 via-transparent to-transparent" />

        <div className="absolute left-3 top-3 flex size-14 flex-col items-center justify-center rounded-2xl border border-white/40 bg-sun-container text-on-sun-container shadow-sm">
          <span className="font-display text-xl font-extrabold leading-none">{day}</span>
          <span className="text-[0.6rem] font-extrabold uppercase tracking-[0.12em]">
            {month}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2 p-5">
        <div className="flex items-start justify-between gap-3">
          <h4 className="font-display text-lg font-extrabold leading-snug text-on-surface">
            {title}
          </h4>
          <ArrowUpRight
            className="mt-1 size-5 shrink-0 text-primary opacity-0 transition-opacity group-hover:opacity-100"
            aria-hidden="true"
          />
        </div>
        <p className="text-sm font-medium leading-relaxed text-on-surface-variant">
          {description}
        </p>
      </div>
    </article>
  );
}
