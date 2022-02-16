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
  getForSalePosts,
  getPost,
  updatePost,
  getPostsUser,
} from './handlers/postHandler';
import { getAllRatings, rateUser } from './handlers/ratingHandler';

const app = express();
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Expose-Headers', 'Authorization');
  next();
});
const port = 5001;

// under kommer koden for API-en
// USER RELATED
app.post('/auth/login', async (req, res) => {
  login(context, req, res);
});
app.get('/post', async (req, res) => {
  getAllPosts(context, req, res);
});

app.get('/post/:id', async (req, res) => {
  getPost(context, req, res);
});

app.get('/forSale/:forSale', async (req, res) => {
  getForSalePosts(context, req, res);
});

app.post('/post/create', async (req, res) => {
  createPost(context, req, res);
});

app.delete('/post', async (req, res) => {
  deletePost(context, req, res);
});

app.put('/post', async (req, res) => {
  updatePost(context, req, res);
});

app.get('/post/user/:id', async (req, res) => {
  getPostsUser(context, req, res);
});

// USER RELATED
app.post('/user/register', async (req, res) => {
  registerUser(context, req, res);
});

app.get('/user', async (req, res) => {
  getAllUsers(context, req, res);
});

app.get('/user/:id', async (req, res) => {
  getUser(context, req, res);
});

app.delete('/user', async (req, res) => {
  deleteUser(context, req, res);
});

app.put('/user', async (req, res) => {
  updateUser(context, req, res);
});

// RATING RELATED

app.post('/rating', async (req, res) => {
  rateUser(context, req, res);
});

app.get('/rating', async (req, res) => {
  getAllRatings(context, req, res);
});

app.listen(port, () => console.log(`Serveren har startet på port: ${port}!`));
