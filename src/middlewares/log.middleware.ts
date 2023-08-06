import { NextFunction, Request, Response } from 'express'

const logMiddleware = (req: Request, _res: Response, next: NextFunction) => {
  const header = req.headers
  const userAgent = header['user-agent']
  console.info('user-agent: ', userAgent)
  next()
}

export { logMiddleware }
