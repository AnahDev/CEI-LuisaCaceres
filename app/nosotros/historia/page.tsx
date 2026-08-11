import About from "../../components/about/About";
import InfoCard from "../../components/about/InfoCard";

export default function Home() {
    return (

        <main className="pt-24">
            {/* Resto de tus componentes... */}

            <About
                badge="Quienes Somos"
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
                imageSrc="/images/imagen 5.jpg"
                imageAlt="Niños con la bandera en el escenario"
                stat={{
                    value: "XX+",
                    label: <>Años de<br />experiencia</>
                }}
            />

            {/* Nueva sección para Misión y Visión */}
            <section className="max-w-7xl mx-auto px-6 mt-20">

                {/* Usamos CSS Grid para ponerlas lado a lado en PC, y apiladas en móviles */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <InfoCard
                        title="Nuestra Misión"
                        icon="track_changes" // Ícono de un objetivo (target)
                        description="Somos una institución que tiene un firme compromiso con nuestros alumnos, a quienes brindamos un programa integral educativo de calidad. Día con día, mediante un aprendizaje significativo, adquieren una formación con alto rendimiento académico."
                        colorHex="#6b21a8" // Un tono morado como el de tu referencia
                    />

                    <InfoCard
                        title="Nuestra Visión"
                        icon="visibility" // Ícono de un ojo
                        description="Seremos una escuela que aproveche al máximo la experiencia y el prestigio de que goza, para seguir brindando a los padres de familia una de las mejores opciones educativas en nuestra comunidad, procurando encaminar a nuestros educandos a vivir pacíficamente."
                        colorHex="#0284c7" // Un tono azul cielo como el de tu referencia
                    />

                </div>
            </section>

            {/* Resto de tus componentes... */}
        </main>
    );
}