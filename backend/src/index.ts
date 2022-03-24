import express from 'express';
import cors from 'cors';
import { context } from './context';
import { login } from './handlers/authenticationHandler';
import {
  deleteUser,
  getAllUsers,
  getUser,
  registerUser,
  updateUser,
} from './handlers/userHandler';

import {
  createPost,
  deletePost,
  getAllPosts,
  getActiveOrUnactivePosts,
  /** getPost, */
  updatePost,
  getPostsUser,
  sellPost,
  getPostsByFilter,
} from './handlers/postHandler';

import {
  confirmSale,
  createRatingOpportunity,
  getRatingOpportunityByUser,
} from './handlers/ratingOpportunityHandler';
import {
  calculateUserRating,
  createRatingBothWays,
  getAllRatings,
  getRatingsToGive,
  getUserRatings,
  rateUser,
  updateRating,
} from './handlers/ratingHandler';

const app = express();
app.use(express.json());
app.use(cors());
app.use(
  (
    req: any,
    // eslint-disable-next-line no-unused-vars
    res: { header: (_arg1: string, _arg2: string) => void },
    next: () => void,
  ) => {
    res.header('Access-Control-Expose-Headers', 'Authorization');
    next();
  },
);
const port = 5005;

// under kommer koden for API-en
// POST RELATED
app.post('/auth/login', async (req: any, res: any) => {
  login(context, req, res);
});

app.get('/post', async (req: any, res: any) => {
  getAllPosts(context, req, res);
});

/** app.get('/post/:id', async (req: any, res: any) => {
  getPost(context, req, res);
}); */

app.get('/post/:category', async (req: any, res: any) => {
  getPostsByFilter(context, req, res);
});

app.get('/post/active/:isActive', async (req: any, res: any) => {
  getActiveOrUnactivePosts(context, req, res);
});

app.post('/post/create', async (req: any, res: any) => {
  createPost(context, req, res);
});

app.delete('/post/:id', async (req: any, res: any) => {
  deletePost(context, req, res);
});

app.put('/post/:id', async (req: any, res: any) => {
  updatePost(context, req, res);
});

app.get('/post/user/:id', async (req: any, res: any) => {
  getPostsUser(context, req, res);
});

app.put('/post/sell/:id', async (req: any, res: any) => {
  sellPost(context, req, res);
});

// USER RELATED
app.post('/auth/login', async (req: any, res: any) => {
  login(context, req, res);
});

app.post('/user/register', async (req: any, res: any) => {
  registerUser(context, req, res);
});

app.get('/user', async (req: any, res: any) => {
  getAllUsers(context, req, res);
});

app.get('/user/:id', async (req: any, res: any) => {
  getUser(context, req, res);
});

app.delete('/user', async (req: any, res: any) => {
  deleteUser(context, req, res);
});

app.put('/user', async (req: any, res: any) => {
  updateUser(context, req, res);
});

// RATING RELATED

app.post('/rating', async (req: any, res: any) => {
  createRatingBothWays(context, req, res);
});

app.get('/rating', async (req: any, res: any) => {
  getAllRatings(context, req, res);
});

app.get('/rating/user/:givenById', async (req: any, res: any) => {
  getRatingsToGive(context, req, res);
});

app.get('/rating/user/average/:gottenById', async (req: any, res: any) => {
  calculateUserRating(context, req, res);
});

app.put('/rating/', async (req: any, res: any) => {
  rateUser(context, req, res);
});

// RATING_OPPORTUNITY RELATED

app.post('/ratingOpportunity', async (req: any, res: any) => {
  createRatingOpportunity(context, req, res);
});

app.get('/ratingOpportunity/:userId', async (req: any, res: any) => {
  getRatingOpportunityByUser(context, req, res);
});

app.put('/ratingOpportunity/:id', async (req: any, res: any) => {
  confirmSale(context, req, res);
});

app.listen(port, () => console.log(`Serveren har startet på port: ${port}!`));
