import { Request, Response } from 'express';
import * as lv from '../util/loginValidation';
import { Context } from '../context';

export async function registerUser(ctx: Context, req: Request, res: Response) {
  const { firstName, lastName, email, password } = req.body;

  const user = await ctx.prisma.user.findUnique({
    where: {
      email: req.body.email,
    },
  });
  if (user != null) {
    res.status(401).send('User already exist');
  } else if (!lv.validateEmail(email)) {
    res.status(401).send('Invalid email');
  } else if (!lv.validatePassword(password)) {
    res.status(401).send('Invalid password');
  } else if (!lv.validateInput(firstName)) {
    res.status(401).send('Invalid Firstname');
  } else if (!lv.validateInput(lastName)) {
    res.status(401).send('Invalid Lastname');
  } else {
    await ctx.prisma.user
      .create({
        data: {
          firstName,
          lastName,
          password,
          email,
        },
      })
      .catch((error: any) => {
        res.status(400);
        console.error(error);
      });
    res.json('User registered');
  }
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
  }
  res.json(user);
}

export async function updateUser(ctx: Context, req: Request, res: Response) {
  const { id, firstName, lastName, email, password } = req.body;

  if (email != null && !lv.validateEmail(email)) {
    res.status(401).send('Invalid email');
  } else if (password != null && !lv.validatePassword(password)) {
    res.status(401).send('Invalid password');
  } else if (firstName != null && !lv.validateInput(firstName)) {
    res.status(401).send('Invalid Firstname');
  } else if (lastName != null && !lv.validateInput(lastName)) {
    res.status(401).send('Invalid Lastname');
  } else {
    await ctx.prisma.user
      .update({
        where: {
          id,
        },
        data: {
          firstName,
          lastName,
          password,
          email,
        },
      })
      .catch((error: any) => {
        res.status(400).send('Something went wrong');
        console.error(error);
      });
    res.json('Successfully updated user');
  }
}

export async function deleteUser(ctx: Context, req: Request, res: Response) {
  const { id } = req.body;

  await ctx.prisma.user
    .delete({
      where: {
        id,
      },
    })
    .catch((error: any) => {
      res.status(400).send('Something went wrong');
      console.error(error);
    });
  res.json('Successfully deleted User!');
  console.log('User deleted');
}
