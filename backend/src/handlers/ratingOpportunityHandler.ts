import { Request, Response } from 'express';
import { Context } from '../context';
import { RatingOpportunity } from '../types';

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
  console.log(userId);
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

  let fullRaOpList: RatingOpportunity[] = [];
  if(ratingOpportunities) {
    ratingOpportunities.forEach(async ro => {
      const post = await ctx.prisma.post
      .findUnique({
        where: {
          id: ro.postId,
        },
      })
      .catch((error: any) => {
        res.status(400);
        console.error(error);
      });
      
      const contacter = await ctx.prisma.user
      .findUnique({
        where: {
          id: ro.contacterId,
        },
      })
      .catch((error: any) => {
        res.status(400).send('Something went wrong');
        console.error(error);
      });
      if(post && contacter) {
        const e :RatingOpportunity = {
          ...ro,
          title: post.title,
          forSale: post.forSale,
          contacterName:  contacter.firstName + " " + contacter?.lastName,
          contacterEmail: contacter.email,
        }
        fullRaOpList.push(e);
        console.log(fullRaOpList);
      } 
      res.json(fullRaOpList);
    });
  } else{
    res.json(fullRaOpList);

  }
  
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
