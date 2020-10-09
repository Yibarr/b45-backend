import express from 'express'
import { PostValidator } from '../validators/index.js'
import { PostController } from '../controllers/index.js'
import { verifyToken } from '../middlewares/index.js'

const router = express.Router()

router.post('/post',
  verifyToken,
  PostValidator.create,
  PostController.create)

router.get('/post/:id',
  verifyToken,
  PostValidator.findOne,
  PostController.findOne)

export default router
