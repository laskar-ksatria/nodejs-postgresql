import postgres from '../config/db';
import {Q_FIND_ALL} from './utils/query';

export interface ObjectFunction {
    findMany: () => Promise<any>;
    // findOneById: (id:string) => Promise<any>;
    // findOneByEmail: (email:string) => Promise<any>;
    // findOneByIdAndUpdate: (payload:any) => Promise<any>;
}

const dbName:string = "roles";

const Role:ObjectFunction = {
   async findMany() {
        const result = await postgres.query(Q_FIND_ALL(dbName));
        return result.rows;
    },
} 

export default Role;