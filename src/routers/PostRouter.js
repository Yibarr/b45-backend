import express from 'express'
import { PostValidator } from '../validators/index.js'
import { PostController } from '../controllers/index.js'
import { verifyToken } from '../middlewares/index.js'

const router = express.Router()

router.post('/post/:idUser',
  verifyToken,
  PostValidator.create,
  PostController.create)

export default router
