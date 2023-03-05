import { employeeRepo } from "../../repositories/employeeRepo";
import { Request, Response, NextFunction } from "express";
import { jobsRepo } from "../../repositories/jobsRepo";
import { AppError } from "../../errors/appError";

export const verifyAlreadyExistEmployeeById = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { id } = req.params;
    const existPerson = await employeeRepo.findOneBy({ id });
    if (existPerson) {
        throw new AppError("Person Already Exist", 400);
    }
    return next();
};
