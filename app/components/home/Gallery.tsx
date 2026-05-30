const GALLERY_IMAGES = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBfZflUQMvVAfWR2hxpu_hMt278KRkiyM6xJAcOdJFEQTydhJ6i2S-s01wCB8uAMQ_t1L0BFjEEcV2aaoSWX4oHw5lL5FCpz7W1KwIRbKiYgQaz8aGLWSTojlN2OG0LfT4G8SJvajmrE1UJHwWa-rHHz1qel06i6ikm4oyFv4sSjTa7x6CvupkTD1C2gW-b63f065SrW1MYuDYkXYJiBwkc9rsnjhSKnbkjrB5LGqZ4IQsx5_aAWmB5tFrvqZIeZ8lAch9Iz5a6S4Pj",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDWmEJBxJl1nfsj4OAtBfuoO9SXd3R49ycCl1_SP6Zp4nu56qymwU6Pe3jKIBUynDT_lfqzFXBklf6I13uPtiWPgmdkhA48sK88c3na1qjvVH_xDxa1WA0U17LTmIMcAlfDsFUkdqYp9H1w-1VfQhSAY9NA8Jg2C_3X7PBBmIU32V0RZMt8vJnPlTKyF7arZW9DQDipggZAgljx5NqWaGTW8seJpfNZvlZsCDJfTutDgDBaz227Xr3VL_cs9YmZluAY3Hs3XYQWlCSv",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBz3C2Ss8kH0xPktBWZe6LVvzPYEoe1stFG-gp2NnZOj8bpQsZPmhJ8ndFK6tWcNq4v00Z05CHJ6AWrzR3V7HMcuhox13KzVIxrIXE9WgnYQzibSsHWmiELBViDQfSAUYwx8unPSxs_is3pD4MOPcwQmG03Z5PSBcf_LDbKl7F4f0pxn_sv75qB0BIOXv7emZXWzs0tVK25z9vGmQXfJQ1yYKfOsFh33QyBZ7jXrJm9O9Yoy0oREvbqBVOKJQevTHDsj0FRMy20_Q3j",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCYAJ8AH1K6J4O3wFR81rw6Ms43Mh7CRr-qyv19H4F8eTQMRNaYpp6-lFpuU4dYmakp_VQKhydXpvYjCLI3DJwM5Hqs8q1Poe6voxapnxXzEy0bpTBdVN1720--9y_pJhYOuW0A4DCH7bHod7TM2q1zP5ENQ6Lwr_zNYuLgGpn_59cbk2RJWNOGrTR5XdtfZLpv83jeKLMepr3iQurw0NE9csr_1ehos_87FmPKU1MJ61L4ppo5TziBUhpIrtPWU6HXhEBe3aKT4lL2",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC37WFPeynJBrLwgiLNMj-lJ9O0CBPUtPj73Bf3pPV676sKzfJnmqvcYXzROV4bAY7y0FwYTv9ZLDL5WTVZRw7yinNoE8W1SUjYwg6twAHbeM1GM40crAgYojvsEGv6pTjjHUYTWXPRPUZ47wT5Bc4H6l6HY0UMLZNhzbffNQx8O8g4yhKDyDtKx6R0buO-e4BdfeNPtw0-m2XzoKsS9DsWKZo3rPRmqvUZ6Vx7uj_Xkt28QJkSKGGW-VjEm8fYHPzdcBMFK6UH_VNG"
];

export default function Gallery() {
  return (
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
      <div className="flex gap-6 px-6 md:px-12 pb-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar" style={{ scrollbarWidth: 'none' }}>
        {GALLERY_IMAGES.map((src, idx) => (
          <img key={idx} alt={`Gallery image ${idx + 1}`} className="w-80 h-64 object-cover rounded-xl snap-center shrink-0 shadow-[0_4px_15px_rgba(48,51,48,0.05)]" src={src}/>
        ))}
      </div>
    </section>
  );
}