export type ChannelId = "telegram" | "facebook" | "instagram";

export type ChannelApiName = "TELEGRAM" | "FACEBOOK" | "INSTAGRAM";

export type PostStatus = "DRAFT" | "PUBLISHED";

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
  id: number;
  url: string;
  alt: string;
}

export interface PostMediaApi {
  id: number;
  url: string;
  mimeType: string;
  sizeBytes: number;
  createdAt: string;
}

export interface PostChannelApi {
  channel: ChannelApiName;
  status: "PENDING" | "SENT" | "FAILED";
  externalId: string | null;
  errorMessage: string | null;
  sentAt: string | null;
}

export interface PostApiResponse {
  id: number;
  slug: string;
  title: string;
  caption: string;
  imageUrl: string;
  media: PostMediaApi[];
  channels: PostChannelApi[];
  status: PostStatus;
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface PageResponse<T> {
  content: T[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  last: boolean;
}

export interface NavItem {
  id: string;
  label: string;
  icon: string;
  iconFilled: boolean;
  href: string;
  children?: NavSubItem[];
}

export interface NavSubItem {
  id: string;
  label: string;
  href: string;
}

export interface PostDraft {
  selectedChannels: ChannelId[];
  content: string;
  media: MediaItem[];
}
