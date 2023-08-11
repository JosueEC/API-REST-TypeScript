import { User } from '../interfaces/user.interface'
import { Auth } from '../interfaces/auth.interface'
import { encrypt, verified } from '../utils/bcrypt.handle'
import { generateToken } from '../utils/jwt.handle'
import UserModel from '../models/user.model'
import { Session } from '../interfaces/session.interface'

const registerNewUser = async ({ email, password, name }: User): Promise <User> => {
  const user = await UserModel.findOne({ email })
  if (user != null) throw new Error('USER_ALREADY_EXIST')

  const hashPassword = await encrypt(password)
  const response = await UserModel.create({
    email,
    password: hashPassword,
    name
  })
  return response
}

const loginUser = async ({ email, password }: Auth): Promise <Session> => {
  const user = await UserModel.findOne({ email })
  if (user == null) throw new Error('USER_NOT_FOUND')

  const hashPassword = user.password
  const isCorrect = await verified(password, hashPassword)

  if (!isCorrect) throw new Error('INVALID_CREDENTIALS')

  const token = generateToken(user.email)
  const dataUser = {
    token,
    user
  }

  return dataUser
}

export {
  registerNewUser,
  loginUser
}
