const BeerCard = ({ beer, showBeer }) => {
  return (
    <div onClick={() => showBeer(beer)}>
      <h2>{beer.beer_name}</h2>
      <img src={beer.image} alt="Beer" />
    </div>
  )
}

export default BeerCard
