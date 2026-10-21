const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080";

interface ProblemDetail {
  detail?: string;
  errors?: Record<string, string>;
}

export class ApiError extends Error {
  readonly status: number;
  readonly fieldErrors?: Record<string, string>;

  constructor(status: number, message: string, fieldErrors?: Record<string, string>) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.fieldErrors = fieldErrors;
  }
}

export interface ApiFetchOptions {
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  body?: unknown;
  token?: string | null;
  signal?: AbortSignal;
  cache?: RequestCache;
}

/**
 * Cliente de la API REST (Spring Boot, base `/api/v1`).
 * Las respuestas de error del backend son ProblemDetail (RFC 7807).
 * También acepta FormData para subidas multipart (sin Content-Type manual).
 */
export async function apiFetch<T>(path: string, options: ApiFetchOptions = {}): Promise<T> {
  const { method = "GET", body, token, signal, cache } = options;
  const isFormData = typeof FormData !== "undefined" && body instanceof FormData;

  let response: Response;
  try {
    response = await fetch(`${API_URL}/api/v1${path}`, {
      method,
      headers: {
        ...(body !== undefined && !isFormData ? { "Content-Type": "application/json" } : {}),
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: body === undefined ? undefined : isFormData ? (body as FormData) : JSON.stringify(body),
      signal,
      cache,
    });
  } catch {
    throw new ApiError(0, "No se pudo conectar con el servidor. Verifica que la API esté en línea.");
  }

  if (response.status === 204) {
    return undefined as T;
  }

  const payload = (await response.json().catch(() => null)) as ProblemDetail | null;

  if (!response.ok) {
    throw new ApiError(response.status, payload?.detail ?? "Ocurrió un error inesperado", payload?.errors);
  }

  return payload as T;
}
