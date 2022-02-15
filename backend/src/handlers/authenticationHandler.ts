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
    res.status(401).json({ errorMessage: 'user not valid', errorCode: 401 });
  } else {
    if (l.password !== user.password) {
      res.status(401).json({ errorMessage: 'wrong password', errorCode: 401 });
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
    res.status(401).json({ errorMessage: 'token invalid', errorCode: 401 });
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

    if (Date.now() < decoded.exp * 1000) {
      res.status(401).json({ errorMessage: 'token expired', errorCode: 401 });
    }

    if (user === null || user.email !== decoded.email) {
      res.status(401).json({ errorMessage: 'token invalid', errorCode: 401 });
    }

    next();
  }
}
