import type { ChannelPreviewProps } from "./types";

export default function FacebookPreview({ schoolName, content, media, timestamp }: ChannelPreviewProps) {
  return (
    <div className="bg-[#e4ebf0] rounded-[1rem] p-4 h-[400px] overflow-y-auto">
      <div className="bg-white rounded-[0.75rem] shadow-sm overflow-hidden">
        <div className="flex items-center gap-2 p-3">
          <div className="w-9 h-9 rounded-full bg-[#1877F2] text-white flex items-center justify-center font-bold text-sm">
            {schoolName.charAt(0)}
          </div>
          <div>
            <div className="font-medium text-[#050505] text-sm">{schoolName}</div>
            <div className="text-[#65676b] text-xs">{timestamp}</div>
          </div>
        </div>

        <p className="px-3 pb-3 text-[15px] text-[#050505] leading-snug whitespace-pre-line">
          {content || "¿Qué quieres compartir con la comunidad escolar hoy?"}
        </p>

        {media[0] && (
          <div className="aspect-video">
            <img className="w-full h-full object-cover" src={media[0].url} alt={media[0].alt} />
          </div>
        )}
      </div>
    </div>
  );
}
