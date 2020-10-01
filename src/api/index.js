import express from 'express'
import router from '../routers/index.js'

export const app = express()
export const PORT = process.env.PORT || 4000

app.use(express.json({ extended: true }))

app.get('/', (_, res) => res.send('Hello world'))
// namespace
app.use('/api/v1', router)
