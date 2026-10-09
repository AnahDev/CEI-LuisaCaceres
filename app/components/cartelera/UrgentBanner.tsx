import type { UrgentNotice } from "@/types/event";

interface UrgentBannerProps {
  notice: UrgentNotice;
}

export default function UrgentBanner({ notice }: UrgentBannerProps) {
  if (!notice.active) return null;

  return (
    <div className="bg-gradient-to-r from-[#f7a48b] to-[#f4a58c] text-[#5c2615] px-6 py-3">
      <div className="max-w-7xl mx-auto flex items-center gap-3">
        <span className="material-symbols-outlined shrink-0">campaign</span>
        <p className="text-sm md:text-base font-bold">{notice.text}</p>
      </div>
    </div>
  );
}
