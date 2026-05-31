export default function LoginHeader() {
  return (
    <div className="text-center mb-10">
      <div className="inline-block p-4 rounded-full bg-[#f4f4f0] mb-6 relative">
        <img 
          alt="UEC Luisa Cáceres de Arismendi Logo" 
          className="w-20 h-20 rounded-full object-cover shadow-sm" 
          src="images/Logo.jpg" 
        />
        <div className="absolute -bottom-1 -right-1 bg-[#cbfecc] p-1.5 rounded-full border-4 border-[#ffffff]">
          <span className="material-symbols-outlined text-[#3c6942] text-[16px] fill">verified_user</span>
        </div>
      </div>
      <h1 className="text-[#303330] text-2xl font-extrabold tracking-tight mb-2">
        Panel de Administración
      </h1>
      <p className="text-[#5d605c] text-sm font-medium">
        Bienvenido de nuevo a UEC Luisa Cáceres de Arismendi
      </p>
    </div>
  );
}