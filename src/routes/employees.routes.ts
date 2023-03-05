import { verifyExistIdEmployeeByBody } from "../middlewares/employeeJob/verifyExistIdEmployeeByBody";
import { verifyExistIdJobByBody } from "../middlewares/employeeJob/verifyExistIdJobByBody";
import { verifyAlreadyExistEmail } from "../middlewares/employee/verifyAlreadyExistEmail";
import { verifyExistEmployeeById } from "../middlewares/employee/verifyExistEmployeeById";
import { EmployeeControllers } from "./../controllers/employeeControllers";
import { validateSchema } from "../middlewares/validations/index";
import { employeeSchema, employeeJobSchema } from "../schemas";
import { Router } from "express";

export const employeeRoutes = Router();

employeeRoutes.get("/", EmployeeControllers.getAllPeople);

employeeRoutes.post(
    "/",
    validateSchema(employeeSchema),
    verifyAlreadyExistEmail,
    EmployeeControllers.createUser
);

employeeRoutes.post(
    "/jobs",
    validateSchema(employeeJobSchema),
    verifyExistIdJobByBody,
    verifyExistIdEmployeeByBody,
    EmployeeControllers.createPersonJob
);

employeeRoutes.get(
    "/:id",
    verifyExistEmployeeById,
    EmployeeControllers.getPersonById
);

employeeRoutes.patch(
    "/:id",
    validateSchema(employeeSchema),
    verifyExistEmployeeById,
    verifyAlreadyExistEmail,
    EmployeeControllers.updatePerson
);

employeeRoutes.delete(
    "/:id",
    verifyExistEmployeeById,
    EmployeeControllers.deletePerson
);
