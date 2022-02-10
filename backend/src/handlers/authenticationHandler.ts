import { Request, Response } from "express";
import { Context } from "../context";
import { LoginRequest } from "../types";


export async function login(context: Context, req: Request, res: Response) {

    const login: LoginRequest = req.body as LoginRequest;

    console.log(login);

    const user = await context.prisma.user.findUnique({
        where: {
            email: login.email
        }
    }).catch((error:any) => {
        console.log(error);
    });

    res.json(user);

}