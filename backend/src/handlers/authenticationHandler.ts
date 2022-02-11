import { User } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';
import { Context } from '../context';
import { DecodedData, LoginRequest } from '../types';
import { generateToken, verifyToken } from '../util/authUtil';

export async function login(context: Context, req: Request, res: Response) {
  const l: LoginRequest = req.body as LoginRequest;

  const user: void | User | null = await context.prisma.user
    .findUnique({
      where: {
        email: l.email,
      },
    })
    .catch((error: any) => {
      console.error(error);
    });

  if (user === null || !(user instanceof Object) || !('id' in user)) {
    res.json({ errorMessage: 'user not found', errorCode: 404 });
  } else {
    if (l.password !== user.password) {
      res.json({ errorMessage: 'wrong password', errorCode: 403 });
    }

    // generate token here
    const tokenToken = await generateToken(user);

    const createToken = await context.prisma.token
      .upsert({
        where: {
          ownerId: user.id,
        },
        update: {
          token: tokenToken,
        },
        create: {
          token: tokenToken,
          ownerId: user.id,
        },
      })
      .catch((error: any) => {
        console.error(error);
      });

    res.json(createToken);
  }
}

export async function loginMiddleware(
  context: Context,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { authorization } = req.headers;

  if (authorization === undefined) {
    res.json({ errorMessage: 'token invalid', errorCode: 403 });
  }

  if (authorization !== undefined) {
    const decoded = (await verifyToken(
      authorization,
    )) as unknown as DecodedData;
    const user = await context.prisma.user.findUnique({
      where: {
        id: decoded.id,
      },
    });

    if (user === null || user.email !== decoded.email) {
      res.json({ errorMessage: 'token invalid', errorCode: 403 });
    }

    next();
  }
}
