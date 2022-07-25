const { Schema } = require('mongoose')

const Review = new Schema(
  {
    beer_id: { type: Schema.Types.ObjectId, ref: 'Beer' },
    author: { type: String, required: true },
    rating: { type: String, required: true },
    comment: { type: String, required: false }
  },
  { timestamps: true }
)

module.exports = Review
