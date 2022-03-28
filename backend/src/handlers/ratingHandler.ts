import { Request, Response } from 'express';
import { RateUserRequest, RatingBothWaysRequest, RatingRequest, RestResponse, RestResponseWithData } from '../types';
import { Context } from '../context';
import { calculateUserRatingHelper, createRatingBothWaysHelper, getAllRatingsHelper, getRatingsToGiveHelper, getUserRatingsHelper, rateUserHelper, updateRatingHelper } from './helpers/ratingHelper';

export async function createRatingBothWays(
  ctx: Context,
  req: Request,
  res: Response,
) {
  const request = req.body as RatingBothWaysRequest;

  if (request.givenById === undefined
    || request.gottenById === undefined
    || request.postTitle === undefined) {
    res.status(400).json({ errorCode: 400, errorMessage: 'Params cannot be undefined/null' });
    return;
  }

  await createRatingBothWaysHelper(ctx, request).then((message: RestResponse) => {
    if (message.code !== 200) {
      res
        .status(message.code)
        .json({ errorCode: message.code, errorMessage: message.message });
      return;
    }

    res.status(message.code).json(message);
  });
}

export async function rateUser(ctx: Context, req: Request, res: Response) {
  const request = req.body as RateUserRequest;

  if (request.id === undefined || request.rating === undefined) {
    res.status(400).json({ errorCode: 400, errorMessage: 'Params cannot be undefined/null' });
    return;
  }

  await rateUserHelper(ctx, request).then((message: RestResponse) => {
    if (message.code !== 200) {
      res
        .status(message.code)
        .json({ errorCode: message.code, errorMessage: message.message });
      return;
    }

    res.status(message.code).json(message);
  });
}

export async function getAllRatings(ctx: Context, req: Request, res: Response) {
  await getAllRatingsHelper(ctx).then((message: RestResponse) => {
    if (message.code !== 200) {
      res
        .status(message.code)
        .json({ errorCode: message.code, errorMessage: message.message });
      return;
    }

    res.status(message.code).json(message);
  });
}

export async function getUserRatings(
  ctx: Context,
  req: Request,
  res: Response,
) {
  const { gottenById } = req.body;

  if (gottenById === undefined) {
    res.status(400).json({ errorCode: 400, errorMessage: 'Params cannot be undefined/null' });
    return;
  }

  await getUserRatingsHelper(ctx, Number.parseInt(gottenById, 10)).then((message: RestResponse) => {
    if (message.code !== 200) {
      res
        .status(message.code)
        .json({ errorCode: message.code, errorMessage: message.message });
      return;
    }

    res.status(message.code).json(message);
  });
}

export async function getRatingsToGive(
  ctx: Context,
  req: Request,
  res: Response,
) {
  const { givenById } = req.params;

  if (givenById === null || givenById === undefined) {
    res.status(400).json({ errorCode: 400, errorMessage: 'Param cannot be null' });
    return;
  }

  await getRatingsToGiveHelper(
    ctx,
    Number.parseInt(givenById, 10),
  ).then((message: RestResponseWithData) => {
    if (message.code !== 200) {
      res
        .status(message.code)
        .json({ errorCode: message.code, errorMessage: message.message, data: message.data });
      return;
    }

    res.status(message.code).json(message);
  });
}

export async function calculateUserRating(
  ctx: Context,
  req: Request,
  res: Response,
) {
  const { gottenById } = req.params;

  if (gottenById === null || gottenById === undefined) {
    res.status(400).json({ errorCode: 400, errorMessage: 'Param cannot be null', data: null });
    return;
  }

  await calculateUserRatingHelper(
    ctx,
    Number.parseInt(gottenById, 10),
  ).then((message: RestResponseWithData) => {
    if (message.code !== 200) {
      res
        .status(message.code)
        .json({ errorCode: message.code, errorMessage: message.message, data: message.data });
      return;
    }

    res.status(message.code).json(message);
  });
}

export async function updateRating(ctx: Context, req: Request, res: Response) {
  const request = req.body as RatingRequest;
  if (request.id === undefined
    || request.rating === undefined
    || request.description === undefined) {
    res.status(400).json({ errorCode: 400, errorMessage: 'Params cannot be undefined/null' });
    return;
  }

  await updateRatingHelper(ctx, request).then((message: RestResponse) => {
    if (message.code !== 200) {
      res
        .status(message.code)
        .json({ errorCode: message.code, errorMessage: message.message });
      return;
    }

    res.status(message.code).json(message);
  });
}
