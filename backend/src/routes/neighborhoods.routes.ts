import { Router } from 'express'

import {
  getNeighborhoods,
  getNeighborhood,
  postNeighborhood,
  deleteNeighborhood,
  patchNeighborhood
} from '../controllers/neighborhoods.controller'

const neighborhoodsRoutes = Router()

neighborhoodsRoutes.get('/', getNeighborhoods)
neighborhoodsRoutes.get('/:id', getNeighborhood)

neighborhoodsRoutes.post('/', postNeighborhood)

neighborhoodsRoutes.delete('/:id', deleteNeighborhood)

neighborhoodsRoutes.patch('/:id', patchNeighborhood)

export default neighborhoodsRoutes
