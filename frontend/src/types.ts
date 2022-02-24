export interface TokenInfo {
  token: string | null;
}

export interface UserInfo {
  userId: number | null;
}

export interface RestError {
  errorMessage?: string
  errorCode?: number
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  ownerId: number;
}
