import { ObjectId, Document } from 'mongoose'

export interface Post extends Document {
  title: String
  description: String
  author: ObjectId
  categories: String[]
}
