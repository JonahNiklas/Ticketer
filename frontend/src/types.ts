export interface TokenInfo {
  token: string | null;
}

export interface UserInfo {
  userId: number | null;
}

export interface RestError {
  errorMessage?: string;
  errorCode?: number;
}

export interface RegisterRequest {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export interface RegisterResponse {
  message: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  ownerId: number;
}

export interface PostRequest {
  timeOfEvent: Date;
  city: string;
  venue: string;
  forSale: boolean;
  title: string;
  description: string | null;
  category: string;
  price: number | null;
  authorId: number;
}

export interface PostResponse {
  message: string,
}

//johan som tuller litt her
export interface Post {
  createdAt: Date;
  timeOfEvent: Date;
  city: string;
  venue: string;
  forSale: boolean;
  title: string;
  description: string | null;
  category: string;
  price: number | null;
  authorId: number;
}

export interface userData {
  firstName: string,
  lastName: string,
  email: string,
  town: string | null,
  country: string | null

}