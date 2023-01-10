import { verifyExistIdPersonByBody } from '../middlewares/personJob/verifyExistIdPersonByBody'
import { verifyExistIdJobByBody } from '../middlewares/personJob/verifyExistIdJobByBody'
import { verifyAlreadyExistEmail } from '../middlewares/person/verifyAlreadyExistEmail'
import { verifyExistPersonById } from '../middlewares/person/verifyExistPersonById'
import { PersonControllers } from '../controllers/personControllers'
import { validateSchema } from './../middlewares/validations/index'
import { personJobSchema } from './../schemas/index'
import { personSchema } from '../schemas'
import { Router } from 'express'

export const personRoutes = Router()

personRoutes.get('/', 
    PersonControllers.getAllPeople
)

personRoutes.post('/', 
    validateSchema(personSchema), 
    verifyAlreadyExistEmail, 
    PersonControllers.createUser
)

personRoutes.post('/jobs',
    validateSchema(personJobSchema),
    verifyExistIdJobByBody,
    verifyExistIdPersonByBody,
    PersonControllers.createPersonJob
)

personRoutes.get('/:id', 
    verifyExistPersonById, 
    PersonControllers.getPersonById
)

personRoutes.patch('/:id', 
    validateSchema(personSchema), 
    verifyExistPersonById, 
    verifyAlreadyExistEmail, 
    PersonControllers.updatePerson
)

personRoutes.delete('/:id', 
    verifyExistPersonById, 
    PersonControllers.deletePerson
)
