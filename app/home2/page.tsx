import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* */}
      <header className="fixed top-0 w-full z-50 bg-[#faf9f6]/80 dark:bg-slate-900/80 backdrop-blur-2xl shadow-[0_4px_40px_rgba(48,51,48,0.06)] dark:shadow-none font-['Plus_Jakarta_Sans'] tracking-tight antialiased">
        <div className="flex justify-between items-center px-8 py-4 max-w-full mx-auto border-b bg-slate-50/50 dark:bg-slate-800/50 border-transparent">
          {/* */}
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined fill text-sky-600 dark:text-sky-400 text-3xl">school</span>
            <span className="text-xl font-extrabold text-sky-900 dark:text-sky-100">UEC Luisa Cáceres de Arismendi</span>
          </div>
          {/* */}
          <nav className="hidden md:flex items-center gap-6">
            <a className="text-sky-700 dark:text-sky-300 border-b-2 border-sky-600 dark:border-sky-400 pb-1 font-bold hover:bg-sky-50/50 dark:hover:bg-sky-900/20 rounded-full transition-all duration-300 px-4 py-2 active:scale-95 ease-in-out" href="#">Inicio</a>
            <a className="text-slate-500 dark:text-slate-400 hover:text-sky-600 font-medium transition-colors hover:bg-sky-50/50 dark:hover:bg-sky-900/20 rounded-full transition-all duration-300 px-4 py-2" href="#">Nosotros</a>
            <a className="text-slate-500 dark:text-slate-400 hover:text-sky-600 font-medium transition-colors hover:bg-sky-50/50 dark:hover:bg-sky-900/20 rounded-full transition-all duration-300 px-4 py-2" href="#">Publicaciones</a>
            <a className="text-slate-500 dark:text-slate-400 hover:text-sky-600 font-medium transition-colors hover:bg-sky-50/50 dark:hover:bg-sky-900/20 rounded-full transition-all duration-300 px-4 py-2" href="#">Material</a>
            <a className="text-slate-500 dark:text-slate-400 hover:text-sky-600 font-medium transition-colors hover:bg-sky-50/50 dark:hover:bg-sky-900/20 rounded-full transition-all duration-300 px-4 py-2" href="#">Admisiones</a>
            <a className="text-slate-500 dark:text-slate-400 hover:text-sky-600 font-medium transition-colors hover:bg-sky-50/50 dark:hover:bg-sky-900/20 rounded-full transition-all duration-300 px-4 py-2" href="#">Contacto</a>
          </nav>
          {/* */}
          <div className="hidden md:flex items-center">
            <button className="bg-gradient-to-br from-[#006789] to-[#62ccff] text-[#f4faff] px-6 py-2 rounded-full font-bold shadow-[inset_0_2px_0_rgba(255,255,255,0.2)] hover:opacity-90 transition-opacity">
              Admin
            </button>
          </div>
          {/* */}
          <button className="md:hidden text-sky-600 p-2">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </header>

      <main className="flex-grow font-['Plus_Jakarta_Sans']">
        {/* */}
        <section className="max-w-7xl mx-auto px-6 mb-24 mt-8 relative">
          <div className="relative rounded-xl overflow-hidden shadow-[0_8px_40px_rgba(48,51,48,0.08)] bg-[#f4f4f0] h-[600px] flex items-center justify-center">
            {/* */}
            <img alt="Happy children playing with building blocks in a bright, colorful preschool classroom" className="absolute inset-0 w-full h-full object-cover rounded-xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC536YZzB6zFOE-QjPyPp8YvcJje5SdlHfWRcBucOC7WOx0avOfj6cwA0L6JH-DxCwfz686Ff12KGi-Ru1SVGO8TncJFRPb8hS1HHj4Xjt9ptaqGINq7ivS28rvQKcRx9dX-ZvHuCD6Guu93knATT7Vn3amvh7txbBaCXoySR2o6BdMGusovIq9oa5yFi1GXp5PdTzqatApPs4llD_Y48cVVy2af80g6ofGPundQwg_kcqD3_bccwS3JGOy8wFz6UtnVB3gIaYhDIVf"/>
            {/* */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#006789]/80 to-transparent mix-blend-multiply rounded-xl"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#006789]/60 to-transparent rounded-xl"></div>
            {/* */}
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
            {/* */}
            <button className="absolute left-6 top-1/2 -translate-y-1/2 bg-[#faf9f6]/80 backdrop-blur-md p-3 rounded-full text-[#006789] hover:bg-[#faf9f6] transition-colors shadow-sm">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="absolute right-6 top-1/2 -translate-y-1/2 bg-[#faf9f6]/80 backdrop-blur-md p-3 rounded-full text-[#006789] hover:bg-[#faf9f6] transition-colors shadow-sm">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
            {/* */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
              <div className="w-3 h-3 rounded-full bg-[#ffffff] shadow-sm"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffffff]/50 hover:bg-[#ffffff]/80 cursor-pointer transition-colors"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffffff]/50 hover:bg-[#ffffff]/80 cursor-pointer transition-colors"></div>
            </div>
          </div>
        </section>

        {/* */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* */}
            <div className="flex flex-col gap-8">
              <div className="inline-block bg-[#cbfecc]/50 text-[#38643e] px-4 py-1.5 rounded-full text-sm font-bold tracking-wide w-max border border-[#cbfecc]">
                Nuestra Misión
              </div>
              <h2 className="font-extrabold text-4xl md:text-5xl text-[#006789] tracking-tight text-balance leading-tight">
                Creciendo juntos en un ambiente de cariño
              </h2>
              <div className="space-y-6 text-[#5d605c] text-lg leading-relaxed font-medium">
                <p>
                  En la UEC Luisa Cáceres de Arismendi, creemos que los primeros años son fundamentales. Nuestro compromiso es brindar una educación integral que fomente la curiosidad natural, el respeto mutuo y la alegría de aprender.
                </p>
                <p>
                  A través de metodologías innovadoras y un enfoque centrado en el bienestar emocional, preparamos a nuestros pequeños para ser individuos seguros, creativos y empáticos.
                </p>
              </div>
              <div className="flex gap-4 mt-4">
                <div className="flex items-center gap-3 bg-[#ffffff] p-4 rounded-xl shadow-[0_2px_20px_rgba(48,51,48,0.04)]">
                  <div className="bg-[#62ccff]/30 p-3 rounded-full text-[#006789]">
                    <span className="material-symbols-outlined fill text-3xl">favorite</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#303330]">Amor y Respeto</h4>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-[#ffffff] p-4 rounded-xl shadow-[0_2px_20px_rgba(48,51,48,0.04)]">
                  <div className="bg-[#f7a48b]/30 p-3 rounded-full text-[#8e4d39]">
                    <span className="material-symbols-outlined fill text-3xl">palette</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#303330]">Creatividad</h4>
                  </div>
                </div>
              </div>
            </div>
            {/* */}
            <div className="relative">
              {/* */}
              <div className="absolute inset-0 bg-[#62ccff]/20 rounded-xl transform rotate-3 scale-105 -z-10"></div>
              <img alt="Children painting in a colorful classroom" className="w-full h-[500px] object-cover rounded-xl shadow-[0_8px_30px_rgba(48,51,48,0.08)]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdFu6X2YuJL4lysGbkapBuJ6pBqU5txK9XRxlciERB5rgVWpsRBnEZSeq6TDn9Uz3fyHQ02IAa6Pacwtfn4-sDIRNLf6UkDD84z_XsxkKwi-2Wl77hr1gToO-2rI3OrqSMQXrzVGFlP-dDdgK0xXHHCMUbkzHn3d4uSA5Q2bOBEtKCswyJzVusEIrO_5zblXveOHnXm_VvQZH5uQiBSRQdYbt3iXUfsaClPh4l590jXB3KsDeuK5xAk9OAIBwhV_Z6M-tASfxdm9U-"/>
              {/* */}
              <div className="absolute -bottom-6 -left-6 bg-[#ffffff] p-6 rounded-xl shadow-[0_12px_40px_rgba(48,51,48,0.1)] flex items-center gap-4">
                <span className="text-4xl font-extrabold text-[#006789]">20+</span>
                <span className="text-sm font-bold text-[#5d605c] leading-tight">Años de<br/>experiencia</span>
              </div>
            </div>
          </div>
        </section>

        {/* */}
        <section className="bg-[#f4f4f0] py-24 rounded-xl mx-4 lg:mx-12 mb-32 shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 flex flex-col items-center gap-4">
              <span className="text-[#8e4d39] font-bold tracking-wider uppercase text-sm">¿Por qué elegirnos?</span>
              <h2 className="font-extrabold text-4xl md:text-5xl text-[#303330] tracking-tight">
                Lo mejor para tus pequeños
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* */}
              <div className="bg-[#ffffff] p-8 rounded-xl shadow-[0_4px_20px_rgba(48,51,48,0.03)] hover:-translate-y-2 transition-transform duration-300 group border border-[#b1b2af]/10">
                <div className="bg-[#62ccff]/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-3xl text-[#006789] fill">diversity_1</span>
                </div>
                <h3 className="font-bold text-xl text-[#303330] mb-3">Atención personalizada</h3>
                <p className="text-[#5d605c] leading-relaxed">Grupos reducidos para garantizar la atención individual que cada niño merece.</p>
              </div>
              {/* */}
              <div className="bg-[#ffffff] p-8 rounded-xl shadow-[0_4px_20px_rgba(48,51,48,0.03)] hover:-translate-y-2 transition-transform duration-300 group border border-[#b1b2af]/10">
                <div className="bg-[#f7a48b]/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-3xl text-[#8e4d39] fill">extension</span>
                </div>
                <h3 className="font-bold text-xl text-[#303330] mb-3">Aprendizaje divertido</h3>
                <p className="text-[#5d605c] leading-relaxed">Metodologías basadas en el juego que estimulan la curiosidad y la alegría de aprender.</p>
              </div>
              {/* */}
              <div className="bg-[#ffffff] p-8 rounded-xl shadow-[0_4px_20px_rgba(48,51,48,0.03)] hover:-translate-y-2 transition-transform duration-300 group border border-[#b1b2af]/10">
                <div className="bg-[#cbfecc]/30 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-3xl text-[#3c6942] fill">health_and_safety</span>
                </div>
                <h3 className="font-bold text-xl text-[#303330] mb-3">Ambiente seguro</h3>
                <p className="text-[#5d605c] leading-relaxed">Instalaciones diseñadas pensando en la seguridad física y emocional de los niños.</p>
              </div>
              {/* */}
              <div className="bg-[#ffffff] p-8 rounded-xl shadow-[0_4px_20px_rgba(48,51,48,0.03)] hover:-translate-y-2 transition-transform duration-300 group border border-[#b1b2af]/10">
                <div className="bg-[#4abff3]/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-3xl text-[#005a78] fill">psychology</span>
                </div>
                <h3 className="font-bold text-xl text-[#303330] mb-3">Desarrollo integral</h3>
                <p className="text-[#5d605c] leading-relaxed">Fomentamos habilidades cognitivas, sociales, motoras y emocionales en equilibrio.</p>
              </div>
            </div>
          </div>
        </section>

        {/* */}
        <section className="mb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
            <div>
              <h2 className="font-extrabold text-4xl text-[#006789] tracking-tight mb-2">Momentos Inolvidables</h2>
              <p className="text-[#5d605c] text-lg">Un vistazo a nuestro día a día lleno de alegría.</p>
            </div>
            <div className="hidden md:flex gap-4">
              <button className="bg-[#f4f4f0] p-4 rounded-full text-[#303330] hover:bg-[#e1e3df] transition-colors">
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
              <button className="bg-[#f4f4f0] p-4 rounded-full text-[#303330] hover:bg-[#e1e3df] transition-colors">
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
          {/* */}
          <div className="flex gap-6 px-6 md:px-12 pb-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar" style={{ scrollbarWidth: 'none' }}>
            <img alt="Kids playing outside" className="w-80 h-64 object-cover rounded-xl snap-center shrink-0 shadow-[0_4px_15px_rgba(48,51,48,0.05)]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfZflUQMvVAfWR2hxpu_hMt278KRkiyM6xJAcOdJFEQTydhJ6i2S-s01wCB8uAMQ_t1L0BFjEEcV2aaoSWX4oHw5lL5FCpz7W1KwIRbKiYgQaz8aGLWSTojlN2OG0LfT4G8SJvajmrE1UJHwWa-rHHz1qel06i6ikm4oyFv4sSjTa7x6CvupkTD1C2gW-b63f065SrW1MYuDYkXYJiBwkc9rsnjhSKnbkjrB5LGqZ4IQsx5_aAWmB5tFrvqZIeZ8lAch9Iz5a6S4Pj"/>
            <img alt="Kids reading books" className="w-80 h-64 object-cover rounded-xl snap-center shrink-0 shadow-[0_4px_15px_rgba(48,51,48,0.05)]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWmEJBxJl1nfsj4OAtBfuoO9SXd3R49ycCl1_SP6Zp4nu56qymwU6Pe3jKIBUynDT_lfqzFXBklf6I13uPtiWPgmdkhA48sK88c3na1qjvVH_xDxa1WA0U17LTmIMcAlfDsFUkdqYp9H1w-1VfQhSAY9NA8Jg2C_3X7PBBmIU32V0RZMt8vJnPlTKyF7arZW9DQDipggZAgljx5NqWaGTW8seJpfNZvlZsCDJfTutDgDBaz227Xr3VL_cs9YmZluAY3Hs3XYQWlCSv"/>
            <img alt="Kids doing crafts" className="w-80 h-64 object-cover rounded-xl snap-center shrink-0 shadow-[0_4px_15px_rgba(48,51,48,0.05)]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBz3C2Ss8kH0xPktBWZe6LVvzPYEoe1stFG-gp2NnZOj8bpQsZPmhJ8ndFK6tWcNq4v00Z05CHJ6AWrzR3V7HMcuhox13KzVIxrIXE9WgnYQzibSsHWmiELBViDQfSAUYwx8unPSxs_is3pD4MOPcwQmG03Z5PSBcf_LDbKl7F4f0pxn_sv75qB0BIOXv7emZXWzs0tVK25z9vGmQXfJQ1yYKfOsFh33QyBZ7jXrJm9O9Yoy0oREvbqBVOKJQevTHDsj0FRMy20_Q3j"/>
            <img alt="Kids playing music" className="w-80 h-64 object-cover rounded-xl snap-center shrink-0 shadow-[0_4px_15px_rgba(48,51,48,0.05)]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYAJ8AH1K6J4O3wFR81rw6Ms43Mh7CRr-qyv19H4F8eTQMRNaYpp6-lFpuU4dYmakp_VQKhydXpvYjCLI3DJwM5Hqs8q1Poe6voxapnxXzEy0bpTBdVN1720--9y_pJhYOuW0A4DCH7bHod7TM2q1zP5ENQ6Lwr_zNYuLgGpn_59cbk2RJWNOGrTR5XdtfZLpv83jeKLMepr3iQurw0NE9csr_1ehos_87FmPKU1MJ61L4ppo5TziBUhpIrtPWU6HXhEBe3aKT4lL2"/>
            <img alt="Kids having snack" className="w-80 h-64 object-cover rounded-xl snap-center shrink-0 shadow-[0_4px_15px_rgba(48,51,48,0.05)]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC37WFPeynJBrLwgiLNMj-lJ9O0CBPUtPj73Bf3pPV676sKzfJnmqvcYXzROV4bAY7y0FwYTv9ZLDL5WTVZRw7yinNoE8W1SUjYwg6twAHbeM1GM40crAgYojvsEGv6pTjjHUYTWXPRPUZ47wT5Bc4H6l6HY0UMLZNhzbffNQx8O8g4yhKDyDtKx6R0buO-e4BdfeNPtw0-m2XzoKsS9DsWKZo3rPRmqvUZ6Vx7uj_Xkt28QJkSKGGW-VjEm8fYHPzdcBMFK6UH_VNG"/>
          </div>
        </section>

        {/* */}
        <section className="max-w-5xl mx-auto px-6 mb-32">
          <div className="bg-[#cbfecc]/20 rounded-xl p-10 md:p-16 relative overflow-hidden shadow-[0_8px_30px_rgba(48,51,48,0.04)] border border-[#cbfecc]/30">
            {/* */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#cbfecc]/40 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#f7a48b]/20 rounded-full blur-3xl -ml-10 -mb-10"></div>
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="font-extrabold text-4xl md:text-5xl text-[#303330] tracking-tight mb-4">
                  Proceso de Admisión
                </h2>
                <p className="text-[#5d605c] text-lg max-w-2xl mx-auto">
                  Únete a nuestra familia. Aquí te detallamos los requisitos básicos para iniciar el proceso de inscripción.
                </p>
              </div>
              <div className="bg-[#ffffff] p-8 rounded-xl shadow-sm grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-12 border border-[#b1b2af]/10">
                {/* */}
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[#3c6942] font-bold bg-[#cbfecc]/50 p-1.5 rounded-full mt-0.5">check</span>
                  <div>
                    <h4 className="font-bold text-[#303330] text-lg">Copia de Partida de Nacimiento</h4>
                    <p className="text-[#5d605c] text-sm mt-1">Del niño o niña, legible y actualizada.</p>
                  </div>
                </div>
                {/* */}
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[#3c6942] font-bold bg-[#cbfecc]/50 p-1.5 rounded-full mt-0.5">check</span>
                  <div>
                    <h4 className="font-bold text-[#303330] text-lg">Copia de Cédula de Identidad</h4>
                    <p className="text-[#5d605c] text-sm mt-1">De ambos padres o representantes legales.</p>
                  </div>
                </div>
                {/* */}
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[#3c6942] font-bold bg-[#cbfecc]/50 p-1.5 rounded-full mt-0.5">check</span>
                  <div>
                    <h4 className="font-bold text-[#303330] text-lg">Cartón de Vacunas</h4>
                    <p className="text-[#5d605c] text-sm mt-1">Copia del control de vacunas al día.</p>
                  </div>
                </div>
                {/* */}
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[#3c6942] font-bold bg-[#cbfecc]/50 p-1.5 rounded-full mt-0.5">check</span>
                  <div>
                    <h4 className="font-bold text-[#303330] text-lg">Fotos tipo carnet</h4>
                    <p className="text-[#5d605c] text-sm mt-1">4 fotos del niño(a) y 2 de cada representante.</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <button className="bg-gradient-to-br from-[#006789] to-[#62ccff] text-[#f4faff] px-10 py-4 rounded-full font-bold text-lg shadow-[inset_0_2px_0_rgba(255,255,255,0.2),0_8px_20px_rgba(0,103,137,0.2)] hover:-translate-y-1 transition-transform duration-300 flex items-center gap-2">
                  Ver Admisiones Completas
                  <span className="material-symbols-outlined">assignment</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* */}
      <footer className="w-full rounded-t-[48px] mt-12 bg-[#f4f4f4] dark:bg-slate-950 font-['Plus_Jakarta_Sans'] text-sm leading-relaxed border-t border-[#e8e8e4] dark:border-slate-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-12 py-16 max-w-7xl mx-auto">
          {/* */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined fill text-sky-700 dark:text-sky-400 text-2xl">school</span>
              <span className="text-lg font-bold text-sky-900 dark:text-sky-100">UEC Luisa Cáceres de Arismendi</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 mt-4">
              © 2024 UEC Luisa Cáceres de Arismendi. Todos los derechos reservados.
            </p>
          </div>
          {/* */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sky-600 font-semibold mb-2 uppercase tracking-wider text-xs">Contacto</h4>
            <a className="text-slate-500 dark:text-slate-400 hover:text-sky-600 transition-colors hover:translate-y-[-2px] duration-200 focus:ring-2 focus:ring-sky-500 outline-none w-fit" href="#">Ubicación</a>
            <a className="text-slate-500 dark:text-slate-400 hover:text-sky-600 transition-colors hover:translate-y-[-2px] duration-200 focus:ring-2 focus:ring-sky-500 outline-none w-fit" href="#">Teléfono</a>
            <a className="text-slate-500 dark:text-slate-400 hover:text-sky-600 transition-colors hover:translate-y-[-2px] duration-200 focus:ring-2 focus:ring-sky-500 outline-none w-fit" href="#">Email</a>
          </div>
          {/* */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sky-600 font-semibold mb-2 uppercase tracking-wider text-xs">Redes Sociales</h4>
            <a className="text-slate-500 dark:text-slate-400 hover:text-sky-600 transition-colors hover:translate-y-[-2px] duration-200 focus:ring-2 focus:ring-sky-500 outline-none w-fit" href="#">Facebook</a>
            <a className="text-slate-500 dark:text-slate-400 hover:text-sky-600 transition-colors hover:translate-y-[-2px] duration-200 focus:ring-2 focus:ring-sky-500 outline-none w-fit" href="#">Instagram</a>
            <a className="text-slate-500 dark:text-slate-400 hover:text-sky-600 transition-colors hover:translate-y-[-2px] duration-200 focus:ring-2 focus:ring-sky-500 outline-none w-fit" href="#">WhatsApp</a>
          </div>
        </div>
      </footer>
    </>
  );
}