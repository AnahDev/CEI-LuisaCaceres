import type { Metadata } from "next";
import Dashboard from "@/app/components/dashboard/Dashboard";

export const metadata: Metadata = {
  title: "Nueva Publicación - Calendario - UEC Luisa Cáceres",
};

export default function NuevaPublicacionPage() {
  return <Dashboard />;
}
