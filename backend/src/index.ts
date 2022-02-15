import express from 'express';
import { context } from './context';
import { login } from './handlers/authenticationHandler';
import { findAllUsers } from './handlers/exampleUserHandler';
import { createPost, getAllPosts, getPost } from './handlers/postHandler';

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Expose-Headers', 'Authorization');
  next();
});
const port = 5001;

// under kommer koden for API-en

app.get('/', async (req, res) => {
  findAllUsers(context, req, res);
});

app.post('/auth/login', async (req, res) => {
  login(context, req, res);
});
app.get('/post', async (req, res) => {
  getAllPosts(context, req, res);
});

app.get('/post/:id', async (req, res) => {
  getPost(context, req, res);
});

app.post('/post/create', async (req, res) => {
  createPost(context, req, res);
});

app.listen(port, () => console.log(`Serveren har startet på port: ${port}!`));
