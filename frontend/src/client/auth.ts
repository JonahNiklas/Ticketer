import { LoginRequest } from "../types";

export async function login(loginRequest: LoginRequest): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        console.log("yeet");
        resolve();
    });
}