import express from 'express'
import { UserValidator } from '../validators/index.js'
import { UserController } from '../controllers/index.js'

const router = express.Router()

router.post('/user/create', UserValidator.create, UserController.create)

export default router
