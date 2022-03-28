import { Context } from '../../context';
import { RateUserRequest, Rating, RatingBothWaysRequest, RatingRequest, RestResponse, RestResponseWithData, UserRating } from '../../types';

export async function createRatingBothWaysHelper(
  ctx: Context,
  request: RatingBothWaysRequest,
): Promise<RestResponse> {
  if (request.givenById === request.gottenById) {
    return { code: 400, message: 'Cannot rate itself' };
  }

  return Promise.all([ctx.prisma.rating.create({
    data: {
      rating: 0,
      description: request.postTitle,
      givenBy: {
        connect: { id: request.givenById },
      },
      gottenBy: {
        connect: { id: request.gottenById },
      },
    },
  }), ctx.prisma.rating.create({
    data: {
      rating: 0,
      description: request.postTitle,
      givenBy: {
        connect: { id: request.gottenById },
      },
      gottenBy: {
        connect: { id: request.givenById },
      },
    },
  })]).then(() => ({
    code: 200,
    message: 'Successfully created Rating!',
  })).catch((error: any) => ({
    code: 400,
    message: `Something went wrong. Error message:${error}`,
  }));
}

export async function rateUserHelper(
  ctx: Context,
  request: RateUserRequest,
): Promise<RestResponse> {
  if (request.rating < 1 || request.rating > 5) {
    return { code: 400, message: 'Rating has to be between 1 and 5' };
  }

  return ctx.prisma.rating.update({
    where: {
      id: request.id,
    },
    data: {
      rating: request.rating,
      description: (request.description) ? request.description : null,
      active: true,
    },
  }).then(() => ({
    code: 200,
    message: 'Successfully created Rating!',
  })).catch((error: any) => ({
    code: 400,
    message: `Something went wrong. Error message:${error}`,
  }));
}

export async function getAllRatingsHelper(ctx: Context): Promise<RestResponseWithData> {
  return ctx.prisma.rating.findMany().then((data) => ({
    code: 200,
    message: 'Successfully got all ratings',
    data,
  })).catch((error: any) => ({
    code: 400,
    message: `Something went wrong. Error message:${error}`,
    data: null,
  }));
}

export async function getUserRatingsHelper(
  ctx: Context,
  userId: number,
): Promise<RestResponseWithData> {
  return ctx.prisma.rating.findMany({
    where: {
      gottenById: userId,
      active: true,
    },
  }).then((data) => ({
    code: 200,
    message: `Successfully got all ratings for user:${userId}`,
    data,
  })).catch((error: any) => ({
    code: 400,
    message: `Something went wrong. Error message:${error}`,
    data: null,
  }));
}

export async function getRatingsToGiveHelper(
  ctx: Context,
  userId: number,
): Promise<RestResponseWithData> {
  return ctx.prisma.rating.findMany({
    where: {
      givenById: userId,
      active: false,
    },
    include: {
      gottenBy: {
        select: {
          firstName: true,
          lastName: true,
        },
      },
    },
  }).then((data) => {
    const fullRatingList: Rating[] = [];
    data.forEach((r) => {
      let newDescription;
      if (r.description) {
        newDescription = r.description;
      }
      const e: Rating = {
        id: r.id,
        rating: r.rating,
        description: newDescription,
        createdAt: r.createdAt,
        givenById: r.givenById,
        gottenById: r.gottenById,
        active: r.active,
        gottenFirstName: r.gottenBy.firstName,
        gottenLastName: r.gottenBy.lastName,
      };
      fullRatingList.push(e);
    });
    return new Promise<RestResponseWithData>((resolve) => {
      resolve({
        code: 200,
        message: `Successfully got all ratings to give for user:${userId}`,
        data: fullRatingList,
      });
    });
  }).catch((error: any) => ({
    code: 400,
    message: `Something went wrong. Error message:${error}`,
    data: null,
  }));
}

export async function calculateUserRatingHelper(
  ctx: Context,
  userId: number,
): Promise<RestResponseWithData> {
  return ctx.prisma.rating.findMany({
    where: {
      gottenById: userId,
      active: true,
    },
  }).then((data) => {
    const result: UserRating = {
      avgRating: data.map((r) => r.rating).reduce((partialSum, ra) => partialSum + ra, 0),
      ratingCount: data.length,
    };

    return new Promise<RestResponseWithData>((resolve) => {
      resolve({
        code: 200,
        message: `Successfully calculated rating for user:${userId}`,
        data: result,
      });
    });
  }).catch((error: any) => ({
    code: 400,
    message: `Something went wrong. Error message:${error}`,
    data: null,
  }));
}

export async function updateRatingHelper(
  ctx: Context,
  request: RatingRequest,
): Promise<RestResponse> {
  return ctx.prisma.rating.update({
    where: {
      id: request.id,
    },
    data: {
      rating: request.rating,
      description: request.description,
    },
  }).then(() => new Promise<RestResponse>((resolve) => {
    resolve({
      code: 200,
      message: `Successfully updated rating: ${request.id}`,
    });
  })).catch((error: any) => ({
    code: 400,
    message: `Something went wrong. Error message:${error}`,
  }));
}
