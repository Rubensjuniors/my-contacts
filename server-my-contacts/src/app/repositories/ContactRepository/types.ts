export interface IContacts {
  id?: string
  name: string
  email: string
  phone_number: string
  category_id: string
  session_id?: string
}

export type IContactsUpdated = Partial<
  Pick<IContacts, 'name' | 'email' | 'phone_number' | 'category_id'>
>

export interface ContactsRepositoryInterface {
  findAll(orderBy: string): Promise<IContacts[] | null>
  create(data: IContacts): Promise<void>
  findById(id: string): Promise<IContacts | undefined>
  update(id: string, data: IContacts): Promise<void>
  delete(id: string): Promise<void>
}
