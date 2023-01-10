import { Request, Response, NextFunction } from 'express'
import { jobsRepo } from '../../repositories/jobsRepo'
import { AppError } from '../../errors/appError'
import { IJob } from './../../interfaces/job'

export const verifyAlreadyExistJobByName = async (req:Request, res:Response, next:NextFunction) => {
    const { name }:IJob = req.body
    if (!name) {
        return next()
    }
    const existJob = await jobsRepo.findOneBy({ name: name.toLowerCase() })
    if (existJob) {
        throw new AppError('Job`s name Already Exist', 400)
    }
    return next()
}
