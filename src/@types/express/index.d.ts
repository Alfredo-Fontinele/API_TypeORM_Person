import { Person } from './../../entities/Person'
import { Job } from "../../entities/Job"

declare module 'express'
declare module 'bcryptjs'
declare global {
    namespace Express {
        interface Request {
            jobFound: Job
            personFound: Person
        }
    }
}

export {}