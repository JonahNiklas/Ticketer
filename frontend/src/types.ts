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
