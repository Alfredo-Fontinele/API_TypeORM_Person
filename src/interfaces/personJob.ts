import { Person } from './../entities/Person'
import { Job } from "../entities/Job"

export interface IPersonJobs {
    id_job: Job
    id_person: Person
}

export interface IBodyPostJobs {
    id_job?: string
    id_person?: string
}
