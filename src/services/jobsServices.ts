import { formatValuesBodyToLower } from "./../utils/formatValuesBodyToLower";
import { jobsRepo } from "../repositories/jobsRepo";
import { IJob } from "../interfaces/job";
import { DeleteResult } from "typeorm";
import { Job } from "../entities/Job";
import { Request } from "express";
import "express-async-errors";

export const JobsServices = {
    async getAllJobs(req: Request): Promise<Job[]> {
        return await jobsRepo.find({
            relations: {
                persons: true,
            },
        });
    },
    async getJobById(req: Request): Promise<Job[]> {
        const { id } = req.params;
        return await jobsRepo.find({
            where: {
                id,
            },
            relations: {
                persons: true,
            },
        });
    },
    async createJob(req: Request) {
        const { name, level } = req.body;
        const newJob = jobsRepo.create({
            name: name?.toLowerCase(),
            level: level?.toLowerCase(),
        });
        await jobsRepo.save(newJob);
        return newJob;
    },
    async updateJob(req: Request): Promise<Job | null> {
        const { id } = req.params;
        const body: IJob = await req.body;
        const formatedBody = formatValuesBodyToLower(body);
        await jobsRepo.update(id, formatedBody);
        return await jobsRepo.findOneBy({ id });
    },
    async deleteJob(req: Request): Promise<DeleteResult> {
        return await jobsRepo.delete(req.params.id);
    },
};
