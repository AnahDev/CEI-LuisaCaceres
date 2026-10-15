export type AuthRole = "ADMIN" | "EDITOR";

export interface AuthUser {
  id: number;
  email: string;
  fullName: string;
  role: AuthRole;
  enabled: boolean;
}

export interface LoginResponse {
  token: string;
  tokenType: string;
  expiresInSeconds: number;
  user: AuthUser;
}
