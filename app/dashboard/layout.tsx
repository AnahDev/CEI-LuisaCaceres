import type { ReactNode } from "react";
import DashboardLayout from "./DashboardLayout";

export default function DashboardSegmentLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />
      <DashboardLayout>{children}</DashboardLayout>
    </>
  );
}
