import { Pool } from 'pg'

import { User } from '../interfaces/users.interface'

export class UsersRepository {
  constructor(private readonly pool: Pool) {}

  async create(
    email: string,
    password_hash: string,
    name: string
  ): Promise<User | null> {
    const { rows } = await this.pool.query<User>(
      'INSERT INTO users (email, password_hash, name) VALUES ($1, $2, $3) ON CONFLICT (email) DO NOTHING RETURNING *',
      [email, password_hash, name]
    )

    return rows[0] ?? null
  }

  async findByEmail(email: string): Promise<User | null> {
    const { rows } = await this.pool.query<User>(
      'SELECT * FROM users WHERE email = $1',
      [email]
    )

    return rows[0] ?? null
  }

  async delete(id: number): Promise<User | null> {
    const { rows } = await this.pool.query<User>(
      'DELETE FROM users WHERE (id) = $1 RETURNING *',
      [id]
    )

    return rows[0] ?? null
  }
}
