import type { MediaItem } from "@/types/post";

interface MediaThumbnailProps {
  item: MediaItem;
  onRemove: (id: string) => void;
}

export default function MediaThumbnail({ item, onRemove }: MediaThumbnailProps) {
  return (
    <div className="relative w-24 h-24 rounded-[1rem] overflow-hidden flex-shrink-0 snap-start border border-[#e1e3df]">
      <img className="w-full h-full object-cover" src={item.url} alt={item.alt} />
      <button
        type="button"
        onClick={() => onRemove(item.id)}
        aria-label="Quitar imagen"
        className="absolute top-1 right-1 w-6 h-6 bg-[rgba(255,255,255,0.8)] backdrop-blur-md rounded-full flex items-center justify-center text-[#303330] hover:text-[#ac3434] transition-colors"
      >
        <span className="material-symbols-outlined text-[14px]">close</span>
      </button>
    </div>
  );
}
