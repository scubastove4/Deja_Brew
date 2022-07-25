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
      brewery: 'Great South Bay Brewery',
      beer_type_id: amber[0]._id,
      beer_type_name: amber[0].style_name,
      avg_rating: '',
      num_of_reviews: ''
    },
    {
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.newbelgium.com%2Fglobalassets%2Fbeer%2Ffat-tire%2Ffat_tire_package_1080x720.png&f=1&nofb=1',
      beer_name: 'Fat Tire',
      brewery: 'New Belgium Brewing Company',
      beer_type_id: amber[0]._id,
      beer_type_name: amber[0].style_name,
      avg_rating: '',
      num_of_reviews: ''
    },
    {
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthefullpint.com%2Fwp-content%2Fuploads%2FStone-IPA.jpg&f=1&nofb=1',
      beer_name: 'Stone IPA',
      brewery: 'Stone Brewing',
      beer_type_id: ipa[0]._id,
      beer_type_name: ipa[0].style_name,
      avg_rating: '',
      num_of_reviews: ''
    },
    {
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.gannett-cdn.com%2F-mm-%2F2c2ebf3cbd70b36b7fef560bfb4c18721e289337%2Fc%3D0-208-2397-1562%2Flocal%2F-%2Fmedia%2F2018%2F06%2F21%2FDetroitFreeP%2FDetroitFreePress%2F636651790193851186-Bell-sTwoHeartedAle-2-.jpg%3Fwidth%3D3200%26height%3D1680%26fit%3Dcrop&f=1&nofb=1',
      beer_name: 'Two Hearted Ale',
      brewery: "Bell's Brewery",
      beer_type_id: ipa[0]._id,
      beer_type_name: ipa[0].style_name,
      avg_rating: '',
      num_of_reviews: ''
    },
    {
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnextstop.blob.core.windows.net%2Farticle-images%2Fdaddywarbucks.jpeg&f=1&nofb=1',
      beer_name: 'Daddy Warbucks (aka Imperial Money)',
      brewery: 'Barrier Brewing Company',
      beer_type_id: dipa[0]._id,
      beer_type_name: dipa[0].style_name,
      avg_rating: '',
      num_of_reviews: ''
    },
    {
      image: 'https://i.imgur.com/t08vvx2.jpg',
      beer_name: 'Heady Topper',
      brewery: 'The Alchemist',
      beer_type_id: dipa[0]._id,
      beer_type_name: dipa[0].style_name,
      avg_rating: '',
      num_of_reviews: ''
    },
    {
      image: 'https://i.imgur.com/0Crg5cB.jpg',
      beer_name: 'The Strongest Geometric Shape: Strata, Citra, Motueka',
      brewery: 'Barrier Brewing Company',
      beer_type_id: hipa[0]._id,
      beer_type_name: hipa[0].style_name,
      avg_rating: '',
      num_of_reviews: ''
    },
    {
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcraftpeak-cooler-images.imgix.net%2Fevil-twin-brewing-nyc%2FDSC01163.jpg%3Fauto%3Dcompress%252Cformat%26fit%3Dscale%26h%3D768%26ixlib%3Dphp-1.2.1%26w%3D768%26wpsize%3Dmedium_large&f=1&nofb=1',
      beer_name:
        'WHO ELSE IS EXCITED ABOUT THE VIRUAL VIEWING OF THE ROCKEFELLER CHRISTMAS TREE THIS YEAR?',
      brewery: 'Evil Twin Brewing NYC',
      beer_type_id: hipa[0]._id,
      beer_type_name: hipa[0].style_name,
      avg_rating: '',
      num_of_reviews: ''
    },
    {
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.konabrewingco.ch%2Fwp-content%2Fuploads%2F2020%2F07%2Fkonabrewingco_products_hanalei_island_ipa.png&f=1&nofb=1',
      beer_name: 'Hanalei Isand IPA',
      brewery: 'Kona Brewing Company',
      beer_type_id: sipa[0]._id,
      beer_type_name: sipa[0].style_name,
      avg_rating: '',
      num_of_reviews: ''
    },
    {
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffoundersbrewing.com%2Fwp-content%2Fuploads%2F2017%2F08%2F2020_all_day_ipa_featured.jpg&f=1&nofb=1',
      beer_name: 'All Day IPA',
      brewery: 'Founders Brewing Company',
      beer_type_id: sipa[0]._id,
      beer_type_name: sipa[0].style_name,
      avg_rating: '',
      num_of_reviews: ''
    },
    {
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.beeruniversestore.com%2Fwp-content%2Fuploads%2F2021%2F01%2FCamp-Wannamango-16ozcan-4pk-1001x1050-5a4e922-450x472.jpg&f=1&nofb=1',
      beer_name: 'Camp Wannamango',
      brewery: 'Harpoon Brewery',
      beer_type_id: pale[0]._id,
      beer_type_name: pale[0].style_name,
      avg_rating: '',
      num_of_reviews: ''
    },
    {
      image:
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fbrewscale.com%2Fwp-content%2Fuploads%2F2012%2F07%2FIMG_0622-764x1024.jpg&f=1&nofb=1',
      beer_name: 'Philadelphia Pale Ale',
      brewery: 'Yards Brewing Company',
      beer_type_id: pale[0]._id,
      beer_type_name: pale[0].style_name,
      avg_rating: '',
      num_of_reviews: ''
    },
    {
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.whiskeyriff.com%2Fwp-content%2Fuploads%2F2019%2F04%2FSam-Adams-Summer-1024x576.jpg&f=1&nofb=1',
      beer_name: 'Summer Ale',
      brewery: 'Samuel Adams',
      beer_type_id: wheat[0]._id,
      beer_type_name: wheat[0].style_name,
      avg_rating: '',
      num_of_reviews: ''
    },
    {
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthefullpint.com%2Fwp-content%2Fuploads%2FBells-Oberon-Limited-EditioN-Can.jpg&f=1&nofb=1',
      beer_name: 'Oberon Ale',
      brewery: "Bell's Brewery",
      beer_type_id: wheat[0]._id,
      beer_type_name: wheat[0].style_name,
      avg_rating: '',
      num_of_reviews: ''
    },
    {
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fkaiexclusivebeers.com%2Fwp-content%2Fuploads%2F2021%2F04%2FDrekker-Braaaaaaaains-Mango-Peach-Apricot-300x300.png&f=1&nofb=1',
      beer_name: 'Braaaaaaaains - Mango, Peach, Apricot',
      brewery: 'Drekker Brewing Company',
      beer_type_id: sour[0]._id,
      beer_type_name: sour[0].style_name,
      avg_rating: '',
      num_of_reviews: ''
    },
    {
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcraftpeak-cooler-images.imgix.net%2Fevil-twin-brewing-nyc%2FDSC01409.jpg%3Fauto%3Dcompress%252Cformat%26fit%3Dcrop%26h%3D820%26ixlib%3Dphp-1.2.1%26w%3D1920%26wpsize%3Dbanner_wide&f=1&nofb=1',
      beer_name: 'CONTINENTAL BREAKFAST SOUR - YOGHURT EDITION',
      brewery: 'Evil Twin Brewing NYC',
      beer_type_id: sour[0]._id,
      beer_type_name: sour[0].style_name,
      avg_rating: '',
      num_of_reviews: ''
    },
    {
      image: 'https://i.imgur.com/lSWJHnW.jpg',
      beer_name: 'Lemongrass Kölsch',
      brewery: 'Big aLICe Brewing Company',
      beer_type_id: kolsch[0]._id,
      beer_type_name: kolsch[0].style_name,
      avg_rating: '',
      num_of_reviews: ''
    },
    {
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic-eu.insales.ru%2Fimages%2Fproducts%2F1%2F7302%2F158538886%2FGaffel_Kolsch.jpg&f=1&nofb=1',
      beer_name: 'Kölsch',
      brewery: 'Gaffel',
      beer_type_id: kolsch[0]._id,
      beer_type_name: kolsch[0].style_name,
      avg_rating: '',
      num_of_reviews: ''
    },
    {
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Fabsolutebeer.com%2Fwp-content%2Fuploads%2F2020%2F02%2FAB-Breweries-Bitburger-Beer-1-Photo.jpg%3Ffit%3D1800%252C1200%26ssl%3D1&f=1&nofb=1',
      beer_name: 'Bitburger Premium Pils',
      brewery: 'Bitburger Brauerei',
      beer_type_id: pils[0]._id,
      beer_type_name: pils[0].style_name,
      avg_rating: '',
      num_of_reviews: ''
    },
    {
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fconeyislandbeer.com%2Fwp-content%2Fuploads%2F2020%2F06%2FConey-4-Web-1240x1000.jpg&f=1&nofb=1',
      beer_name: 'Mermaid Pilsner',
      brewery: 'Coney Island Brewery',
      beer_type_id: pils[0]._id,
      beer_type_name: pils[0].style_name,
      avg_rating: '',
      num_of_reviews: ''
    },
    {
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fb8%2Fa9%2F14%2Fb8a914228d2619a9e20a44e43ae9fd7c.jpg&f=1&nofb=1',
      beer_name: 'Vanilla Porter',
      brewery: 'Breckendridge Brewery',
      beer_type_id: porter[0]._id,
      beer_type_name: porter[0].style_name,
      avg_rating: '',
      num_of_reviews: ''
    },
    {
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F3.bp.blogspot.com%2F-kE-XalFYBLg%2FUf-ZydkNZDI%2FAAAAAAAAB74%2FI7RjAbNrZR8%2Fs1600%2FIMG_1810.jpg&f=1&nofb=1',
      beer_name: 'Taddy Porter',
      brewery: 'Samuel Smith',
      beer_type_id: porter[0]._id,
      beer_type_name: porter[0].style_name,
      avg_rating: '',
      num_of_reviews: ''
    },
    {
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flh3.googleusercontent.com%2F-9JQXGTUrL1U%2FWM_UHYq0X4I%2FAAAAAAAEtXU%2FIAWUDtvVHqY%2Fimage_thumb.png%3Fimgmax%3D800&f=1&nofb=1',
      beer_name: 'Sloth Overlord',
      brewery: 'Finch Beer Company',
      beer_type_id: stout[0]._id,
      beer_type_name: stout[0].style_name,
      avg_rating: '',
      num_of_reviews: ''
    },
    {
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsinglecut.com%2Fwp-content%2Fuploads%2F2016%2F11%2FScreen-Shot-2016-11-21-at-5.34.18-PM-e1479767716502.png&f=1&nofb=1',
      beer_name: 'Barrel-Aged Heavy Boots of Lead',
      brewery: 'SingelCut Beersmiths',
      beer_type_id: stout[0]._id,
      beer_type_name: stout[0].style_name,
      avg_rating: '',
      num_of_reviews: ''
    },
    {
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.beergodblog.com%2Fwp-content%2Fuploads%2F2015%2F12%2F1449465561-1024x863.jpg&f=1&nofb=1',
      beer_name: 'Mad Elf',
      brewery: 'Tröegs Independent Brewing',
      beer_type_id: belg[0]._id,
      beer_type_name: belg[0].style_name,
      avg_rating: '',
      num_of_reviews: ''
    },
    {
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thestar.com%2Fcontent%2Fdam%2Fthestar%2Flife%2Ffood_wine%2F2013%2F05%2F02%2Fclassic_beer_chimay_blue_now_in_ontario%2Fchimay_blue.jpg.size.custom.crop.594x650.jpg&f=1&nofb=1',
      beer_name: 'Chimay Grande Réserve',
      brewery: 'Bières de Chimay',
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
