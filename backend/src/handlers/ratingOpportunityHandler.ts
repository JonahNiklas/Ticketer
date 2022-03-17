import { Request, Response } from 'express';
import { Context } from '../context';

export async function createRatingOpportunity(ctx: Context, req: Request, res: Response) {
  const { contactedId, contacterId, postId } = req.body;

  const ratingOpportunity = await ctx.prisma.ratingOpportunity.findFirst({
    where: {
      contacterId,
      postId,

    },
  }).catch((error: any) => {
    console.error(error);
  });

  if (ratingOpportunity) {
    res.status(401);
    res.json('Rating Oppertunity allready exists');
    return;
  }
  const request = {
    postId,
    contactedId,
    contacterId,
  };

  await ctx.prisma.ratingOpportunity.create({
    data: request,
  }).catch((error: any) => {
    console.error(error);
  });

  res.status(200).json('Successfully contacted owner of post');
}

export async function getRatingOpportunityByUser(ctx: Context, req: Request, res: Response) {
  const { userId } = req.params;
  if (userId === null || userId === undefined) {
    res.status(400).send('Param cannot be null');
    return;
  }
  const ratingOpportunities = await ctx.prisma.ratingOpportunity
    .findMany({
      where: {
        contactedId: Number.parseInt(userId, 10),
      },
    })
    .catch((error: any) => {
      res.status(400).send('Something went wrong');
      console.error(error);
    });
  res.json(ratingOpportunities);
}

export async function confirmSale(ctx: Context, req: Request, res: Response) {
  const { id } = req.params;
  if (id === null || id === undefined) {
    res.status(400).send('Param cannot be null');
    return;
  }
  await ctx.prisma.ratingOpportunity
    .update({
      where: {
        id: Number.parseInt(id, 10),
      },
      data: {
        accepted: true,
      },
    })
    .catch((error: any) => {
      res.status(400).send('Something went wrong');
      console.error(error);
    });
  res.json('Successfully updated');
}
