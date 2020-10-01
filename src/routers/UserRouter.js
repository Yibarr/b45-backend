import express from 'express'
import { UserController } from '../controllers/index.js'

const router = express.Router()

router.post('/user/create', UserController.create)

export default router
