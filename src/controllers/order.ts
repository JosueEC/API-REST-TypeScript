import { Response } from 'express'
import { RequestExt } from '../interfaces/reqExt.interface'
import { handleHTTP } from '../utils/error.handler'

const getItems = async (req: RequestExt, res: Response) => {
  try {
    res.status(200).send({
      message: 'Esto solo lo acceden las personas con sesion / jwt activa',
      user: req.user
    })
  } catch (error) {
    handleHTTP(res, 'ERROR_GET_ORDER', error)
  }
}

export { getItems }
