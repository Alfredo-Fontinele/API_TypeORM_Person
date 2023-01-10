import * as yup from 'yup'

export const personSchema = yup.object().shape({
    name: yup.string().min(5).required(),
    email: yup.string().email().required(),
    password: yup.string().min(5).required()
})

export const jobSchema = yup.object().shape({
    name: yup.string().min(4).required(),
    level: yup.string().required()
})

export const personJobSchema = yup.object().shape({
    id_person: yup.string().required(),
    id_job: yup.string().required()
})
