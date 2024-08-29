import {Request, Response, NextFunction} from 'express';
import { CheckPassword } from "../helpers/bcr";
import { GenerateToken, VerifyToken } from "../helpers/jwt";

import User, {TypeRegisterBody} from '../models/user.model'

declare module 'express-serve-static-core' {
    interface Request {
      decoded?: any;
      Io?:any;
    }
  }

class UserController {
    static async CreateUser(req:Request, res:Response, next:NextFunction) {
        const {name, email, phone, password}:TypeRegisterBody = req.body;
        const newUser = await User.create({name, email, phone, password});
        const accessToken = GenerateToken({id: newUser.id, email: newUser.email});
        res.status(200).json({
            success: true, 
            user: {name: newUser.name, email: newUser.email, phone:newUser.phone},
            accessToken 
        });
    };
    static async GetUser(req:Request, res:Response) {
        const decoded = req.decoded;
        
        res.status(200).json({success: true});
    }
    static async LoginUser(req:Request, res:Response, next:NextFunction) {
        res.status(200).json({success: true});
    }

    static async GetAllUser(req:Request, res:Response, next:NextFunction) {
        try {
            const users = await User.findMany();
            return res.status(200).json({success: true, users})
        } catch (error) {
            console.log("Error on GetAllUser: ", error);
            return res.status(500).json({success:false, message: "Internal Server Error"});
        }
    }
};

export default UserController;