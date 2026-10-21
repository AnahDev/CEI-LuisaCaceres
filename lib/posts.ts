import { apiFetch } from "@/lib/api";
import { authFetch } from "@/lib/auth";
import type {
  ChannelId,
  PageResponse,
  PostApiResponse,
  PostStatus,
} from "@/types/post";

const CHANNEL_API: Record<ChannelId, "TELEGRAM" | "FACEBOOK" | "INSTAGRAM"> = {
  telegram: "TELEGRAM",
  facebook: "FACEBOOK",
  instagram: "INSTAGRAM",
};

export interface MediaApiResponse {
  id: number;
  url: string;
  mimeType: string;
  sizeBytes: number;
  createdAt: string;
}

export interface CreatePostInput {
  caption: string;
  channels: ChannelId[];
  mediaIds?: number[];
  title?: string;
  imageUrl?: string;
}

function postBody(input: CreatePostInput) {
  return {
    ...(input.title?.trim() ? { title: input.title.trim() } : {}),
    caption: input.caption.trim(),
    ...(input.mediaIds?.length ? { mediaIds: input.mediaIds } : {}),
    ...(input.imageUrl ? { imageUrl: input.imageUrl } : {}),
    channels: input.channels.map((channel) => CHANNEL_API[channel]),
  };
}

export function uploadMedia(file: File): Promise<MediaApiResponse> {
  const formData = new FormData();
  formData.append("file", file);
  return authFetch<MediaApiResponse>("/media", { method: "POST", body: formData });
}

/** El backend crea todo post en DRAFT; para publicar hay que cambiar el estado. */
export function createPost(input: CreatePostInput): Promise<PostApiResponse> {
  return authFetch<PostApiResponse>("/posts", {
    method: "POST",
    body: postBody(input),
  });
}

export function updatePost(id: number, input: CreatePostInput): Promise<PostApiResponse> {
  return authFetch<PostApiResponse>(`/posts/${id}`, {
    method: "PUT",
    body: postBody(input),
  });
}

export function changePostStatus(id: number, status: PostStatus): Promise<PostApiResponse> {
  return authFetch<PostApiResponse>(`/posts/${id}/status`, {
    method: "PATCH",
    body: { status },
  });
}

export function deletePost(id: number): Promise<void> {
  return authFetch<void>(`/posts/${id}`, { method: "DELETE" });
}

export function listAdminPosts(page = 0, size = 50): Promise<PageResponse<PostApiResponse>> {
  return authFetch<PageResponse<PostApiResponse>>(`/posts?page=${page}&size=${size}`);
}

export function listPublishedPosts(page = 0, size = 6): Promise<PageResponse<PostApiResponse>> {
  return apiFetch<PageResponse<PostApiResponse>>(`/public/posts?page=${page}&size=${size}`, {
    cache: "no-store",
  });
}

export function getPublishedPostBySlug(slug: string): Promise<PostApiResponse> {
  return apiFetch<PostApiResponse>(`/public/posts/${encodeURIComponent(slug)}`, {
    cache: "no-store",
  });
}
