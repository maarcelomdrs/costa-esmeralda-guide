import { Router } from 'express'

import {
  getNeighborhoods,
  getNeighborhood,
  postNeighborhood,
  deleteNeighborhood,
  patchNeighborhood
} from '../controllers/neighborhoods.controller'
import { jwtAuthGuard } from '../middlewares/jwtAuthGuard'
import { responsibilityGuard } from '../middlewares/responsibilityGuard'

const neighborhoodsRoutes = Router()

neighborhoodsRoutes.get('/', jwtAuthGuard, getNeighborhoods)
neighborhoodsRoutes.get('/:id', jwtAuthGuard, getNeighborhood)

neighborhoodsRoutes.post(
  '/',
  jwtAuthGuard,
  responsibilityGuard('admin'),
  postNeighborhood
)

neighborhoodsRoutes.delete(
  '/:id',
  jwtAuthGuard,
  responsibilityGuard('admin'),
  deleteNeighborhood
)

neighborhoodsRoutes.patch(
  '/:id',
  jwtAuthGuard,
  responsibilityGuard('admin'),
  patchNeighborhood
)

export default neighborhoodsRoutes
