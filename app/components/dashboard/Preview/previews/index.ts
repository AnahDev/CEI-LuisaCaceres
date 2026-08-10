import type { ComponentType } from "react";
import type { ChannelId } from "@/types/post";
import type { ChannelPreviewProps } from "./types";
import TelegramPreview from "./TelegramPreview";
import FacebookPreview from "./FacebookPreview";
import InstagramPreview from "./InstagramPreview";

export const CHANNEL_PREVIEWS: Record<ChannelId, ComponentType<ChannelPreviewProps>> = {
  telegram: TelegramPreview,
  facebook: FacebookPreview,
  instagram: InstagramPreview,
};

export type { ChannelPreviewProps } from "./types";
