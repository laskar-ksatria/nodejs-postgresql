import Limitter from 'express-rate-limit';

type CreateLimitType = {max: number, ms: number}

export const CreateLimit = ({max, ms}:CreateLimitType) => Limitter({
    windowMs: ms, 
    max, 
    message: {
        code: 6, 
        httpCode: 429, 
        message: "Too namy request"
    }
});
