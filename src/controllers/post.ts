import { Request, Response } from 'express'
import { handleHTTP } from '../utils/error.handler'
import {
  handleGetPosts,
  getPostById,
  filterPostByTitle,
  getPostsWithAuthor,
  getPostsWithCategories
} from '../filters/controllers/post.filtercontroller'
import {
  savePost,
  updatePost,
  removePost
} from '../services/post.service'

// * Chain of Responsibility (Cadena de Responsabilidad) (Patron de Comportamiento)
const getPosts = (req: Request, res: Response): void => {
  const filters = [
    getPostById,
    filterPostByTitle,
    getPostsWithAuthor,
    getPostsWithCategories,
    handleGetPosts
  ]

  let index = 0

  const nextFilter = (): void => {
    const currentFilter = filters[index]
    index++
    currentFilter(req, res, nextFilter)
  }

  nextFilter()
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
  createPost,
  putPost,
  deletePost
}
