import { Heart, Palette } from 'lucide-react';
import Admissions from './components/home/Admissions';
import FinalCta from './components/home/FinalCta';
import Gallery from './components/home/Gallery';
import Hero from './components/home/Hero';
import MarqueeRibbon from './components/home/MarqueeRibbon';
import WhyChooseUs from './components/home/WhyChooseUs';
import About from './components/about/About';

export default function Home() {
  return (
    <main className="flex-grow">
      <Hero />
      <MarqueeRibbon />

      <div id="nosotros" className="scroll-mt-28">
        <About
          badge="Nuestra Misión"
          title={
            <>
              Creciendo juntos en un ambiente de{' '}
              <span className="text-tertiary">cariño</span>
            </>
          }
          paragraphs={[
            'En la UEC Luisa Cáceres de Arismendi, creemos que los primeros años son fundamentales. Nuestro compromiso es brindar una educación integral que fomente la curiosidad natural, el respeto mutuo y la alegría de aprender.',
            'A través de metodologías innovadoras y un enfoque centrado en el bienestar emocional, preparamos a nuestros pequeños para ser individuos seguros, creativos y empáticos.',
          ]}
          features={[
            {
              icon: Heart,
              title: 'Amor y respeto',
              bgColor: 'bg-primary-container',
              iconColor: 'text-primary',
            },
            {
              icon: Palette,
              title: 'Creatividad',
              bgColor: 'bg-tertiary-container',
              iconColor: 'text-tertiary',
            },
          ]}
          imageSrc="/images/imagen 5.jpg"
          imageAlt="Niños celebrando con la bandera en el escenario"
          stat={{
            value: '100%',
            label: 'Atención cercana',
          }}
        />
      </div>

      <WhyChooseUs />
      <Gallery />
      <Admissions />
      <FinalCta />
    </main>
  );
}
