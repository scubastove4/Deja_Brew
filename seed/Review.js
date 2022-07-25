const db = require('../db')
const { Review, Beer } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const madElf = await Beer.find({ beer_name: 'Mad Elf' })
  const review = {
    beer_id: madElf[0]._id,
    author: 'Steve',
    rating: '4.9',
    comment: ''
  }
  await Review.create(review)
  console.log('Created beer!')
}

const run = async () => {
  await main()
  db.close()
}

run()
