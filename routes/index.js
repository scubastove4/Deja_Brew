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

/////////////////////////////////////////////////
router.post('/beer-types/:beerTypeId', beersControllers.createBeer)

router.get('/beer-types', beerTypesControllers.getAllBeerTypes)
router.get('/beer-types/:beerTypeName', beerTypesControllers.getBeerTypesByName)
router.get('/beer-types/:beerTypeId', beerTypesControllers.getBeerTypeContents)

router.put('/beer-types/:beerTypeId', beersControllers.updateBeer)

router.delete('/beer-types/:beerTypeId', beersControllers.deleteBeer)
////////// BeerType Routes above //////////////

router.post('/beers/:beerId', reviewsControllers.createReview)

router.put('/random-beer', beersControllers.getAllBeers)
router.get('/beers/:beerName', beersControllers.getBeersByName)
router.get('/beers/:beerId', beersControllers.getBeerContents)

router.put('/beers/:beerId', reviewsControllers.updateReview)

router.delete('/beers/:beerId', reviewsControllers.deleteReview)
////////// Beer Routes above //////////////

module.exports = router
