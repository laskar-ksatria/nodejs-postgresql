import postgres from '../config/db';
import {
    Q_CREATE_USER,
    Q_FIND_ALL,
    Q_FIND_ONE_USER, 
    Q_UPDATE
} from './utils/query';
import { KeyEnum } from './utils/query';
import { HashingPassword } from '../helpers/bcr';
import { ObjectFunction } from './utils/type';


export interface TypeRegisterBody {
    name: string, 
    email: string,
    phone: string, 
    password: string
}

const dbName:string = "users";
const userColumn:string = "id, name, email, phone"

const User:ObjectFunction = {
    findMany: async ():Promise<any> => {
        const result = await postgres.query(Q_FIND_ALL(dbName, userColumn));
        return result?.rows;
    },
    create: async (payload:TypeRegisterBody):Promise<any> => {
        const hash = HashingPassword(payload.password);
        const result = await postgres.query(Q_CREATE_USER, 
            [payload.name, payload.email, payload.phone, hash]
        )
        return result.rows;
    },
    findOneById: async (id:string):Promise<any> => {
        const result = await postgres.query(Q_FIND_ONE_USER(KeyEnum.id), [id]);
        return result.rows[0];
    },
    findOneByEmail: async (email:string):Promise<any> => {
        const result = await postgres.query(Q_FIND_ONE_USER(KeyEnum.email), [email]);
        return result.rows[0];
    },
    findOneAndUpdate: async (payload:any):Promise<any> => {
        const result = await postgres.query(
            Q_UPDATE(
            "users", "id", [payload.field]), 
            [payload.email, payload.id]
        );
        return result.rows[0];
    }
    
}

export default User;