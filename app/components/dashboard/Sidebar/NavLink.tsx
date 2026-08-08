import type { NavItem } from "@/types/post";

interface NavLinkProps {
  item: NavItem;
  active: boolean;
  collapsed: boolean;
}

/**
 * Renders a single sidebar navigation entry.
 * Has one job: display an icon + label and reflect whether it is the active route.
 * When the sidebar is collapsed, only the icon remains visible (label stays
 * available to assistive tech via aria-label/title).
 */
export default function NavLink({ item, active, collapsed }: NavLinkProps) {
  return (
    <a
      href={item.href}
      aria-current={active ? "page" : undefined}
      aria-label={item.label}
      title={collapsed ? item.label : undefined}
      className={[
        "flex items-center gap-3 py-3 rounded-full transition-all duration-200 active:scale-95",
        collapsed ? "justify-center px-3" : "px-4",
        active
          ? "bg-[#62ccff] text-[#004259] shadow-[inset_0_2px_4px_rgba(255,255,255,0.2)]"
          : "text-[#5d605c] hover:bg-[#e8e8e4]",
      ].join(" ")}
    >
      <span
        className="material-symbols-outlined"
        style={{ fontVariationSettings: item.iconFilled ? "'FILL' 1" : "'FILL' 0" }}
      >
        {item.icon}
      </span>
      {!collapsed && (
        <span className="font-['Plus_Jakarta_Sans'] text-[0.875rem] font-medium tracking-tight whitespace-nowrap">
          {item.label}
        </span>
      )}
    </a>
  );
}
