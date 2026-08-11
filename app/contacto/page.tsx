import ContactCard from "../components/contact/ContactCard";
import LocationMap from "../components/contact/LocationMap"; // ajusta la ruta si organizas distinto

export default function ContactoPage() {
    return (
        <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto font-['Plus_Jakarta_Sans']">

            {/* Título de la página */}
            <div className="text-center mb-16">
                <span className="inline-block bg-[#EBF7F0] text-[#348C59] text-sm font-bold px-5 py-2 rounded-full mb-4">
                    Estamos para ayudarte
                </span>
                <h1 className="text-4xl md:text-5xl font-extrabold text-[#0B4D5A] tracking-tight">
                    Ponte en contacto con nosotros
                </h1>
                <p className="text-[#5A6474] text-lg mt-4 max-w-2xl mx-auto">
                    Estamos aquí para resolver cualquier duda que tengas sobre nuestro proceso de admisión, metodologías o instalaciones.
                </p>
            </div>

            {/* Cuadrícula de Tarjetas de Contacto */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">

                {/* Tarjeta de Ubicación */}
                <ContactCard
                    title="Nuestra Ubicación"
                    mainIcon="map"
                    colorHex="#ea580c"
                    details={[
                        {
                            icon: "location_on",
                            label: "Sede Principal",
                            value: "Calle India, Ciudad Guayana 8050, Bolívar"
                        },
                        {
                            icon: "directions_bus",
                            label: "Referencia",
                            value: "Diagonal a la UNEG de Villa Asia"
                        }
                    ]}
                />

                {/* Tarjeta de Horarios y Contacto */}
                <ContactCard
                    title="Atención al Público"
                    mainIcon="support_agent"
                    colorHex="#16a34a"
                    details={[
                        {
                            icon: "schedule",
                            label: "Horario Administrativo",
                            value: (
                                <>
                                    Lunes a Viernes <br />
                                    7:00 AM - 1:00 PM <br />
                                    2:00 PM - 4:30 PM
                                </>
                            )
                        },
                        {
                            icon: "call",
                            label: "Teléfonos",
                            value: "+58 (0286) 123-4567"
                        },
                        {
                            icon: "mail",
                            label: "Correo Electrónico",
                            value: "info@luisacaceres.edu.ve"
                        }
                    ]}
                />

            </div>

            {/* Mapa de ubicación — reemplaza embedSrc con tu URL real de Google Maps */}
            <LocationMap embedSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.207939505003!2d-62.72478140347875!3d8.282092610364469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8dcbfbddf55f0f95%3A0x1473365a96461b5f!2sCentro%20de%20Educaci%C3%B3n%20Inicial%20Luisa%20C%C3%A1ceres%20de%20Arismendi!5e0!3m2!1sen!2sus!4v1786489645178!5m2!1sen!2sus" />

            {/* <LocationMap query="Centro de Educación Inicial Luisa Cáceres de Arismendi, Ciudad Guayana, Bolívar" /> */}

        </main>
    );
}

