import { pool } from '../databases/database'
import { Neighborhood } from '../interfaces/neighborhoods.interface'
import { NeighborhoodsRepository } from '../repositories/neighborhoods.repository'

const neighborhoodsRepository = new NeighborhoodsRepository(pool)

export async function getNeighborhoodById(
  id: number
): Promise<Neighborhood | null> {
  const neighborhood = await neighborhoodsRepository.findById(id)

  if (!neighborhood) {
    throw new Error('Bairro não encontrado')
  }

  return neighborhood
}

export async function getNeighborhoods(): Promise<Neighborhood[] | null> {
  const neighborhoods = await neighborhoodsRepository.findAll()

  if (!neighborhoods[0]) {
    throw new Error('Nenhum bairro encontrado')
  }

  return neighborhoods
}

export async function postNeighborhood(
  name: string
): Promise<Neighborhood | null> {
  const neighborhood = await neighborhoodsRepository.create(name)

  if (!neighborhood) {
    throw new Error('Falha ao criar bairro')
  }

  return neighborhood
}
