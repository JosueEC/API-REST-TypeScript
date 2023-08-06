import { Car } from '../interfaces/car.interface'
import ItemModel from '../models/item.model'

const insertCar = async (item:Car) => {
  const responseInsert = await ItemModel.create(item)
  return responseInsert
}

const getCars = async () => {
  const responseItems = await ItemModel.find({})
  return responseItems
}

const getCar = async (id:string) => {
  const responseItem = await ItemModel.findById({ _id: id })
  return responseItem
}

export {
  insertCar,
  getCars,
  getCar
}
