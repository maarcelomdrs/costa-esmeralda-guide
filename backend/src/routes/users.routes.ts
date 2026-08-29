import { Router } from 'express'

import { deleteUser, registerUser } from '../controllers/users.controller'
import { jwtAuthGuard } from '../middlewares/jwtAuthGuard'
import { responsibilityGuard } from '../middlewares/responsibilityGuard'

const usersRoutes = Router()

usersRoutes.post('/', registerUser)

usersRoutes.delete(
  '/:id',
  jwtAuthGuard,
  responsibilityGuard('admin'),
  deleteUser
)

export default usersRoutes
