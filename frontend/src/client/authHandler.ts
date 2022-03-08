import {
  LoginRequest,
  LoginResponse,
  RegisterResponse,
  RegisterRequest,
  RestError
} from '../types';
import restHandler from './restHandler';

export async function login(
  request: LoginRequest
): Promise<LoginResponse | RestError> {
  const token: LoginResponse | RestError = await restHandler
    .postWithResponse<LoginResponse>('/auth/login', request)
    .catch(async (error) => {
      return error;
    });

  return token;
}

export async function register(
  request: RegisterRequest
): Promise<RegisterResponse> {
  const message: RegisterResponse =
    await restHandler.postWithResponse<RegisterResponse>(
      '/user/register',
      request
    );

  return message;
}
