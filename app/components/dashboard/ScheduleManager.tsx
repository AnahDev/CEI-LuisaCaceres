"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ApiError } from "@/lib/api";
import { formatDateTimeEs } from "@/lib/date";
import { getEventApiMeta } from "@/data/eventCategories";
import { changeEventStatus, deleteEvent, listAdminEvents } from "@/lib/events";
import { changePostStatus, deletePost, listAdminPosts } from "@/lib/posts";
import type { EventApiResponse } from "@/types/event";
import type { PostApiResponse, PostStatus } from "@/types/post";

type Tab = "posts" | "events";

function StatusBadge({ status }: { status: PostStatus }) {
  const published = status === "PUBLISHED";
  return (
    <span
      className={[
        "text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full",
        published
          ? "bg-[#cbfecc] text-[#38643e]"
          : "bg-[#eeeeea] text-[#5d605c]",
      ].join(" ")}
    >
      {published ? "Publicado" : "Borrador"}
    </span>
  );
}

export default function ScheduleManager() {
  const [tab, setTab] = useState<Tab>("posts");
  const [posts, setPosts] = useState<PostApiResponse[]>([]);
  const [events, setEvents] = useState<EventApiResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [busyId, setBusyId] = useState<string | null>(null);

  const load = async () => {
    setIsLoading(true);
    setErrorMessage(null);
    try {
      const [postPage, eventPage] = await Promise.all([listAdminPosts(), listAdminEvents()]);
      setPosts(postPage.content);
      setEvents(eventPage.content);
    } catch (error) {
      setErrorMessage(
        error instanceof ApiError ? error.message : "No se pudieron cargar las publicaciones."
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    void load();
  }, []);

  const togglePost = async (post: PostApiResponse) => {
    const next: PostStatus = post.status === "PUBLISHED" ? "DRAFT" : "PUBLISHED";
    setBusyId(`post-${post.id}`);
    setErrorMessage(null);
    try {
      const updated = await changePostStatus(post.id, next);
      setPosts((prev) => prev.map((item) => (item.id === updated.id ? updated : item)));
    } catch (error) {
      setErrorMessage(
        error instanceof ApiError ? error.message : "No se pudo cambiar el estado."
      );
    } finally {
      setBusyId(null);
    }
  };

  const removePost = async (post: PostApiResponse) => {
    if (!window.confirm(`¿Eliminar la publicación "${post.title}"?`)) return;
    setBusyId(`post-${post.id}`);
    setErrorMessage(null);
    try {
      await deletePost(post.id);
      setPosts((prev) => prev.filter((item) => item.id !== post.id));
    } catch (error) {
      setErrorMessage(
        error instanceof ApiError ? error.message : "No se pudo eliminar la publicación."
      );
    } finally {
      setBusyId(null);
    }
  };

  const toggleEvent = async (event: EventApiResponse) => {
    const next: PostStatus = event.status === "PUBLISHED" ? "DRAFT" : "PUBLISHED";
    setBusyId(`event-${event.id}`);
    setErrorMessage(null);
    try {
      const updated = await changeEventStatus(event.id, next);
      setEvents((prev) => prev.map((item) => (item.id === updated.id ? updated : item)));
    } catch (error) {
      setErrorMessage(
        error instanceof ApiError ? error.message : "No se pudo cambiar el estado del evento."
      );
    } finally {
      setBusyId(null);
    }
  };

  const removeEvent = async (event: EventApiResponse) => {
    if (!window.confirm(`¿Eliminar el evento "${event.title}"?`)) return;
    setBusyId(`event-${event.id}`);
    setErrorMessage(null);
    try {
      await deleteEvent(event.id);
      setEvents((prev) => prev.filter((item) => item.id !== event.id));
    } catch (error) {
      setErrorMessage(
        error instanceof ApiError ? error.message : "No se pudo eliminar el evento."
      );
    } finally {
      setBusyId(null);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-12 py-8">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-2xl">
          <p className="mb-3 font-['Plus_Jakarta_Sans'] text-sm font-bold uppercase tracking-[0.14em] text-[#006789]">
            Cartelera
          </p>
          <h1 className="mb-3 font-['Plus_Jakarta_Sans'] text-[2rem] font-extrabold tracking-tight text-[#303330]">
            Publicaciones
          </h1>
          <p className="font-['Plus_Jakarta_Sans'] text-[1.0625rem] leading-relaxed text-[#5d605c]">
            Administra lo que se muestra en la cartelera del colegio.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link
            href="/dashboard/schedule/nueva-publicacion"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#006789] to-[#62ccff] px-5 py-2.5 font-['Plus_Jakarta_Sans'] text-sm font-bold text-[#f4faff] shadow-[inset_0_2px_4px_rgba(255,255,255,0.2)] transition-opacity hover:opacity-90"
          >
            <span className="material-symbols-outlined text-xl">add</span>
            Nueva publicación
          </Link>
          <Link
            href="/dashboard/schedule/nuevo-evento"
            className="inline-flex items-center gap-2 rounded-full border border-[#c9dce2] px-5 py-2.5 font-['Plus_Jakarta_Sans'] text-sm font-bold text-[#006789] transition-colors hover:bg-[#eaf8fd]"
          >
            <span className="material-symbols-outlined text-xl">event</span>
            Nuevo evento
          </Link>
        </div>
      </div>

      {errorMessage && (
        <div className="mb-6 flex items-start gap-3 rounded-[1rem] border border-[#e9b8b8] bg-[#fbeaea] px-5 py-4 text-[#ac3434]">
          <span className="material-symbols-outlined text-[20px]">error</span>
          <p className="text-sm font-semibold">{errorMessage}</p>
        </div>
      )}

      <div className="mb-6 flex gap-2 rounded-full bg-[#eeeeea] p-1.5 w-max">
        <button
          type="button"
          onClick={() => setTab("posts")}
          className={[
            "px-5 py-2 rounded-full text-sm font-bold transition-colors",
            tab === "posts" ? "bg-white text-[#006789] shadow-sm" : "text-[#5d605c] hover:text-[#303330]",
          ].join(" ")}
        >
          Publicaciones ({posts.length})
        </button>
        <button
          type="button"
          onClick={() => setTab("events")}
          className={[
            "px-5 py-2 rounded-full text-sm font-bold transition-colors",
            tab === "events" ? "bg-white text-[#006789] shadow-sm" : "text-[#5d605c] hover:text-[#303330]",
          ].join(" ")}
        >
          Eventos ({events.length})
        </button>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center gap-3 rounded-[1.5rem] border border-[#e5e7e2] bg-white px-6 py-14 text-[#5d605c]">
          <span className="material-symbols-outlined text-[24px] text-[#006789] animate-spin">
            progress_activity
          </span>
          <p className="text-sm font-semibold">Cargando…</p>
        </div>
      ) : tab === "posts" ? (
        posts.length === 0 ? (
          <EmptyState
            icon="campaign"
            title="Todavía no hay publicaciones"
            description="Crea la primera publicación para que aparezca en la cartelera."
            href="/dashboard/schedule/nueva-publicacion"
            action="Nueva publicación"
          />
        ) : (
          <div className="space-y-3">
            {posts.map((post) => {
              const busy = busyId === `post-${post.id}`;
              const coverMedia = post.media.find((item) => item.url === post.imageUrl);
              const coverIsVideo = coverMedia?.mimeType.startsWith("video/") ?? false;
              return (
                <article
                  key={post.id}
                  className="flex flex-col gap-4 rounded-[1.25rem] border border-[#e5e7e2] bg-white p-4 shadow-[0_10px_30px_-18px_rgba(48,51,48,0.35)] sm:flex-row sm:items-center"
                >
                  {coverIsVideo ? (
                    <div className="flex h-24 w-full items-center justify-center rounded-[0.75rem] bg-[#f4f4f0] text-[#006789] sm:w-28">
                      <span className="material-symbols-outlined text-3xl">videocam</span>
                    </div>
                  ) : (
                    <img
                      src={post.imageUrl}
                      alt={`Portada de ${post.title}`}
                      className="h-24 w-full rounded-[0.75rem] object-cover sm:w-28"
                    />
                  )}
                  <div className="min-w-0 flex-1">
                    <div className="mb-1 flex flex-wrap items-center gap-2">
                      <StatusBadge status={post.status} />
                      <span className="text-xs font-medium text-[#5d605c]">
                        {formatDateTimeEs(post.publishedAt ?? post.createdAt)}
                      </span>
                    </div>
                    <h2 className="truncate font-['Plus_Jakarta_Sans'] text-base font-bold text-[#303330]">
                      {post.title}
                    </h2>
                    <p className="line-clamp-2 text-sm leading-relaxed text-[#5d605c]">
                      {post.caption}
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-wrap gap-2">
                    <button
                      type="button"
                      disabled={busy}
                      onClick={() => void togglePost(post)}
                      className="rounded-full border border-[#c9dce2] px-4 py-2 text-xs font-bold text-[#006789] transition-colors hover:bg-[#eaf8fd] disabled:opacity-50"
                    >
                      {post.status === "PUBLISHED" ? "Despublicar" : "Publicar"}
                    </button>
                    <button
                      type="button"
                      disabled={busy}
                      onClick={() => void removePost(post)}
                      className="rounded-full border border-[#e9b8b8] px-4 py-2 text-xs font-bold text-[#ac3434] transition-colors hover:bg-[#fbeaea] disabled:opacity-50"
                    >
                      Eliminar
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )
      ) : events.length === 0 ? (
        <EmptyState
          icon="event"
          title="Todavía no hay eventos"
          description="Crea un evento o efeméride para mostrarlo en el calendario."
          href="/dashboard/schedule/nuevo-evento"
          action="Nuevo evento"
        />
      ) : (
        <div className="space-y-3">
          {events.map((event) => {
            const meta = getEventApiMeta(event.category, event.kind);
            const busy = busyId === `event-${event.id}`;
            return (
              <article
                key={event.id}
                className="flex flex-col gap-4 rounded-[1.25rem] border border-[#e5e7e2] bg-white p-4 shadow-[0_10px_30px_-18px_rgba(48,51,48,0.35)] sm:flex-row sm:items-center"
              >
                {event.imageUrl ? (
                  <img
                    src={event.imageUrl}
                    alt={`Imagen de ${event.title}`}
                    className="h-24 w-full rounded-[0.75rem] object-cover sm:w-28"
                  />
                ) : (
                  <div className="flex h-24 w-full items-center justify-center rounded-[0.75rem] bg-[#f4f4f0] text-[#006789] sm:w-28">
                    <span className="material-symbols-outlined text-3xl">event</span>
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <div className="mb-1 flex flex-wrap items-center gap-2">
                    <StatusBadge status={event.status} />
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${meta.badgeClass}`}>
                      {meta.label}
                    </span>
                    <span className="text-xs font-medium text-[#5d605c]">
                      {formatDateTimeEs(event.startsAt)}
                    </span>
                  </div>
                  <h2 className="truncate font-['Plus_Jakarta_Sans'] text-base font-bold text-[#303330]">
                    {event.title}
                  </h2>
                  <p className="line-clamp-2 text-sm leading-relaxed text-[#5d605c]">
                    {event.description ?? event.location ?? "Sin descripción"}
                  </p>
                </div>
                <div className="flex shrink-0 flex-wrap gap-2">
                  <button
                    type="button"
                    disabled={busy}
                    onClick={() => void toggleEvent(event)}
                    className="rounded-full border border-[#c9dce2] px-4 py-2 text-xs font-bold text-[#006789] transition-colors hover:bg-[#eaf8fd] disabled:opacity-50"
                  >
                    {event.status === "PUBLISHED" ? "Despublicar" : "Publicar"}
                  </button>
                  <button
                    type="button"
                    disabled={busy}
                    onClick={() => void removeEvent(event)}
                    className="rounded-full border border-[#e9b8b8] px-4 py-2 text-xs font-bold text-[#ac3434] transition-colors hover:bg-[#fbeaea] disabled:opacity-50"
                  >
                    Eliminar
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}

function EmptyState({
  icon,
  title,
  description,
  href,
  action,
}: {
  icon: string;
  title: string;
  description: string;
  href: string;
  action: string;
}) {
  return (
    <section className="rounded-[1.5rem] border border-[#e5e7e2] bg-white px-6 py-14 text-center shadow-[0_20px_40px_-10px_rgba(48,51,48,0.06)] md:px-12">
      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#eaf8fd] text-[#006789]">
        <span className="material-symbols-outlined text-3xl" aria-hidden="true">
          {icon}
        </span>
      </div>
      <h2 className="mb-2 font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#303330]">{title}</h2>
      <p className="mx-auto mb-7 max-w-md font-['Plus_Jakarta_Sans'] text-sm leading-relaxed text-[#5d605c]">
        {description}
      </p>
      <Link
        href={href}
        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#006789] to-[#62ccff] px-6 py-3 font-['Plus_Jakarta_Sans'] text-sm font-bold text-[#f4faff] shadow-[inset_0_2px_4px_rgba(255,255,255,0.2)] transition-opacity hover:opacity-90"
      >
        <span className="material-symbols-outlined text-xl" aria-hidden="true">
          add
        </span>
        {action}
      </Link>
    </section>
  );
}
