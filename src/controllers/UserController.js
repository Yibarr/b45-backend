import { UserService } from '../services/index.js'

// eslint-disable-next-line import/prefer-default-export
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
}
