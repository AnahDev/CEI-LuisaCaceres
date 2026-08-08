import type { NavItem } from "@/types/post";

export const NAV_ITEMS: NavItem[] = [
  { id: "announcements", label: "Announcements", icon: "campaign", iconFilled: true, href: "#" },
  { id: "students", label: "Nada por ahora", icon: "child_care", iconFilled: false, href: "#" },
  { id: "schedule", label: "Nada por ahora", icon: "calendar_today", iconFilled: false, href: "#" },
  { id: "settings", label: "Nada por ahora", icon: "settings", iconFilled: false, href: "#" },
];

export const ACTIVE_NAV_ID = "announcements";
