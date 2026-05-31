'use client';

import FormInput from '../ui/FormInput';
import PasswordInput from '../ui/PasswordInput';
import SubmitButton from '../ui/SubmitButton';

export default function LoginForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí irá tu lógica de autenticación (fetch, axios, NextAuth, etc.)
    console.log("Intentando iniciar sesión...");
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <FormInput 
        id="email"
        name="email"
        type="email"
        label="Correo electrónico"
        icon="mail"
        placeholder="admin@ueclca.edu.ve"
        required
      />
      
      <PasswordInput 
        id="password"
        name="password"
        label="Contraseña"
        placeholder="••••••••"
        required
      />

      <SubmitButton type="submit" icon="arrow_forward">
        Iniciar Sesión
      </SubmitButton>
    </form>
  );
}