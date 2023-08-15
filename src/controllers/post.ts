import { Request, Response } from 'express'
import { handleHTTP } from '../utils/error.handler'
import {
  findPosts,
  findOnePost,
  findOneByTitle,
  savePost,
  updatePost,
  removePost
} from '../services/post.service'

const getPosts = (_req: Request, res: Response): void => {
  findPosts()
    .then((response) => res.status(200).send(response))
    .catch((error) => handleHTTP(res, 'ERROR_GET_POSTS', error))
}

const getPostByID = ({ params }: Request, res: Response): void => {
  const { id } = params
  findOnePost(id)
    .then((response) => res.status(200).send(response))
    .catch((error) => handleHTTP(res, 'ERROR_FIND_USER', error))
}

const getPostByTitle = ({ query }: Request, res: Response): void => {
  const { title } = query

  if (typeof title !== 'string') throw new Error('The query must be a string')

  findOneByTitle(title)
    .then((response) => res.status(200).send(response))
    .catch((error) => handleHTTP(res, 'ERROR_GET_POST', error))
}

const createPost = ({ body }: Request, res: Response): void => {
  savePost(body)
    .then((response) => res.status(200).send(response))
    .catch((error) => handleHTTP(res, 'ERROR_CREATE_POST', error))
}

const putPost = ({ params, body }: Request, res: Response): void => {
  const { id } = params
  updatePost(id, body)
    .then((response) => res.status(200).send(response))
    .catch((error) => handleHTTP(res, 'ERROR_UPDATE_POST', error))
}

const deletePost = ({ params }: Request, res: Response): void => {
  const { id } = params
  removePost(id)
    .then((response) => res.status(200).send(response))
    .catch((error) => handleHTTP(res, 'ERROR_DELETE_POST', error))
}

export {
  getPosts,
  getPostByID,
  getPostByTitle,
  createPost,
  putPost,
  deletePost
}
