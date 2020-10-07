import express from 'express'

import { UserValidator } from '../validators/index.js'
import { UserController } from '../controllers/index.js'

const router = express.Router()

router.post('/signup', UserValidator.create, UserController.signup)
router.post('/login', UserValidator.login, UserController.login)

export default router
