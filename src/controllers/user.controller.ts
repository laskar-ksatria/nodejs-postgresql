import {Request, Response, NextFunction} from 'express';
import { CheckPassword } from "../helpers/bcr";
import { GenerateToken, VerifyToken } from "../helpers/jwt";
import postgres from '../config/db';
import User, {TypeRegisterBody} from '../models/user.model'
import Role from '../models/role.model';

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
    static async TestCreate(req:Request, res:Response, next:NextFunction) {
        try {
            const name = "Tester111";
            const email = "tester12@mail.com";
            const phone = "+6282121214042";
            const password = "Bongkibong12";
            const newUser = await User.create({name, email, phone, password});
            console.log(newUser);
            res.status(201).json({success: true, user: newUser.rows});
        } catch (error) {
            res.status(500).json({error})
        }
    }
    static async TestLogin(req:Request, res:Response, next:NextFunction) {
        try {
            const email = "tester12@mail.com";
            const password = "Bongkibong12";
            const logUser:any= await User.findOneByEmail(email);
            if (!logUser) return res.status(404).json({message: "user not found!"});
            if(CheckPassword(password, logUser.password)) {
                const token = GenerateToken({id:logUser.id, email:logUser.email});
                return res.status(200).json({success: true, user:{...logUser, password: ""}, accessToken:token});
            }
            return res.status(200).json({message: "NOT FOUND"})
        } catch (error) {
            
        }
    }
    static async TestUpdateUser(req:Request, res:Response, next:NextFunction) {
        try {
            const id = "3";
            const name = "Tester1dd1"
            const updateUser = await User.findOneByIdAndUpdate({
                id: 3,
                fields: ["name"], 
                values: [name]
            })
            res.status(200).json({success: true, user: updateUser})
        } catch (error) {
            console.log(error);
            res.status(500).json({error});
        }
    }
    static async TestGetAllRoles(req:Request, res:Response, next:NextFunction) {
        try {
            const roles = await Role.findMany();
            res.status(200).json({success: true, roles})
        } catch (error) {
            res.status(500).json({error})
        }
    }
};

export default UserController;