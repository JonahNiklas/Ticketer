import { Context } from '../../context';
import { RestResponse, UpdateRequest, UserRequest } from '../../types';
import * as lv from '../../util/loginValidation';

// eslint-disable-next-line max-len
export const createUserHelper = async (
  request: UserRequest,
  ctx: Context,
): Promise<RestResponse> => {
  const user = await ctx.prisma.user
    .findUnique({
      where: {
        email: request.email,
      },
    })
    .catch((error: any) => {
      console.error(error);
    });

  if (user !== null) return { code: 401, message: 'User already exists' };
  if (!lv.validateEmail(request.email))
    return { code: 401, message: 'Invalid email' };
  if (!lv.validatePassword(request.password))
    return { code: 401, message: 'Invalid password' };
  if (!lv.validateInput(request.firstName))
    return { code: 401, message: 'Invalid firstname' };
  if (!lv.validateInput(request.lastName))
    return { code: 401, message: 'Invalid lastname' };

  await ctx.prisma.user
    .create({
      data: request,
    })
    .catch((error: any) => {
      console.log(error);
      return {
        code: 400,
        message: `Something went wrong. Error message:${error}`,
      };
    });

  return { code: 200, message: 'User created!' };
};

// eslint-disable-next-line max-len
export const updateUserHelper = async (
  request: UpdateRequest,
  ctx: Context,
): Promise<RestResponse> => {
  if (request.email != null && !lv.validateEmail(request.email))
    return { code: 401, message: 'Invalid email' };
  if (request.password != null && !lv.validatePassword(request.password))
    return { code: 401, message: 'Invalid password' };
  if (request.firstName != null && !lv.validateInput(request.firstName))
    return { code: 401, message: 'Invalid Firstname' };
  if (request.lastName != null && !lv.validateInput(request.lastName))
    return { code: 401, message: 'Invalid Lastname' };

  await ctx.prisma.user
    .update({
      where: {
        id: request.id,
      },
      data: {
        firstName: request.firstName,
        lastName: request.lastName,
        email: request.email,
        password: request.password,
      },
    })
    .catch((error: any) => {
      console.error(error);
      return {
        code: 400,
        message: `Something went wrong. Error message:${error}`,
      };
    });

  return { code: 200, message: 'User updated!' };
};

export const deleteUserHelper = async (
  id: number,
  ctx: Context,
): Promise<RestResponse> => {
  await ctx.prisma.user
    .delete({
      where: {
        id,
      },
    })
    .catch((error: any) => ({
      code: 400,
      message: `Something went wrong. Error message:${error}`,
    }));

  return { code: 200, message: 'User deleted!' };
};
