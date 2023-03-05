import { employeeRoutes } from "./employees.routes";
import { jobRoutes } from "./jobs.routes";
import { Router } from "express";

export const Routes = Router();

Routes.use("/employees", employeeRoutes);
Routes.use("/jobs", jobRoutes);
