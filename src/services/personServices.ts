import { personRepo } from "../repositories/personRepo";
import { jobsRepo } from "./../repositories/jobsRepo";
import { DeleteResult, UpdateResult } from "typeorm";
import { AppError } from "./../errors/appError";
import { Person } from "./../entities/Person";
import { Request } from "express";
import { hash } from "bcryptjs";
import "express-async-errors";

export const PersonServices = {
    async getAllPeople(req: Request): Promise<Person[]> {
        return await personRepo.find({
            relations: {
                jobs: true,
            },
        });
    },
    async getPersonById(req: Request): Promise<Person[]> {
        const { id } = req.params;
        return await personRepo.find({
            where: {
                id,
            },
            relations: {
                jobs: true,
            },
        });
    },
    async createPerson(req: Request): Promise<Person> {
        const { name, email, password } = await req.body;
        const passCrypt = await hash(password, 8);
        const newPerson = personRepo.create({
            name,
            email,
            password: passCrypt,
        });
        const newUser = await personRepo.save(newPerson);
        let personCreatedWithoutPassword: any = {};
        const newUserValues = Object.entries(newUser);
        newUserValues.forEach((user) => {
            const key = user[0];
            if (key !== "password") {
                const value = user[1];
                personCreatedWithoutPassword[key] = value;
            }
        });
        return personCreatedWithoutPassword;
    },
    async updatePerson(req: Request): Promise<Person[]> {
        const { id } = req.params;
        const { name, email, password } = await req.body;
        const passCrypt = await hash(password, 8);
        await personRepo.update(id, {
            name,
            email,
            password: passCrypt,
        });
        return await personRepo.find({
            where: {
                id,
            },
            relations: {
                jobs: true,
            },
        });
    },
    async deletePerson(req: Request): Promise<DeleteResult> {
        return await personRepo.delete(req.personFound.id);
    },
    async createPersonJob(req: Request): Promise<any> {
        const { id_job, id_person } = req.body;
        const person = await personRepo.findOneBy({ id: id_person });
        if (!person) {
            throw new AppError("Person not Exists", 404);
        }
        const job = await jobsRepo.findOneBy({ id: id_job });
        if (!job) {
            throw new AppError("Job not Exists", 404);
        }
        const infoJob = { ...job };
        const newJob = {
            ...person,
            jobs: [infoJob],
        };
        await personRepo.save(newJob);
        return newJob;
    },
};
