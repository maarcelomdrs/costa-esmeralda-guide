import express from 'express'

import authRoutes from './routes/auth.routes'
import neighborhoodsRoutes from './routes/neighborhoods.routes'
import usersRoutes from './routes/users.routes'

const app = express()

app.use(express.json())

app.use('/neighborhoods', neighborhoodsRoutes)
app.use('/users', usersRoutes)
app.use('/auth', authRoutes)

export default app
