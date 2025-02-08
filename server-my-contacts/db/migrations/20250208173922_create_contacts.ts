import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('contacts', (t) => {
    t.uuid('id').primary()
    t.string('name')
    t.string('email')
    t.string('phone_number')
    t.uuid('session_id').after('id').index()
    t.uuid('category_id')
      .references('id')
      .inTable('categories')
      .onDelete('SET NULL')
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('contacts')
}
