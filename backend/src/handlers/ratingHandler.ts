import { Request, Response } from 'express';
import { Rating, UserRating } from '../types';
import { Context } from '../context';

export async function createRatingBothWays(ctx: Context, req: Request, res: Response) {
  const {
    postTitle,
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
        description: postTitle,
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
        description: postTitle,
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
    id,
    rating,
    description,
  } = req.body;

  if (rating < 1 || rating > 5) {
    res.status(400).send('Rating has to be between 1 and 10');
    return;
  }
  let newDescription = null;
  if (description) {
    newDescription = description;
  }

  await ctx.prisma.rating
    .update({
      where: {
        id,
      },
      data: {
        rating,
        description: newDescription,
        active: true,
      },
    })
    .catch((error: any) => {
      res.status(400).send('Something went wrong');
      console.error(error);
    });
  res.json('Successfully created Rating!');
}

export async function getAllRatings(ctx: Context, req: Request, res: Response) {
  const ratings = await ctx.prisma.rating.findMany().catch((error: any) => {
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
        active: true,
      },
    })
    .catch((error: any) => {
      res.status(400).send('Something went wrong');
      console.error(error);
    });
  res.json(ratings);
}

export async function getRatingsToGive(
  ctx: Context,
  req: Request,
  res: Response,
) {
  const { givenById } = req.params;

  if (givenById === null || givenById === undefined) {
    res.status(400).send('Param cannot be null');
    return;
  }

  const ratings = await ctx.prisma.rating
    .findMany({
      where: {
        givenById: Number.parseInt(givenById, 10),
        active: false,
      },
      include: {
        gottenBy: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
    }})
    .catch((error: any) => {
      res.status(400).send('Something went wrong');
      console.error(error);
    });

  let fullRatingList : Rating[] =[];
  if(ratings)
    ratings.forEach(r => {
      let newDescription = undefined;
      if (r.description) {
        newDescription = r.description;
      }
      const e :Rating = {
        id: r.id,
        rating: r.rating,
        description: newDescription,
        createdAt: r.createdAt,
        givenById: r.givenById,
        gottenById: r.gottenById,
        active: r.active,
        gottenFirstName: r.gottenBy.firstName,
        gottenLastName: r.gottenBy.lastName,
      }
      fullRatingList.push(e);
    });
  res.json(fullRatingList);
}

export async function calculateUserRating(
  ctx: Context,
  req: Request,
  res: Response,
) {
  const { gottenById } = req.params;

  if (gottenById === null || gottenById === undefined) {
    res.status(400).send('Param cannot be null');
    return;
  }
  const ratings = await ctx.prisma.rating
    .findMany({
      where: {
        gottenById: Number.parseInt(gottenById, 10),
        active: true,
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

  const result: UserRating = {
    avgRating: sum/ratings.length,
    ratingCount: ratings.length,
  }
  res.json(result);
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
