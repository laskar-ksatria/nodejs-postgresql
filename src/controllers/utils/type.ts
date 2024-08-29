export type TypeRegisterBody = {
    name: string, 
    email: string,
    phone: string, 
    password: string
}

export interface UserFunctions {
    findMany: () => Promise<any>;
  }