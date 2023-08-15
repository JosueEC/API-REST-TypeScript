import { ObjectId } from 'mongoose'

export interface Post {
  title: String
  description: String
  author: ObjectId
}
