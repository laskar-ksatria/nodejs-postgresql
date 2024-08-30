import express, {Request, Response, NextFunction} from 'express'
import { CreateLimit } from './utils';
import { AuthMiddleware } from '../middlewares/auth';

import User from '../controllers/user.controller';

const Router = express.Router();

Router.post("/login", async (req:Request, res:Response, next:NextFunction) => {
    res.status(200).json({success: true});
});
Router.post("/register", CreateLimit({max: 3, ms: 1000}), User.CreateUser);
Router.get("/all", User.GetAllUser);
Router.get("/", AuthMiddleware);


// Tester
Router.get("/test/create", User.TestCreate);

export default Router;