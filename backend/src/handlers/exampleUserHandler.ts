import { Request, Response } from 'express';
import { Context } from '../util/context';

export async function findAllUsers(
  context: Context,
  _req: Request,
  res: Response,
) {
  const users = context.prisma.user.findMany();

  res.json(users);
}
