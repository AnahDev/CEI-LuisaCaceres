import NavLink from "./NavLink";
import { NAV_ITEMS, ACTIVE_NAV_ID } from "@/data/navigation";

interface SidebarProps {
  schoolName: string;
  logoUrl: string;
  onCreatePost?: () => void;
}

export default function Sidebar({ schoolName, logoUrl, onCreatePost }: SidebarProps) {
  return (
    <nav className="hidden md:flex flex-col bg-[#f4f4f0] h-screen w-72 rounded-r-[3rem] shadow-sm z-20">
      <div className="flex flex-col h-full p-6 gap-2">
        <div className="mb-8 px-4 flex items-center gap-4">
          <img
            className="w-12 h-12 rounded-full object-cover"
            src={logoUrl}
            alt={`Logotipo de ${schoolName}`}
          />
          <div>
            <h1 className="font-['Plus_Jakarta_Sans'] text-[1.125rem] font-bold text-[#006789] leading-tight tracking-tight">
              {schoolName}
            </h1>
            <p className="font-['Plus_Jakarta_Sans'] text-[0.875rem] text-[#5d605c] font-medium tracking-tight">
              Admin Portal
            </p>
          </div>
        </div>

        <div className="flex-1 space-y-1">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.id} item={item} active={item.id === ACTIVE_NAV_ID} />
          ))}
        </div>

        <button
          type="button"
          onClick={onCreatePost}
          className="mt-auto w-full py-4 bg-gradient-to-br from-[#006789] to-[#62ccff] text-[#f4faff] rounded-full font-['Plus_Jakarta_Sans'] font-bold text-[0.875rem] tracking-wide hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-[inset_0_2px_4px_rgba(255,255,255,0.2)]"
        >
          <span className="material-symbols-outlined">add</span>
          Post Update
        </button>
      </div>
    </nav>
  );
}
