import type { NavItem } from "@/types/post";

export const NAV_ITEMS: NavItem[] = [
  { id: "announcements", label: "Announcements", icon: "campaign", iconFilled: true, href: "#" },
  { id: "students", label: "Students", icon: "child_care", iconFilled: false, href: "#" },
  { id: "schedule", label: "Schedule", icon: "calendar_today", iconFilled: false, href: "#" },
  { id: "settings", label: "Settings", icon: "settings", iconFilled: false, href: "#" },
];

export const ACTIVE_NAV_ID = "announcements";
