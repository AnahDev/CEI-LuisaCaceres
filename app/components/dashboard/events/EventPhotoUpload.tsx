import { useRef, type DragEvent } from "react";

interface EventPhotoUploadProps {
  image: { url: string; alt: string } | null;
  uploading?: boolean;
  onSelect: (file: File) => void;
  onRemove: () => void;
}

export default function EventPhotoUpload({ image, uploading = false, onSelect, onRemove }: EventPhotoUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && !uploading) onSelect(file);
  };

  return (
    <div>
      <label className="block text-sm font-bold text-[#303330] mb-2">
        Fotografía <span className="text-[#ac3434]">*</span>
      </label>

      {uploading ? (
        <div className="w-full h-48 rounded-[1rem] bg-[#f4f4f0] flex flex-col items-center justify-center gap-2 text-[#5d605c]">
          <span className="material-symbols-outlined text-3xl text-[#006789] animate-spin">
            progress_activity
          </span>
          <p className="text-sm font-semibold">Subiendo fotografía…</p>
        </div>
      ) : image ? (
        <div className="relative w-full h-48 rounded-[1rem] overflow-hidden bg-[#eeeeea]">
          <img src={image.url} alt={image.alt} className="w-full h-full object-cover" />
          <div className="absolute top-2 right-2 flex gap-2">
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="w-9 h-9 rounded-full bg-[rgba(255,255,255,0.9)] backdrop-blur-md flex items-center justify-center text-[#303330] hover:text-[#006789] transition-colors"
              aria-label="Cambiar fotografía"
            >
              <span className="material-symbols-outlined text-lg">photo_camera</span>
            </button>
            <button
              type="button"
              onClick={onRemove}
              className="w-9 h-9 rounded-full bg-[rgba(255,255,255,0.9)] backdrop-blur-md flex items-center justify-center text-[#303330] hover:text-[#ac3434] transition-colors"
              aria-label="Quitar fotografía"
            >
              <span className="material-symbols-outlined text-lg">delete</span>
            </button>
          </div>
        </div>
      ) : (
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
          className="border-2 border-dashed border-[rgba(0,103,137,0.3)] rounded-[1rem] p-8 flex flex-col items-center justify-center text-center hover:bg-[rgba(244,244,240,0.5)] transition-colors cursor-pointer"
        >
          <div className="w-14 h-14 bg-[#cbfecc] text-[#38643e] rounded-full flex items-center justify-center mb-3">
            <span className="material-symbols-outlined text-2xl">cloud_upload</span>
          </div>
          <p className="text-sm font-medium text-[#303330]">Arrastra una foto o haz clic para elegirla</p>
          <p className="text-xs text-[#5d605c] mt-1">JPG, PNG o WebP, máx. 50 MB</p>
        </div>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        className="hidden"
        disabled={uploading}
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) onSelect(file);
          e.target.value = "";
        }}
      />
    </div>
  );
}
