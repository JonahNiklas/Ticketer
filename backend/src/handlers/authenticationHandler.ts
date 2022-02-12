import express, { Request, Response } from "express";
import { Error } from "../types";
const app = express();
import {Context} from "../context";
import * as loginValidation from "../utils/loginValidation";
import { User } from "@prisma/client";

//Registering the user

export async function registerUser(ctx: Context, req: Request, res: Response) {
    
    const {firstname, lastname, email, password, username} = req.body;
        const user = await ctx.prisma.user.findUnique({
            where: {
                email: req.body.email
            },
        })
        if(user != null) {
            res.status(401).send("User already exist");
        }
        else {
            const newUser = await ctx.prisma.user.create({
                data: {
                    firstName: firstname,
                    lastName: lastname,
                    password: password,
                    email: email,
                    userName: username
                }
            });
            res.status(200).send("User registered");
        }
}

