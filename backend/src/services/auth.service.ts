import { pool } from '../databases/database'
import { UsersRepository } from '../repositories/users.repository'
import { Bcrypt } from '../utils/bcrypt'
import { Jwt } from '../utils/jwt'

const usersRepository = new UsersRepository(pool)

export async function authLogin(
  email: string,
  password: string
): Promise<string> {
  const user = await usersRepository.findByEmail(email)
  if (!user) {
    throw new Error('Credenciais inválidas')
  }

  const valid = await Bcrypt.comparePassword(password, user.password_hash)
  if (!valid) {
    throw new Error('Credenciais inválidas')
  }

  const token = Jwt.generate({
    id: String(user.id),
    responsibility: user.responsibility
  })

  return token
}
