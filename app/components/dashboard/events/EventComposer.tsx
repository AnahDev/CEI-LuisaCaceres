"use client";

import { useMemo, useState } from "react";
// import FixedActionBar from "@/app/components/layout/FixedActionBar";
import EventTypeToggle from "./EventTypeToggle";
import EventCategoryPicker from "./EventCategoryPicker";
import EventPhotoUpload from "./EventPhotoUpload";
import EventHighlightToggle from "./EventHighlightToggle";
import EventPreviewPanel from "./EventPreviewPanel";
import PublishedBanner from "./PublishedBanner";
import EventTitleInput from "./fields/EventTitleInput";
import EventDateInput from "./fields/EventDateInput";
import EventLocationInput from "./fields/EventLocationInput";
import EventMessageInput from "./fields/EventMessageInput";
import { EVENT_CATEGORIES } from "@/data/eventCategories";
import { splitIsoDate } from "@/lib/date";
import { readFileAsDataUrl } from "@/lib/files";
import { generateId } from "@/lib/id";
// import { useSchoolEvents } from "@/hooks/useSchoolEvents";
import type { EventKind, SchoolEvent } from "@/types/event";

interface EventFormState {
  kind: EventKind;
  title: string;
  date: string;
  location: string;
  categoryId: string;
  description: string;
  image: { url: string; alt: string } | null;
  highlighted: boolean;
}

const INITIAL_STATE: EventFormState = {
  kind: "calendar",
  title: "",
  date: "",
  location: "",
  categoryId: EVENT_CATEGORIES[0].id,
  description: "",
  image: null,
  highlighted: false,
};

/**
 * Orchestrates the "crear evento / efeméride" form. This is the only
 * component that owns state — every field below it is a plain, reusable
 * presentational component that just receives a value + onChange.
 * `useSchoolEvents` is the only thing standing between this and real
 * persistence, so swapping localStorage for an API later means touching
 * that hook, not this component.
 */
export default function EventComposer() {
  // const { addEvent } = useSchoolEvents();
  const [form, setForm] = useState<EventFormState>(INITIAL_STATE);
  const [isPublishing, setIsPublishing] = useState(false);
  const [justPublished, setJustPublished] = useState(false);

  const update = <K extends keyof EventFormState>(key: K, value: EventFormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const { day, month } = splitIsoDate(form.date);
  const isEphemeris = form.kind === "ephemeris";

  const isValid = useMemo(() => {
    if (!form.title.trim() || !form.date || !form.categoryId) return false;
    if (isEphemeris && (!form.image || !form.description.trim())) return false;
    return true;
  }, [form, isEphemeris]);

  const handlePhotoSelect = async (file: File) => {
    const url = await readFileAsDataUrl(file);
    update("image", { url, alt: file.name });
  };

  const handleSaveDraft = () => {
    // No se pidió un flujo de borradores real — este botón queda como
    // placeholder, igual que en el composer de publicaciones (Dashboard.tsx).
    console.log("Guardar borrador de evento", form);
  };

  const handlePublish = async () => {
    if (!isValid) return;
    setIsPublishing(true);
    try {
      const base = {
        id: generateId(form.kind),
        title: form.title.trim(),
        day,
        month,
        categoryId: form.categoryId,
        highlighted: form.highlighted,
        createdAt: new Date().toISOString(),
      };

      const event: SchoolEvent =
        form.kind === "calendar"
          ? { ...base, kind: "calendar" }
          : { ...base, kind: "ephemeris", description: form.description.trim(), image: form.image!.url, location: form.location.trim() || undefined };

      // addEvent(event);
      setForm(INITIAL_STATE);
      setJustPublished(true);
    } finally {
      setIsPublishing(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-12 py-8">
      <div className="mb-8 max-w-2xl">
        <h1 className="text-[2rem] font-extrabold text-[#303330] tracking-tight mb-3">Nuevo Evento</h1>
        <p className="text-[1.0625rem] text-[#5d605c] leading-relaxed">
          Crea un evento de calendario o una efeméride para publicarla en la cartelera informativa del colegio.
        </p>
      </div>

      {justPublished && (
        <div className="mb-8 max-w-2xl">
          <PublishedBanner onDismiss={() => setJustPublished(false)} />
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-7 space-y-8">
          <section className="bg-white rounded-[1rem] p-8 shadow-[0_20px_40px_-10px_rgba(48,51,48,0.06)]">
            <h2 className="text-[1.25rem] font-semibold text-[#303330] mb-6">¿Qué vas a publicar?</h2>
            <EventTypeToggle value={form.kind} onChange={(kind) => update("kind", kind)} />
          </section>

          <section className="bg-white rounded-[1rem] p-8 shadow-[0_20px_40px_-10px_rgba(48,51,48,0.06)] space-y-6">
            <h2 className="text-[1.25rem] font-semibold text-[#303330]">Datos del evento</h2>
            <EventTitleInput value={form.title} onChange={(title) => update("title", title)} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <EventDateInput value={form.date} onChange={(date) => update("date", date)} />
              <EventLocationInput value={form.location} onChange={(location) => update("location", location)} />
            </div>
            <EventCategoryPicker value={form.categoryId} onChange={(categoryId) => update("categoryId", categoryId)} />
          </section>

          {isEphemeris && (
            <section className="bg-white rounded-[1rem] p-8 shadow-[0_20px_40px_-10px_rgba(48,51,48,0.06)] space-y-6">
              <h2 className="text-[1.25rem] font-semibold text-[#303330]">Foto y mensaje</h2>
              <EventPhotoUpload
                image={form.image}
                onSelect={handlePhotoSelect}
                onRemove={() => update("image", null)}
              />
              <EventMessageInput
                value={form.description}
                onChange={(description) => update("description", description)}
              />
            </section>
          )}

          <section className="bg-white rounded-[1rem] p-6 shadow-[0_20px_40px_-10px_rgba(48,51,48,0.06)]">
            <EventHighlightToggle
              checked={form.highlighted}
              onChange={(highlighted) => update("highlighted", highlighted)}
            />
          </section>
        </div>

        <div className="lg:col-span-5 space-y-8">
          <EventPreviewPanel
            kind={form.kind}
            title={form.title}
            day={day}
            month={month}
            categoryId={form.categoryId}
            description={form.description}
            imageUrl={form.image?.url ?? null}
            highlighted={form.highlighted}
          />
        </div>
      </div>
    </div>
  );
}
