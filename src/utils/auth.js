import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export default {
  comparePasswords: (userPassword, reqPassword) => bcrypt.compareSync(reqPassword, userPassword),
  // eslint-disable-next-line camelcase
  createToken: ({ id, email, first_name }) => {
    try {
      const payload = {
        id,
        email,
        first_name,
        exp: Math.floor(Date.now / 1000) + (60 * 60),
      }
      const token = jwt.sign(payload, process.env.JWT_SECRET)
      return token
    } catch (error) {
      return null
    }
  },
}
