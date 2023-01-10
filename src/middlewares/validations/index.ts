import { Request, Response, NextFunction } from 'express'
import * as yup from 'yup'

export const validateSchema = (serializer:yup.AnySchema) => async (req:Request, res:Response, next:NextFunction) => {
    try {
        const body = await req.body
        await serializer.validate(body, {
            abortEarly: false,
            stripUnknown: true
        })
        return next()
    } catch(err:any) {
        return res.status(400).json({
            message: err.message
        })
    }
}
