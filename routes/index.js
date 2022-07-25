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

router.post('/beer-types', beerTypesControllers.getAllBeerTypes)

router.get('/beer-types', controllers.getAllPlants)

router.get('/plants/:id', controllers.getPlantById)

router.put('/plants/:id', controllers.updatePlant)

router.delete('/plants/:id', controllers.deletePlant)

module.exports = router
