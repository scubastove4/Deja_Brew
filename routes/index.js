const { Router } = require('express')
const {
  beerTypesControllers,
  beersControllers,
  reviewsControllers
} = require('../controllers')
const router = Router()

router.get('/', (req, res) => {
  res.send('I am root!')
})

router.post('/beers', beersControllers.createBeer)
router.post('/beers/:beerId', reviewsControllers.createReview)

router.get('/beer-types', beerTypesControllers.getAllBeerTypes)
router.get('/beer-types/:beerTypeId', beerTypesControllers.getBeerTypeContents)
router.get('/beer-types/:beerTypeName', beerTypesControllers.getBeerTypesByName)
router.get('/beers/:id', controllers.getPlantById)
router.get('/beers/:beerName', controllers.getPlantById)

router.put('/plants/:id', controllers.updatePlant)

router.delete('/plants/:id', controllers.deletePlant)

module.exports = router
