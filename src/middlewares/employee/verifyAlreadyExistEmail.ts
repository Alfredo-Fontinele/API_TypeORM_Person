import { employeeRepo } from "../../repositories/employeeRepo";
import { Request, Response, NextFunction } from "express";
import { AppError } from "../../errors/appError";

export const verifyAlreadyExistEmail = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { email } = req.body;
    const existEmail = await employeeRepo.findOneBy({ email });
    if (existEmail) {
        throw new AppError("Email Already Exist", 403);
    }
    return next();
};
