import { useRef, type DragEvent } from "react";
import type { MediaItem } from "@/types/post";
import MediaThumbnail from "./MediaThumbnail";

interface MediaUploaderProps {
  media: MediaItem[];
  onFilesSelected: (files: FileList) => void;
  onRemove: (id: string) => void;
}

export default function MediaUploader({ media, onFilesSelected, onRemove }: MediaUploaderProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files?.length) onFilesSelected(e.dataTransfer.files);
  };

  return (
    <section className="bg-white rounded-[1rem] p-8 shadow-[0_20px_40px_-10px_rgba(48,51,48,0.06)]">
      <h2 className="font-['Plus_Jakarta_Sans'] text-[1.25rem] font-semibold text-[#303330] mb-6 flex items-center gap-2">
        <span className="material-symbols-outlined text-[#3c6942]" style={{ fontVariationSettings: "'FILL' 1" }}>
          perm_media
        </span>
        Multimedia
      </h2>

      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
        className="border-2 border-dashed border-[rgba(177,178,175,0.5)] rounded-[1rem] p-10 flex flex-col items-center justify-center text-center hover:bg-[rgba(244,244,240,0.5)] hover:border-[rgba(0,103,137,0.5)] transition-colors cursor-pointer group"
      >
        <input
          ref={inputRef}
          type="file"
          multiple
          accept="image/jpeg,image/png,video/mp4"
          className="hidden"
          onChange={(e) => e.target.files && onFilesSelected(e.target.files)}
        />
        <div className="w-16 h-16 bg-[#cbfecc] text-[#38643e] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <span className="material-symbols-outlined text-3xl">cloud_upload</span>
        </div>
        <h3 className="font-['Plus_Jakarta_Sans'] text-[1.0625rem] font-medium text-[#303330] mb-1">
          Arrastra y suelta tus archivos aquí
        </h3>
        <p className="font-['Plus_Jakarta_Sans'] text-[0.875rem] text-[#5d605c] mb-6">
          Soporta JPG, PNG, MP4 (Max. 50MB)
        </p>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            inputRef.current?.click();
          }}
          className="px-6 py-2 rounded-full bg-[#e8e8e4] text-[#303330] font-medium text-[0.875rem] hover:bg-[#e1e3df] transition-colors"
        >
          Explorar Archivos
        </button>
      </div>

      <div className="mt-6 flex gap-4 overflow-x-auto pb-2 snap-x">
        {media.map((item) => (
          <MediaThumbnail key={item.id} item={item} onRemove={onRemove} />
        ))}
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          aria-label="Añadir más multimedia"
          className="relative w-24 h-24 rounded-[1rem] overflow-hidden flex-shrink-0 snap-start border border-[#e1e3df] bg-[#eeeeea] flex items-center justify-center"
        >
          <span className="material-symbols-outlined text-[#5d605c] text-3xl">add_photo_alternate</span>
        </button>
      </div>
    </section>
  );
}
