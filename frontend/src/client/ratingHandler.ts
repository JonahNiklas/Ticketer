import { RatingRequest, RatingResponse } from "../types";
import restHandler from "./restHandler";

export async function createRating(request: RatingRequest): Promise<RatingResponse> {
  // antar alltid at alt går bra :)

  const response: RatingResponse = await restHandler.postWithResponse<RatingResponse>("/rating", request);
  
  // TODO: legge til feilhåndtering

  return response;
}
