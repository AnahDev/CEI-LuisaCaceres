import { Megaphone } from 'lucide-react';
import type { UrgentNotice } from '@/types/event';

interface UrgentBannerProps {
  notice: UrgentNotice;
}

export default function UrgentBanner({ notice }: UrgentBannerProps) {
  if (!notice.active) return null;

  return (
    <div role="status" className="bg-tertiary-container text-on-tertiary-container">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-6 py-3.5">
        <span
          className="grid size-9 shrink-0 place-items-center rounded-full bg-on-tertiary-container/10"
          aria-hidden="true"
        >
          <Megaphone className="size-4" />
        </span>
        <p className="text-sm font-bold leading-snug md:text-base">{notice.text}</p>
        <span className="ml-auto hidden shrink-0 items-center gap-2 text-[0.65rem] font-extrabold uppercase tracking-[0.14em] sm:flex">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-tertiary opacity-70" />
            <span className="relative inline-flex size-2 rounded-full bg-tertiary" />
          </span>
          Aviso importante
        </span>
      </div>
    </div>
  );
}
