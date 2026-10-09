import type { Metadata } from "next";
import EventComposer from "@/app/components/dashboard/events/EventComposer";

export const metadata: Metadata = {
  title: "Nuevo Evento - Calendario - UEC Luisa Cáceres",
};

export default function NuevoEventoPage() {
  return <EventComposer />;
}
