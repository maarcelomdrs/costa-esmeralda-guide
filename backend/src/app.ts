import express from 'express'

import neighborhoodsRoutes from './routes/neighborhoods.routes'
import usersRoutes from './routes/users.routes'

const app = express()

app.use(express.json())

app.use('/neighborhoods', neighborhoodsRoutes)
app.use('/users', usersRoutes)

export default app
