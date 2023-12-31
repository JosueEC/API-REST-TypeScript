import { Response } from 'express'

const handleHTTP = (res: Response, error: string, errorRaw?: any): void => {
  console.info(errorRaw)
  res.status(500).send({ error })
}

export { handleHTTP }
