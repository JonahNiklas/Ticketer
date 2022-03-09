import { Post, PostRequest, PostResponse } from '../types';
import restHandler from './restHandler';

export async function createPost(request: PostRequest): Promise<PostResponse> {
  // antar alltid at alt går bra :)

  const response: PostResponse =
    await restHandler.postWithResponse<PostResponse>('/post/create', request);

  // TODO: legge til feilhåndtering
  console.log(response);
  return response;
}

export async function getPosts(): Promise<Post[]> {
  // antar alltid at alt går bra :)

  const posts: Post[] = await restHandler.get<Post[]>('/post');

  // TODO: legge til feilhåndtering
  return posts;
}

export async function getPostsByAuthorId(authorId: number): Promise<Post[]> {
  // antar alltid at alt går bra :)

  const posts: Post[] = await restHandler.get<Post[]>('/post/user/' + authorId);

  // TODO: legge til feilhåndtering
  return posts;
}

export async function deletePost(id: number): Promise<string> {
  // antar alltid at alt går bra :)

  console.log(id)
  const posts: string = await restHandler.delete('/post/'+ id);

  // TODO: legge til feilhåndtering
  return posts;
}