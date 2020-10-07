import { UserService } from '../services/index.js'
import auth from '../utils/auth.js'

export default {
  create: async (req, res, next) => {
    try {
      const criteria = await UserService.exists({ email: req.body.email })
      if (criteria) throw new Error('Ese correo ya está en uso.')
      const user = await UserService.create(req.body)
      res.status(201).json(user)
    } catch (error) {
      next(error)
    }
  },
  signup: async (req, res, next) => {
    try {
      const criteria = await UserService.exists({ email: req.body.email })
      if (criteria) throw new Error('Ese correo ya está en uso.')
      const user = await UserService.create(req.body)
      user.password = undefined
      res.status(201).json(user)
    } catch (error) {
      next(error)
    }
  },
  login: async (req, res, next) => {
    try {
      const { email, password } = req.body
      const user = await UserService.findOneByEmail(email)
      if (!user) throw new Error('error on credentials')
      const isValid = auth.comparePasswords(user.password, password)
      if (!isValid) throw new Error('error on credentials')
      const token = auth.createToken(user)
      res.status(200).json({ token })
    } catch (error) {
      next(error)
    }
  },
  updateOne: async (req, res, next) => {
    try {
      const { id } = req.params
      const { body } = req
      const user = await UserService.findOneById(id)
      if (!user) throw new Error('User not found')
      const modifiedUser = await UserService.updateOne(user, body)
      user.password = undefined
      res.status(200).json(modifiedUser)
    } catch (error) {
      next(error)
    }
  },
}
