const db = require('../db')
const { BeerType } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const beerTypes = [
    {
      image: { type: String, required: true },
      style_name: 'Amber/Red Ales',
      country_of_origin: 'England, Ireland, USA',
      style_description:
        'Amber and red ales are, wait for it..., amber or red in appearance. They  generally have a malty and caramelly taste, with mild bitterness.',
      beers: []
    },
    {
      image: { type: String, required: true },
      style_name: 'India Pale Ales (IPAs)',
      country_of_origin: 'England, India',
      style_description:
        'IPAs are the Pale Ales (literally) distant cousin. When England held India as a colony, brewers had to roast their malts longer, so they would survive the long delivery to India. The increased roasting led to the more bitter flavor IPA drinkers love (and non-drinkers despise) today. In addition to the extra-bittery flavor, IPAs tend to carry hoppy, citrusy, and piney tastes.',
      beers: []
    },
    {
      image: { type: String, required: true },
      style_name: 'Double/Imperial India Pale Ales (DIPA/IIPA)',
      country_of_origin: 'England, Russia',
      style_description:
        "The IPA's bigger and tougher sibling. The word Imperial was added on to these beers because when the English shipped them to the Imperial Russian Court. These beers have a similar flavor profile as an IPA but generally more hoppy, bitter, and boozey.",
      beers: []
    },
    {
      image: { type: String, required: true },
      style_name: 'Amber/Red Ales',
      country_of_origin: 'England, Ireland, USA',
      style_description:
        'Amber and red ales are, wait for it..., amber or red in appearance. They  generally have a malty and caramelly taste, with mild bitterness.',
      beers: []
    },
    {
      image: { type: String, required: true },
      style_name: 'Amber/Red Ales',
      country_of_origin: 'England, Ireland, USA',
      style_description:
        'Amber and red ales are, wait for it..., amber or red in appearance. They  generally have a malty and caramelly taste, with mild bitterness.',
      beers: []
    },
    {
      image: { type: String, required: true },
      style_name: 'Amber/Red Ales',
      country_of_origin: 'England, Ireland, USA',
      style_description:
        'Amber and red ales are, wait for it..., amber or red in appearance. They  generally have a malty and caramelly taste, with mild bitterness.',
      beers: []
    },
    {
      image: { type: String, required: true },
      style_name: 'Amber/Red Ales',
      country_of_origin: 'England, Ireland, USA',
      style_description:
        'Amber and red ales are, wait for it..., amber or red in appearance. They  generally have a malty and caramelly taste, with mild bitterness.',
      beers: []
    },
    {
      image: { type: String, required: true },
      style_name: 'Amber/Red Ales',
      country_of_origin: 'England, Ireland, USA',
      style_description:
        'Amber and red ales are, wait for it..., amber or red in appearance. They  generally have a malty and caramelly taste, with mild bitterness.',
      beers: []
    },
    {
      image: { type: String, required: true },
      style_name: 'Amber/Red Ales',
      country_of_origin: 'England, Ireland, USA',
      style_description:
        'Amber and red ales are, wait for it..., amber or red in appearance. They  generally have a malty and caramelly taste, with mild bitterness.',
      beers: []
    },
    {
      image: { type: String, required: true },
      style_name: 'Amber/Red Ales',
      country_of_origin: 'England, Ireland, USA',
      style_description:
        'Amber and red ales are, wait for it..., amber or red in appearance. They  generally have a malty and caramelly taste, with mild bitterness.',
      beers: []
    },
    {
      image: { type: String, required: true },
      style_name: 'Amber/Red Ales',
      country_of_origin: 'England, Ireland, USA',
      style_description:
        'Amber and red ales are, wait for it..., amber or red in appearance. They  generally have a malty and caramelly taste, with mild bitterness.',
      beers: []
    },
    {
      image: { type: String, required: true },
      style_name: 'Amber/Red Ales',
      country_of_origin: 'England, Ireland, USA',
      style_description:
        'Amber and red ales are, wait for it..., amber or red in appearance. They  generally have a malty and caramelly taste, with mild bitterness.',
      beers: []
    },
    {
      image: { type: String, required: true },
      style_name: 'Amber/Red Ales',
      country_of_origin: 'England, Ireland, USA',
      style_description:
        'Amber and red ales are, wait for it..., amber or red in appearance. They  generally have a malty and caramelly taste, with mild bitterness.',
      beers: []
    }
  ]
}
