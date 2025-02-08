export interface ICategories {
  id?: string
  name: string
  session_id?: string
}

export type UpdateTypes = Partial<Pick<ICategories, 'name'>>

export interface CategoriesRepositoryInterface {
  findAll(orderBy: string): Promise<ICategories[] | null>
  create(data: ICategories): Promise<void>
  findById(id: string): Promise<ICategories | undefined>
  findByName(name: string): Promise<ICategories | undefined>
  update(id: string, data: ICategories): Promise<void>
  delete(id: string): Promise<void>
}
