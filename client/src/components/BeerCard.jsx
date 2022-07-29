const BeerCard = ({ beer, showBeer, beerTypeContents }) => {
  return (
    <div onClick={() => showBeer(beer)}>
      <h2>{beer.beer_name}</h2>
      <div>
        {beer.image ? (
          <img src={beer.image} alt="Beer" className="cardImg" />
        ) : (
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nicepng.com%2Fpng%2Fdetail%2F134-1349206_beer-emoji-google-apple.png&f=1&nofb=1"
            alt="No Image Uploaded"
            className="cardImg"
          />
        )}
      </div>
      <div>
        {beer.avg_rating ? (
          <h2>Avg Rating: {beer.avg_rating}</h2>
        ) : (
          <h2>Rating Pending</h2>
        )}
      </div>
      <div>
        {beer.num_of_reviews ? (
          <h2>Reviews: {beer.num_of_reviews}</h2>
        ) : (
          <h2>Reviews Pending</h2>
        )}
      </div>
    </div>
  )
}

export default BeerCard
