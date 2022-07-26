const { Beer, Review } = require('../models')

const createBeer = async (req, res) => {
  try {
    const newBeer = await new Beer(req.body)
    await newBeer.save()
    return res.status(201).json({ newBeer })
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

// const getBeersByType = async (req, res) => {
//   try {
//     const { beerTypeId } = req.params
//     const beersByType = await Beer.find({ beer_type_id: beerTypeId })
//     return res.status(200).json({ beersByType })
//   } catch (e) {
//     return res.status(500).send(e.message)
//   }
// }

// const getBeersByName = async (req, res) => {
//   try {
//     const { beerName } = await req.params
//     const beer = await Beer.find({ beer_name: { $in: [`/${beerName}/`] } })
//     return res.status(200).json({ beer })
//   } catch (e) {
//     return res.status(500).send(e.message)
//   }
// }

const getBeerContents = async (req, res) => {
  try {
    const { beerId } = await req.params
    const beer = await Beer.findById(beerId)
    const reviews = await Review.find({ beer_id: beerId })
    return res.status(200).json({ beer, reviews })
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
    const deleteBeer = await Beer.findByIdAndDelete(beerId)
    const deleteReviews = await Review.deleteMany({ beer_id: beerId })
    if (deleteBeer) {
      return res.status(200).send('Beer deleted')
    }
    if (deleteReviews) {
      return res.status(200).send('Reviews deleted, too')
    }
    throw new Error('Beer not found')
  } catch (e) {
    return res.status(500).send(e.message)
  }
}

module.exports = {
  createBeer,
  getAllBeers,
  getBeerContents,
  // getBeersByName,
  updateBeer,
  deleteBeer
  // getBeersByType,
}
