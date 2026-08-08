import { Channel } from "@/types/post";

export const CHANNELS: Channel[] = [
  {
    id: "telegram",
    label: "Telegram",
    shortLabel: "Tel",
    icon: "send",
    iconFilled: true,
    color: "#0088cc",
  },
  {
    id: "facebook",
    label: "Facebook",
    shortLabel: "FB",
    icon: "public",
    iconFilled: true,
    color: "#1877F2",
  },
  {
    id: "instagram",
    label: "Instagram",
    shortLabel: "IG",
    icon: "photo_camera",
    iconFilled: false,
    color: "#E1306C",
  },
];

export const DEFAULT_SELECTED_CHANNELS: Channel["id"][] = ["telegram", "facebook"];

export const MAX_POST_LENGTH = 2200;
