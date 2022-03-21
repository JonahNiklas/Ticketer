export interface Post {
  id: Number;
  createdAt: Date;
  timeOfEvent: Date;
  city: String;
  venue: String;
  isActive: boolean;
  forSale: boolean;
  title: String;
  description?: String;
  catgetory: string;
  price?: Number;
}

export interface Token {
  id: Number;
  createdAt: Date;
  token: string;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  posts: Post[];
  token?: Token;
  // eslint-disable-next-line no-use-before-define
  ratingsGiven: Rating[];
  // eslint-disable-next-line no-use-before-define
  ratingsGotten: Rating[];
}

export interface Rating {
  id: Number;
  createdAt: Date;
  rating: Number;
  givenBy: User;
  gottenBy: User;
  description?: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  id: Number;
  email: string;
  firstName: string;
  lastName: string;
}

export interface DecodedData {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  iat: number;
  exp: number;
}

export interface UserRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface UpdateRequest {
  id: number,
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface RestResponse {
  code: number;
  message: string;
}

export interface TokenRestResponse {
  code: number;
  message: Token;
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
  contacterEmail: string
}