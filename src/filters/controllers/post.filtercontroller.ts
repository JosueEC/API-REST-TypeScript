import { NextFunction, Request, Response } from 'express'
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

const getPostById = ({ params }: Request, res: Response, next: NextFunction): void => {
  const { id } = params

  if (id === undefined) {
    next()
  } else {
    findOnePost(id)
      .then(response => res.status(200).send(response))
      .catch(error => handleHTTP(res, 'ERROR_GET_POST', error))
  }
}

const filterPostByTitle = ({ query }: Request, res: Response, next: NextFunction): void => {
  const { title } = query

  if (typeof title !== 'string') {
    next()
  } else {
    findPostsByTitle(title)
      .then(response => res.status(200).send(response))
      .catch(error => handleHTTP(res, 'ERROR_GET_POST_BY_TITLE', error))
  }
}

const getPostsWithAuthor = ({ query }: Request, res: Response, next: NextFunction): void => {
  const { author } = query

  if (author !== 'true') {
    next()
  } else {
    findPostWithAuthor()
      .then(response => res.status(200).send(response))
      .catch(error => handleHTTP(res, 'ERROR_GET_POSTS&AUTHOR', error))
  }
}

const getPostsWithCategories = ({ query }: Request, res: Response, next: NextFunction): void => {
  const { addCategories } = query

  if (addCategories !== 'true') {
    next()
  } else {
    findPostWithCategories()
      .then(response => res.status(200).send(response))
      .catch(error => handleHTTP(res, 'ERROR_GET_POSTS&CATEGORIES', error))
  }
}

export {
  handleGetPosts,
  getPostById,
  filterPostByTitle,
  getPostsWithAuthor,
  getPostsWithCategories
}
