const mongoose = require('mongoose')
const BeerTypeSchema = require('./BeerType')
const BeerSchema = require('./Beer')
const ReviewSchema = require('./Review')

const BeerType = mongoose.model('BeerType', BeerTypeSchema)
const Beer = mongoose.model('Beer', BeerSchema)
const Review = mongoose.model('Review', ReviewSchema)

module.exports = {
  BeerType,
  Beer,
  Review
}
