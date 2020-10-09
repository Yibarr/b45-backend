import express from 'express'
import { UserValidator } from '../validators/index.js'
import { UserController } from '../controllers/index.js'
import { verifyToken } from '../middlewares/index.js'

const router = express.Router()

router.post('/users',
  verifyToken,
  UserValidator.create,
  UserController.create)

router.get('/users/:id',
  verifyToken,
  UserValidator.findOne,
  UserController.findOne)

router.patch('/users',
  verifyToken,
  UserValidator.updateOne,
  UserController.updateOne)

router.delete('/users',
  verifyToken,
  UserController.deleteOne)

export default router
