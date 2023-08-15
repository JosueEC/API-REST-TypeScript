import { Request, Response } from 'express'
import { handleHTTP } from '../utils/error.handler'
import {
  findPosts,
  findOnePost,
  findManyByTtitle,
  findPostWithUser,
  savePost,
  updatePost,
  removePost
} from '../services/post.service'

const getPosts = (req: Request, res: Response): void => {
  if (req.query.author === 'true') {
    getPostsWithUser(req, res)
    return
  }

  if (req.query.title !== undefined) {
    getManyPostByTtitle(req, res)
    return
  }

  findPosts()
    .then((response) => res.status(200).send(response))
    .catch((error) => handleHTTP(res, 'ERROR_GET_POSTS', error))
}

const getPostsWithUser = ({ query }: Request, res: Response): void => {
  const { title } = query

  if (typeof title !== 'string') throw new Error('The title must be a string value')

  findPostWithUser(title)
    .then((response) => res.status(200).send(response))
    .catch((error) => handleHTTP(res, 'ERROR_GET_POST_WITH_USER', error))
}

const getPostByID = ({ params }: Request, res: Response): void => {
  const { id } = params
  findOnePost(id)
    .then((response) => res.status(200).send(response))
    .catch((error) => handleHTTP(res, 'ERROR_FIND_USER', error))
}

const getManyPostByTtitle = ({ query }: Request, res: Response): void => {
  const { title } = query

  if (typeof title !== 'string') throw new Error('The title must be a string value')

  findManyByTtitle(title)
    .then((response) => res.status(200).send(response))
    .catch((error) => handleHTTP(res, 'ERROR_GET_MANY_POSTS', error))
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
  getManyPostByTtitle,
  getPostsWithUser,
  createPost,
  putPost,
  deletePost
}
