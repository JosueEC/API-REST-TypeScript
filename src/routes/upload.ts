import { Router } from 'express'
import { getFile } from '../controllers/upload'
import { checkJWT } from '../middlewares/session.middleware'
import multerMiddleware from '../middlewares/file.middleware'

const router = Router()

router.post('/', checkJWT, multerMiddleware.single('myFile'), getFile)

export { router }