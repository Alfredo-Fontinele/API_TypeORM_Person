import { employeeRepo } from "../repositories/employeeRepo";
import { jobsRepo } from "../repositories/jobsRepo";
import { DeleteResult, UpdateResult } from "typeorm";
import { AppError } from "../errors/appError";
import { Employee } from "../entities/Employee";
import { Request } from "express";
import { hash } from "bcryptjs";
import "express-async-errors";

export const EmployeesServices = {
    async getAllEmployees(req: Request): Promise<Employee[]> {
        return await employeeRepo.find({
            relations: {
                jobs: true,
            },
        });
    },
    async getEmployeeById(req: Request): Promise<Employee[]> {
        const { id } = req.params;
        return await employeeRepo.find({
            where: {
                id,
            },
            relations: {
                jobs: true,
            },
        });
    },
    async createEmployee(req: Request): Promise<Employee> {
        const { name, email, password } = await req.body;
        const passCrypt = await hash(password, 8);
        const newEmployee = employeeRepo.create({
            name,
            email,
            password: passCrypt,
        });
        const newUser = await employeeRepo.save(newEmployee);
        let employeeCreatedWithoutPassword: any = {};
        const newUserValues = Object.entries(newUser);
        newUserValues.forEach((user) => {
            const key = user[0];
            if (key !== "password") {
                const value = user[1];
                employeeCreatedWithoutPassword[key] = value;
            }
        });
        return employeeCreatedWithoutPassword;
    },
    async updateEmployee(req: Request): Promise<Employee[]> {
        const { id } = req.params;
        const { name, email, password } = await req.body;
        const passCrypt = await hash(password, 8);
        await employeeRepo.update(id, {
            name,
            email,
            password: passCrypt,
        });
        return await employeeRepo.find({
            where: {
                id,
            },
            relations: {
                jobs: true,
            },
        });
    },
    async deleteEmployee(req: Request): Promise<DeleteResult> {
        return await employeeRepo.delete(req.employeeFound.id);
    },
    async createEmployeeJob(req: Request): Promise<any> {
        const { id_job, id_employee } = req.body;
        const employee = await employeeRepo.findOneBy({ id: id_employee });
        if (!employee) {
            throw new AppError("Employee not Exists", 404);
        }
        const job = await jobsRepo.findOneBy({ id: id_job });
        if (!job) {
            throw new AppError("Job not Exists", 404);
        }
        const infoJob = { ...job };
        const newJob = {
            ...employee,
            jobs: [infoJob],
        };
        await employeeRepo.save(newJob);
        return newJob;
    },
};
