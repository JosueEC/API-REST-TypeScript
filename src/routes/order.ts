import { Router } from 'express'
import { getItems } from '../controllers/order'
import { checkJWT } from '../middlewares/session.middleware'

//TODO: Esta ruta solo es accesible por personas que tengan una sesion valida, osea, que tengan un JWT valido
const router = Router()

//! http://localhost:3000/order
router.get('/', checkJWT, getItems)

export { router }
