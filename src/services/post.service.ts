import { Post } from '../interfaces/post.interface'
import PostModel from '../models/post.model'

const findPosts = async (): Promise <Post[]> => {
  const response = await PostModel.find({})
  return response
}

const findOnePost = async (id: string): Promise<Post> => {
  const response = await PostModel.findById({ _id: id })

  if (response == null) throw new Error('POST_NOT_FOUND')
  return response
}

const savePost = async (post: Post): Promise<Post> => {
  const response = await PostModel.create(post)
  return response
}

const updatePost = async (id: string, post: Post): Promise<Post> => {
  const response = await PostModel.findOneAndUpdate(
    { _id: id }, post, { new: true }
  )

  if (response == null) throw new Error('POST_NOT_FOUND')
  return response
}

const removePost = async (id: string): Promise<Post> => {
  const response = await PostModel.findOneAndRemove({ _id: id })

  if (response == null) throw new Error('POST_NOT_FOUND')
  return response
}

export {
  findPosts,
  findOnePost,
  savePost,
  updatePost,
  removePost
}
