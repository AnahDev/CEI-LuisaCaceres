import type { Channel } from "@/types/post";

interface ChannelTabsProps {
  channels: Channel[];
  active: Channel["id"];
  onChange: (channelId: Channel["id"]) => void;
}

export default function ChannelTabs({ channels, active, onChange }: ChannelTabsProps) {
  return (
    <div className="flex gap-2 p-1 bg-[#f4f4f0] rounded-full mb-6">
      {channels.map((channel) => {
        const isActive = channel.id === active;
        return (
          <button
            key={channel.id}
            type="button"
            onClick={() => onChange(channel.id)}
            className={[
              "flex-1 py-2 px-4 rounded-full text-[0.875rem] font-medium flex items-center justify-center gap-2 transition-colors",
              isActive ? "bg-white shadow-sm text-[#303330]" : "text-[#5d605c] hover:bg-[#e8e8e4]",
            ].join(" ")}
          >
            <span
              className="material-symbols-outlined text-[18px]"
              style={{ fontVariationSettings: channel.iconFilled ? "'FILL' 1" : "'FILL' 0" }}
            >
              {channel.icon}
            </span>
            {channel.shortLabel}
          </button>
        );
      })}
    </div>
  );
}
