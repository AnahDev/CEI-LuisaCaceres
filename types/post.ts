export type ChannelId = "telegram" | "facebook" | "instagram";

export interface Channel {
  id: ChannelId;
  label: string;
  shortLabel: string;
  /** Material Symbols icon name */
  icon: string;
  iconFilled: boolean;
  /** Brand color used for the active/checked state */
  color: string;
}

export interface MediaItem {
  id: string;
  url: string;
  alt: string;
}

export interface NavItem {
  id: string;
  label: string;
  icon: string;
  iconFilled: boolean;
  href: string;
}

export interface PostDraft {
  selectedChannels: ChannelId[];
  content: string;
  media: MediaItem[];
}
