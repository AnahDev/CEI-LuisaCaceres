import type { Metadata } from "next";
import Dashboard from "../components/dashboard/Dashboard";

export const metadata: Metadata = {
  title: "Crear Publicación - UEC Luisa Cáceres",
};

export default function DashboardPage() {
  return <Dashboard />;
}