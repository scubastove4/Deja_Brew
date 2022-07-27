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
router.post('/beer-types/id/:beerTypeId', beersControllers.createBeer)

router.get('/beer-types', beerTypesControllers.getAllBeerTypes)
router.get(
  '/beer-types/name/:beerTypeName',
  beerTypesControllers.getBeerTypesByName
)
router.get(
  '/beer-types/id/:beerTypeId',
  beerTypesControllers.getBeerTypeContents
)

////////// BeerType Routes above //////////////

router.post('/beers/:beerId', reviewsControllers.createReview)

router.get('/random-beer', beersControllers.getRandomBeer)
router.get('/beers/name/:beerName', beersControllers.getBeersByName)
router.get('/beers/id/:beerId', beersControllers.getBeerContents)

router.put('/beers/id/:beerId', beersControllers.updateBeer)

router.delete('/beers/id/:beerId', beersControllers.deleteBeer)
////////// Beer Routes above //////////////

router.put('/beers/review/:reviewId', reviewsControllers.updateReview)
router.delete('/beers/review/:reviewId', reviewsControllers.deleteReview)
////////// Review Routes above //////////////

module.exports = router
