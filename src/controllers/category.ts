import { Request, Response } from 'express'
import {
  findCategories,
  saveCategory,
  removeCategory
} from '../services/category.service'
import { handleHTTP } from '../utils/error.handler'

const getCategories = (_req: Request, res: Response): void => {
  findCategories()
    .then((response) => res.status(200).send(response))
    .catch((error) => handleHTTP(res, 'ERROR_GET_CATEGORIES', error))
}

const postCategory = ({ body }: Request, res: Response): void => {
  saveCategory(body)
    .then((response) => res.status(200).send(response))
    .catch((error) => handleHTTP(res, 'ERROR_POST_CATEGORY', error))
}

const deleteCategory = ({ params }: Request, res: Response): void => {
  const { id } = params
  removeCategory(id)
    .then((response) => res.status(200).send(response))
    .catch((error) => handleHTTP(res, 'ERROR_DELETE_CATEGORY', error))
}

export {
  getCategories,
  postCategory,
  deleteCategory
}
