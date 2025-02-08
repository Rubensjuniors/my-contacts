import { knex } from '@/db/database'
import { randomUUID } from 'node:crypto'
import { CategoriesRepositoryInterface, ICategories } from './types'

class CategoriesRepository implements CategoriesRepositoryInterface {
  async findAll(orderBy = 'asc') {
    const direction = orderBy.toLocaleLowerCase() === 'desc' ? 'desc' : 'asc'
    const categories = await knex('categories')
      .select()
      .orderBy('name', direction)

    return categories
  }

  async create(data: ICategories) {
    await knex('categories').insert({
      id: randomUUID(),
      name: data.name,
      session_id: data.session_id,
    })
  }

  async findById(id: string) {
    const category = await knex('categories')
      .select('*')
      .where('id', id)
      .first()

    return category
  }

  async findByName(name: string) {
    const category = await knex('categories')
      .select('*')
      .where('name', name)
      .first()

    return category
  }

  async update(id: string, { name }: ICategories) {
    await knex('categories').where('id', id).update({
      name,
    })
  }

  async delete(id: string) {
    await knex('categories').where('id', id).del()
  }
}

export const categoriesRepository = new CategoriesRepository()
