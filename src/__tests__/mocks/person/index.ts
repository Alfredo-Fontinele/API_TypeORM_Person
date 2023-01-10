import { IPerson } from "../../../interfaces/person"

export const mockedUserValid:IPerson = {
    name: 'teste',
    email: 'teste@gmail.com',
    password: 'teste'
}

export const mockedUserInvalid = {
    name: 12,
    email: 'teste',
    password: 'teste'
}

export const mockedUserUpdateValid:IPerson = {
    name: 'teste',
    email: 'teste1@gmail.com',
    password: 'teste12'
}

export const mockedUserUpdateInvalid = {
    name: '21',
    email: 'teste1',
    password: 'teste12'
}
