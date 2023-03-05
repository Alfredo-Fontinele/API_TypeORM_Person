import { verifyAlreadyExistJobByName } from "./../middlewares/job/verifyAlreadyExistJobByName";
import { verifyExistJobById } from "./../middlewares/job/verifyExistJobById";
import { validateSchema } from "./../middlewares/validations/index";
import { verifyBodyJob } from "../middlewares/job/verifyBodyJob";
import { JobControllers } from "./../controllers/jobControllers";
import { jobSchema } from "../schemas";
import { Router } from "express";

export const jobRoutes = Router();

jobRoutes.get("/", JobControllers.getAllJobs);

jobRoutes.post(
    "/",
    validateSchema(jobSchema),
    verifyAlreadyExistJobByName,
    JobControllers.createJob
);

jobRoutes.get("/:id", verifyExistJobById, JobControllers.getJobById);

jobRoutes.patch(
    "/:id",
    verifyBodyJob,
    verifyExistJobById,
    verifyAlreadyExistJobByName,
    JobControllers.updateJob
);

jobRoutes.delete("/:id", verifyExistJobById, JobControllers.deleteJob);
