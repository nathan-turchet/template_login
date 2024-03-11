import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class User extends BaseModel {
  static async verifyCredentials(identifiant: string, password: string) {
    console.log(identifiant, password)
    const user = await this.query().where('email', identifiant).first()
    if (!user) {
      return false;
    }

    const isValid = await hash.verify(user.password, password)
    if (!isValid) {
      return false;
    }
    return user;
  }

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare email: string

  @column()
  declare password: string

  @column.dateTime({ autoCreate: true })
  declare created: DateTime
}
