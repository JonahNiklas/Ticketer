import {Request, Response} from 'express';
import { Context } from '../context';

export async function getAllUsers(ctx: Context, req: Request, res: Response) {
    const users = await ctx.prisma.user.findMany();

    res.json(users);
}