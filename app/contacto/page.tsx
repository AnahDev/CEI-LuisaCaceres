import ContactCard from "../components/contact/ContactCard";// Ajusta esta ruta según donde guardaste el componente

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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Tarjeta de Ubicación */}
                <ContactCard
                    title="Nuestra Ubicación"
                    mainIcon="map"
                    colorHex="#ea580c" // Naranja
                    details={[
                        {
                            icon: "location_on",
                            label: "Sede Principal",
                            value: "Av. Principal, Sector Centro. Ciudad Guayana, Estado Bolívar, Venezuela."
                        },
                        {
                            icon: "directions_bus",
                            label: "Referencia",
                            value: "A dos cuadras de la plaza central, frente al parque."
                        }
                    ]}
                />

                {/* Tarjeta de Horarios y Contacto */}
                <ContactCard
                    title="Atención al Público"
                    mainIcon="support_agent"
                    colorHex="#16a34a" // Verde
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
        </main>
    );
}