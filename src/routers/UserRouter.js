import express from 'express'

const router = express.Router()


router.get('/users', (_, res) => {
  res.send('<h1>Hola desde users</h1>')
})

export default router