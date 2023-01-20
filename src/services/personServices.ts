import { personRepo } from '../repositories/personRepo'
import { jobsRepo } from './../repositories/jobsRepo'
import { DeleteResult, UpdateResult } from 'typeorm'
import { AppError } from './../errors/appError'
import { Person } from './../entities/Person'
import { Request } from 'express'
import { hash } from 'bcryptjs'
import 'express-async-errors'

export const PersonServices = {
    getAllPeople: async (req:Request):Promise<Person[]> => {
        return await personRepo.find({
            relations: {
                jobs: true
            }
        })
    },
    getPersonById: async (req:Request):Promise<Person[]> => {
        const { id } = req.params
        return await personRepo.find({
            where: {
                id
            },
            relations: {
                jobs: true
            }
        })
    },
    createPerson: async (req:Request):Promise<Person> => {
        const { name, email, password } = await req.body
        const passCrypt = await hash(password, 8)
        const newPerson = personRepo.create({ 
            name, email, password: passCrypt 
        })
        await personRepo.save(newPerson)
        return newPerson
    },
    updatePerson: async (req:Request):Promise<Person[]> => {
        const { id } = req.params
        const { name, email, password } = await req.body
        const passCrypt = await hash(password, 8)
        await personRepo.update(id, { 
            name, email, password: passCrypt 
        })
        return await personRepo.find({
            where: {
                id
            },
            relations: {
                jobs: true
            }
        })
    },
    deletePerson: async (req:Request):Promise<DeleteResult> => {
        return await personRepo.delete(req.personFound.id)
    },
    createPersonJob: async (req: Request):Promise<any> => {
        const { id_job, id_person } = req.body
        const person = await personRepo.findOneBy({ id: id_person })
        if (!person) {
            throw new AppError('Person not Exists', 404)
        }
        const job = await jobsRepo.findOneBy({ id: id_job })
        if (!job) {
            throw new AppError('Job not Exists', 404)
        }
        const infoJob = {
            id: job.id,
            level: job.level,
            name: job.name,
        }
        const newJob = {
            ...person,
            jobs: [infoJob]
        }
        await personRepo.save(newJob)
        return newJob
    }
}
