import { AppDataSource } from "../data-source";
import { Job } from "../entities/Job";

export const jobsRepo = AppDataSource.getRepository(Job);
