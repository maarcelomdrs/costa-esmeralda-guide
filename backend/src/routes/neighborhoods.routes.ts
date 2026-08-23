import { Router } from 'express'

import {
  getNeighborhoods,
  getNeighborhood,
  postNeighborhood
} from '../controllers/neighborhoods.controller'

const neighborhoodsRoutes = Router()

neighborhoodsRoutes.get('/', getNeighborhoods)
neighborhoodsRoutes.get('/:id', getNeighborhood)

neighborhoodsRoutes.post('/', postNeighborhood)

export default neighborhoodsRoutes
