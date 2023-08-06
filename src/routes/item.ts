import { Router } from 'express'
import {
  getItem,
  getItems,
  postItem,
  updateItem,
  deletItem
} from '../controllers/items'

const router = Router()

//! http://localhost:3000/items [GET]
router.get('/', getItems)

router.get('/:id', getItem)

router.post('/', postItem)

router.put('/:id', updateItem)

router.delete('/:id', deletItem)

export { router }
