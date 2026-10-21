import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ApiError } from "@/lib/api";
import { formatDateEs } from "@/lib/date";
import { getPublishedPostBySlug } from "@/lib/posts";
import type { ChannelApiName, PostApiResponse } from "@/types/post";

const CHANNEL_LABELS: Record<ChannelApiName, string> = {
  TELEGRAM: "Telegram",
  FACEBOOK: "Facebook",
  INSTAGRAM: "Instagram",
};

async function loadPost(slug: string): Promise<PostApiResponse | null> {
  try {
    return await getPublishedPostBySlug(slug);
  } catch (error) {
    if (error instanceof ApiError && error.status === 404) {
      return null;
    }
    throw error;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await loadPost(slug);
  if (!post) {
    return { title: "Publicación no encontrada - UEC Luisa Cáceres" };
  }
  return {
    title: `${post.title} - Cartelera - UEC Luisa Cáceres`,
    description: post.caption.slice(0, 160),
    openGraph: {
      title: post.title,
      description: post.caption.slice(0, 160),
      images: post.imageUrl ? [{ url: post.imageUrl }] : undefined,
    },
  };
}

export default async function PostDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await loadPost(slug);
  if (!post) {
    notFound();
  }

  const coverMedia = post.media.find((item) => item.url === post.imageUrl);
  const coverIsVideo = coverMedia?.mimeType.startsWith("video/") ?? false;
  const gallery = post.media.filter((item) => item.url !== post.imageUrl);

  return (
    <main className="pt-24 pb-24 font-['Plus_Jakarta_Sans']">
      <div className="mx-auto max-w-4xl px-6">
        <Link
          href="/cartelera"
          className="mb-8 inline-flex items-center gap-1 text-sm font-bold text-primary hover:underline"
        >
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          Volver a la cartelera
        </Link>

        <article className="overflow-hidden rounded-2xl bg-surface-container-lowest shadow-[0_20px_50px_-20px_rgba(48,51,48,0.25)]">
          <div className="relative aspect-[16/9] w-full bg-surface-container">
            {coverIsVideo ? (
              <video src={post.imageUrl} className="h-full w-full object-cover" controls />
            ) : (
              <img
                src={post.imageUrl}
                alt={`Portada de ${post.title}`}
                className="h-full w-full object-cover"
              />
            )}
          </div>

          <div className="p-6 md:p-10">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-primary-container/20 px-3 py-1 text-xs font-bold text-primary">
                {formatDateEs(post.publishedAt ?? post.createdAt)}
              </span>
              {post.channels.map((channel) => (
                <span
                  key={channel.channel}
                  className="rounded-full bg-surface-container px-3 py-1 text-xs font-bold text-on-surface-variant"
                >
                  {CHANNEL_LABELS[channel.channel]}
                </span>
              ))}
            </div>

            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-on-surface md:text-4xl">
              {post.title}
            </h1>

            <p className="whitespace-pre-line text-[1.0625rem] leading-relaxed text-on-surface-variant">
              {post.caption}
            </p>

            {gallery.length > 0 && (
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {gallery.map((item) =>
                  item.mimeType.startsWith("video/") ? (
                    <video
                      key={item.id}
                      controls
                      className="w-full rounded-xl bg-black"
                      src={item.url}
                    />
                  ) : (
                    <img
                      key={item.id}
                      src={item.url}
                      alt="Imagen de la publicación"
                      className="w-full rounded-xl object-cover"
                      loading="lazy"
                    />
                  )
                )}
              </div>
            )}
          </div>
        </article>
      </div>
    </main>
  );
}
