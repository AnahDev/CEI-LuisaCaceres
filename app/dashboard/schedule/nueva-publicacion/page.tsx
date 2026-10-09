import type { Metadata } from "next";
import EventComposer from "@/app/components/dashboard/events/EventComposer";

export const metadata: Metadata = {
  title: "Nueva Publicación - Calendario - UEC Luisa Cáceres",
};

export default function NuevaPublicacionPage() {
  return <EventComposer />;
}
