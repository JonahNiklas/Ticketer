import { CreateRatingRequest, Rating, RatingRequest, RatingResponse } from "../types";
import restHandler from "./restHandler";

export async function createRating(request: CreateRatingRequest): Promise<RatingResponse> {
  // antar alltid at alt går bra :)

  const response: RatingResponse = await restHandler.postWithResponse<RatingResponse>("/rating", request);
  
  // TODO: legge til feilhåndtering

  return response;
}

export async function rateUser(request: RatingRequest): Promise<RatingResponse> {

  const response: RatingResponse = await restHandler.put<RatingResponse>("/rating", request);
  
  // TODO: legge til feilhåndtering

  return response;
}

export async function getRatingsToGive(userId: number): Promise<Rating[]> {
  const ratingOpportunities: Rating[] = await restHandler.get<Rating[]>('/rating/user/'+userId);
  
  // TODO: legge til feilhåndtering
  return ratingOpportunities;
}