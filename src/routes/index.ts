import { personRoutes } from './persons.routes'
import { jobRoutes } from './jobs.routes'
import { Router } from 'express'

export const Routes = Router()

Routes.use('/persons', personRoutes)
Routes.use('/jobs', jobRoutes)
