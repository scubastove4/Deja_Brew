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
