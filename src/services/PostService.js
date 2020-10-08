import { Post } from '../models/index.js'

export default {
  create: (body) => new Post(body).save(),
  addPost: (user, { _id }) => {
    user.posts.push(_id)
    return user.save()
  },
}
