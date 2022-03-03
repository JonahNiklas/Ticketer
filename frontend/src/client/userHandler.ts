export {};

export async function getUserById(userId: number): Promise<userData> {
  // antar alltid at alt går bra :)

  const user: userData = await restHandler.get<userData>("/user/"+userId);
  
  // TODO: legge til feilhåndtering
  return user;
}