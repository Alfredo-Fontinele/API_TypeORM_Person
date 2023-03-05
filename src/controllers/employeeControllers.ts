import { Request, Response } from "express";
import { EmployeesServices } from "../services/employeesServices";

export const EmployeeControllers = {
    async getAllPeople(req: Request, res: Response) {
        const data = await EmployeesServices.getAllEmployees(req);
        return res.status(200).json(data);
    },
    async createUser(req: Request, res: Response) {
        const data = await EmployeesServices.createEmployee(req);
        return res.status(201).json(data);
    },
    async getPersonById(req: Request, res: Response) {
        const data = await EmployeesServices.getEmployeeById(req);
        return res.status(200).json(data);
    },
    async updatePerson(req: Request, res: Response) {
        const data = await EmployeesServices.updateEmployee(req);
        return res.status(200).json(data);
    },
    async deletePerson(req: Request, res: Response) {
        const data = await EmployeesServices.deleteEmployee(req);
        return res.status(204).json(data);
    },
    async createPersonJob(req: Request, res: Response) {
        const data = await EmployeesServices.createEmployeeJob(req);
        return res.status(201).json(data);
    },
};
