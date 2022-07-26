const BeerCard = ({ beer }) => {
  return (
    <div>
      <h2>{beer.style_name}</h2>
      <img src={beer.image} alt="Beer" />
    </div>
  )
}

export default BeerCard
