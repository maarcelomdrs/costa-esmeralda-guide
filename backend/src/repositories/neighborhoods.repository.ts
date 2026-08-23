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
}
