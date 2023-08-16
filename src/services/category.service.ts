import { Category } from '../interfaces/category.interface'
import CategoryModel from '../models/category.model'

const findCategories = async (): Promise<Category[]> => {
  const response = await CategoryModel.find({})
  return response
}

const findCategoryWithPosts = async (): Promise<Object[]> => {
  const response = await CategoryModel.aggregate( // Coleccion padre
    [
      {
        $lookup: {
          from: 'posts', // Coleccion hija
          let: { // En let puedes almacenar los valores de la propiedades de la coleccion padre para despues poder accederlos desde el pipeline, de otra forma no seria posible accederlos
            aliasCategory: '$name' // Nombre del campo de la coleccion padre almacenado en una variable "Salud"
          },
          pipeline: [ // pipeline son filtros basados en lo que queremos obtener, por estos filtros pasa el valor de la variable padre. pipeline tiene scope sobre la coleccion hija
            {
              $match: {
                $expr: { // Dentro de $expr podemos hacer uso de los operadores de mongo para establecer filtros de coincidencias en base a lo que deseamos obtenero. A traves del simbolo de peso podemos acceder a los valores de los campos de la coleccion hija, y a traves del doble $$ podemos acceder a las variables delcaradas en let. Las variables llegan con el tipo de dato que tienen, si son arrays, llegan arrays, si son strings, llegan strings, etc. El primer parametro es la cadena de busqueda y el segundo es el array en donde se va a buscar la existencia de la cadena de busqueda
                  $in: ['$$aliasCategory', '$categories']
                }
              }
            }
          ],
          as: 'allPosts'
        }
      }
    ]
  )

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
  findCategories,
  findCategoryWithPosts,
  saveCategory,
  removeCategory
}
