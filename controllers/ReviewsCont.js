const { Review } = require('../models')

const createReview = async (req, res) => {
  try {
    const newReview = await new Review(req.body)
    await newReview.save()
    return res.status(201).json({ newReview })
  } catch (e) {
    return res.status(500).send(e.message)
  }
}

const getReview = async (req, res) => {
  const { reviewId } = req.params
  try {
    const review = await Review.findById(reviewId)
    res.status(200).json({ review })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateReview = async (req, res) => {
  try {
    const { reviewId } = req.params
    const reviewUpdated = await Review.findByIdAndUpdate(reviewId, req.body, {
      new: true
    })
    res.status(200).json({ reviewUpdated })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteReview = async (req, res) => {
  try {
    const { reviewId } = req.params
    const reviewDeleted = await Review.findByIdAndDelete(reviewId)
    if (reviewDeleted) {
      return res.status(200).send('Review deleted')
    }
    throw new Error('Review not found')
  } catch (e) {
    return res.status(500).send(e.message)
  }
}

module.exports = {
  createReview,
  getReview,
  updateReview,
  deleteReview
}
