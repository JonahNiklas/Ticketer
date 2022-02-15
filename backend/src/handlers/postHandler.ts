import { Request, Response } from 'express';
import { Context } from '../context';

export async function getAllPosts(ctx: Context, req: Request, res: Response) {
  console.log('yeet');
  const posts = await ctx.prisma.post.findMany().catch((error: any) => {
    res.status(400);
    console.error(error);
  });
  console.log(posts);
  res.json(posts);
}

export async function getPost(ctx: Context, req: Request, res: Response) {
  const { id } = req.params;
  if (id === null || id === undefined) {
    res.status(400);
    return;
  } else {
    const post = await ctx.prisma.post
      .findUnique({
        where: {
          id: Number.parseInt(id),
        },
      })
      .catch((error: any) => {
        res.status(400);
        console.error(error);
      });
    res.json(post);
  }
}

export async function createPost(ctx: Context, req: Request, res: Response) {
  const {
    createdAt,
    timeOfEvent,
    city,
    venue,
    forSale,
    title,
    description,
    category,
    price,
    authorId,
  } = req.body;
  // const active User = getActiveUser();
  console.log(req.body);
  const post = await ctx.prisma.post
    .create({
      data: {
        timeOfEvent,
        city,
        venue,
        isActive: true,
        forSale,
        title,
        description,
        category,
        price,
        author: {
          connect: { id: authorId },
        },
      },
    })
    .catch((error: any) => {
      res.status(400);
      console.error(error);
    });
  res.json('Successfully created Post!');
  console.log('Post created');
}

export async function updatePost(ctx: Context, req: Request, res: Response) {
  const {
    id,
    timeOfEvent,
    city,
    venue,
    forSale,
    title,
    description,
    category,
    price,
  } = req.body;

  const post = await ctx.prisma.post
    .update({
      where: {
        id,
      },
      data: {
        timeOfEvent,
        city,
        venue,
        isActive: true,
        forSale,
        title,
        description,
        category,
        price,
      },
    })
    .catch((error: any) => {
      res.status(400);
      console.error(error);
    });
}

export async function sellPost(ctx: Context, req: Request, res: Response) {
  const { id } = req.body;

  const post = await ctx.prisma.post
    .update({
      where: {
        id,
      },
      data: {
        forSale: false,
      },
    })
    .catch((error: any) => {
      res.status(400);
      console.error(error);
    });
}

export async function deletePost(ctx: Context, req: Request, res: Response) {
  const { id } = req.body;

  const post = await ctx.prisma.post
    .delete({
      where: {
        id,
      },
    })
    .catch((error: any) => {
      res.status(400);
      console.error(error);
    });
  res.json('Successfully deleted Post!');
  console.log('Post deleted');
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