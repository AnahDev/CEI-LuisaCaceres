import type { MediaItem } from "@/types/post";

export interface ChannelPreviewProps {
  schoolName: string;
  content: string;
  media: MediaItem[];
  timestamp: string;
}
