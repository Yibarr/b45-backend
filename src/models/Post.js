import mongoose from 'mongoose'

const { Schema, model } = mongoose

const postSchema = new Schema({
  url_photo: {
    type: String,
    required: true,
    trim: true,
  },
  body: {
    type: String,
    default: '',
  },
  comments: [{
    user_id: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    body: {
      type: String,
    },
  }],
  permissions: {
    type: String,
    enum: ['PUBLIC', 'PRIVATE'],
  },
}, { timestamps: true })

export default model('Post', postSchema)
