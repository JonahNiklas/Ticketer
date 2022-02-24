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

export interface RegisterUser {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export interface RegisterResponse {
  message: string;
}