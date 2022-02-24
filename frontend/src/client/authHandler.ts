import { LoginRequest, LoginResponse, RegisterResponse, RegisterUser } from "../types";
import restHandler from "./restHandler";


export async function login(request: LoginRequest): Promise<LoginResponse> {
    // antar alltid at alt går bra :)

    const token: LoginResponse = await restHandler.postWithResponse<LoginResponse>("/auth/login", request);
    
    // TODO: legge til feilhåndtering
    
    return token;
}

export async function register(request: RegisterUser): Promise<RegisterResponse> {
    const message: RegisterResponse = await restHandler.postWithResponse<RegisterResponse>("/user/signup", request);

    return message;
}