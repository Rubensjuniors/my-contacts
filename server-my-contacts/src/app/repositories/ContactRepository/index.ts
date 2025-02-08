import { knex } from '@/db/database'
import {
  ContactsRepositoryInterface,
  IContacts,
  IContactsUpdated,
} from './types'
import { randomUUID } from 'crypto'

class ContactsRepository implements ContactsRepositoryInterface {
  async findAll(orderBy: string) {
    const direction = orderBy.toLocaleLowerCase() === 'desc' ? 'desc' : 'asc'
    const contacts = await knex('contacts').select().orderBy('name', direction)

    return contacts
  }

  async create(data: IContacts): Promise<void> {
    await knex('contacts').insert({
      id: randomUUID(),
      name: data.name,
      email: data.email,
      phone_number: data.phone_number,
      category_id: data.category_id,
      session_id: data.session_id,
    })
  }

  async findById(id: string): Promise<IContacts | undefined> {
    const contact = await knex('contacts').select('*').where('id', id).first()

    return contact
  }

  async update(id: string, data: IContactsUpdated): Promise<void> {
    await knex('contacts')
      .where('id', id)
      .update({
        ...data,
      })
  }

  async delete(id: string): Promise<void> {
    await knex('contacts').where('id', id).del()
  }
}

export const contactsRepository = new ContactsRepository()
