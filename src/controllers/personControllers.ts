import { Request, Response } from 'express'
import { PersonServices } from '../services/personServices'

export const PersonControllers = {
    getAllPeople: async (req:Request, res:Response) => {
        const data = await PersonServices.getAllPeople(req)
        return res.status(200).json(data)
    },
    createUser: async (req:Request, res:Response) => {
        const data = await PersonServices.createPerson(req)
        return res.status(201).json(data)
    },
    getPersonById: async (req:Request, res:Response) => {
        const data = await PersonServices.getPersonById(req)
        return res.status(200).json(data)
    },
    updatePerson: async (req:Request, res:Response) => {
        const data = await PersonServices.updatePerson(req)
        return res.status(200).json(data)
    },
    deletePerson: async (req:Request, res:Response) => {
        const data = await PersonServices.deletePerson(req)
        return res.status(204).json(data)
    },
    createPersonJob: async (req:Request, res:Response) => {
        const data = await PersonServices.createPersonJob(req)
        return res.status(201).json(data)
    }
}
