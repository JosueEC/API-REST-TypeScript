import { Request, Response } from 'express'
import { handleHTTP } from '../utils/error.handler'
import {
  registerNewUser,
  loginUser
} from '../services/auth.service'

const registerController = ({ body }: Request, res: Response): void => {
  registerNewUser(body)
    .then((response) => res.status(200).send(response))
    .catch((error) => handleHTTP(res, 'ERROR_REGISTER_USER', error))
}

const loginController = ({ body }: Request, res: Response): void => {
  loginUser(body)
    .then((response) => res.status(200).send(response))
    .catch((error) => handleHTTP(res, 'ERROR_USER_LOGIN', error))
}

export {
  registerController,
  loginController
}
