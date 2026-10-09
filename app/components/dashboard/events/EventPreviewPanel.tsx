import EventItem from "@/app/components/cartelera/EventItem";
import EfemerideCard from "@/app/components/cartelera/EfemerideCard";
import UrgentBanner from "@/app/components/cartelera/UrgentBanner";
import { EventKind } from "@/types/event";
import { getCategoryById } from "@/data/eventCategories";

interface EventPreviewPanelProps {
  kind: EventKind;
  title: string;
  day: string;
  month: string;
  categoryId: string;
  description: string;
  imageUrl: string | null;
  highlighted: boolean;
}

/**
 * Renders the SAME components the public /cartelera page uses
 * (EventItem / EfemerideCard / UrgentBanner), fed with the form's current
 * values. What the admin sees here is pixel-for-pixel what gets published —
 * no separate mock preview to keep in sync with the real cards.
 */
export default function EventPreviewPanel({ kind, title, day, month, categoryId, description, imageUrl, highlighted }: EventPreviewPanelProps) {
  const category = getCategoryById(categoryId);

  return (
    <section className="bg-white rounded-[1rem] p-8 shadow-[0_20px_40px_-10px_rgba(48,51,48,0.06)] sticky top-28">
      <h2 className="font-['Plus_Jakarta_Sans'] text-[1.25rem] font-semibold text-[#303330] mb-6 flex items-center gap-2">
        <span className="material-symbols-outlined text-[#8e4d39]" style={{ fontVariationSettings: "'FILL' 1" }}>preview</span>
        Así se verá en la Cartelera
      </h2>

      <div className="space-y-4">
        {highlighted && (
          <div className="rounded-[1rem] overflow-hidden">
            <UrgentBanner notice={{ active: true, text: description || "Tu mensaje aparecerá aquí." }} />
          </div>
        )}

        <div className="bg-[#f4f4f0] rounded-[1rem] p-4">
          {kind === "calendar" ? (
            <EventItem
              day={day}
              month={month}
              title={title || "Título del evento"}
              category={category.label}
              categoryColor={category.badgeClass}
            />
          ) : (
            <EfemerideCard
              image={imageUrl ?? ""}
              day={day}
              month={month}
              title={title || "Título de la efeméride"}
              description={description || "Escribe un mensaje para que las familias lo lean en la web."}
            />
          )}
        </div>
      </div>
    </section>
  );
}
