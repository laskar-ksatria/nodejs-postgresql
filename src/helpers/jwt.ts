import jwt, {JwtPayload} from 'jsonwebtoken';

type GenerateType = {
    id: string, 
    email: string,
}

export const GenerateToken = (payload:GenerateType):string => {
    const key:string = "owlking";
    const token = jwt.sign(payload, key, {
        expiresIn: "1800000ms"
    });
    return token;
}

export const VerifyToken = (token:string): JwtPayload | string => {
    const key:string = "owlking";
    return jwt.verify(token, key) as JwtPayload | string;
}
