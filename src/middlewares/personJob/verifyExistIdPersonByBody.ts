import { personRepo } from '../../repositories/personRepo'
import { Request, Response, NextFunction } from 'express'
import { AppError } from '../../errors/appError'
import { IBodyPostJobs } from '../../interfaces/personJob'

export const verifyExistIdPersonByBody = async (req:Request, res:Response, next:NextFunction) => {
    const body:IBodyPostJobs = await req.body
    const existPerson = await personRepo.findOneBy({ id: body.id_person })
    if (!existPerson) {
        throw new AppError('Person not found', 404)
    }
    return next()
}
