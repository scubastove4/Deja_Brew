const db = require('../db')
const { BeerType } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const beerTypes = [
    {
      image:
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.bertusbrewery.com%2Fwp-content%2Fuploads%2F2014%2F05%2FDSC_8810-1.jpg&f=1&nofb=1',
      style_name: 'Amber/Red Ales',
      country_of_origin: 'England, Ireland, USA',
      style_description:
        'Amber and red ales are, wait for it..., amber or red in appearance. They  generally have a malty and caramelly taste, with mild bitterness.'
    },
    {
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.apartmenttherapy.info%2Fimage%2Fupload%2Ff_auto%2Cq_auto%3Aeco%2Cw_1460%2Fk%252Farchive%252F0a4319276eb7fed4e1f0403a0f0be4a9d931bcdc&f=1&nofb=1',
      style_name: 'India Pale Ales (IPAs)',
      country_of_origin: 'England, India',
      style_description:
        'IPAs are the Pale Ales (literally) distant cousin. When England held India as a colony, brewers had to roast their malts longer, so they would survive the long delivery to India. The increased roasting led to the more bitter flavor IPA drinkers love (and non-drinkers despise) today. In addition to the extra-bittery flavor, IPAs tend to carry hoppy, citrusy, and piney tastes.'
    },
    {
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.ctfassets.net%2Fsz2xpiwl6od9%2F1hnAqcLUBiue6Oq2kQOsqk%2F8e5361d4310b1b39ad7c3ef6915de0e3%2FDouble_IPA.jpg%3Fw%3D1600%26fm%3Djpg&f=1&nofb=1',
      style_name: 'Double/Imperial India Pale Ales (DIPA/IIPA)',
      country_of_origin: 'England, Russia',
      style_description:
        "The IPA's bigger and tougher sibling. The word Imperial was added on to these beers when the English shipped them to the Imperial Russian Court. These beers have a similar flavor profile as an IPA but generally more hoppy, bitter, and boozey."
    },
    {
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbrewpublic.com%2Fwp-content%2Fuploads%2F2018%2F06%2Fimage-of-Hazy-IPA-courtesy-of-the-Brewers-Association.jpg&f=1&nofb=1',
      style_name: 'Hazy India Pale Ales (Hazy IPA)',
      country_of_origin: 'USA',
      style_description:
        "The Hazy IPA is an American take on the traditional IPA. These beers tend to focus more on the hops than the malt, so their flavors tend to be more 'juicy' and less bitter."
    },
    {
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwabashabrewery.com%2Fwp-content%2Fuploads%2F2019%2F01%2Fsession-ipa.jpg&f=1&nofb=1',
      style_name: 'Session India Pale Ales (Session IPA)',
      country_of_origin: 'England, USA',
      style_description:
        'The name derives from England, where people would have meetings (or sessions) where they would like to have a few pints but not get drunk. Typically, these Sessions carry the same flavor profile as IPAs but a little lighter, with lower ABVs.'
    },
    {
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fabsolutebeer.com%2Fwp-content%2Fuploads%2F2019%2F07%2FAB-Category-American-Pale-Ale-Photo.jpg%3Ffit%3D1200%252C1200%26ssl%3D1&f=1&nofb=1',
      style_name: 'Pale Ales',
      country_of_origin: 'Belgium, England',
      style_description:
        'While the English may be better known for their Pale Ales, it is believed that they actually crafted this beer after the Belgian Pale Ale. In general these beers have mild to heavy bitterness, with hoppy flavors that range from floral to citrus to pine.'
    },
    {
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thespruceeats.com%2Fthmb%2FGeQs67sMCFCCQtOPL6p2bINw-fo%3D%2F2122x1415%2Ffilters%3Afill(auto%2C1)%2F485220953-58a6ca215f9b58a3c9f94673.jpg&f=1&nofb=1',
      style_name: 'Wheat Beers',
      country_of_origin: 'Germany, Belgium',
      style_description:
        'Wheat beers tend to be lighter in color. Their flavors usually are described as tangy and fruity. Fruity often includes citrus and banana notes.'
    },
    {
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsipmagazine.com%2Fwp-content%2Fuploads%2F2019%2F11%2Fsours.jpg&f=1&nofb=1',
      style_name: 'Sour Beers',
      country_of_origin: 'Belgium',
      style_description:
        'Sour beers have a range of colors that include the more traditional golden look, as well as deep reds, purples, and blues. These beers are tart, sweet, fruity, and (as the name implies) sour.'
    },
    {
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.buildthebottle.com%2Fwp-content%2Fuploads%2F2020%2F06%2FKolsch-Beer-Recipe-D.I.Y..jpg&f=1&nofb=1',
      style_name: 'Kölsches',
      country_of_origin: 'Germany',
      style_description:
        'The Kölsch is somewhat of a mix of ale and lager. The beer uses ale-yeast but is brewed in a similar process as a lager. The result is incredibly light, crisp, and clean, and these beers are very drinkable. A great introduction to those (of age) trying beer for the first time.'
    },
    {
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thespruceeats.com%2Fthmb%2Fgu5YCwjkjtPArKrDE9YlPrOBxxQ%3D%2F2118x1418%2Ffilters%3Afill(auto%2C1)%2F466286049-58ad7b315f9b58a3c978bb3d.jpg&f=1&nofb=1',
      style_name: 'Pilsners',
      country_of_origin: 'Czech Republic, Germany',
      style_description:
        'Pilsner (or Pilseners) are lagers perfected by the Czechs and Germans. They tend to be crisp and clean, with light bitterness and a maltiness that has a bready or biscuity taste.'
    },
    {
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnepascene.com%2Fwp-content%2Fuploads%2F2019%2F10%2FPennsylvania-Yuengling-Hersheys-collaboration-Chocolate-Porter-beer-Pottsville-Hershey.jpg&f=1&nofb=1',
      style_name: 'Porters',
      country_of_origin: 'England',
      style_description:
        'Porters get their name from the English working class, the street and river porters who mostly drank them. Porters tend to be dark in color, with a creamy feel. Flavors tend to be malty and take on chocolate and coffee notes.'
    },
    {
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fabsolutebeer.com%2Fwp-content%2Fuploads%2F2019%2F06%2FAB-Category-Sweet-Stout-Photo.jpg&f=1&nofb=1',
      style_name: 'Stouts',
      country_of_origin: 'England',
      style_description:
        'As the DIPA is to IPA, so is Stout to Porter. Stouts are basically Porters with more roasted malt flavor (stronger coffee tastes) and more alcohol. Fun fact: Guinness, the most famous Stout, is actually red in color.'
    },
    {
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.ancient-origins.net%2Fsites%2Fdefault%2Ffiles%2Ffield%2Fimage%2Fthe-belgian-beer.jpg&f=1&nofb=1',
      style_name: 'Belgian Ales',
      country_of_origin: 'Belgium',
      style_description:
        "Belgian Ales are world renowned for their variety and complex flavors. They share a similar brewing history as Germany but don't abode by the purity laws, so brewers are able to experiment more. On the whole though, a traditional Belgian Ale carries spicy, fruity, and wheaty flavors and are decently boozey."
    }
  ]

  await BeerType.insertMany(beerTypes)
  console.log('Created beer types!')
}

const run = async () => {
  await main()
  db.close()
}

run()
