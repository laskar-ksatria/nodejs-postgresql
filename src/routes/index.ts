import express, {Request, Response, NextFunction} from 'express';
import UserRouter from './user.route';
import AddressRouter from './address.route';

const Router = express.Router();

Router.use("/user", UserRouter);
Router.use("/address", AddressRouter);

export {Router}