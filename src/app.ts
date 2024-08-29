import express, { Request, Response } from 'express';
import cors from 'cors';
import {config} from 'dotenv';
import http from 'http';
config();
import {Router} from './routes/index';
import postgres from './config/db';

export const app = express();

const server = http.createServer(app);
const PORT = 4000;

const MyServer = async () => {
    try {
        await postgres.connect();
        console.log(`Connected to postgres!`)
        app.use(cors());
        app.use(express.urlencoded({extended: false}));
        app.use(express.json());
        app.use(Router);
        app.get("/", (req : Request, res : Response) => {
            res.send("OKE")
        });
        server.listen(PORT, () => console.log(`Server Running on http://localhost:${PORT}`))
    } catch (error) {
        throw Error(`Error: ${error}`);
    }

};

MyServer();
