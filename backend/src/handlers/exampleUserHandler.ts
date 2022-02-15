import { Request, Response } from 'express';
import { Context } from '../context';

export async function findAllUsers(
  context: Context,
  _req: Request,
  res: Response,
) {
  const users = await context.prisma.user.findMany();

  console.log(users);

  res.json(users);
}
