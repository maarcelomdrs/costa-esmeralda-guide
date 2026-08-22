import { Router } from 'express'

import {
  getNeighborhoods,
  getNeighborhood
} from '../controllers/neighborhoods.controller'

const neighborhoodsRoutes = Router()

neighborhoodsRoutes.get('/', getNeighborhoods)
neighborhoodsRoutes.get('/:id', getNeighborhood)

export default neighborhoodsRoutes
