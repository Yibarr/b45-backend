import mongoose from 'mongoose'

const reducer = (acc, connection) => `${acc}${connection.name}`

export default async () => {
  try {
    const { connections } = await mongoose.connect(
      process.env.MONGO_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    )
    const msg = connections.reduce(reducer, 'Connected to: ')
    console.log(msg)
  } catch (error) {
    console.log(error)
  }
}
