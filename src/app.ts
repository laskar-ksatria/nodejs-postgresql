import express, { Request, Response } from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import http from 'http';
import { Router } from './routes/index';
import postgres from './config/db';

config();
const app = express();

const server = http.createServer(app);
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(Router);
app.get("/", (req: Request, res: Response) => {
    res.send("OKE");
});

export const MyServer = async () => {
    try {
        await postgres.connect();
        console.log(`Connected to postgres!`);
        server.listen(PORT, () => console.log(`Server Running on http://localhost:${PORT}`));
    } catch (error) {
        throw Error(`Error: ${error}`);
    }
};

export { app, server };

MyServer();

