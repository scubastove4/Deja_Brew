const { Schema } = require('mongoose')

const Beer = new Schema(
  {
    image: { type: String, required: false },
    beer_name: { type: String, required: true },
    brewery: { type: String, required: true },
    beer_type_id: { type: Schema.Types.ObjectId, ref: 'BeerType' },
    beer_type_name: { type: Schema.Types.String, ref: 'BeerType' },
    avg_rating: { type: Number, required: false },
    num_of_reviews: { type: Number, required: false }
  },
  { timestamps: true }
)

Beer.index({ beer_name: 'text' })

module.exports = Beer
