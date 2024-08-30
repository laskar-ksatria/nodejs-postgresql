import { VerifyToken } from "../helpers/jwt";
import {Request, Response, NextFunction} from 'express'

export const AuthMiddleware = (req:Request, res:Response, next:NextFunction) => {
    const token = req.headers["x-auth-token"];
    if (!token) return res.status(401).json({code: 1, message: "User Not Found!"});
    const decoded = VerifyToken(`${token}`);
    req.decoded = decoded;
    next();
}