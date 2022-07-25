const { Schema } = require('mongoose')

const Beer = new Schema({
  image: { type: String, required: true },
  beer_name: { type: String, required: true },
  brewery: { type: String, required: true },
  beer_type_id: { type: Schema.Types.ObjectId, ref: 'BeerTypes' },
  beer_type_name: { type: Schema.Types.ObjectId, ref: 'BeerTypes' },
  avg_rating: { type: String, required: false },
  num_of_reviews: { type: Schema.Types.ObjectId, ref: 'Review' }
})

module.exports = Beer
