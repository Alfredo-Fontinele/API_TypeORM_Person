import { Request, Response } from "express";
import { JobsServices } from "./../services/jobsServices";

export const JobControllers = {
    async getAllJobs(req: Request, res: Response) {
        const data = await JobsServices.getAllJobs(req);
        return res.status(200).json(data);
    },
    async createJob(req: Request, res: Response) {
        const data = await JobsServices.createJob(req);
        return res.status(201).json(data);
    },
    async getJobById(req: Request, res: Response) {
        const data = await JobsServices.getJobById(req);
        return res.status(200).json(data);
    },
    async updateJob(req: Request, res: Response) {
        const data = await JobsServices.updateJob(req);
        return res.status(200).json(data);
    },
    async deleteJob(req: Request, res: Response) {
        const data = await JobsServices.deleteJob(req);
        return res.status(204).json(data);
    },
};
