import { Request, Response } from 'express';
import { Rating } from '@prisma/client';
import { Context } from '../context';

export async function rateUser(ctx: Context, req: Request, res: Response) {
  const { createdAt, rating, givenById, gottenById, description } = req.body;

  try {
    const post = await ctx.prisma.rating.create({
      data: {
        createdAt,
        rating,
        description,
        givenById,
        givenBy: {
          connect: { id: givenById },
        },
        gottenById,
        gottenBy: {
          connect: { id: gottenById },
        },
      },
    });
    res.json('Successfully created Rating!');
    console.log('Post created');
  } catch (err) {
    console.error(err);
  }
}