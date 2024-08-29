import bcr from 'bcryptjs';

export const HashingPassword = (rawPassword:string):string => {
    let salt = bcr.genSaltSync(10);
    const hash = bcr.hashSync(rawPassword, salt);
    return hash;
};

export const CheckPassword = (hashPassword:string):boolean => {
    const isValid = bcr.compareSync(hashPassword, hashPassword);
    return isValid;
};