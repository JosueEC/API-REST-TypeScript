import { Response } from 'express'
import { RequestExt } from '../interfaces/reqExt.interface';
import { handleHTTP } from '../utils/error.handler';
import { registerUpload } from '../services/storage.service';
import { Storage } from '../interfaces/storage.interface';


const getFile = async (req: RequestExt, res: Response) => {
  try {
    const { user, file } = req
    const dataToRegister: Storage = {
      fileName: `${file?.filename}`,
      idUser: `${user?.id}`,
      path: `${file?.path}`
    }
    const responseItem = await registerUpload(dataToRegister)
    res.status(200).send(responseItem)
  } catch (error) {
    handleHTTP(res, 'ERROR_GET_FILE', error)
  }
};

export { getFile };