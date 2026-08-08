import type { Channel } from "@/types/post";
import ChannelToggle from "./ChannelToggle";

interface ChannelSelectorProps {
  channels: Channel[];
  selected: Channel["id"][];
  onToggle: (channelId: Channel["id"], checked: boolean) => void;
}

export default function ChannelSelector({ channels, selected, onToggle }: ChannelSelectorProps) {
  return (
    <section className="bg-white rounded-[1rem] p-8 shadow-[0_20px_40px_-10px_rgba(48,51,48,0.06)] relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[rgba(98,204,255,0.1)] rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110 duration-500 ease-out" />
      <h2 className="font-['Plus_Jakarta_Sans'] text-[1.25rem] font-semibold text-[#303330] mb-6 flex items-center gap-2">
        <span className="material-symbols-outlined text-[#006789]" style={{ fontVariationSettings: "'FILL' 1" }}>
          cell_tower
        </span>
        Destinos
      </h2>
      <div className="flex flex-wrap gap-4">
        {channels.map((channel) => (
          <ChannelToggle
            key={channel.id}
            channel={channel}
            checked={selected.includes(channel.id)}
            onChange={onToggle}
          />
        ))}
      </div>
    </section>
  );
}
