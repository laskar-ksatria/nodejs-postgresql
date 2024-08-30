export type TypeRegisterBody = {
    name: string, 
    email: string,
    phone: string, 
    password: string
}

export interface ObjectFunction {
    findMany: () => Promise<any>;
    create: (payload:TypeRegisterBody) => Promise<any>;
    findOneById: (id:string) => Promise<any>;
    findOneByEmail: (email:string) => Promise<any>;
    findOneByIdAndUpdate: (payload:any) => Promise<any>;
}
