import { Category } from '../interfaces/category.interface'
import CategoryModel from '../models/category.model'

const findCategory = async (): Promise<Category[]> => {
  const response = await CategoryModel.find({})
  return response
}

const saveCategory = async (category: Category): Promise<Category> => {
  const response = await CategoryModel.create(category)
  return response
}

const removeCategory = async (id: string): Promise<Category> => {
  const response = await CategoryModel.findByIdAndRemove({ _id: id })

  if (response == null) throw new Error('CATEGORY_NOT_FOUND')

  return response
}

export {
  findCategory,
  saveCategory,
  removeCategory
}
