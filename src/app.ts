import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import dbConnect from './config/mongo'

import routes from './routes'

const PORT = process.env.PORT || 3001

const server = express()

server.use(cors({
  origin: ['http://localhost:3001']
}))

server.use(express.json())

dbConnect().then(() => console.info('Connected to database'))

server.listen(PORT, () => {
  console.info('Server listening on port', PORT)
})

server.use(routes)
