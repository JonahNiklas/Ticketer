import { NextFunction, Request, Response } from 'express';
import { Context } from '../context';
import {
  DecodedData,
  LoginRequest,
  RestResponse,
  TokenRestResponse,
} from '../types';
import { verifyToken } from '../util/authUtil';
import { loginHelper } from './helpers/authHelper';

export async function login(context: Context, req: Request, res: Response) {
  const l: LoginRequest = req.body as LoginRequest;

  loginHelper(l, context).then((message: RestResponse | TokenRestResponse) => {
    if (message.code !== 200) {
      res
        .status(message.code)
        .json({ errorCode: message.code, errorMessage: message.message });
      return;
    }
    res.status(message.code).json(message.message);
  });
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
