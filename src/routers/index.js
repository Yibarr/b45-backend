import express from 'express'
import userRouter from './UserRouter.js'

const router = express.Router()

router.use(userRouter)


export default router