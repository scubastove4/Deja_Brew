const BreweryCard = ({ brewery }) => {
  return (
    <div className="breweryCard">
      <h2>{brewery.name}</h2>
      {brewery.street ? (
        <h3>Street: {brewery.street}</h3>
      ) : (
        <h3>Street not available</h3>
      )}
      {brewery.city ? (
        <h3>City: {brewery.city}</h3>
      ) : (
        <h3>City not available</h3>
      )}
      {brewery.state ? (
        <h3>State: {brewery.state}</h3>
      ) : (
        <h3>State not available</h3>
      )}
      {brewery.postal_code ? (
        <h3>ZIP: {brewery.postal_code}</h3>
      ) : (
        <h3>ZIP not available</h3>
      )}
      {brewery.phone ? (
        <h3>Phone: {brewery.phone}</h3>
      ) : (
        <h3>Phone not available</h3>
      )}
    </div>
  )
}

export default BreweryCard
