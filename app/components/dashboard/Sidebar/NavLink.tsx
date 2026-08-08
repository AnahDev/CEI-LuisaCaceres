import type { NavItem } from "@/types/post";

interface NavLinkProps {
  item: NavItem;
  active: boolean;
}

/**
 * Renders a single sidebar navigation entry.
 * Has one job: display an icon + label and reflect whether it is the active route.
 */
export default function NavLink({ item, active }: NavLinkProps) {
  return (
    <a
      href={item.href}
      aria-current={active ? "page" : undefined}
      className={[
        "flex items-center gap-3 px-4 py-3 rounded-full transition-all duration-200 active:scale-95",
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
      <span className="font-['Plus_Jakarta_Sans'] text-[0.875rem] font-medium tracking-tight">
        {item.label}
      </span>
    </a>
  );
}
