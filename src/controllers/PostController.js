import { PostService, UserService } from '../services/index.js'

export default {
  create: async (req, res, next) => {
    try {
      const {
        body,
        decoded,
      } = req
      const user = await UserService.findOneByIdPop(decoded.id)
      const post = await PostService.create(body)

      const userWithPost = await PostService.addPost(user, post)
      userWithPost.password = undefined
      res.status(201).json(userWithPost)
    } catch (error) {
      next(error)
    }
  },
  findOne: async (req, res, next) => {
    try {
      const { id } = req.params
      const post = PostService.findOneById(id)
      if (!post) throw new Error('Not found')
      res.status(200).json(post)
    } catch (error) {
      next(error)
    }
  },
  deleteOne: async (req, res, next) => {
    try {
      const { decoded, params } = req
      const user = UserService.findOneById(decoded.id)
      // eslint-disable-next-line no-underscore-dangle
      const postToDelete = user.post.filter((post) => post._id === params.id)
      const deletedPost = await PostService.deleteMany(postToDelete)
      if (!deletedPost) throw new Error('Sin publicaciones por borrar')
      res.status(200).json(deletedPost)
    } catch (error) {
      next(error)
    }
  },
}
