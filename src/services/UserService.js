import { User } from '../models/index.js'

export default {
  create: (body) => new User(body).save(),
  exists: (query) => User.exists(query),
}
