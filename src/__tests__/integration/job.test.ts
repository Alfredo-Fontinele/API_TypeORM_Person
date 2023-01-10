import { AppDataSource } from './../../data-source'
import { INewJob } from '../../interfaces/job'
import * as M from '../mocks/job/index'
import { DataSource } from 'typeorm'
import { app } from '../../app'
import request from 'supertest'

let newJob: INewJob

describe('/jobs', () => {
    let connection: DataSource

    beforeAll(async () => {
        await AppDataSource.initialize().then((res) => {
            connection = res
        }).catch((err) => console.log(err))
    })

    afterAll(async () => {
        await connection.destroy()
    })

    it('POST /jobs - Should be to create job', async () => {
        const response = await request(app).post('/jobs').send(M.mockedJobValid)
        newJob = response.body
        expect(response.body).toHaveProperty('id')
        expect(response.body).toHaveProperty('name')
        expect(response.body).toHaveProperty('level')
        expect(response.body.name).toStrictEqual(M.mockedJobValid.name)
        expect(response.body.level).toStrictEqual(M.mockedJobValid.level)
        expect(response.status).toBe(201)
    })

    it('POST /persons - Should not be able to create invalid body user', async () => {
        const response = await request(app).post('/jobs').send(M.mockedJobInvalid)
        expect(response.status).toBe(400)
    })

    it('GET /jobs - Should be list all jobs', async () => {
        const response = await request(app).get('/jobs')
        expect(response.body).toHaveLength(1)
    })

})
