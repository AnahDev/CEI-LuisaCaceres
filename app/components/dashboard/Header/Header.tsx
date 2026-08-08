interface HeaderProps {
  schoolName: string;
  section: string;
  currentPage: string;
  avatarUrl: string;
}

export default function Header({ schoolName, section, currentPage, avatarUrl }: HeaderProps) {
  return (
    <header className="sticky top-0 z-10 w-full bg-[rgba(250,249,246,0.8)] backdrop-blur-2xl flex justify-between items-center px-8 py-6">
      <div className="md:hidden flex items-center gap-4">
        <button type="button" className="text-[#5d605c]" aria-label="Abrir menú">
          <span className="material-symbols-outlined">menu</span>
        </button>
        <span className="font-['Plus_Jakarta_Sans'] text-lg font-black bg-clip-text text-transparent bg-gradient-to-r from-[#006789] to-[#62ccff] tracking-tight">
          {schoolName}
        </span>
      </div>

      <div className="hidden md:block">
        <nav className="flex text-[0.875rem] text-[#5d605c]" aria-label="Breadcrumb">
          <a className="hover:text-[#006789] transition-colors" href="#">
            {section}
          </a>
          <span className="mx-2">/</span>
          <span className="text-[#006789] font-medium">{currentPage}</span>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          aria-label="Ayuda"
          className="text-[#5d605c] hover:bg-[rgba(225,227,223,0.2)] p-2 rounded-full transition-all active:opacity-80"
        >
          <span className="material-symbols-outlined">help_outline</span>
        </button>
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#faf9f6] shadow-sm ml-2">
          <img className="w-full h-full object-cover" src={avatarUrl} alt="Foto de perfil del administrador" />
        </div>
      </div>
    </header>
  );
}
