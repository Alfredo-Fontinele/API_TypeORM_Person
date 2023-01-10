import { Request, Response, NextFunction } from 'express'
import { jobsRepo } from '../../repositories/jobsRepo'
import { AppError } from '../../errors/appError'
import { IJob } from './../../interfaces/job'

export const verifyBodyJob = async (req:Request, res:Response, next:NextFunction) => {
    const { name, level }:IJob = req.body
    if (!name && !level) {
        throw new AppError('name or level is required field', 400)
    }
    return next()
}
