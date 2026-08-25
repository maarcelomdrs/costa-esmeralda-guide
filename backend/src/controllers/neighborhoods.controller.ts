import { Request, Response } from 'express'

import * as neighborhoodsService from '../services/neighborhoods.service'

export async function getNeighborhood(req: Request, res: Response) {
  try {
    const neighborhood = await neighborhoodsService.getNeighborhoodById(
      Number(req.params.id)
    )

    return res.json(neighborhood)
  } catch (error) {
    console.error(error)

    return res.status(500).json({ error: 'Erro interno' })
  }
}

export async function getNeighborhoods(req: Request, res: Response) {
  try {
    const neighborhoods = await neighborhoodsService.getNeighborhoods()

    return res.json(neighborhoods)
  } catch (error) {
    console.error(error)

    return res.status(500).json({ error: 'Erro interno' })
  }
}

export async function postNeighborhood(req: Request, res: Response) {
  try {
    const body: unknown = req.body
    if (
      typeof body !== 'object' ||
      body === null ||
      !('name' in body) ||
      typeof body.name !== 'string' ||
      body.name.trim() === ''
    ) {
      return res.status(400).json({ error: 'Nome inválido' })
    }

    const neighborhood = await neighborhoodsService.postNeighborhood(body.name)

    return res.status(201).json(neighborhood)
  } catch (error) {
    console.error(error)

    return res.status(500).json({ error: 'Erro interno' })
  }
}

export async function deleteNeighborhood(req: Request, res: Response) {
  try {
    await neighborhoodsService.deleteNeighborhoodById(Number(req.params.id))

    return res.json({ message: 'Bairro deletado com sucesso' })
  } catch (error) {
    console.error(error)

    return res.status(500).json({ error: 'Erro interno' })
  }
}

export async function patchNeighborhood(req: Request, res: Response) {
  try {
    const body: unknown = req.body
    if (
      typeof body !== 'object' ||
      body === null ||
      !('name' in body) ||
      typeof body.name !== 'string' ||
      body.name.trim() === ''
    ) {
      return res.status(400).json({ error: 'Nome inválido' })
    }

    const neighborhood = await neighborhoodsService.patchNeighborhoodById(
      Number(req.params.id),
      body.name
    )

    return res.json(neighborhood)
  } catch (error) {
    console.error(error)

    return res.status(500).json({ error: 'Erro interno' })
  }
}
