import express from 'express'

import neighborhoodsRoutes from './routes/neighborhoods.routes'

const app = express()

app.use(express.json())

app.use('/neighborhoods', neighborhoodsRoutes)

export default app
