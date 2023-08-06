import { Request, Response } from "express"
import { handleHTTP } from "../utils/error.handler"

const getItem = (req:Request, res:Response) => {
  try {
    
  } catch (error) {
    handleHTTP(res, 'ERROR_GET_ITEM')
  }
}

const getItems = (req:Request, res:Response) => {
  try {
    
  } catch (error) {
    handleHTTP(res, 'ERROR_GET_ITEMS')
  }
}

const postItem = ({ body }:Request, res:Response) => {
  try {
    res.send(body)
  } catch (error) {
    handleHTTP(res, 'ERROR_POST_ITEM')
  }
}

const updateItem = (req:Request, res:Response) => {
  try {
    
  } catch (error) {
    handleHTTP(res, 'ERROR_UPDATE_ITEM')
  }
}

const deletItem = (req:Request, res:Response) => {
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
