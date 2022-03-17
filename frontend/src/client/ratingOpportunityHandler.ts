import { request } from "http";
import { Post, PostRequest, PostResponse } from "../types";
import restHandler from "./restHandler";

export async function createRatingOpportunity(request: RatingOpportunityRequest): Promise<RatingOpportunityRespose> {
    // antar alltid at alt går bra :)
  
    const response: RatingOpportunityRespose =
      await restHandler.postWithResponse<RatingOpportunityRespose>('/ratingOpportunity', request);
  
    // TODO: legge til feilhåndtering
    console.log(response);
    return response;
  }