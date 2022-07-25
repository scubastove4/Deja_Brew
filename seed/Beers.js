const db = require('../db')
const { Beer, BeerType } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const amber = await BeerType.find({ style_name: { $in: 'Amber' } })
  const ipa = await BeerType.find({
    $and: [
      { style_name: { $in: 'India' } },
      { style_name: { $nin: 'Double' } },
      { style_name: { $nin: 'Hazy' } },
      { style_name: { $nin: 'Session' } }
    ]
  })
  const dipa = await BeerType.find({ style_name: { $in: 'Double' } })
  const hipa = await BeerType.find({ style_name: { $in: 'Hazy' } })
  const sipa = await BeerType.find({ style_name: { $in: 'Session' } })
  const pale = await BeerType.find({
    $and: [{ style_name: { $in: 'Pale' } }, { style_name: { $nin: 'India' } }]
  })
  const wheat = await BeerType.find({ style_name: { $in: 'Wheat' } })
  const sour = await BeerType.find({ style_name: { $in: 'Sour' } })
  const kolsch = await BeerType.find({ style_name: { $in: 'Kölsches' } })
  const pils = await BeerType.find({ style_name: { $in: 'Pilsners' } })
  const porter = await BeerType.find({ style_name: { $in: 'Porters' } })
  const stout = await BeerType.find({ style_name: { $in: 'Stout' } })
  const belg = await BeerType.find({ style_name: { $in: 'Belgian' } })
  let review

  const beers = [
    {
      image: 'https://i.imgur.com/1BljefC.jpg',
      beer_name: 'Grind & Shine Cold Brew Coffee',
      brewery: 'Great South Bay',
      beer_type_id: amber[0]._id,
      beer_type_name: amber[0].style_name,
      avg_rating: '',
      num_of_reviews: ''
    },
    {
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.newbelgium.com%2Fglobalassets%2Fbeer%2Ffat-tire%2Ffat_tire_package_1080x720.png&f=1&nofb=1',
      beer_name: 'Fat Tire',
      brewery: 'New Belgium',
      beer_type_id: amber[0]._id,
      beer_type_name: amber[0].style_name,
      avg_rating: '',
      num_of_reviews: ''
    },
    {
      image: { type: String, required: true },
      beer_name: '',
      brewery: '',
      beer_type_id: ipa[0]._id,
      beer_type_name: ipa[0].style_name,
      avg_rating: '',
      num_of_reviews: ''
    },
    {
      image: { type: String, required: true },
      beer_name: '',
      brewery: '',
      beer_type_id: ipa[0]._id,
      beer_type_name: ipa[0].style_name,
      avg_rating: '',
      num_of_reviews: ''
    },
    {
      image: { type: String, required: true },
      beer_name: '',
      brewery: '',
      beer_type_id: dipa[0]._id,
      beer_type_name: dipa[0].style_name,
      avg_rating: '',
      num_of_reviews: ''
    },
    {
      image: { type: String, required: true },
      beer_name: '',
      brewery: '',
      beer_type_id: dipa[0]._id,
      beer_type_name: dipa[0].style_name,
      avg_rating: '',
      num_of_reviews: ''
    },
    {
      image: { type: String, required: true },
      beer_name: '',
      brewery: '',
      beer_type_id: hipa[0]._id,
      beer_type_name: hipa[0].style_name,
      avg_rating: '',
      num_of_reviews: ''
    },
    {
      image: { type: String, required: true },
      beer_name: '',
      brewery: '',
      beer_type_id: hipa[0]._id,
      beer_type_name: hipa[0].style_name,
      avg_rating: '',
      num_of_reviews: ''
    },
    {
      image: { type: String, required: true },
      beer_name: '',
      brewery: '',
      beer_type_id: sipa[0]._id,
      beer_type_name: sipa[0].style_name,
      avg_rating: '',
      num_of_reviews: ''
    },
    {
      image: { type: String, required: true },
      beer_name: '',
      brewery: '',
      beer_type_id: sipa[0]._id,
      beer_type_name: sipa[0].style_name,
      avg_rating: '',
      num_of_reviews: ''
    },
    {
      image: { type: String, required: true },
      beer_name: '',
      brewery: '',
      beer_type_id: pale[0]._id,
      beer_type_name: pale[0].style_name,
      avg_rating: '',
      num_of_reviews: ''
    },
    {
      image: { type: String, required: true },
      beer_name: '',
      brewery: '',
      beer_type_id: pale[0]._id,
      beer_type_name: pale[0].style_name,
      avg_rating: '',
      num_of_reviews: ''
    },
    {
      image: { type: String, required: true },
      beer_name: '',
      brewery: '',
      beer_type_id: wheat[0]._id,
      beer_type_name: wheat[0].style_name,
      avg_rating: '',
      num_of_reviews: ''
    },
    {
      image: { type: String, required: true },
      beer_name: '',
      brewery: '',
      beer_type_id: wheat[0]._id,
      beer_type_name: wheat[0].style_name,
      avg_rating: '',
      num_of_reviews: ''
    },
    {
      image: { type: String, required: true },
      beer_name: '',
      brewery: '',
      beer_type_id: sour[0]._id,
      beer_type_name: sour[0].style_name,
      avg_rating: '',
      num_of_reviews: ''
    },
    {
      image: { type: String, required: true },
      beer_name: '',
      brewery: '',
      beer_type_id: sour[0]._id,
      beer_type_name: sour[0].style_name,
      avg_rating: '',
      num_of_reviews: ''
    },
    {
      image: { type: String, required: true },
      beer_name: '',
      brewery: '',
      beer_type_id: kolsch[0]._id,
      beer_type_name: kolsch[0].style_name,
      avg_rating: '',
      num_of_reviews: ''
    },
    {
      image: { type: String, required: true },
      beer_name: '',
      brewery: '',
      beer_type_id: kolsch[0]._id,
      beer_type_name: kolsch[0].style_name,
      avg_rating: '',
      num_of_reviews: ''
    },
    {
      image: { type: String, required: true },
      beer_name: '',
      brewery: '',
      beer_type_id: pils[0]._id,
      beer_type_name: pils[0].style_name,
      avg_rating: '',
      num_of_reviews: ''
    },
    {
      image: { type: String, required: true },
      beer_name: '',
      brewery: '',
      beer_type_id: pils[0]._id,
      beer_type_name: pils[0].style_name,
      avg_rating: '',
      num_of_reviews: ''
    },
    {
      image: { type: String, required: true },
      beer_name: '',
      brewery: '',
      beer_type_id: porter[0]._id,
      beer_type_name: porter[0].style_name,
      avg_rating: '',
      num_of_reviews: ''
    },
    {
      image: { type: String, required: true },
      beer_name: '',
      brewery: '',
      beer_type_id: porter[0]._id,
      beer_type_name: porter[0].style_name,
      avg_rating: '',
      num_of_reviews: ''
    },
    {
      image: { type: String, required: true },
      beer_name: '',
      brewery: '',
      beer_type_id: stout[0]._id,
      beer_type_name: stout[0].style_name,
      avg_rating: '',
      num_of_reviews: ''
    },
    {
      image: { type: String, required: true },
      beer_name: '',
      brewery: '',
      beer_type_id: stout[0]._id,
      beer_type_name: stout[0].style_name,
      avg_rating: '',
      num_of_reviews: ''
    },
    {
      image: { type: String, required: true },
      beer_name: '',
      brewery: '',
      beer_type_id: belg[0]._id,
      beer_type_name: belg[0].style_name,
      avg_rating: '',
      num_of_reviews: ''
    },
    {
      image: { type: String, required: true },
      beer_name: '',
      brewery: '',
      beer_type_id: belg[0]._id,
      beer_type_name: belg[0].style_name,
      avg_rating: '',
      num_of_reviews: ''
    }
  ]

  await Beer.insertMany(beers)
  console.log('Created beer!')
}

const run = async () => {
  await main()
  db.close()
}

run()
