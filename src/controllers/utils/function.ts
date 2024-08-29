import postgres from '../../config/db';
import {
    Q_CREATE_USER,
    Q_FIND_ALL
} from './query-bank';
import {
    TypeRegisterBody,
    UserFunctions,
} from './type';


export const User = ():UserFunctions => {
    const dbName = 'users';
    return {
        findMany: async ():Promise<any> => {
            const result = await postgres.query(Q_FIND_ALL(dbName));
            console.log(result);
            return result.rows;
        }
    }
}
