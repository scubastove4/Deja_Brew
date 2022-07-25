const { Schema } = require('mongoose')

const BeerType = new Schema({
  image: { type: String, required: true },
  style_name: { type: String, required: true },
  country_of_origin: { type: String, required: true },
  flavor_description: { type: String, required: true },
  beers: { type: Array, required: true }
})

module.exports = BeerType
