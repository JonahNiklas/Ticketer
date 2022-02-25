import { PostRequest, PostResponse } from "../types";
import restHandler from "./restHandler";

export async function createPost(request: PostRequest): Promise<PostResponse> {
  // antar alltid at alt går bra :)

  const response: PostResponse = await restHandler.postWithResponse<PostResponse>("/post/create", request);
  
  // TODO: legge til feilhåndtering
  console.log(response);
  return response;
}