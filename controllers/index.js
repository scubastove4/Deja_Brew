const { BeerType, Beer, Review } = require('../models')

const getAllBeerTypes = async (req, res) => {
  try {
    const beerTypes = await BeerType.find()
    return res.status(200).json({ beerTypes })
  } catch (e) {
    return res.status(500).send(e.message)
  }
}

const createBeer = async (req, res) => {
  try {
    const newReview = await new Review(req.body)
    await newReview.save()
    return res.status(201).json({ newReview })
  } catch (e) {
    return res.status(500).send(e.message)
  }
}

const updateBeer = async (req, res) => {
  try {
    const { beerId } = req.params
    const updateBeer = await Beer.findByIdAndUpdate(beerId, req.body, {
      new: true
    })
    res.status(200).json(updateBeer)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteBeer = async (req, res) => {
  try {
    const { beerId } = req.params
    const deleteBeer = await Review.findByIdAndDelete(beerId)
    if (deleteBeer) {
      return res.status(200).send('Beer deleted')
    }
    throw new Error('Beer not found')
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
    const { beerTypeId } = req.params
    const beersByType = await Beer.find({ beer_type_id: beerTypeId })
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
    const { beerId } = req.params
    const beerReviews = await Review.find({ beer_id: beerId })
    return res.status(200).json({ beerReviews })
  } catch (e) {
    return res.status(500).send(e.message)
  }
}

const updateReview = async (req, res) => {
  try {
    const { reviewId } = req.params
    const updateReview = await Beer.findByIdAndUpdate(reviewId, req.body, {
      new: true
    })
    res.status(200).json(updateReview)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteReview = async (req, res) => {
  try {
    const { reviewId } = req.params
    const deleteReview = await Review.findByIdAndDelete(reviewId)
    if (deleteReview) {
      return res.status(200).send('Review deleted')
    }
    throw new Error('Review not found')
  } catch (e) {
    return res.status(500).send(e.message)
  }
}

module.exports = {
  getAllBeerTypes,
  createBeer,
  getAllBeers,
  updateBeer,
  deleteBeer,
  getBeersByType,
  createReview,
  getBeerReviews,
  updateReview,
  deleteReview
}
