import { Request, Response } from "express";
import { PersonServices } from "../services/personServices";

export const PersonControllers = {
    async getAllPeople(req: Request, res: Response) {
        const data = await PersonServices.getAllPeople(req);
        return res.status(200).json(data);
    },
    async createUser(req: Request, res: Response) {
        const data = await PersonServices.createPerson(req);
        return res.status(201).json(data);
    },
    async getPersonById(req: Request, res: Response) {
        const data = await PersonServices.getPersonById(req);
        return res.status(200).json(data);
    },
    async updatePerson(req: Request, res: Response) {
        const data = await PersonServices.updatePerson(req);
        return res.status(200).json(data);
    },
    async deletePerson(req: Request, res: Response) {
        const data = await PersonServices.deletePerson(req);
        return res.status(204).json(data);
    },
    async createPersonJob(req: Request, res: Response) {
        const data = await PersonServices.createPersonJob(req);
        return res.status(201).json(data);
    },
};
