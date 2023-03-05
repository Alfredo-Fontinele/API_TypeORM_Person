import { Employee } from "../entities/Employee";
import { Job } from "../entities/Job";

export interface IEmployeesJobs {
    id_job: Job;
    id_person: Employee;
}

export interface IBodyPostJobs {
    id_job?: string;
    id_person?: string;
}
