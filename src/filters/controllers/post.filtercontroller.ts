import { Request, Response } from 'express'
import { handleHTTP } from '../../utils/error.handler'
import {
  findOnePost,
  findPostsByTitle,
  findPostWithAuthor,
  findPostWithCategories
} from '../services/post.filterservice'
import { findPosts } from '../../services/post.service'

const handleGetPosts = (_req: Request, res: Response): void => {
  findPosts()
    .then(response => res.status(200).send(response))
    .catch(error => handleHTTP(res, 'ERROR_GET_POSTS', error))
}

const getPostById = ({ params }: Request, res: Response): void => {
  const { id } = params
  findOnePost(id)
    .then(response => res.status(200).send(response))
    .catch(error => handleHTTP(res, 'ERROR_GET_POST', error))
}

const filterPostByTitle = ({ query }: Request, res: Response): void => {
  const { title } = query

  if (typeof title !== 'string') throw new Error('The title must be a text value')

  findPostsByTitle(title)
    .then(response => res.status(200).send(response))
    .catch(error => handleHTTP(res, 'ERROR_GET_POST_BY_TITLE', error))
}

const getPostsWithAuthor = (_req: Request, res: Response): void => {
  findPostWithAuthor()
    .then(response => res.status(200).send(response))
    .catch(error => handleHTTP(res, 'ERROR_GET_POSTS&AUTHOR', error))
}

const getPostsWithCategories = (_req: Request, res: Response): void => {
  findPostWithCategories()
    .then(response => res.status(200).send(response))
    .catch(error => handleHTTP(res, 'ERROR_GET_POSTS&CATEGORIES', error))
}

export {
  handleGetPosts,
  getPostById,
  filterPostByTitle,
  getPostsWithAuthor,
  getPostsWithCategories
}
