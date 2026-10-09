import type { ReactNode } from "react";
import DashboardLayout from "./DashboardLayout";

export default function DashboardSegmentLayout({ children }: { children: ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
