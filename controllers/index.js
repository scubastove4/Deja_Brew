const { BeerType, Beer, Review } = require('../models')

const getAllBeerTypes = async (req, res) => {
  try {
    const beerTypes = await BeerType.find()
    return res.status(200).json({ beerTypes })
  } catch (e) {
    return res.status(500).send(e.message)
  }
}

const getAllBeers = async (req, res) => {
  try {
    const beers = await Beer.find()
    return res.status(200).json({ beers })
  } catch (e) {
    return res.status(500).send(e.message)
  }
}

const getBeersByType = async (req, res) => {
  try {
    const beersByType = await Beer.find({ beer_type_id: req.params.beerTypeId })
    return res.status(200).json({ beersByType })
  } catch (e) {
    return res.status(500).send(e.message)
  }
}

const createReview = async (req, res) => {
  try {
    const newReview = await new Review(req.body)
    await newReview.save()
    return res.status(201).json({ newReview })
  } catch (e) {
    return res.status(500).send(e.message)
  }
}

const getBeerReviews = async (req, res) => {
  try {
    const beerReviews = await Review.find({ beer_id: req.params.beerId })
    return res.status(200).json({ beerReviews })
  } catch (e) {
    return res.status(500).send(e.message)
  }
}

module.exports = {
  getAllBeerTypes,
  getAllBeers,
  getBeersByType,
  createReview,
  getBeerReviews
}
