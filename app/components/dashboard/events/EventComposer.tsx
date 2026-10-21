"use client";

import { useMemo, useState } from "react";
import { useDashboardSidebarCollapsed } from "@/app/dashboard/DashboardLayout";
import BottomActionBar from "@/app/components/dashboard/BottomActionBar";
import EventTypeToggle from "./EventTypeToggle";
import EventCategoryPicker from "./EventCategoryPicker";
import EventPhotoUpload from "./EventPhotoUpload";
import EventHighlightToggle from "./EventHighlightToggle";
import EventPreviewPanel from "./EventPreviewPanel";
import PublishedBanner from "./PublishedBanner";
import DraftSavedBanner from "./DraftSavedBanner";
import EventTitleInput from "./fields/EventTitleInput";
import EventDateInput from "./fields/EventDateInput";
import EventLocationInput from "./fields/EventLocationInput";
import EventMessageInput from "./fields/EventMessageInput";
import { EVENT_CATEGORIES } from "@/data/eventCategories";
import { splitIsoDate } from "@/lib/date";
import { ApiError } from "@/lib/api";
import { createEvent, publishEvent } from "@/lib/events";
import { uploadMedia } from "@/lib/posts";
import type { EventKind } from "@/types/event";

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
 *
 * Persistence goes straight to the API (lib/events): "Guardar como
 * borrador" creates the event in DRAFT and "Publicar ahora" also flips it
 * to PUBLISHED, because the backend only accepts status changes through
 * PATCH /events/{id}/status.
 */
export default function EventComposer() {
  const [form, setForm] = useState<EventFormState>(INITIAL_STATE);
  const [isPublishing, setIsPublishing] = useState(false);
  const [isSavingDraft, setIsSavingDraft] = useState(false);
  const [isUploadingPhoto, setIsUploadingPhoto] = useState(false);
  const [justPublished, setJustPublished] = useState(false);
  const [draftSaved, setDraftSaved] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const isSidebarCollapsed = useDashboardSidebarCollapsed();

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
    setIsUploadingPhoto(true);
    setErrorMessage(null);
    try {
      const asset = await uploadMedia(file);
      update("image", { url: asset.url, alt: file.name });
    } catch (error) {
      setErrorMessage(
        error instanceof ApiError ? error.message : "No se pudo subir la fotografía."
      );
    } finally {
      setIsUploadingPhoto(false);
    }
  };

  const toApiInput = () => ({
    title: form.title.trim(),
    date: form.date,
    location: form.location,
    categoryId: form.categoryId,
    description: isEphemeris ? form.description : "",
    kind: form.kind,
    imageUrl: form.image?.url ?? null,
    featured: form.highlighted,
  });

  const handleSaveDraft = async () => {
    if (!form.title.trim() || !form.date) {
      setErrorMessage("Agrega al menos un título y una fecha para guardar el borrador.");
      return;
    }

    setIsSavingDraft(true);
    setErrorMessage(null);
    setJustPublished(false);
    try {
      await createEvent(toApiInput());
      setForm(INITIAL_STATE);
      setDraftSaved(true);
    } catch (error) {
      setErrorMessage(error instanceof ApiError ? error.message : "No se pudo guardar el borrador.");
    } finally {
      setIsSavingDraft(false);
    }
  };

  const handlePublish = async () => {
    if (!isValid) {
      setErrorMessage("Completa los campos obligatorios antes de publicar.");
      return;
    }

    setIsPublishing(true);
    setErrorMessage(null);
    setDraftSaved(false);
    try {
      const created = await createEvent(toApiInput());
      await publishEvent(created.id);
      setForm(INITIAL_STATE);
      setJustPublished(true);
    } catch (error) {
      setErrorMessage(error instanceof ApiError ? error.message : "No se pudo publicar el evento.");
    } finally {
      setIsPublishing(false);
    }
  };

  return (
    <>
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-8 pb-32">
        <div className="mb-8 max-w-2xl">
          <h1 className="text-[2rem] font-extrabold text-[#303330] tracking-tight mb-3">Nuevo Evento</h1>
          <p className="text-[1.0625rem] text-[#5d605c] leading-relaxed">
            Crea un evento de calendario o una efeméride para publicarla en la cartelera informativa del colegio.
          </p>
        </div>

        {errorMessage && (
          <div className="mb-8 max-w-2xl flex items-start gap-3 bg-[#fbeaea] border border-[#e9b8b8] text-[#ac3434] rounded-[1rem] px-5 py-4">
            <span className="material-symbols-outlined text-[20px]">error</span>
            <p className="text-sm font-semibold">{errorMessage}</p>
          </div>
        )}

        {justPublished && (
          <div className="mb-8 max-w-2xl">
            <PublishedBanner onDismiss={() => setJustPublished(false)} />
          </div>
        )}

        {draftSaved && (
          <div className="mb-8 max-w-2xl">
            <DraftSavedBanner onDismiss={() => setDraftSaved(false)} />
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
                  uploading={isUploadingPhoto}
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

      <BottomActionBar
        onSaveDraft={handleSaveDraft}
        onPublish={handlePublish}
        publishing={isPublishing}
        savingDraft={isSavingDraft}
        sidebarCollapsed={isSidebarCollapsed}
      />
    </>
  );
}
