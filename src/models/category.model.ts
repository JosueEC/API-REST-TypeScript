import { Schema, model } from 'mongoose'
import { Category } from '../interfaces/category.interface'

const CategorySchema = new Schema <Category>(
  {
    name: {
      type: String,
      required: true
    }
  },
  {
    timestamps: false,
    versionKey: false
  }
)

const CategoryModel = model('category', CategorySchema)

export default CategoryModel
