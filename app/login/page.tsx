'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ShieldCheck, Sparkles } from 'lucide-react';
import BackgroundBlobs from '../components/background/BackgroundBlobs';
import FloatingParticles from '../components/background/FloatingParticles';
import LoginHeader from '../components/form/LoginHeader';
import LoginForm from '../components/form/LoginForm';
import { clearSession, fetchCurrentUser, getToken } from '@/lib/auth';

export default function AdminLogin() {
  const router = useRouter();

  useEffect(() => {
    if (!getToken()) return;

    fetchCurrentUser()
      .then(() => router.replace('/dashboard'))
      .catch(() => clearSession());
  }, [router]);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background p-5">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,color-mix(in_oklab,var(--primary-container)_55%,transparent),transparent_26rem),radial-gradient(circle_at_88%_82%,color-mix(in_oklab,var(--sun-container)_60%,transparent),transparent_24rem)]"
      />
      <BackgroundBlobs />
      <FloatingParticles />

      <main className="relative z-10 w-full max-w-md animate-rise">

        <div className="mb-6 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-outline-variant/60 bg-surface-container-lowest/70 px-4 py-2 text-sm font-bold text-on-surface-variant backdrop-blur-sm transition-colors hover:border-primary/40 hover:text-primary"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Volver al inicio
          </Link>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-outline-variant/50 bg-surface-container-lowest/95 p-7 shadow-[0_40px_80px_-44px_rgba(31,48,56,0.55)] backdrop-blur-md sm:p-9">
          <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-primary via-sun to-tertiary" />

          <LoginHeader />
          <LoginForm />

          <div className="mt-7 flex items-start gap-2.5 rounded-xl bg-surface-container-low px-4 py-3">
            <ShieldCheck className="mt-0.5 size-4 shrink-0 text-secondary" aria-hidden="true" />
            <p className="text-xs font-semibold leading-relaxed text-on-surface-variant">
              Acceso exclusivo para personal autorizado. Si olvidaste tus
              credenciales, contacta a la dirección del colegio.
            </p>
          </div>
        </div>

        <p className="mt-6 flex items-center justify-center gap-1.5 text-xs font-bold text-on-surface-variant">
          <Sparkles className="size-3.5 text-tertiary" aria-hidden="true" />
          UEC Luisa Cáceres de Arismendi
        </p>
      </main>
    </div>
  );
}
