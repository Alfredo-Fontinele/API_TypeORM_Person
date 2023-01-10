import { AppDataSource } from '../data-source'
import { Person } from '../entities/Person'

export const personRepo = AppDataSource.getRepository(Person)