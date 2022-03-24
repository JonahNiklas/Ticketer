import { RatingPossibility, RatingOpportunity, RatingOpportunityRequest, RatingOpportunityResponse } from "../types";
import restHandler from "./restHandler";

export async function createRatingOpportunity(request: RatingOpportunityRequest): Promise<RatingOpportunityResponse> {
    // antar alltid at alt går bra :)
  
    const response: RatingOpportunityResponse =
      await restHandler.postWithResponse<RatingOpportunityResponse>('/ratingOpportunity', request);
  
    // TODO: legge til feilhåndtering
    return response;
}

export async function getRatingOpportunityByUser(userId: number): Promise<RatingOpportunity[]> {
  const ratingOpportunities: RatingOpportunity[] = await restHandler.get<RatingOpportunity[]>('/ratingOpportunity/'+userId);
  
  // TODO: legge til feilhåndtering
  return ratingOpportunities;
}

export async function acceptRatingOpportunity(ratingOpportunityId: number): Promise<RatingOpportunityResponse> {

  const ratingOpportunities: RatingOpportunityResponse = await restHandler.put<RatingOpportunityResponse>('/ratingOpportunity/'+ratingOpportunityId);
  
  return ratingOpportunities;
}

export async function getAcceptedRatingOpportunityByUser(userId: number): Promise<RatingPossibility[]> {
  const acceptedRatingOpportunities: RatingPossibility[] = await restHandler.get<RatingPossibility[]>('/ratingOpportunity/accepted/'+userId);
  
  // TODO: legge til feilhåndtering
  return acceptedRatingOpportunities;
}
