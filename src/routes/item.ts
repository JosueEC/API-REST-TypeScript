import { Router } from 'express'
import { logMiddleware } from '../middlewares/log.middleware'
import {
  getItem,
  getItems,
  postItem,
  updateItem,
  deletItem
} from '../controllers/items'

const router = Router()

//! http://localhost:3000/items [GET]
router.get('/', logMiddleware, getItems)

router.get('/:id', getItem)

router.post('/', postItem)

router.put('/:id', updateItem)

router.delete('/:id', deletItem)

export { router }
