import { NextFunction, Response } from 'express'
import { RequestExt } from '../interfaces/reqExt.interface'
import { verifyToken } from '../utils/jwt.handle'

const checkJWT = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const bearerToken = req.headers.authorization || ''
    const jwt = bearerToken.split(' ').pop()
    const isUser = verifyToken(`${jwt}`) as { id: string }

    if (!isUser) {
      res.status(401).send({ message: 'INVALID_TOKEN '})
    } else {
      req.user = isUser
      next()
    }
  } catch (error) {
    res.status(400).send({
      message: 'INVALID_SESSION'
    })
  }
}

export { checkJWT }