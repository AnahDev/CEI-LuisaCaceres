'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, CircleAlert, Mail } from 'lucide-react';
import FormInput from '../ui/FormInput';
import PasswordInput from '../ui/PasswordInput';
import SubmitButton from '../ui/SubmitButton';
import { ApiError } from '@/lib/api';
import { login } from '@/lib/auth';

export default function LoginForm() {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (pending) return;

    const formData = new FormData(e.currentTarget);
    const email = String(formData.get('email') ?? '').trim();
    const password = String(formData.get('password') ?? '');

    setPending(true);
    setError(null);

    try {
      await login(email, password);
      router.replace('/dashboard');
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'Ocurrió un error inesperado');
      setPending(false);
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <FormInput
        id="email"
        name="email"
        type="email"
        label="Correo electrónico"
        icon={Mail}
        placeholder="admin@ueclca.edu.ve"
        autoComplete="email"
        required
      />

      <PasswordInput
        id="password"
        name="password"
        label="Contraseña"
        placeholder="••••••••"
        autoComplete="current-password"
        required
      />

      {error && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-xl border border-error/30 bg-error-container/40 px-4 py-3 text-sm font-semibold text-on-error-container"
        >
          <CircleAlert className="mt-0.5 size-[18px] shrink-0 text-error" aria-hidden="true" />
          <span>{error}</span>
        </div>
      )}

      <SubmitButton type="submit" icon={pending ? undefined : ArrowRight} disabled={pending}>
        {pending ? 'Ingresando…' : 'Iniciar sesión'}
      </SubmitButton>
    </form>
  );
}
