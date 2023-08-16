import { Schema, model } from 'mongoose'
import { Post } from '../interfaces/post.interface'

const PostSchema = new Schema <Post>(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    author: {
      type: Schema.ObjectId,
      ref: 'users',
      required: true
    },
    categories: {
      type: Array(String)
    }
  },
  {
    timestamps: false,
    versionKey: false
  }
)

const PostModel = model('posts', PostSchema)

export default PostModel
