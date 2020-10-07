import express from 'express'
import { UserValidator } from '../validators/index.js'
import { UserController } from '../controllers/index.js'
import middlewares from '../middlewares/index.js'

const router = express.Router()

router.post('/users', UserValidator.create, UserController.create)
router.patch('/users/:id', middlewares.verifyToken, UserValidator.updateOne, UserController.updateOne)

export default router
