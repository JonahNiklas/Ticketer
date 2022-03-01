import { Post, PostRequest, PostResponse, userData } from "../types";
import restHandler from "./restHandler";

export async function createPost(request: PostRequest): Promise<PostResponse> {
  // antar alltid at alt går bra :)

  const response: PostResponse = await restHandler.postWithResponse<PostResponse>("/post/create", request);
  
  // TODO: legge til feilhåndtering
  console.log(response);
  return response;
}

export async function getPosts(): Promise<Post[]> {
  // antar alltid at alt går bra :)

  const posts: Post[] = await restHandler.get<Post[]>("/post");
  
  // TODO: legge til feilhåndtering
  return posts;
}

export async function changePost(request: PostRequest): Promise<Post> {
  // antar alltid at alt går bra :)

  const post: Post = await restHandler.put<Post>("/post");
  
  // TODO: legge til feilhåndtering
  return post;
}

export async function getPostsByAuthorId(authorId: userData): Promise<Post[]> {
  // antar alltid at alt går bra :)

  const posts: Post[] = await restHandler.get<Post[]>("/post/user/"+authorId);
  
  // TODO: legge til feilhåndtering
  return posts;
}

export async function getPostById(postId: number): Promise<Post> {
  // antar alltid at alt går bra :)

  const post: Post = await restHandler.get<Post>("/post/"+postId);
  
  // TODO: legge til feilhåndtering
  return post;
}


