import { Request, Response } from 'express';
import { Context } from '../context';
import { Post } from '@prisma/client';

export async function createPost(ctx: Context, req: Request, res: Response) {
    const {createdAt, timeOfEvent, city, venue, forSale, title, description, category, price, authorID} = req.body;
    //const active User = getActiveUser();
    try {
        const post:Post = await ctx.prisma.post.create({
            data: {
                createdAt: new Date(),
                timeOfEvent: new Date(),
                city: city,
                venue: venue,
                isActive: true,
                forSale: forSale,
                title: title,
                description: description,
                category: category,
                price: price,
                authorId: authorID,
                author: {
                    connect: {id: 500}
                }                        
            }
        });
        console.log("Post created");
    } catch(err) {
        console.log(err);
    }
}
// export async function findPostToUser(ctx: Context, req: Request, res: Response) {
//   const {createdAt, timeOfEvent, city, venue, forSale, title, description, category, price, authorID} = req.body;
//   const post = await ctx.prisma.post.findUnique({
//     where: {
//       authorID: authorID,
//       author: {
//         connect: {id:500}
//       }
//   },

//   })
// }

export async function deletePost(ctx: Context, req: Request, res: Response) {
    
}
