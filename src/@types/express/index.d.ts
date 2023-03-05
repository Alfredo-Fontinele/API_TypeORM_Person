import { Employee } from "../../entities/Employee";
import { Job } from "./../../entities/Job";

declare module "express";

declare global {
    namespace Express {
        interface Request {
            employeeFound: Employee;
            jobFound: Job;
        }
    }
}

export {};
