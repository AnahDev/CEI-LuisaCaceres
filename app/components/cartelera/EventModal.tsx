"use client";

import { useEffect } from "react";
import { getEventApiMeta } from "@/data/eventCategories";
import { formatCalendarDateLong, formatEventSchedule } from "@/lib/date";
import type { EventApiResponse } from "@/types/event";

interface EventModalProps {
  date: string;
  events: EventApiResponse[];
  onClose: () => void;
}

export default function EventModal({ date, events, onClose }: EventModalProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0d0f0d]/60 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="event-modal-title"
        className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-[1.5rem] bg-surface-container-lowest p-6 shadow-[0_30px_80px_-20px_rgba(48,51,48,0.45)]"
      >
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
              Eventos del día
            </p>
            <h3 id="event-modal-title" className="mt-1 text-xl font-extrabold text-on-surface">
              {formatCalendarDateLong(date)}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar detalle del evento"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface-container text-on-surface-variant transition-colors hover:bg-surface-container-high"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        <div className="space-y-4">
          {events.map((event) => {
            const meta = getEventApiMeta(event.category, event.kind);
            return (
              <article
                key={event.id}
                className="overflow-hidden rounded-[1rem] border border-outline-variant/30 bg-surface-container-low"
              >
                {event.imageUrl && (
                  <img
                    src={event.imageUrl}
                    alt={`Imagen de ${event.title}`}
                    className="h-40 w-full object-cover"
                  />
                )}
                <div className="space-y-2 p-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${meta.badgeClass}`}>
                      {meta.label}
                    </span>
                    <span className="text-xs font-medium text-on-surface-variant">
                      {formatEventSchedule(event)}
                    </span>
                  </div>
                  <h4 className="text-lg font-extrabold leading-snug text-on-surface">{event.title}</h4>
                  {event.location && (
                    <p className="flex items-center gap-1 text-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-[18px]">location_on</span>
                      {event.location}
                    </p>
                  )}
                  {event.description && (
                    <p className="whitespace-pre-line text-sm leading-relaxed text-on-surface-variant">
                      {event.description}
                    </p>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
