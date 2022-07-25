const { Schema } = require('mongoose')

const Beer = new Schema(
  {
    image: { type: String, required: true },
    beer_name: { type: String, required: true },
    brewery: { type: String, required: true },
    beer_type_id: { type: Schema.Types.ObjectId, ref: 'BeerType' },
    beer_type_name: { type: Schema.Types.String, ref: 'BeerType' },
    avg_rating: { type: String, required: false },
    num_of_reviews: { type: String, required: false }
  },
  { timestamps: true }
)

module.exports = Beer
