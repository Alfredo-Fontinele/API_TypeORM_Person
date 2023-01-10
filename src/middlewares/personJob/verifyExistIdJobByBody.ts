import { Request, Response, NextFunction } from 'express'
import { jobsRepo } from '../../repositories/jobsRepo'
import { AppError } from '../../errors/appError'
import { IBodyPostJobs } from '../../interfaces/personJob'

export const verifyExistIdJobByBody = async (req:Request, res:Response, next:NextFunction) => {
    const body:IBodyPostJobs = await req.body
    const existjob = await jobsRepo.findOneBy({ id: body.id_job })
    if (!existjob) {
        throw new AppError('Job not found', 404)
    }
    return next()
}
