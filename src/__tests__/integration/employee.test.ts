import { INewEmployee } from "../../interfaces/employee";
import { AppDataSource } from "../../data-source";
import * as M from "../mocks/employee/index";
import { DataSource } from "typeorm";
import { app } from "../../app";
import request from "supertest";

let newPerson: INewEmployee;

describe("/employees", () => {
    let connection: DataSource;

    beforeAll(async () => {
        await AppDataSource.initialize()
            .then((res) => {
                connection = res;
            })
            .catch((err) => {
                console.error("Error during Data Source initialization", err);
            });
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it("POST /employees - Should be able to create employee", async () => {
        const response = await request(app)
            .post("/employees")
            .send(M.mockedEmployeeValid);
        newPerson = response.body;
        expect(response.body).toHaveProperty("id");
        expect(response.body).toHaveProperty("name");
        expect(response.body).toHaveProperty("email");
        expect(response.body).not.toHaveProperty("password");
        expect(response.body.name).toStrictEqual(M.mockedEmployeeValid.name);
        expect(response.body.email).toStrictEqual(M.mockedEmployeeValid.email);
        expect(response.status).toBe(201);
    });

    it("POST /employees - Should not be able to create invalid body employee", async () => {
        const response = await request(app)
            .post("/employees")
            .send(M.mockedEmployeeInvalid);
        expect(response.body).toHaveProperty("message");
        expect(response.status).toBe(400);
    });

    it("GET /employees - Should be able to list all employees", async () => {
        const response = await request(app).get("/employees");
        expect(response.status).toBe(200);
    });

    it("GET /employees/:id - Should be able to list a employee by id", async () => {
        const response = await request(app).get(`/employees/${newPerson.id}`);
        const foundEmployee = response.body[0];
        expect(foundEmployee).toHaveProperty("name");
        expect(foundEmployee.name).toStrictEqual(M.mockedEmployeeValid.name);
        expect(response.status).toBe(200);
    });

    it("GET /employees/:id - Should not be able to list a employee with invalid id", async () => {
        const response = await request(app).get(`/employees/teste`);
        expect(response.status).toBe(404);
    });

    it("PATCH /employees/:id - Should be able to update a employee by id", async () => {
        const response = await request(app)
            .patch(`/employees/${newPerson.id}`)
            .send(M.mockedEmployeeUpdateValid);
        const foundEmployee = response.body[0];
        expect(foundEmployee).toHaveProperty("id");
        expect(foundEmployee).toHaveProperty("name");
        expect(foundEmployee).toHaveProperty("email");
        expect(foundEmployee).not.toHaveProperty("password");
        expect(foundEmployee.name).toStrictEqual(
            M.mockedEmployeeUpdateValid.name
        );
        expect(foundEmployee.email).toStrictEqual(
            M.mockedEmployeeUpdateValid.email
        );
        expect(response.status).toBe(200);
    });

    it("PATCH /employees/:id - Should not be able to delete employee with id invalid", async () => {
        const response = await request(app).patch(`/employees/teste`).send({});
        expect(response.status).toBe(400);
    });

    it("DELETE /employees/:id - Should be able to delete employee by id", async () => {
        const response = await request(app).delete(
            `/employees/${newPerson.id}`
        );
        expect(response.status).toBe(204);
    });

    it("DELETE /employees/:id - Should not be able to delete employee with id invalid", async () => {
        const response = await request(app).delete(`/employees/teste`);
        expect(response.status).toBe(404);
    });
});
