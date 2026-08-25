import { Pool } from 'pg'

import { Neighborhood } from '../interfaces/neighborhoods.interface'

export class NeighborhoodsRepository {
  constructor(private readonly pool: Pool) {}

  async findAll(): Promise<Neighborhood[]> {
    const { rows } = await this.pool.query<Neighborhood>(
      'SELECT * FROM neighborhoods'
    )

    return rows
  }

  async findById(id: number): Promise<Neighborhood | null> {
    const { rows } = await this.pool.query<Neighborhood>(
      'SELECT * FROM neighborhoods WHERE id = $1',
      [id]
    )

    return rows[0] ?? null
  }

  async create(name: string): Promise<Neighborhood | null> {
    const { rows } = await this.pool.query<Neighborhood>(
      'INSERT INTO neighborhoods (name) VALUES ($1) ON CONFLICT (name) DO NOTHING RETURNING *',
      [name]
    )

    return rows[0] ?? null
  }

  async delete(id: number): Promise<Neighborhood | null> {
    const { rows } = await this.pool.query<Neighborhood>(
      'DELETE FROM neighborhoods WHERE (id) = $1 RETURNING *',
      [id]
    )

    return rows[0] ?? null
  }

  async patchById(id: number, name: string) {
    const { rows } = await this.pool.query<Neighborhood>(
      'UPDATE neighborhoods SET name = $1 WHERE id = $2 RETURNING *',
      [name, id]
    )

    return rows[0] ?? null
  }
}
