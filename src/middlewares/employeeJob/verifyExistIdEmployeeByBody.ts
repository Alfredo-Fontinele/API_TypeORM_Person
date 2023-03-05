import { employeeRepo } from "../../repositories/employeeRepo";
import { Request, Response, NextFunction } from "express";
import { AppError } from "../../errors/appError";
import { IBodyPostJobs } from "../../interfaces/employeeJob";

export const verifyExistIdEmployeeByBody = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const body: IBodyPostJobs = await req.body;
    const existPerson = await employeeRepo.findOneBy({ id: body.id_person });
    if (!existPerson) {
        throw new AppError("Person not found", 404);
    }
    return next();
};
