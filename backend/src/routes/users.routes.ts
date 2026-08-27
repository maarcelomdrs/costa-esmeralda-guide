import { Router } from 'express'

import { registerUser } from '../controllers/users.controller'

const usersRoutes = Router()

usersRoutes.post('/', registerUser)

export default usersRoutes
