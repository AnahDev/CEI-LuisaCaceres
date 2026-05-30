export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 mb-24 mt-8 relative">
      <div className="relative rounded-xl overflow-hidden shadow-[0_8px_40px_rgba(48,51,48,0.08)] bg-[#f4f4f0] h-[600px] flex items-center justify-center">
        <img alt="Niños jugando en preescolar" className="absolute inset-0 w-full h-full object-cover rounded-xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC536YZzB6zFOE-QjPyPp8YvcJje5SdlHfWRcBucOC7WOx0avOfj6cwA0L6JH-DxCwfz686Ff12KGi-Ru1SVGO8TncJFRPb8hS1HHj4Xjt9ptaqGINq7ivS28rvQKcRx9dX-ZvHuCD6Guu93knATT7Vn3amvh7txbBaCXoySR2o6BdMGusovIq9oa5yFi1GXp5PdTzqatApPs4llD_Y48cVVy2af80g6ofGPundQwg_kcqD3_bccwS3JGOy8wFz6UtnVB3gIaYhDIVf"/>
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#006789]/80 to-transparent mix-blend-multiply rounded-xl"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#006789]/60 to-transparent rounded-xl"></div>
        
        <div className="relative z-10 text-center px-8 md:px-16 lg:w-2/3 mx-auto flex flex-col items-center gap-8">
          <h1 className="font-extrabold text-5xl md:text-6xl lg:text-7xl text-[#ffffff] tracking-tight text-balance leading-tight drop-shadow-md">
            Educando con amor y valores
          </h1>
          <p className="text-xl text-[#ffffff]/90 font-medium max-w-xl mx-auto text-balance">
            Un espacio seguro y estimulante donde cada niño descubre su potencial a través del juego y la exploración.
          </p>
          <button className="mt-4 bg-gradient-to-br from-[#f7a48b] to-[#f7a48b] text-[#5c2615] px-10 py-4 rounded-full font-bold text-lg shadow-[inset_0_2px_0_rgba(255,255,255,0.4),0_8px_20px_rgba(247,164,139,0.3)] hover:scale-105 transition-transform duration-300 flex items-center gap-2">
            Conoce más
            <span className="material-symbols-outlined font-bold">arrow_forward</span>
          </button>
        </div>

        <button className="absolute left-6 top-1/2 -translate-y-1/2 bg-[#faf9f6]/80 backdrop-blur-md p-3 rounded-full text-[#006789] hover:bg-[#faf9f6] transition-colors shadow-sm">
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <button className="absolute right-6 top-1/2 -translate-y-1/2 bg-[#faf9f6]/80 backdrop-blur-md p-3 rounded-full text-[#006789] hover:bg-[#faf9f6] transition-colors shadow-sm">
          <span className="material-symbols-outlined">chevron_right</span>
        </button>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
          <div className="w-3 h-3 rounded-full bg-[#ffffff] shadow-sm"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffffff]/50 hover:bg-[#ffffff]/80 cursor-pointer transition-colors"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffffff]/50 hover:bg-[#ffffff]/80 cursor-pointer transition-colors"></div>
        </div>
      </div>
    </section>
  );
}