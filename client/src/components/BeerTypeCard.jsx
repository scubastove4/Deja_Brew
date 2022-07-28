const BeerTypeCard = ({ beerType, showBeersByType }) => {
  return (
    <div onClick={() => showBeersByType(beerType)}>
      <h2>{beerType.style_name}</h2>
      <img src={beerType.image} alt="Beer Type" className="cardImg" />
    </div>
  )
}

export default BeerTypeCard
