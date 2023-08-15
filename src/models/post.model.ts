import { Schema, model, Types } from 'mongoose'
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
      type: Types.ObjectId,
      required: true
    }
  },
  {
    timestamps: false,
    versionKey: false
  }
)

const PostModel = model('posts', PostSchema)

export default PostModel
