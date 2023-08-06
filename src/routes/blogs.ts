import { Request, Response, Router } from 'express'

const router = Router()

router.use('/', (_req:Request, res:Response) => {
  res.send({ data: 'blogs GET'})
})

export { router }
