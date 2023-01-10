import { AnyObject } from 'yup/lib/types'
import { IJob } from '../interfaces/job'

export const formatValuesBodyToLower = (body: IJob):IJob => {
    const values = Object.entries(body)
    const newBody:AnyObject = {}
    values.forEach(item => {
        const property = item[0]
        const value = item[1].toLowerCase()
        return newBody[property] = value
    })
    return newBody
}
