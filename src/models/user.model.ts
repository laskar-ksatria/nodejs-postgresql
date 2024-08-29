import postgres from '../config/db';
import {
    Q_CREATE_USER,
    Q_FIND_ALL,
    Q_FIND_ONE_USER
} from './utils/query';
import { HashingPassword } from '../helpers/bcr';

/**
 * Type & Interface
 */
export interface TypeRegisterBody {
    name: string, 
    email: string,
    phone: string, 
    password: string
}

export interface UserFunctions {
    findMany: () => Promise<any>;
    create: (payload:TypeRegisterBody) => Promise<any>;
    findOneById: (id:string) => Promise<any>;
}

const dbName:string = "user";

const User:UserFunctions = {
    findMany: async ():Promise<any> => {
        const result = await postgres.query(Q_FIND_ALL(dbName));
        return result?.rows[0] || null;
    },
    create: async (payload:TypeRegisterBody):Promise<any> => {
        const hash = HashingPassword(payload.password);
        const result = await postgres.query(Q_CREATE_USER, 
            [payload.name, payload.email, payload.phone, hash]
        )
        return result.rows;
    },
    findOneById: async (id:string):Promise<any> => {
        const result = await postgres.query(Q_FIND_ONE_USER, [id]);
        return result.rows[0];
    },
    
}

export default User;