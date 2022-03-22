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
  authorId: number | null;
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
  isActive: boolean;
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

export interface RatingOpportunityResponse {
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
  contacterFirstName: string,
  contacterLastName: string,
  contacterEmail: string,
}

export interface RatingPossibility {
  id: number,
  createdAt: Date,
  postId: number,
  contactedId: number,
  contacterId: number,
  accepted: boolean,
  title: string,
  forSale: boolean,
  contacterFirstName: string,
  contacterLastName: string,
  contactedFirstName: string,
  contactedLastName: string,
}

export interface RatingRequest {
  givenById: number,
  gottenById: number,
}

export interface RatingResponse {
  givenBy: number,
  gottenBy: number,
}
