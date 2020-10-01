import mongoose from 'mongoose'

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
}, { timestamp: true })

export default model('User', userSchema, 'Users')
