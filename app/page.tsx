// import About from "./components/home/About";
import Admissions from "./components/home/Admissions";
import Gallery from "./components/home/Gallery";
import Hero from "./components/home/Hero";
import WhyChooseUs from "./components/home/WhyChooseUs";
// import Header from "./components/layout/Header";

import About from "./components/about/About";


export default function Home() {
  return (
    <>
      {/* <Header /> */}

      <main className="flex-grow font-['Plus_Jakarta_Sans']">
        <Hero />
        {/* Componente About Reutilizable */}
        <About
          badge="Nuestra Misión"
          title="Creciendo juntos en un ambiente de cariño"
          paragraphs={[
            "En la UEC Luisa Cáceres de Arismendi, creemos que los primeros años son fundamentales. Nuestro compromiso es brindar una educación integral que fomente la curiosidad natural, el respeto mutuo y la alegría de aprender.",
            "A través de metodologías innovadoras y un enfoque centrado en el bienestar emocional, preparamos a nuestros pequeños para ser individuos seguros, creativos y empáticos."
          ]}
          features={[
            {
              icon: "favorite",
              title: "Amor y Respeto",
              bgColor: "bg-[#62ccff]/30",
              iconColor: "text-[#006789]"
            },
            {
              icon: "palette",
              title: "Creatividad",
              bgColor: "bg-[#f7a48b]/30",
              iconColor: "text-[#8e4d39]"
            }
          ]}
          imageSrc="/images/imagen 5.jpg" // Asegúrate de que esta sea la ruta correcta de tu imagen
          imageAlt="Niños celebrando con la bandera en el escenario"
          stat={{
            value: "XX+",
            label: <>Años de<br />experiencia</>
          }}
        />
        {/* <About /> */}
        <WhyChooseUs />
        <Gallery />
        <Admissions />
      </main>

    </>
  );
}