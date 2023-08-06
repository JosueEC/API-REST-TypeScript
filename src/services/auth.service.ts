import { User } from '../interfaces/user.interface'
import { Auth } from '../interfaces/auth.interface'
import { encrypt, verified } from '../utils/bcrypt.handle'
import UserModel from '../models/user.model'

const registerNewUser = async ({ email, password, name }: User) => {
  const checkIs = await UserModel.findOne({ email })
  if (checkIs) return { message: 'USER_ALREADY_EXIST' }

  const passwordHash = await encrypt(password)
  const responseRegister = await UserModel.create({
    email,
    password: passwordHash,
    name
  })
  return responseRegister
}

const loginUser = async ({ email, password }: Auth) => {
  const checkIs = await UserModel.findOne({ email })
  if (!checkIs) return { message: 'USER_NOT_FOUND' }

  const passwordHash = checkIs.password
  const isCorrect = await verified(password, passwordHash)

  if (!isCorrect) return { message: 'INCORRECT_PASSWORD' }
  return checkIs
}

export {
  registerNewUser,
  loginUser
}