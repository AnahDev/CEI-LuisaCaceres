import { apiFetch, type ApiFetchOptions } from "@/lib/api";
import type { AuthUser, LoginResponse } from "@/types/auth";

const TOKEN_KEY = "kindergarten.token";

export function getToken(): string | null {
  if (typeof window === "undefined") {
    return null;
  }
  return window.localStorage.getItem(TOKEN_KEY);
}

export function clearSession() {
  if (typeof window === "undefined") {
    return;
  }
  window.localStorage.removeItem(TOKEN_KEY);
}

export async function login(email: string, password: string): Promise<AuthUser> {
  const session = await apiFetch<LoginResponse>("/auth/login", {
    method: "POST",
    body: { email, password },
  });

  window.localStorage.setItem(TOKEN_KEY, session.token);
  return session.user;
}

export async function fetchCurrentUser(): Promise<AuthUser> {
  return apiFetch<AuthUser>("/auth/me", { token: getToken() });
}

/** Petición autenticada: adjunta el token de la sesión actual. */
export async function authFetch<T>(path: string, options: Omit<ApiFetchOptions, "token"> = {}): Promise<T> {
  return apiFetch<T>(path, { ...options, token: getToken() });
}
