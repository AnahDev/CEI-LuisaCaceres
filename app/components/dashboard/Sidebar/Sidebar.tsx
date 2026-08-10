import NavLink from "./NavLink";
import { NAV_ITEMS, ACTIVE_NAV_ID } from "@/data/navigation";

interface SidebarProps {
  schoolName: string;
  logoUrl: string;
  collapsed: boolean;
  onToggleCollapse: () => void;
}

export default function Sidebar({ schoolName, logoUrl, collapsed, onToggleCollapse }: SidebarProps) {
  return (
    <nav
      className={[
        "hidden md:flex flex-col bg-[#f4f4f0] h-screen rounded-r-[3rem] shadow-sm z-20 transition-[width] duration-300 ease-in-out",
        collapsed ? "w-20" : "w-72",
      ].join(" ")}
    >
      <div className={["flex flex-col h-full p-6 gap-2", collapsed ? "items-center" : ""].join(" ")}>
        <div className={["mb-8 flex items-center gap-4", collapsed ? "px-0 justify-center" : "px-4"].join(" ")}>
          <img
            className="w-12 h-12 rounded-full object-cover flex-shrink-0"
            src={logoUrl}
            alt={`Logotipo de ${schoolName}`}
          />
          {!collapsed && (
            <div>
              <h1 className="font-['Plus_Jakarta_Sans'] text-[1.125rem] font-bold text-[#006789] leading-tight tracking-tight">
                {schoolName}
              </h1>
              <p className="font-['Plus_Jakarta_Sans'] text-[0.875rem] text-[#5d605c] font-medium tracking-tight">
                Admin Portal
              </p>
            </div>
          )}
        </div>

        <div className={["flex-1 space-y-1", collapsed ? "w-full" : "w-full"].join(" ")}>
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.id} item={item} active={item.id === ACTIVE_NAV_ID} collapsed={collapsed} />
          ))}
        </div>

        <button
          type="button"
          onClick={onToggleCollapse}
          aria-label={collapsed ? "Expandir barra lateral" : "Contraer barra lateral"}
          className={[
            "mt-auto py-4 bg-gradient-to-br from-[#006789] to-[#62ccff] text-[#f4faff] rounded-full font-['Plus_Jakarta_Sans'] font-bold text-[0.875rem] tracking-wide hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 shadow-[inset_0_2px_4px_rgba(255,255,255,0.2)]",
            collapsed ? "w-12 h-12 px-0" : "w-full",
          ].join(" ")}
        >
          <span className="material-symbols-outlined">{collapsed ? "chevron_right" : "chevron_left"}</span>
          {!collapsed && "Contraer menú"}
        </button>
      </div>
    </nav>
  );
}
