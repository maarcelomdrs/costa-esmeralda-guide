import { Router } from 'express'

import { loginAuth } from '../controllers/auth.controller'

const authRoutes = Router()

authRoutes.post('/', loginAuth)

export default authRoutes
