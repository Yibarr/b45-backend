import { PostService, UserService } from '../services/index.js'

export default {
  create: async (req, res, next) => {
    try {
      const { idUser } = req.params
      const { body } = req

      const user = await UserService.findOneById(idUser)
      const post = await PostService.create(body)

      const userWithPost = await PostService.addPost(user, post)
      userWithPost.password = undefined
      res.status(201).json(userWithPost)
    } catch (error) {
      next(error)
    }
  },
}
