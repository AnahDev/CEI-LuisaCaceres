import Image from 'next/image';
import { BadgeCheck } from 'lucide-react';

export default function LoginHeader() {
  return (
    <div className="mb-8 text-center">
      <div className="relative mb-5 inline-block">
        <span className="grid size-20 place-items-center overflow-hidden rounded-[1.5rem] border-4 border-surface-container-lowest bg-surface-container-low shadow-[0_12px_28px_-16px_rgba(31,48,56,0.5)]">
          <Image
            src="/images/Logo.jpg"
            alt="Logotipo de UEC Luisa Cáceres de Arismendi"
            width={80}
            height={80}
            className="size-full object-cover"
          />
        </span>
        <span className="absolute -bottom-1.5 -right-1.5 grid size-8 place-items-center rounded-full border-4 border-surface-container-lowest bg-secondary-container text-secondary">
          <BadgeCheck className="size-4" aria-hidden="true" />
        </span>
      </div>

      <h1 className="font-display text-3xl font-extrabold tracking-tight text-on-surface">
        Panel de Administración
      </h1>
      <p className="mt-2 text-sm font-semibold text-on-surface-variant">
        Bienvenido de nuevo a UEC Luisa Cáceres de Arismendi
      </p>
    </div>
  );
}
