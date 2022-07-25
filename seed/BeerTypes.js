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
      style_name: 'Hazy India Pale Ale (Hazy IPA)',
      country_of_origin: 'USA',
      style_description:
        "The Hazy IPA is an American take on the traditional IPA. These beers tend to focus more on the hops than the malt, so their flavors tend to be more 'juicy' and less bitter.",
      beers: []
    },
    {
      image: { type: String, required: true },
      style_name: 'Session India Pale Ale (Session IPA)',
      country_of_origin: 'England, USA',
      style_description:
        'The name derives from England, where people would have meetings (or sessions) where they would like to have a few pints but not get drunk. Typically, these Sessions carry the same flavor profile as IPAs but a little lighter, with lower ABVs.',
      beers: []
    },
    {
      image: { type: String, required: true },
      style_name: 'Pale Ales',
      country_of_origin: 'Belgium, England',
      style_description:
        'While the English may be better known for their Pale Ales, it is believed that they actually crafted this beer after the Belgian Pale Ale. In general these beers have mild to heavy bitterness, with hoppy flavors that range from floral to citrus to pine.',
      beers: []
    },
    {
      image: { type: String, required: true },
      style_name: 'Wheat Beers',
      country_of_origin: 'Germany, Belgium',
      style_description:
        'Wheat beers tend to be lighter in color. Their flavors usually are described as tangy and fruity. Fruity often includes citrus and banana notes.',
      beers: []
    },
    {
      image: { type: String, required: true },
      style_name: 'Sour Beers',
      country_of_origin: 'Belgium',
      style_description:
        'Sour beers have a range of colors that include the more traditional golden look, as well as deep reds, purples, and blues. These beers are tart, sweet, fruity, and (as the name implies) sour.',
      beers: []
    },
    {
      image: { type: String, required: true },
      style_name: 'Kölsch',
      country_of_origin: 'Germany',
      style_description:
        'The Kölsch is somewhat of a mix of ale and lager. The beer uses ale-yeast but is brewed in a similar process as a lager. The result is incredibly light, crisp, and clean, and these beers are very drinkable. A great introduction to those (of age) trying beer for the first time.',
      beers: []
    },
    {
      image: { type: String, required: true },
      style_name: 'Pilsners',
      country_of_origin: 'Czech Republic, Germany',
      style_description:
        'Pilsner (or Pilseners) are lagers perfected by the Czechs and Germans. They tend to be crisp and clean, with light bitterness and a maltiness that has a bready or biscuity taste.',
      beers: []
    },
    {
      image: { type: String, required: true },
      style_name: 'Porters',
      country_of_origin: 'England',
      style_description:
        'Porters get their name from the English working class, the street and river porters who mostly drank them. Porters tend to be dark in color, with a creamy feel. Flavors tend to be malty and take on chocolate and coffee notes.',
      beers: []
    },
    {
      image: { type: String, required: true },
      style_name: 'Stouts',
      country_of_origin: 'England',
      style_description:
        'As the DIPA is to IPA, so is Stout to Porter. Stouts are basically Porters with more roasted malt flavor (stronger coffee tastes) and more alcohol. Fun fact: Guinness, the most famous Stout, is actually red in color.',
      beers: []
    },
    {
      image: { type: String, required: true },
      style_name: 'Belgian Ales',
      country_of_origin: 'Belgium',
      style_description:
        "Belgian Ales are world renowned for their variety and complex flavors. They share a similar brewing history as Germany but don't abode by the purity laws, so brewers are able to experiment more. On the whole though, a traditional Belgian Ale carries spicy, fruity, and wheaty flavors and are decently boozey.",
      beers: []
    }
  ]
}
