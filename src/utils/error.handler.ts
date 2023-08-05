import { Response } from "express"

const handleHTTP = (res:Response, error:string) => {
  res.status(500).send({ error })
}

export { handleHTTP }
