import { RatingOpportunity, RatingOpportunityRequest, RatingOpportunityRespose } from "../types";
import restHandler from "./restHandler";

export async function createRatingOpportunity(request: RatingOpportunityRequest): Promise<RatingOpportunityRespose> {
    // antar alltid at alt går bra :)
  
    const response: RatingOpportunityRespose =
      await restHandler.postWithResponse<RatingOpportunityRespose>('/ratingOpportunity', request);
  
    // TODO: legge til feilhåndtering
    console.log(response);
    return response;
}

export async function getRatingOpportunityByUser(userId: number): Promise<RatingOpportunity[]> {
  // antar alltid at alt går bra :)

  const ratingOpportunities: RatingOpportunity[] = await restHandler.get<RatingOpportunity[]>('/ratingOpportunity/'+userId);
  
  // TODO: legge til feilhåndtering
  return ratingOpportunities;
}

