import { Request, Response, Router } from 'express'

const router = Router()

//! http://localhost:3000/items [GET]
router.get('/', (req: Request, res: Response) => {
  res.send({ data: 'GET items'})
})

export { router }
