const { BeerType } = require('../models')

const getAllBeerTypes = async (req, res) => {
  try {
    const beerTypes = await BeerType.find()
    return res.status(200).json({ beerTypes })
  } catch (e) {
    return res.status(500).send(e.message)
  }
}

const getBeerTypeContents = async (req, res) => {
  try {
    const { beerTypeId } = await req.params
    const beers = await Beer.find({ beer_type_id: beerTypeId })
    const beerType = await ParkSection.findById(beerTypeId)
    return res.status(200).json({ beers, beerType })
  } catch (e) {
    return res.status(500).send(e.message)
  }
}

module.exports = {
  getAllBeerTypes,
  getBeerTypeContents
}
