const BeerCard = ({ beer, showBeer, beerTypeContents }) => {
  return (
    <div onClick={() => showBeer(beer)}>
      <h2>{beer.beer_name}</h2>
      <div>
        {beer.image ? (
          <img src={beer.image} alt="Beer" />
        ) : (
          <img src={beerTypeContents.beerType.image} alt="Beer Type" />
        )}
      </div>
    </div>
  )
}

export default BeerCard
