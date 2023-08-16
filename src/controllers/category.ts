import { Request, Response } from 'express'
import {
  findCategories,
  findCategoryWithPosts,
  saveCategory,
  removeCategory
} from '../services/category.service'
import { handleHTTP } from '../utils/error.handler'

const getCategories = (req: Request, res: Response): void => {
  const { addPost } = req.query

  if (typeof addPost === 'string' && addPost === 'true') {
    getCategoriesWithPosts(req, res)
    return
  }

  findCategories()
    .then((response) => res.status(200).send(response))
    .catch((error) => handleHTTP(res, 'ERROR_GET_CATEGORIES', error))
}

const getCategoriesWithPosts = (_req: Request, res: Response): void => {
  findCategoryWithPosts()
    .then((response) => res.status(200).send(response))
    .catch((error) => handleHTTP(res, 'ERROR_GET_CATEGORY_WITH_POSTS', error))
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
  getCategoriesWithPosts,
  postCategory,
  deleteCategory
}
