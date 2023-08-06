import { Request, Response } from 'express'
import { handleHTTP } from '../utils/error.handler'

const getItems = (_req:Request, res: Response) => {
  try {

  } catch (error) {
    handleHTTP(res, 'ERROR_GET_BLOGS')
  }
}

const getItem = (_req:Request, res:Response) => {
  try {
    
  } catch (error) {
    handleHTTP(res, 'ERROR_GET_BLOG')
  }
}

const postItem = (_req:Request, res:Response) => {
  try {
    
  } catch (error) {
    handleHTTP(res, 'ERROR_POST_BLOG')
  }
}

const updateItem = (_req:Request, res:Response) => {
  try {
    
  } catch (error) {
    handleHTTP(res, 'ERROR_UPDATE_BLOG')
  }
}

const deletItem = (_req:Request, res:Response) => {
  try {
    
  } catch (error) {
    handleHTTP(res, 'ERROR_DELETE_BLOG')
  }
}

export {
  getItems,
  getItem,
  postItem,
  updateItem,
  deletItem
}
