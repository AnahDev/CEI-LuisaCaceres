import type { NavItem } from "@/types/post";

export const NAV_ITEMS: NavItem[] = [
  { id: "announcements", label: "Anuncios", icon: "campaign", iconFilled: true, href: "/dashboard" },
  { id: "schedule", label: "calendario", icon: "calendar_today", iconFilled: false, href: "/dashboard/schedule" },
  { id: "students", label: "Nada por ahora", icon: "child_care", iconFilled: false, href: "#" },
  { id: "settings", label: "Nada por ahora", icon: "settings", iconFilled: false, href: "#" },
];

export const ACTIVE_NAV_ID = "announcements";
