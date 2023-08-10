import { Car } from '../interfaces/car.interface'
import ItemModel from '../models/item.model'

const insertCar = async (item: Car): Promise <Car> => {
  const responseInsert = await ItemModel.create(item)
  return responseInsert
}

const getCars = async (): Promise <Car[]> => {
  const responseItems = await ItemModel.find({})
  return responseItems
}

const getCar = async (id: string): Promise <Car> => {
  const responseItem = await ItemModel.findById({ _id: id })

  if (responseItem == null) throw new Error('CAR_NOT_FOUND')
  return responseItem
}

const updateCar = async (id: string, data: Car): Promise <Car> => {
  const responseItem = await ItemModel.findByIdAndUpdate(
    { _id: id },
    data,
    {
      new: true
    }
  )

  if (responseItem == null) throw new Error('CAR_NOT_FOUND')
  return responseItem
}

const deleteCar = async (id: string): Promise <Car> => {
  const responseItem = await ItemModel.findOneAndRemove({ _id: id })

  if (responseItem == null) throw new Error('CAR_NOT_FOUND')
  return responseItem
}

export {
  insertCar,
  getCars,
  getCar,
  updateCar,
  deleteCar
}
