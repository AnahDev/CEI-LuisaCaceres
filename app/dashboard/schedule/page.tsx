import EventComposer from "@/app/components/dashboard/events/EventComposer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nuevo Evento - Cartelera - UEC Luisa Cáceres",
};

export default function EventosPage() {
  return <EventComposer />;
}
