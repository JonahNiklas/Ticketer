import { InsHTMLAttributes } from "react";

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
  message: string;
}

export interface UpdateRequest {
  id: number,
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

//johan som tuller litt her
export interface Post {
  id: number;
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
  id: number,
  firstName: string,
  lastName: string,
  email: string,
}

export interface RatingOpportunityRequest {
  contactedId: number,
  contacterId: number,
  postId: number
}

export interface RatingOpportunityRespose {
  code: number,
  message: string
  
}

export interface RatingOpportunity {
  id: number,
  createdAt: Date,
  postId: number,
  contactedId: number,
  contacterId: number,
  accepted: boolean,
  title: string,
  forSale: boolean,
  contacterName: string,
  contacterEmail: string,
}

/* export interface RatingRequest {

}

export interface RatingResponse {

} */