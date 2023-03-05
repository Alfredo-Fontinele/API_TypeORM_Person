import { AppDataSource } from "../data-source";
import { Employee } from "../entities/Employee";

export const employeeRepo = AppDataSource.getRepository(Employee);
