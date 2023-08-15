import { Router } from 'express'
import {
  getPosts,
  getPostByID,
  createPost,
  putPost,
  deletePost
} from '../controllers/post'

const router = Router()

// * http://localhost:3000/post [GET]
router.get('/', getPosts)

// * http://localhost:3000/post/:id [GET]
router.get('/:id', getPostByID)

// * http://localhost:3000/post [POST]
router.post('/', createPost)

// * http://localhost:3000/post [PUT]
router.put('/:id', putPost)

// * http://localhost:3000/post [DELETE]
router.delete('/:id', deletePost)

export default router
