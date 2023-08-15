import { Router } from 'express'
import { readdirSync } from 'fs'

const PATH_ROUTER = `${__dirname}`
const router = Router()

const cleanFileName = (fileName: string): string => {
  const file = fileName.split('.').shift()

  if (file == null) throw new Error('File problem')
  return file
}

readdirSync(PATH_ROUTER).filter((fileName): string => {
  const cleanName = cleanFileName(fileName)
  if (cleanName !== 'index') {
    import(`./${cleanName}`)
      .then((moduleRouter) => {
        console.info(`Loading route... /${cleanName}`)
        router.use(`/${cleanName}`, moduleRouter.router)
      })
      .catch((error) => console.error(error))
  }
  return ''
})

export default router
