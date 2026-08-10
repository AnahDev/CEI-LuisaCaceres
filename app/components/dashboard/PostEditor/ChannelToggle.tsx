import type { Channel } from "@/types/post";

interface ChannelToggleProps {
  channel: Channel;
  checked: boolean;
  onChange: (channelId: Channel["id"], checked: boolean) => void;
}

export default function ChannelToggle({ channel, checked, onChange }: ChannelToggleProps) {
  return (
    <label className="cursor-pointer relative flex items-center">
      <input
        checked={checked}
        onChange={(e) => onChange(channel.id, e.target.checked)}
        className="peer sr-only"
        type="checkbox"
      />
      <div
        className="flex items-center gap-3 px-5 py-3 rounded-full border-2 transition-all duration-300"
        style={{
          backgroundColor: checked ? `${channel.color}1a` : "#eeeeea",
          borderColor: checked ? channel.color : "transparent",
          color: checked ? channel.color : "#5d605c",
        }}
      >
        <span
          className="material-symbols-outlined text-xl"
          style={{ fontVariationSettings: channel.iconFilled ? "'FILL' 1" : "'FILL' 0" }}
        >
          {channel.icon}
        </span>
        <span className="font-['Plus_Jakarta_Sans'] font-medium text-[0.875rem]">{channel.label}</span>
      </div>
    </label>
  );
}
