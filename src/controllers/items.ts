import { Request, Response } from 'express'
import { handleHTTP } from '../utils/error.handler'
import {
  insertCar,
  getCars,
  getCar,
  updateCar,
  deleteCar
} from '../services/item.service'

const getItem = async ({ params }: Request, res: Response): Promise <void> => {
  try {
    const { id } = params
    const responseItem = await getCar(id)
    res.status(200).send(responseItem)
  } catch (error) {
    handleHTTP(res, 'ERROR_GET_ITEM')
  }
}

const getItems = async (_req: Request, res: Response): Promise <void> => {
  try {
    const responseItems = await getCars()
    res.status(200).send(responseItems)
  } catch (error) {
    handleHTTP(res, 'ERROR_GET_ITEMS')
  }
}

const postItem = async ({ body }: Request, res: Response): Promise <void> => {
  try {
    const responseItem = await insertCar(body)
    res.status(200).send(responseItem)
  } catch (error) {
    handleHTTP(res, 'ERROR_POST_ITEM', error)
  }
}

const updateItem = async ({ body, params }: Request, res: Response): Promise <void> => {
  try {
    const { id } = params
    const responseItem = await updateCar(id, body)
    res.status(200).send(responseItem)
  } catch (error) {
    handleHTTP(res, 'ERROR_UPDATE_ITEM')
  }
}

const deletItem = async ({ params }: Request, res: Response): Promise <void> => {
  try {
    const { id } = params
    const responseItem = await deleteCar(id)
    res.status(200).send(responseItem)
  } catch (error) {
    handleHTTP(res, 'ERROR_DELETE_ITEM')
  }
}

export {
  getItem,
  getItems,
  postItem,
  updateItem,
  deletItem
}
