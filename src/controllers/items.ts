import { Request, Response } from "express"
import { handleHTTP } from "../utils/error.handler"
import { insertCar, getCars } from "../services/item.service"

const getItem = (_req:Request, res:Response) => {
  try {
    
  } catch (error) {
    handleHTTP(res, 'ERROR_GET_ITEM')
  }
}

const getItems = async (_req:Request, res:Response) => {
  try {
    const responseItems = await getCars()
    res.status(200).send(responseItems) 
  } catch (error) {
    handleHTTP(res, 'ERROR_GET_ITEMS')
  }
}

const postItem = async ({ body }:Request, res:Response) => {
  try {
    const responseItem = await insertCar(body)
    res.status(200).send(responseItem)
  } catch (error) {
    handleHTTP(res, 'ERROR_POST_ITEM', error)
  }
}

const updateItem = (_req:Request, res:Response) => {
  try {
    
  } catch (error) {
    handleHTTP(res, 'ERROR_UPDATE_ITEM')
  }
}

const deletItem = (_req:Request, res:Response) => {
  try {
  
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
