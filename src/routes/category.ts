import { Router } from 'express'
import {
  getCategories,
  postCategory,
  deleteCategory
} from '../controllers/category'

const router = Router()

// * http://localhost:3000/category
router.get('/', getCategories)

// * http://localhost:3000/category
router.post('/', postCategory)

// * http://localhost:3000/category
router.delete('/', deleteCategory)

export { router }
