import {Request, Response} from 'express';
import { Context } from '../context';

export const findAllUsers = async (ctx: Context, req: Request, res: Response) => {
    const users = await ctx.prisma.user.findMany();
    res.json(users);
}

