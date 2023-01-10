import { Request, Response } from 'express'
import { JobsServices } from './../services/jobsServices'

export const JobControllers = {
    getAllJobs: async (req:Request, res:Response) => {
        const data = await JobsServices.getAllJobs(req)
        return res.status(200).json(data)
    },
    createJob: async (req:Request, res:Response) => {
        const data = await JobsServices.createJob(req)
        return res.status(201).json(data)
    },
    getJobById: async (req:Request, res:Response) => {
        const data = await JobsServices.getJobById(req)
        return res.status(200).json(data)
    },
    updateJob: async (req:Request, res:Response) => {
        const data = await JobsServices.updateJob(req)
        return res.status(200).json(data)
    },
    deleteJob: async (req:Request, res:Response) => {
        const data = await JobsServices.deleteJob(req)
        return res.status(204).json(data)
    }
}
