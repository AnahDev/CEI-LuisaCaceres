import Link from "next/link";
import { formatDateEs } from "@/lib/date";
import type { PostApiResponse } from "@/types/post";

export default function PostCard({ post }: { post: PostApiResponse }) {
  const coverMedia = post.media.find((item) => item.url === post.imageUrl);
  const coverIsVideo = coverMedia?.mimeType.startsWith("video/") ?? false;

  return (
    <Link
      href={`/cartelera/publicaciones/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl bg-surface-container-lowest shadow-[0_4px_15px_rgba(48,51,48,0.05)] transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-container">
        {coverIsVideo ? (
          <video
            src={post.imageUrl}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            muted
            playsInline
          />
        ) : (
          <img
            src={post.imageUrl}
            alt={`Portada de ${post.title}`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <span className="text-xs font-bold uppercase tracking-wide text-primary">
          {formatDateEs(post.publishedAt ?? post.createdAt)}
        </span>
        <h3 className="line-clamp-2 text-lg font-extrabold leading-snug text-on-surface">
          {post.title}
        </h3>
        <p className="line-clamp-3 text-sm leading-relaxed text-on-surface-variant">
          {post.caption}
        </p>
        <span className="mt-auto inline-flex items-center gap-1 pt-2 text-sm font-bold text-primary">
          Leer más
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </span>
      </div>
    </Link>
  );
}
