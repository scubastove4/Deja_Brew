const BeerTypeCard = ({ beerType }) => {
  return (
    <div>
      <h2>{beerType.style_name}</h2>
      <img src={beerType.image} alt="Beer Type" />
    </div>
  )
}

export default BeerTypeCard
