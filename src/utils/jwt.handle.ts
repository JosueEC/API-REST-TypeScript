import { Secret, sign, verify } from 'jsonwebtoken'
const JWT_SECRET = process.env.JWT_SECRET as Secret

const generateToken = (id: string): string => {
  const jwt = sign({ id }, JWT_SECRET, {
    expiresIn: '2h'
  })
  return jwt
}

const verifyToken = (jwt: string): any => {
  const isOk = verify(jwt, JWT_SECRET)
  return isOk
}

export {
  generateToken,
  verifyToken
}
