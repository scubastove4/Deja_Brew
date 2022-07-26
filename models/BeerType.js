const { Schema } = require('mongoose')

const BeerType = new Schema(
  {
    image: { type: String, required: true },
    style_name: { type: String, required: true },
    country_of_origin: { type: String, required: true },
    style_description: { type: String, required: true }
  },
  { timestamps: true }
)

BeerType.index({ style_name: 'text' })

//help with text search https://stackoverflow.com/questions/28775051/best-way-to-perform-a-full-text-search-in-mongodb-and-mongoose

module.exports = BeerType
