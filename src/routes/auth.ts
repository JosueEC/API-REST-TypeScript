import { Router } from 'express'
import {
  registerController,
  loginController
} from '../controllers/auth'

const router = Router()

//! http://localhost:3000/auth/register [POST]
router.post('/register', registerController)

router.post('/login', loginController)

export { router }
