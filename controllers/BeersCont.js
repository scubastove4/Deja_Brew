const { Beer, Review, BeerType } = require('../models')

const createBeer = async (req, res) => {
  try {
    const newBeer = await new Beer(req.body)
    await newBeer.save()
    return res.status(201).json({ newBeer })
  } catch (e) {
    return res.status(500).send(e.message)
  }
}

const getRandomBeer = async (req, res) => {
  try {
    const beers = await Beer.find()
    let random = Math.floor(Math.random() * beers.length)
    let randomBeer = beers[random]
    const reviews = await Review.find({ beer_id: randomBeer._id })
    const beerType = await BeerType.find({ _id: randomBeer.beer_type_id })
    return res.status(200).json({ randomBeer, reviews, beerType })
  } catch (e) {
    return res.status(500).send(e.message)
  }
}

const getBeersByName = async (req, res) => {
  try {
    const { beerName } = await req.params
    const beer = await Beer.find({
      $text: { $search: beerName }
    }).limit(15)
    return res.status(200).json({ beer })
  } catch (e) {
    return res.status(500).send(e.message)
  }
}

const getBeerContents = async (req, res) => {
  try {
    const { beerId } = await req.params
    const beer = await Beer.findById(beerId)
    const reviews = await Review.find({ beer_id: beerId })
    const beerType = await BeerType.find({ _id: beer.beer_type_id })
    return res.status(200).json({ beer, reviews, beerType })
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
  getRandomBeer,
  getBeerContents,
  getBeersByName,
  updateBeer,
  deleteBeer
}
