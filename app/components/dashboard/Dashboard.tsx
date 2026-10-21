"use client";

import { useMemo, useState } from "react";
import ChannelSelector from "./PostEditor/ChannelSelector";
import ContentEditor from "./PostEditor/ContentEditor";
import MediaUploader from "./PostEditor/MediaUploader";
import PreviewPanel from "./Preview/PreviewPanel";
import BottomActionBar from "./BottomActionBar";
import PublishedBanner from "./events/PublishedBanner";
import DraftSavedBanner from "./events/DraftSavedBanner";
import { useDashboardSidebarCollapsed } from "@/app/dashboard/DashboardLayout";
import { CHANNELS, DEFAULT_SELECTED_CHANNELS, MAX_POST_LENGTH } from "@/data/channels";
import { ApiError } from "@/lib/api";
import { changePostStatus, createPost, uploadMedia } from "@/lib/posts";
import type { ChannelId, MediaItem } from "@/types/post";

const SCHOOL_NAME = "UEC Luisa Cáceres";

export default function Dashboard() {
  const [selectedChannels, setSelectedChannels] = useState<ChannelId[]>(DEFAULT_SELECTED_CHANNELS);
  const [activePreviewChannel, setActivePreviewChannel] = useState<ChannelId>("telegram");
  const [content, setContent] = useState("");
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [isSavingDraft, setIsSavingDraft] = useState(false);
  const [justPublished, setJustPublished] = useState(false);
  const [draftSaved, setDraftSaved] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const isSidebarCollapsed = useDashboardSidebarCollapsed();

  const timestamp = useMemo(
    () => new Date().toLocaleTimeString("es-VE", { hour: "2-digit", minute: "2-digit" }),
    []
  );

  const handleToggleChannel = (channelId: ChannelId, checked: boolean) => {
    setSelectedChannels((prev) =>
      checked ? [...prev, channelId] : prev.filter((id) => id !== channelId)
    );
  };

  const handleFilesSelected = async (files: FileList) => {
    const list = Array.from(files);
    if (!list.length) return;

    setIsUploading(true);
    setErrorMessage(null);
    try {
      const uploaded = await Promise.all(
        list.map(async (file) => ({ file, asset: await uploadMedia(file) }))
      );
      setMedia((prev) => [
        ...prev,
        ...uploaded.map(({ file, asset }) => ({
          id: asset.id,
          url: asset.url,
          alt: file.name,
        })),
      ]);
    } catch (error) {
      setErrorMessage(
        error instanceof ApiError ? error.message : "No se pudieron subir los archivos."
      );
    } finally {
      setIsUploading(false);
    }
  };

  const handleRemoveMedia = (id: number) => {
    setMedia((prev) => prev.filter((item) => item.id !== id));
  };

  const validate = (): string | null => {
    if (!content.trim()) return "Escribe el mensaje de la publicación.";
    if (selectedChannels.length === 0) return "Selecciona al menos un canal.";
    if (media.length === 0) return "Adjunta al menos una imagen para la portada.";
    return null;
  };

  const resetForm = () => {
    setContent("");
    setMedia([]);
  };

  const handleSaveDraft = async () => {
    const validationError = validate();
    if (validationError) {
      setErrorMessage(validationError);
      return;
    }

    setIsSavingDraft(true);
    setErrorMessage(null);
    setJustPublished(false);
    try {
      await createPost({
        caption: content,
        channels: selectedChannels,
        mediaIds: media.map((item) => item.id),
      });
      resetForm();
      setDraftSaved(true);
    } catch (error) {
      setErrorMessage(
        error instanceof ApiError ? error.message : "No se pudo guardar el borrador."
      );
    } finally {
      setIsSavingDraft(false);
    }
  };

  const handlePublish = async () => {
    const validationError = validate();
    if (validationError) {
      setErrorMessage(validationError);
      return;
    }

    setIsPublishing(true);
    setErrorMessage(null);
    setDraftSaved(false);
    try {
      const created = await createPost({
        caption: content,
        channels: selectedChannels,
        mediaIds: media.map((item) => item.id),
      });
      await changePostStatus(created.id, "PUBLISHED");
      resetForm();
      setJustPublished(true);
    } catch (error) {
      setErrorMessage(
        error instanceof ApiError ? error.message : "No se pudo publicar la publicación."
      );
    } finally {
      setIsPublishing(false);
    }
  };

  return (
    <>
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-8 pb-32">
        <div className="mb-12 max-w-2xl">
          <h1 className="font-['Plus_Jakarta_Sans'] text-[2rem] font-extrabold text-[#303330] tracking-tight mb-3">
            Crear Publicación
          </h1>
          <p className="font-['Plus_Jakarta_Sans'] text-[1.0625rem] text-[#5d605c] leading-relaxed">
            Redacta y programa contenido para tus redes sociales y la cartelera del colegio.
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
            <ChannelSelector channels={CHANNELS} selected={selectedChannels} onToggle={handleToggleChannel} />

            <ContentEditor value={content} onChange={setContent} maxLength={MAX_POST_LENGTH} />

            <MediaUploader
              media={media}
              uploading={isUploading}
              onFilesSelected={handleFilesSelected}
              onRemove={handleRemoveMedia}
            />
          </div>

          <div className="lg:col-span-5 space-y-8">
            <PreviewPanel
              channels={CHANNELS}
              activeChannel={activePreviewChannel}
              onActiveChannelChange={setActivePreviewChannel}
              schoolName={SCHOOL_NAME}
              content={content}
              media={media}
              timestamp={timestamp}
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
