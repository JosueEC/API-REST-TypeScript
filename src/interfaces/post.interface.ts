import { ObjectId, Document } from 'mongoose'
import { Category } from './category.interface'

export interface Post extends Document {
  title: String
  description: String
  author: ObjectId
  categories: Category[]
}
