"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { NAV_ITEMS } from "@/data/navigation";
import Header from "@/app/components/dashboard/Header/Header";
import Sidebar from "@/app/components/dashboard/Sidebar/Sidebar";
import { clearSession, fetchCurrentUser, getToken } from "@/lib/auth";
import type { AuthUser } from "@/types/auth";

const SCHOOL_NAME = "UEC Luisa Cáceres";
const LOGO_URL = "/images/Logo.jpg";
const AVATAR_URL = "/images/avatar.png";
const PAGE_LABELS: Record<string, string> = {
  "/dashboard": "Nueva Publicación",
  "/dashboard/schedule": "Publicaciones",
  "/dashboard/schedule/nueva-publicacion": "Nueva Publicación",
  "/dashboard/schedule/nuevo-evento": "Nuevo Evento",
};

const SidebarCollapsedContext = createContext(false);

export function useDashboardSidebarCollapsed() {
  return useContext(SidebarCollapsedContext);
}

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    if (!getToken()) {
      router.replace("/login");
      return;
    }

    let active = true;
    fetchCurrentUser()
      .then((currentUser) => {
        if (active) {
          setUser(currentUser);
        }
      })
      .catch(() => {
        clearSession();
        if (active) {
          router.replace("/login");
        }
      });

    return () => {
      active = false;
    };
  }, [router]);

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-3 bg-[#f4f4f0] text-[#5d605c]">
        <span className="material-symbols-outlined text-[32px] text-[#006789] animate-spin">
          progress_activity
        </span>
        <p className="text-sm font-semibold tracking-tight">Verificando sesión…</p>
      </div>
    );
  }

  const handleLogout = () => {
    clearSession();
    router.replace("/login");
  };

  const activeItem = NAV_ITEMS
    .filter(
      (item) =>
        item.href !== "#" &&
        (pathname === item.href || (item.id !== "announcements" && pathname.startsWith(`${item.href}/`)))
    )
    .sort((first, second) => second.href.length - first.href.length)[0];
  const section = activeItem?.label ?? "Dashboard";
  const currentPage = PAGE_LABELS[pathname] ?? pathname.split("/").filter(Boolean).at(-1) ?? section;

  return (
    <SidebarCollapsedContext.Provider value={isSidebarCollapsed}>
      <div className="bg-[#f4f4f0] text-[#303330] min-h-screen flex">
        <Sidebar
          schoolName={SCHOOL_NAME}
          logoUrl={LOGO_URL}
          collapsed={isSidebarCollapsed}
          onToggleCollapse={() => setIsSidebarCollapsed((collapsed) => !collapsed)}
          activeItemId={activeItem?.id}
          currentPathname={pathname}
        />

        <main className="flex-1 min-w-0 relative bg-[#f4f4f0] scroll-smooth">
          <Header
            schoolName={SCHOOL_NAME}
            section={section}
            currentPage={currentPage}
            avatarUrl={AVATAR_URL}
            userName={user.fullName}
            onLogout={handleLogout}
          />
          {children}
        </main>
      </div>
    </SidebarCollapsedContext.Provider>
  );
}
