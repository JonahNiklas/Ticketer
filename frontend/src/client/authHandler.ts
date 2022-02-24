import { LoginRequest, LoginResponse } from "../types";
import restHandler from "./restHandler";


export async function login(request: LoginRequest): Promise<LoginResponse> {
    // antar alltid at alt går bra :)

    const token: LoginResponse = await restHandler.postWithResponse<LoginResponse>("/auth/login", request);
    
    // TODO: legge til feilhåndtering
    
    return token;
}