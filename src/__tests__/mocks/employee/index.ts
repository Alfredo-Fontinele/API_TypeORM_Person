import { IEmployee } from "../../../interfaces/employee";

export const mockedEmployeeValid: IEmployee = {
    name: "teste",
    email: "teste@gmail.com",
    password: "teste",
};

export const mockedEmployeeInvalid = {
    name: 12,
    email: "teste",
    password: "teste",
};

export const mockedEmployeeUpdateValid: IEmployee = {
    name: "teste",
    email: "teste1@gmail.com",
    password: "teste12",
};

export const mockedEmployeeUpdateInvalid = {
    name: "21",
    email: "teste1",
    password: "teste12",
};
