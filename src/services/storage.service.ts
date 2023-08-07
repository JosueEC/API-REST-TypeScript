import StorageModel from '../models/storage.model';
import { Storage } from '../interfaces/storage.interface'

const registerUpload = async ({ fileName, idUser, path }: Storage) => {
  const responseItem = await StorageModel.create({ fileName, idUser, path })
  return responseItem
};

export { registerUpload };