import { Request, Response, NextFunction } from 'express'
import { jobsRepo } from './../../repositories/jobsRepo'
import { AppError } from '../../errors/appError'

export const verifyExistJobById = async (req:Request, res:Response, next:NextFunction) => {
    const { id } = req.params
    const existJob = await jobsRepo.findOneBy({ id })
    if (!existJob) {
        throw new AppError('Job Not Found', 404)
    }
    req.jobFound = existJob
    return next()
}
