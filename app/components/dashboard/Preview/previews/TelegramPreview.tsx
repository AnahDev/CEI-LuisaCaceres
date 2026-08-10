import type { ChannelPreviewProps } from "./types";

export default function TelegramPreview({ schoolName, content, media, timestamp }: ChannelPreviewProps) {
  return (
    <div className="bg-[#e4ebf0] rounded-[1rem] p-4 h-[400px] overflow-y-auto relative">
      <div className="flex justify-center mb-4">
        <span className="bg-[rgba(120,144,156,0.2)] text-[#546e7a] text-xs px-2 py-1 rounded-full font-medium">
          Hoy
        </span>
      </div>

      <div className="bg-white rounded-[1.25rem] rounded-tl-sm p-3 max-w-[90%] shadow-sm relative">
        <div className="font-medium text-[#0088cc] text-sm mb-1">{schoolName}</div>

        {media[0] && (
          <div className="rounded-[0.75rem] overflow-hidden mb-2 aspect-video">
            <img className="w-full h-full object-cover" src={media[0].url} alt={media[0].alt} />
          </div>
        )}

        <p className="text-[15px] text-black leading-snug whitespace-pre-line">
          {content || "¿Qué quieres compartir con la comunidad escolar hoy?"}
        </p>
        <div className="text-right text-[#a0acb6] text-[11px] mt-1">{timestamp}</div>
      </div>
    </div>
  );
}
