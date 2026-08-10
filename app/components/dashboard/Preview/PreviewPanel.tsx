import type { Channel, MediaItem } from "@/types/post";
import ChannelTabs from "./ChannelTabs";
import { CHANNEL_PREVIEWS } from "./previews";

interface PreviewPanelProps {
  channels: Channel[];
  activeChannel: Channel["id"];
  onActiveChannelChange: (channelId: Channel["id"]) => void;
  schoolName: string;
  content: string;
  media: MediaItem[];
  timestamp: string;
}

export default function PreviewPanel({
  channels,
  activeChannel,
  onActiveChannelChange,
  schoolName,
  content,
  media,
  timestamp,
}: PreviewPanelProps) {
  const ActivePreview = CHANNEL_PREVIEWS[activeChannel];

  return (
    <section className="bg-white rounded-[1rem] p-8 shadow-[0_20px_40px_-10px_rgba(48,51,48,0.06)] sticky top-28">
      <h2 className="font-['Plus_Jakarta_Sans'] text-[1.25rem] font-semibold text-[#303330] mb-6 flex items-center gap-2">
        <span className="material-symbols-outlined text-[#8e4d39]" style={{ fontVariationSettings: "'FILL' 1" }}>
          preview
        </span>
        Vista Previa por Canal
      </h2>

      <ChannelTabs channels={channels} active={activeChannel} onChange={onActiveChannelChange} />

      <ActivePreview schoolName={schoolName} content={content} media={media} timestamp={timestamp} />
    </section>
  );
}
