const { Schema } = require('mongoose')

const Review = new Schema({
  author: { type: String, required: true },
  rating: { type: String, required: true },
  comment: { type: String, required: false }
})

module.exports = Review
