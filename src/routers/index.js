import express from 'express'
import userRouter from './UserRouter.js'
import authRouter from './AuthRouter.js'

const router = express.Router()

router.use(userRouter)
router.use(authRouter)

export default router
