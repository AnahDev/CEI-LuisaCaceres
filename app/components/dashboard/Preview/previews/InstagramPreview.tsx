import type { ChannelPreviewProps } from "./types";

export default function InstagramPreview({ schoolName, content, media, timestamp }: ChannelPreviewProps) {
  return (
    <div className="bg-[#e4ebf0] rounded-[1rem] p-4 h-[400px] overflow-y-auto">
      <div className="bg-white rounded-[0.75rem] shadow-sm overflow-hidden">
        <div className="flex items-center gap-2 p-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#E1306C] to-[#f7a48b]" />
          <div className="font-medium text-[#262626] text-sm">{schoolName.toLowerCase().replace(/\s+/g, "_")}</div>
        </div>

        <div className="aspect-square bg-[#eeeeea]">
          {media[0] && <img className="w-full h-full object-cover" src={media[0].url} alt={media[0].alt} />}
        </div>

        <p className="px-3 py-2 text-[14px] text-[#262626] leading-snug whitespace-pre-line">
          <span className="font-medium">{schoolName.toLowerCase().replace(/\s+/g, "_")}</span>{" "}
          {content || "¿Qué quieres compartir con la comunidad escolar hoy?"}
        </p>
        <div className="px-3 pb-3 text-[#8e8e8e] text-[11px] uppercase">{timestamp}</div>
      </div>
    </div>
  );
}
