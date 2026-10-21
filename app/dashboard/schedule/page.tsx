import type { Metadata } from "next";
import ScheduleManager from "@/app/components/dashboard/ScheduleManager";

export const metadata: Metadata = {
  title: "Publicaciones - Calendario - UEC Luisa Cáceres",
};

export default function SchedulePage() {
  return <ScheduleManager />;
}
