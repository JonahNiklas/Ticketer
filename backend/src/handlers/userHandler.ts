import { Request, Response } from 'express';
import { Context } from '../context';
import { RestResponse, UpdateRequest, UserRequest } from '../types';
import { createUserHelper, deleteUserHelper, updateUserHelper } from './helpers/userHelper';

export async function registerUser(ctx: Context, req: Request, res: Response) {
  const userRequest: UserRequest = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  };

  createUserHelper(userRequest, ctx).then((message: RestResponse) => {
    if (message.code !== 200) {
      res.status(message.code).json({ errorCode: message.code, errorMessage: message.message });
    }

    res.status(message.code).json(message);
  });
}

export async function getAllUsers(ctx: Context, req: Request, res: Response) {
  const users = await ctx.prisma.user.findMany().catch((error: any) => {
    res.status(400).send('Something went wrong');
    console.error(error);
  });
  res.json(users);
}

export async function getUser(ctx: Context, req: Request, res: Response) {
  const { id } = req.params;
  if (id === null || id === undefined) {
    res.status(400).send('Param cannot be null');
    return;
  }
  const user = await ctx.prisma.user
    .findUnique({
      where: {
        id: Number.parseInt(id, 10),
      },
    })
    .catch((error: any) => {
      res.status(400).send('Something went wrong');
      console.error(error);
    });
  if (!user) {
    res.status(400).send('Something went wrong');
  } else {
    const userData = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    };
    res.json(userData);
  }
}

export async function updateUser(ctx: Context, req: Request, res: Response) {
  const updateRequest: UpdateRequest = {
    id: req.body.id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  };

  updateUserHelper(updateRequest, ctx).then((message: RestResponse) => {
    if (message.code !== 200) {
      res.status(message.code).json({ errorCode: message.code, errorMessage: message.message });
    }

    res.status(message.code).json(message);
  });
}

export async function deleteUser(ctx: Context, req: Request, res: Response) {
  const { id } = req.body;

  deleteUserHelper(id, ctx).then((message: RestResponse) => {
    if (message.code !== 200) {
      res.status(message.code).json({ errorCode: message.code, errorMessage: message.message });
    }

    res.status(message.code).json(message);
  });
}
