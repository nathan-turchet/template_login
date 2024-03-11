import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable().unique()
      table.string('name').notNullable()
      table.string('password').notNullable()
      table.timestamp('created').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
