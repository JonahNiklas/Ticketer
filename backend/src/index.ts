// 
import express from 'express';
import { context } from './context';
import { getAllUsers } from './handlers/exampleUserHandler';

const app = express();
const port = 5000;

// under kommer koden for API-en

app.get("/", async (req, res) => {
    getAllUsers(context, req, res);
});

app.get("/users", async (req, res) => {
    
})

app.listen(port, () => console.log(`Serveren har startet på port: ${port}!`));