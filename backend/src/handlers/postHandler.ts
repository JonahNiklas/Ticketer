import { Request, Response } from 'express';
import { Context } from '../context';
import { Post } from '@prisma/client';

export async function createPost(ctx: Context, req: Request, res: Response) {
  const {
    createdAt, timeOfEvent, city, venue, forSale, title, description, category, price, authorID,
  } = req.body;
  // const active User = getActiveUser();
  try {
    const post = await ctx.prisma.post.create({
      data: {
        createdAt: new Date(),
        timeOfEvent: new Date(),
        city,
        venue,
        isActive: true,
        forSale,
        title,
        description,
        category,
        price,
        authorId: authorID,
        author: {
          connect: { id: authorID },
        },
      },
    });
    res.json('Successfully created Post!');
    console.log('Post created');
  } catch (err) {
    console.error(err);
  }
}

export async function updatePost(ctx: Context, req: Request, res: Response) {
  const {
    id, timeOfEvent, city, venue, forSale, title, description, category, price,
  } = req.body;
  try {
    const post = await ctx.prisma.post.update({ 
      where: {
        id,
      },
      data: {
        createdAt: new Date(),
        timeOfEvent: new Date(),
        city,
        venue,
        isActive: true,
        forSale,
        title,
        description,
        category,
        price,
      },
    });
    res.json('Successfully update Post!');
    console.log('Post updated');
  } catch (err) {
    console.error(err);
  }
}

export async function sellPost(ctx: Context, req: Request, res: Response) {
  const { id } = req.body;
  try {
    const post = await ctx.prisma.post.update({
      where: {
        id,
      },
      data: {
        forSale: false,
      },
    });
    res.json('Successfully marked post as sold!');
    console.log('Post marked as sold');
  } catch (err) {
    console.error(err);
  }
}

export async function deletePost(ctx: Context, req: Request, res: Response) {
  const { id } = req.body;
  try {
    const post = await ctx.prisma.post.delete({
      where: {
        id,
      },
    });
    res.json('Successfully deleted Post!');
    console.log('Post deleted');
  } catch (err) {
    console.error(err);
  }
}

export async function getForSalePosts(ctx: Context, req: Request, res: Response) {
  const {forSale} = req.body;
  try {
    const post = await ctx.prisma.post.findMany({
      where: {
        forSale: true,
      }
    })
    console.log("See all for sale posts!")
  } catch(err) {
    console.log(err);
  }
}

export async function getToBuyPosts(ctx: Context, req: Request, res: Response) {
  const {forSale} = req.body;
  try {
    const post = await ctx.prisma.post.findMany({
      where: {
        forSale: false,
      }
    })
    console.log("See all for sale posts!")
  } catch(err) {
    console.log(err);
  }
}