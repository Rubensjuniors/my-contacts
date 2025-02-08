import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('categories', (t) => {
    t.uuid('id').primary()
    t.string('name')
    t.uuid('session_id').after('id').index()
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('categories')
}
