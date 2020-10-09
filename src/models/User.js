/* eslint-disable func-names */
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const SALT_WORK_FACTOR = 10;

const { Schema, model } = mongoose

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  first_name: {
    type: String,
    required: true,
    trim: true,
  },
  last_name: {
    type: String,
    required: true,
    trim: true,
  },
  phone_number: {
    type: String,
    minlength: 10,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  posts: [{
    type: mongoose.Types.ObjectId,
    ref: 'Post',
  }],
}, { timestamp: true })

// eslint-disable-next-line consistent-return
userSchema.pre('save', async function (next) {
  try {
    const user = this
    if (!user.isModified('password')) return next()
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR)
    const hash = await bcrypt.hash(user.password, salt)
    user.password = hash
    return next()
  } catch (error) {
    next(error)
  }
})

export default model('User', userSchema, 'Users')
