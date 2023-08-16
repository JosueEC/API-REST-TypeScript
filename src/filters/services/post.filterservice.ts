import { Post } from '../../interfaces/post.interface'
import PostModel from '../../models/post.model'

const findOnePost = async (id: string): Promise<Post> => {
  const response = await PostModel.findById({ _id: id })

  if (response == null) throw new Error('POST_NOT_FOUND')
  return response
}

const findPostsByTitle = async (title: string): Promise<Post[]> => {
  const response = await PostModel.find({ title })
  return response
}

const findPostWithAuthor = async (): Promise<Object[]> => {
  const response = await PostModel.aggregate(
    [
      {
        $lookup: {
          from: 'users',
          localField: 'author',
          foreignField: '_id',
          as: 'userAuthor'
        }
      },
      { $unwind: '$userAuthor' }
    ]
  )

  return response
}

const findPostWithCategories = async (): Promise<Object[]> => {
  const response = await PostModel.aggregate( // Coleccion
    [
      {
        $lookup: {
          from: 'categories', // Coleccion hija o a la que deseamos conectar/agregar
          let: {
            aliasPost: '$categories' // Variable de conexion sacada de la coleccion hija
          },
          pipeline: [ // Filtros
            {
              $match: { // Filtros de match
                $expr: { // Expresiones de match que deben cumplirse
                  $in: ['$name', '$$aliasPost'] // Operador $in para buscar si un valor existe en un arrgelo. El primer parametro es la cadena de busqueda y el segundo parametro es el array donde se va a buscar la existencia de la cadena.
                }
              }
            }
          ],
          as: 'listCategories' // Alias de la nueva columna agregada
        }
      }
    ]
  )

  return response
}

export {
  findOnePost,
  findPostsByTitle,
  findPostWithAuthor,
  findPostWithCategories
}
