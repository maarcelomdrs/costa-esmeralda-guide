import { pool } from '../databases/database'
import { User } from '../interfaces/users.interface'
import { UsersRepository } from '../repositories/users.repository'

const usersRepository = new UsersRepository(pool)

export async function registerUser(
  email: string,
  password: string,
  name: string
): Promise<Omit<User, 'password_hash'> | null> {
  /// TODO: fazer o hash da senha com o bycript
  const password_hash = password

  const user = await usersRepository.create(email, password_hash, name)

  if (!user) {
    throw new Error('Falha ao criar usuário')
  }

  return {
    id: user.id,
    email: user.email,
    name: user.name,
    responsibility: user.responsibility,
    creation_date: user.creation_date
  }
}
