const { Schema } = require('mongoose')

const Beer = new Schema({
  image: { type: String, required: true },
  beer_name: { type: String, required: true },
  brewery: { type: String, required: true },
  beer_type: { type: String, required: true },
  avg_rating: { type: String, required: false },
  num_of_reviews: { type: String, required: false }
})

module.exports = Beer
