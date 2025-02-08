// eslint-disable-next-line
import { Knex } from "knex";

declare module 'knex/types/tables' {
  export interface Tables {
    contacts: {
      id: string
      name: string
      email: string
      phone_number: string
      category_id: string
      session_id?: string
    }
    categories: {
      id: string
      name: string
      session_id?: string
    }
  }
}
