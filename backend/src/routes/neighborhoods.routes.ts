import { Router } from 'express'

import {
  getNeighborhoods,
  getNeighborhood,
  postNeighborhood,
  deleteNeighborhood,
  patchNeighborhood
} from '../controllers/neighborhoods.controller'
import { jwtAuthGuard } from '../middlewares/jwtAuthGuard'

const neighborhoodsRoutes = Router()

neighborhoodsRoutes.get('/', jwtAuthGuard, getNeighborhoods)
neighborhoodsRoutes.get('/:id', jwtAuthGuard, getNeighborhood)

neighborhoodsRoutes.post('/', jwtAuthGuard, postNeighborhood)

neighborhoodsRoutes.delete('/:id', jwtAuthGuard, deleteNeighborhood)

neighborhoodsRoutes.patch('/:id', jwtAuthGuard, patchNeighborhood)

export default neighborhoodsRoutes
