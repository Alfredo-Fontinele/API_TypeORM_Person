import { employeeRepo } from "../../repositories/employeeRepo";
import { Request, Response, NextFunction } from "express";
import { AppError } from "../../errors/appError";

export const verifyExistEmployeeById = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { id } = req.params;
    const existEmployee = await employeeRepo.findOneBy({ id });
    if (!existEmployee) {
        throw new AppError("Person Not Found", 404);
    }
    req.employeeFound = existEmployee;
    return next();
};
