import Link from 'next/link';
import {
  Bus,
  ClipboardCheck,
  Clock,
  Headset,
  Mail,
  MapPin,
  MessageCircleHeart,
  Phone,
  Sparkles,
} from 'lucide-react';
import ContactCard from '../components/contact/ContactCard';
import LocationMap from '../components/contact/LocationMap';
import PageHero from '../components/ui/PageHero';
import Reveal from '../components/ui/Reveal';

export default function ContactoPage() {
  return (
    <main className="flex-grow">
      <PageHero
        badge="Estamos para ayudarte"
        title={
          <>
            Hablemos de tu <span className="text-primary">peque</span>
          </>
        }
        description="Resolvemos tus dudas sobre admisiones, metodologías o instalaciones. Escríbenos o visítanos cuando quieras."
        icon={MessageCircleHeart}
        tone="secondary"
      />

      <div className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Reveal variant="left">
            <ContactCard
              title="Nuestra ubicación"
              mainIcon={MapPin}
              tone="tertiary"
              details={[
                {
                  icon: MapPin,
                  label: 'Sede principal',
                  value: 'Calle India, Ciudad Guayana 8050, Bolívar',
                },
                {
                  icon: Bus,
                  label: 'Referencia',
                  value: 'Diagonal a la UNEG de Villa Asia',
                },
              ]}
            />
          </Reveal>

          <Reveal variant="right" delay={100}>
            <ContactCard
              title="Atención al público"
              mainIcon={Headset}
              tone="secondary"
              details={[
                {
                  icon: Clock,
                  label: 'Horario administrativo',
                  value: (
                    <>
                      Lunes a viernes
                      <br />
                      7:00 AM – 1:00 PM · 2:00 PM – 4:30 PM
                    </>
                  ),
                },
                {
                  icon: Phone,
                  label: 'Teléfonos',
                  value: '+58 (0286) 123-4567',
                },
                {
                  icon: Mail,
                  label: 'Correo electrónico',
                  value: 'info@luisacaceres.edu.ve',
                },
              ]}
            />
          </Reveal>
        </div>

        <Reveal delay={80}>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <a
              href="tel:+582861234567"
              className="card-clay flex items-center gap-3 p-4"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-primary-container text-primary">
                <Phone className="size-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-display text-sm font-extrabold text-on-surface">
                  Llámanos
                </span>
                <span className="text-xs font-semibold text-on-surface-variant">
                  Lun a vie · 7 AM a 4:30 PM
                </span>
              </span>
            </a>

            <a
              href="mailto:info@luisacaceres.edu.ve"
              className="card-clay flex items-center gap-3 p-4"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-tertiary-container text-tertiary">
                <Mail className="size-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-display text-sm font-extrabold text-on-surface">
                  Escríbenos
                </span>
                <span className="text-xs font-semibold text-on-surface-variant">
                  Respondemos en 24 h
                </span>
              </span>
            </a>

            <Link href="/admisiones" className="card-clay flex items-center gap-3 p-4">
              <span className="grid size-11 place-items-center rounded-xl bg-sun-container text-on-sun-container">
                <ClipboardCheck className="size-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-display text-sm font-extrabold text-on-surface">
                  Inscripciones
                </span>
                <span className="text-xs font-semibold text-on-surface-variant">
                  Descarga tu planilla
                </span>
              </span>
            </Link>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10">
            <LocationMap embedSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.207939505003!2d-62.72478140347875!3d8.282092610364469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8dcbfbddf55f0f95%3A0x1473365a96461b5f!2sCentro%20de%20Educaci%C3%B3n%20Inicial%20Luisa%20C%C3%A1ceres%20de%20Arismendi!5e0!3m2!1sen!2sus!4v1786489645178!5m2!1sen!2sus" />
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-[1.75rem] border border-outline-variant/40 bg-surface-container-low p-5 sm:flex-row sm:items-center">
            <p className="flex items-center gap-2 text-sm font-semibold text-on-surface-variant">
              <Sparkles className="size-4 text-tertiary" aria-hidden="true" />
              ¿Prefieres una visita? Te recibimos con mucho gusto.
            </p>
            <Link href="/admisiones" className="btn btn-primary btn-sm shrink-0">
              Solicitar cupo
            </Link>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
