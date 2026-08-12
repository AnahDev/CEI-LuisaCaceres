import About from "../../components/about/About";
import InfoCard from "../../components/about/InfoCard";
import HistoryFeature from "@/app/components/home/HistoryFeature";

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


            <section className="mt-20">
                <About
                    badge="Algo de Historia"
                    title="Luisa Cáceres"
                    paragraphs={[
                        "Luisa Cáceres Díaz de Arismendi nació en Caracas el 25 de septiembre de 1799. Su padre, Domingo Cáceres, y su hermano Félix fueron asesinados por los realistas en el pueblo de Ocumare en 1814, lo que la llevó a participar en el Éxodo de Caracas de 1814 y emigrar con el resto de su familia a Isla Margarita. Se casó con el general Juan Bautista Arismendi el 4 de diciembre de 1814; se habían conocido en Caracas durante la Navidad de 1813.",

                        "En 1815, fue detenida por las autoridades españolas con el propósito de presionar a su esposo Arismendi, quien para entonces estaba librando una feroz campaña contra las fuerzas realistas.Fue llevada a Cádiz; sin embargo, en el camino, el barco en el que viajaba fue atacado por un buque corsario, y ella y otros pasajeros quedaron varados en la Isla Santa María, ubicada en las Azores. Luisa finalmente llegó a Cádiz el 17 de enero de 1817. Fue presentada al capitán general de Andalucía, quien protestó contra la decisión arbitraria de las autoridades españolas en las Américas, y le otorgó a Luisa la categoría de confinada.",

                        "No obstante, nunca abandonó sus ideales independentistas. Después de ser liberada, regresó a Venezuela el 26 de julio de 1818, y continuó apoyando las ideas de libertad y soberanía del pueblo americano. Vivió en Caracas hasta su muerte el 2 de junio de 1866. En reconocimiento a su lucha por la independencia venezolana, sus restos fueron sepultados en el Panteón Nacional en 1876. Actualmente, aparece en el billete de 20 bolívares fuertes.",

                    ]}
                    imageSrc="/images/luisa-caceres-arismendi.jpg"
                    imageAlt="Retrato de Luisa Cáceres de Arismendi"
                    reverse={true}
                />
            </section>


            {/* <div className="mt-20">
                <HistoryFeature
                    badge="Nuestra Historia"
                    title="Luisa Cáceres"
                    paragraphs={[
                        "Luisa Cáceres Díaz de Arismendi nació en Caracas el 25 de septiembre de 1799.[1] Su padre, Domingo Cáceres, y su hermano Félix fueron asesinados por los realistas en el pueblo de Ocumare en 1814, lo que la llevó a participar en el Éxodo de Caracas de 1814 y emigrar con el resto de su familia a Isla Margarita.[2] Se casó con el general Juan Bautista Arismendi el 4 de diciembre de 1814; se habían conocido en Caracas durante la Navidad de 1813.",

                        "En 1815, fue detenida por las autoridades españolas con el propósito de presionar a su esposo Arismendi, quien para entonces estaba librando una feroz campaña contra las fuerzas realistas.[3] Sin embargo, el gobernador de la isla, Joaquín Urreiztieta, no logró obtener nada de ella ni de su esposo, por lo que Luisa permaneció prisionera en la fortaleza de Santa Rosa, donde dio a luz a una niña que murió al nacer.[4] Posteriormente, fue trasladada a la fortaleza de Pampatar, luego a La Guaira y finalmente fue enviada a España en 1816, donde también fue víctima de torturas para que renunciara a sus ideales republicanos.",

                        "Fue llevada a Cádiz; sin embargo, en el camino, el barco en el que viajaba fue atacado por un buque corsario, y ella y otros pasajeros quedaron varados en la Isla Santa María, ubicada en las Azores. Luisa finalmente llegó a Cádiz el 17 de enero de 1817.[3] Fue presentada al capitán general de Andalucía, quien protestó contra la decisión arbitraria de las autoridades españolas en las Américas, y le otorgó a Luisa la categoría de confinada.",

                        "No obstante, nunca abandonó sus ideales independentistas. Después de ser liberada, regresó a Venezuela el 26 de julio de 1818,[3] y continuó apoyando las ideas de libertad y soberanía del pueblo americano. Vivió en Caracas hasta su muerte el 2 de junio de 1866. En reconocimiento a su lucha por la independencia venezolana, sus restos fueron sepultados en el Panteón Nacional en 1876. Actualmente, aparece en el billete de 20 bolívares fuertes.",
                    ]}
                    imageSrc="/images/luisa-caceres-arismendi.jpg"
                    imageAlt="Retrato de Luisa Cáceres de Arismendi"
                />
            </div> */}



            {/* Resto de tus componentes... */}
        </main >
    );
}