import type { NavItem } from "@/types/post";

export const NAV_ITEMS: NavItem[] = [
  { id: "announcements", label: "Anuncios", icon: "campaign", iconFilled: true, href: "/dashboard" },
  {
    id: "schedule",
    label: "Calendario",
    icon: "calendar_today",
    iconFilled: false,
    href: "/dashboard/schedule",
    children: [
      { id: "schedule-publications", label: "Publicaciones", href: "/dashboard/schedule" },
      { id: "schedule-new-publication", label: "Nueva publicación", href: "/dashboard/schedule/nueva-publicacion" },
      { id: "schedule-new-event", label: "Nuevo evento", href: "/dashboard/schedule/nuevo-evento" },
    ],
  },
  { id: "settings", label: "Nada por ahora", icon: "settings", iconFilled: false, href: "#" },
];

export const ACTIVE_NAV_ID = "announcements";
