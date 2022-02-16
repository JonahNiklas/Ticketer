import { Request, Response } from 'express';
import { Context } from '../context';

export async function rateUser(ctx: Context, req: Request, res: Response) {
  const { rating, givenById, gottenById, description } = req.body;

  if (rating < 1 || rating > 10) {
    res.status(400).send('Rating has to be between 1 and 10');
    return;
  }
  if (givenById === gottenById) {
    res.status(400).send('Cannot rate itself');
    return;
  }
  await ctx.prisma.rating.create({
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
  const ratings = await ctx.prisma.rating.findMany().catch((error: any) => {
    res.status(400).send('Something went wrong');
    console.error(error);
  });
  res.json(ratings);
}
