import { Request, Response } from 'express';
import { Rating } from '@prisma/client';
import { Context } from '../context';

export async function createRatingBothWays(ctx: Context, req: Request, res: Response) {
  const {
    givenById,
    gottenById,
  } = req.body;

  if (givenById === gottenById) {
    res.status(400).send('Cannot rate itself');
    return;
  }

  await ctx.prisma.rating
    .create({
      data: {
        rating: 0,
        givenBy: {
          connect: { id: givenById },
        },
        gottenBy: {
          connect: { id: gottenById },
        },
      },
    })
    .catch((error: any) => {
      res.status(400).send('Something went wrong');
      console.error(error);
    });
  await ctx.prisma.rating
    .create({
      data: {
        rating: 0,
        givenBy: {
          connect: { id: gottenById },
        },
        gottenBy: {
          connect: { id: givenById },
        },
      },
    })
    .catch((error: any) => {
      res.status(400).send('Something went wrong');
      console.error(error);
    });
  res.json('Successfully created Rating!');
}

export async function rateUser(ctx: Context, req: Request, res: Response) {
  const {
    rating,
    givenById,
    gottenById,
    description,
  } = req.body;

  if (rating < 1 || rating > 10) {
    res.status(400).send('Rating has to be between 1 and 10');
    return;
  }
  if (givenById === gottenById) {
    res.status(400).send('Cannot rate itself');
    return;
  }

  const excistingRating = await ctx.prisma.rating
    .findFirst({
      where: {
        givenById,
        gottenById,
      },
    })
    .catch((error: any) => {
      res.status(400).send('Something went wrong');
      console.error(error);
    });

  if (excistingRating) {
    res.status(200).send('Allready rated this user');
    return;
  }

  await ctx.prisma.rating
    .create({
      data: {
        rating,
        description,
        givenBy: {
          connect: { id: givenById },
        },
        gottenBy: {
          connect: { id: gottenById },
        },
      },
    })
    .catch((error: any) => {
      res.status(400).send('Something went wrong');
      console.error(error);
    });
  res.json('Successfully created Rating!');
}

export async function getAllRatings(ctx: Context, req: Request, res: Response) {
  const ratings: void|Rating[] = await ctx.prisma.rating.findMany().catch((error: any) => {
    res.status(400).send('Something went wrong');
    console.error(error);
  });
  res.json(ratings);
}

export async function getUserRatings(
  ctx: Context,
  req: Request,
  res: Response,
) {
  const { gottenById } = req.body;

  const ratings = await ctx.prisma.rating
    .findMany({
      where: {
        gottenById: Number.parseInt(gottenById, 10),
      },
    })
    .catch((error: any) => {
      res.status(400).send('Something went wrong');
      console.error(error);
    });
  res.json(ratings);
}

export async function calculateUserRating(
  ctx: Context,
  req: Request,
  res: Response,
) {
  const { gottenById } = req.body;
  const ratings = await ctx.prisma.rating
    .findMany({
      where: {
        gottenById: Number.parseInt(gottenById, 10),
      },
    })
    .catch((error: any) => {
      res.status(400).send('Something went wrong');
      console.error(error);
    });

  if (!ratings) {
    return;
  }
  const sum = ratings
    .map((r) => r.rating)
    .reduce((partialSum, ra) => partialSum + ra, 0);
  res.json(sum / ratings.length);
}

export async function updateRating(ctx: Context, req: Request, res: Response) {
  const { id, rating, description } = req.body;
  await ctx.prisma.rating
    .update({
      where: {
        id,
      },
      data: {
        rating,
        description,
      },
    })
    .catch((error: any) => {
      res.status(400).send('Something went wrong');
      console.error(error);
    });
  res.json();
}
