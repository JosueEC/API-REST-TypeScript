import { Request, Response } from 'express'
import { handleHTTP } from '../utils/error.handler'
import {
  registerNewUser,
  loginUser
} from '../services/auth.service'

const registerController = async ({ body }: Request, res: Response) => {
  try {
    const responseRegister = await registerNewUser(body)
    res.status(200).send(responseRegister)
  } catch (error) {
    handleHTTP(res, 'ERROR_REGISTER_USER', error)
  }
}

const loginController = async ({ body }: Request, res: Response) => {
  try {
    const { email, password } = body
    const responseLogin = await loginUser({ email, password })
    res.status(200).send(responseLogin)
  } catch (error) {
    handleHTTP(res, 'ERROR_USER_LOGIN', error)
  }
}

export {
  registerController,
  loginController
}