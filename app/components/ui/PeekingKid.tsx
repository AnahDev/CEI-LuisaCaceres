type PeekingKidProps = {
    /** 'nino' o 'nina' (imágenes en public/kids/), o una ruta propia */
    kid?: 'nino' | 'nina';
    src?: string;
    /** Ancho en px */
    width?: number;
    /** Segundos de espera antes de la primera aparición */
    delay?: number;
    /** Duración del ciclo completo (sube, se queda, baja) */
    duration?: number;
    /** Cuánto bajan las manos sobre el borde, en % de la altura de la imagen */
    overlap?: number;
    /** Clases de posición, ej. 'left-[12%]' o 'right-16' */
    className?: string;
    /** Ocultar en móvil */
    hideOnMobile?: boolean;
};

/**
 * Colócalo DENTRO de un contenedor con `relative` y SIN `overflow-hidden`.
 * El niño se apoya en el borde superior y deja caer las manos sobre él.
 */
export default function PeekingKid({
    kid = 'nino',
    src,
    width = 120,
    delay = 0,
    duration = 8,
    overlap = 6,
    className = '',
    hideOnMobile = true,
}: PeekingKidProps) {
    return (
        <div
            aria-hidden="true"
            className={`pointer-events-none absolute bottom-full z-10 overflow-hidden ${hideOnMobile ? 'hidden md:block' : ''
                } ${className}`}
            style={{ width, transform: `translateY(${overlap}%)` }}
        >
            <div
                className="peek-kid"
                style={{
                    animationDelay: `${delay}s`,
                    animationDuration: `${duration}s`,
                }}
            >
                <img
                    src={src ?? `images/kids/${kid}.png`}
                    alt=""
                    width={width}
                    loading="lazy"
                    draggable={false}
                    className="peek-kid-img block h-auto w-full select-none"
                />
            </div>
        </div>
    );
}