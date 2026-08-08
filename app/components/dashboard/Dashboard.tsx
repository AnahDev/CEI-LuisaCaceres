"use client";

import { useMemo, useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import ChannelSelector from "./PostEditor/ChannelSelector";
import ContentEditor from "./PostEditor/ContentEditor";
import MediaUploader from "./PostEditor/MediaUploader";
import PreviewPanel from "./Preview/PreviewPanel";
import BottomActionBar from "./BottomActionBar";
import { CHANNELS, DEFAULT_SELECTED_CHANNELS, MAX_POST_LENGTH } from "@/data/channels";
import type { ChannelId, MediaItem } from "@/types/post";

const SCHOOL_NAME = "UEC Luisa Cáceres";
const LOGO_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBo7N-7-twyOqI5yL-gMtLBxOEc0E0PvPZ57eA839c6U58Fhbknoy0csvGqi0khxCM4xxl-Lr8C-jHXZLKj1XeH83pq29RLUdf5izZtiR9yqXh9KmqKQm4dTMEseg0vMbjUzDaFjAlp_EHEpj4v6bsg3r3evTGM8lY-KCwuD6PE37VHJFIhhBmFXEbG1ZNPw4GHn2fGANHCuR3xJYhvj5IVE-s1oewG0bgQWvDRQSGBUs2mJWWCKuvYeQ";
const AVATAR_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDKlhdxq_DSWCKCkTFdqhtieAQJeWzwl551wID4gl1g0Pm7qsZiXIG1C6e07mmG2KYeUsREPujgL71wLF0Fe4RZIU8OOmAkJ-0IHgLZPrwagOzIDIz1_iaOxUP-2fPAtL91Kft17QavBguFauLa8aB4GaExV0GGFTQ-3D6bK_w3EZHzBDPFJJKwIKASEuA9l88BCQQtX494kU9FXGE6p2631P4fgNnGtn-GTH1Q2ZbTg5GBlARH2CxXHQ";
const SAMPLE_MEDIA_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBkOf-btYgeUPmGWKWH6agwe3e6J1F88wJlB60dLNIyE6JovD3AwRaWmRao2wQHXpLr5e9mu4XrB1K9EEKFCzVvHyL7QhH8R7pw7jr2cd0upO8L4iZYfqIbAgpErjqse3VfrRMGMl59lhNLDe0gMNpFC-xLsfA2-PuRRhqar4alx5QUWvb9J9ffIYSLCPIgeTpncybNy1WNNFcFTcLQMCuf7jGKBunmLC_GBp_l91SldML4fNIiTnDWkw";

const INITIAL_MEDIA: MediaItem[] = [
  {
    id: "media-1",
    url: SAMPLE_MEDIA_URL,
    alt: "Aula de preescolar moderna con juguetes Montessori de madera y luz natural",
  },
];

const INITIAL_CONTENT =
  "¡Feliz inicio de semana a toda nuestra comunidad escolar! 🌟\n\nRecordamos que esta semana inician las inscripciones para las actividades extracurriculares.";

export default function Dashboard() {
  const [selectedChannels, setSelectedChannels] = useState<ChannelId[]>(DEFAULT_SELECTED_CHANNELS);
  const [activePreviewChannel, setActivePreviewChannel] = useState<ChannelId>("telegram");
  const [content, setContent] = useState(INITIAL_CONTENT);
  const [media, setMedia] = useState<MediaItem[]>(INITIAL_MEDIA);
  const [isPublishing, setIsPublishing] = useState(false);

  const timestamp = useMemo(
    () => new Date().toLocaleTimeString("es-VE", { hour: "2-digit", minute: "2-digit" }),
    []
  );

  const handleToggleChannel = (channelId: ChannelId, checked: boolean) => {
    setSelectedChannels((prev) =>
      checked ? [...prev, channelId] : prev.filter((id) => id !== channelId)
    );
  };

  const handleFilesSelected = (files: FileList) => {
    const newItems: MediaItem[] = Array.from(files).map((file, index) => ({
      id: `media-${Date.now()}-${index}`,
      url: URL.createObjectURL(file),
      alt: file.name,
    }));
    setMedia((prev) => [...prev, ...newItems]);
  };

  const handleRemoveMedia = (id: string) => {
    setMedia((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSaveDraft = () => {
    // Delegate persistence to whatever the app wires in (API call, local storage, etc.)
    console.log("Guardar borrador", { selectedChannels, content, media });
  };

  const handlePublish = async () => {
    setIsPublishing(true);
    try {
      // Delegate the actual publish request to a service layer / API route.
      console.log("Publicar", { selectedChannels, content, media });
    } finally {
      setIsPublishing(false);
    }
  };

  return (
    <div className="bg-[#f4f4f0] text-[#303330] min-h-screen flex overflow-hidden">
      <Sidebar schoolName={SCHOOL_NAME} logoUrl={LOGO_URL} onCreatePost={handleSaveDraft} />

      <main className="flex-1 overflow-y-auto relative bg-[#f4f4f0] scroll-smooth">
        <Header schoolName={SCHOOL_NAME} section="Announcements" currentPage="New Post" avatarUrl={AVATAR_URL} />

        <div className="max-w-6xl mx-auto px-6 md:px-12 py-8 pb-32">
          <div className="mb-12 max-w-2xl">
            <h1 className="font-['Plus_Jakarta_Sans'] text-[2rem] font-extrabold text-[#303330] tracking-tight mb-3">
              Crear Publicación
            </h1>
            <p className="font-['Plus_Jakarta_Sans'] text-[1.0625rem] text-[#5d605c] leading-relaxed">
              Redacta y programa contenido para tus redes sociales y canales de comunicación escolares.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-7 space-y-8">
              <ChannelSelector channels={CHANNELS} selected={selectedChannels} onToggle={handleToggleChannel} />

              <ContentEditor value={content} onChange={setContent} maxLength={MAX_POST_LENGTH} />

              <MediaUploader media={media} onFilesSelected={handleFilesSelected} onRemove={handleRemoveMedia} />
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
      </main>

      <BottomActionBar onSaveDraft={handleSaveDraft} onPublish={handlePublish} publishing={isPublishing} />
    </div>
  );
}
