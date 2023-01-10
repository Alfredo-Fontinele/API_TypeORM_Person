import { HandlerError } from './errors/handlerError'
import { Routes } from './routes'
import express from 'express'
import 'express-async-errors'

export const app = express()

app.use(express.json())
app.use(Routes)
app.use(HandlerError)
