export default {
  getDate: (req, res, next) => {
    const date = new Date();
    console.log(date.toDateString())
    next()
  },
}
