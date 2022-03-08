import { Request, Response } from 'express';
import { Context } from '../context';

export async function getAllPosts(ctx: Context, req: Request, res: Response) {
  const posts = await ctx.prisma.post.findMany().catch((error: any) => {
    res.status(400).send('Something went wrong');
    console.error(error);
  });

  res.json(posts);
}

export async function getPost(ctx: Context, req: Request, res: Response) {
  const { id } = req.params;
  if (id === null || id === undefined) {
    res.status(400).send('Param cannot be null');
    return;
  }
  const post = await ctx.prisma.post
    .findUnique({
      where: {
        id: Number.parseInt(id, 10),
      },
    })
    .catch((error: any) => {
      res.status(400);
      console.error(error);
    });
  res.json(post);
}

export async function createPost(ctx: Context, req: Request, res: Response) {
  const {
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
  await ctx.prisma.post
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
      res.status(400).send('Something went wrong');
      console.error(error);
    });
  res.json('Successfully created Post!');
  console.log('Post created');
}

export async function updatePost(ctx: Context, req: Request, res: Response) {
  const {
    timeOfEvent,
    city,
    venue,
    forSale,
    title,
    description,
    category,
    price,
  } = req.body;
  const { id } = req.params;

  await ctx.prisma.post
    .update({
      where: {
        id: Number.parseInt(id,10),
      },
      data: {
        timeOfEvent,
        city,
        venue,
        forSale,
        title,
        description,
        category,
        price,
      },
    })
    .catch((error: any) => {
      res.status(400).send('Something went wrong');
      console.error(error);
    });
  res.json('Successfully updated post');
}

export async function sellPost(ctx: Context, req: Request, res: Response) {
  const { id } = req.body;

  await ctx.prisma.post
    .update({
      where: {
        id,
      },
      data: {
        isActive: false,
      },
    })
    .catch((error: any) => {
      res.status(400).send('Something went wrong');
      console.error(error);
    });
  res.json(`Sold post with id ${id}`);
}

export async function deletePost(ctx: Context, req: Request, res: Response) {
  const { id } = req.body;

  console.log(req.body);
  await ctx.prisma.post
    .delete({
      where: {
        id,
      },
    })
    .catch((error: any) => {
      res.status(400).send('Something went wrong');
      console.error(error);
    });
  res.json('Successfully deleted Post!');
  console.log('Post deleted');
}

export async function getActiveOrUnactivePosts(
  ctx: Context,
  req: Request,
  res: Response,
) {
  const { isActive } = req.params;

  if (isActive === null || isActive === undefined) {
    res.status(400).send('Param cannot be null');
    return;
  }
  const isActiveValue: boolean = !(isActive === 'false'); // for sale value blir true uansett, med mindre isActive er lik 'false'

  const posts = await ctx.prisma.post
    .findMany({
      where: {
        isActive: isActiveValue,
      },
    })
    .catch((error: any) => {
      res.status(400).send('Something went wrong');
      console.error(error);
    });
  res.json(posts);
}

export async function getPostsUser(ctx: Context, req: Request, res: Response) {
  const { id } = req.params;
  if (id === null || id === undefined) {
    res.status(400).send('Param cannot be null');
    return;
  }
  const posts = await ctx.prisma.post
    .findMany({
      where: {
        authorId: Number.parseInt(id, 10),
      },
    })
    .catch((error: any) => {
      res.status(400).send('Something went wrong');
      console.error(error);
    });
  res.json(posts);
}
