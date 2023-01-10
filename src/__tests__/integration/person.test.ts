import { INewPerson } from '../../interfaces/person'
import { AppDataSource } from '../../data-source'
import * as M from '../mocks/person/index'
import { DataSource } from 'typeorm'
import { compare } from 'bcryptjs'
import { app } from '../../app'
import request from 'supertest'

let newPerson:INewPerson

describe('/persons', () => {
    let connection: DataSource

    beforeAll(async () => {
        await AppDataSource.initialize().then((res) => {
            connection = res
        }).catch((err) => {
            console.error("Error during Data Source initialization", err)
        })
    })

    afterAll(async() => {
        await connection.destroy()
    })

    it('POST /persons - Should be able to create user', async () => {
        const response = await request(app).post('/persons').send(M.mockedUserValid)
        newPerson = response.body
        expect(response.body).toHaveProperty('id')
        expect(response.body).toHaveProperty('name')
        expect(response.body).toHaveProperty('email')
        expect(response.body).toHaveProperty('password')
        expect(response.body.name).toStrictEqual(M.mockedUserValid.name)
        expect(response.body.email).toStrictEqual(M.mockedUserValid.email)
        expect(
            compare(M.mockedUserValid.password, response.body.password)
        ).toBeTruthy()
        expect(response.status).toBe(201)
    })
    
    it('POST /persons - Should not be able to create invalid body user', async () => {
        const response = await request(app).post('/persons').send(M.mockedUserInvalid)
        expect(response.body).toHaveProperty("message")
        expect(response.status).toBe(400)
    })

    it('GET /persons - Should be able to list all users', async () => {
        const response = await request(app).get('/persons')
        expect(response.status).toBe(200)
    })

    it('GET /persons/:id - Should be able to list a user by id', async () => {
        const response = await request(app).get(`/persons/${newPerson.id}`)
        const foundUser = response.body[0]
        expect(foundUser).toHaveProperty("name")
        expect(foundUser.name).toStrictEqual(M.mockedUserValid.name)
        expect(response.status).toBe(200)
    })
    
    it('GET /persons/:id - Should not be able to list a user with invalid id', async () => {
        const response = await request(app).get(`/persons/teste`)
        expect(response.status).toBe(404)
    })
    
    it('PATCH /persons/:id - Should be able to update a user by id', async () => {
        const response = await request(app).patch(`/persons/${newPerson.id}`).send(M.mockedUserUpdateValid)
        const foundUser = response.body[0]
        expect(foundUser).toHaveProperty('id')
        expect(foundUser).toHaveProperty('name')
        expect(foundUser).toHaveProperty('email')
        expect(foundUser).not.toHaveProperty('password')
        expect(foundUser.name).toStrictEqual(M.mockedUserUpdateValid.name)
        expect(foundUser.email).toStrictEqual(M.mockedUserUpdateValid.email)
        expect(response.status).toBe(200)
    })

    it('PATCH /persons/:id - Should not be able to delete user with id invalid', async () => {
        const response = await request(app).patch(`/persons/teste`).send({})
        expect(response.status).toBe(400)
    })

    it('DELETE /persons/:id - Should be able to delete user by id', async () => {
        const response = await request(app).delete(`/persons/${newPerson.id}`)
        expect(response.status).toBe(204)
    })
    
    it('DELETE /persons/:id - Should not be able to delete user with id invalid', async () => {
        const response = await request(app).delete(`/persons/teste`)
        expect(response.status).toBe(404)
    })

})
