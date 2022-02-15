export interface TokenInfo {
  token: string | null;
}

export interface UserInfo {
  userId: number | null;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  email: string;
  id: string;
  firstName: string;
  lastName: string;
  token: string;
}