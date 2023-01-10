import { personRepo } from '../../repositories/personRepo'
import { Request, Response, NextFunction } from 'express'
import { AppError } from '../../errors/appError'

export const verifyExistPersonById = async (req:Request, res:Response, next:NextFunction) => {
    const { id } = req.params
    const existPerson = await personRepo.findOneBy({ id })
    if (!existPerson) {
        throw new AppError('Person Not Found', 404)
    }
    req.personFound = existPerson
    return next()
}
