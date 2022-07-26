const BeerForm = ({ newBeer, newBeerInput, addNewBeer }) => {
  return (
    <div>
      <form onSubmit={(e) => addNewBeer(e)}>
        <input
          id="image"
          type="text"
          value={newBeer.image}
          onInput={newBeerInput}
          placeholder="Upload Image"
        />
        <input
          id="beer_name"
          type="text"
          value={newBeer.beer_name}
          onInput={newBeerInput}
          placeholder="Beer Name"
        />
        <input
          id="brewery"
          type="text"
          value={newBeer.brewery}
          onInput={newBeerInput}
          placeholder="Brewery Name"
        />
        <button type="submit">Create Beer Entry</button>
      </form>
    </div>
  )
}

export default BeerForm
