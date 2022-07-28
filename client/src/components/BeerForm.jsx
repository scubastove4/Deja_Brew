const BeerForm = ({ newBeer, newBeerInput, addNewBeer }) => {
  return (
    <form onSubmit={(e) => addNewBeer(e)}>
      <section>
        <input
          id="image"
          type="text"
          value={newBeer.image}
          onInput={newBeerInput}
          placeholder="Upload Image Link"
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
      </section>
      <button type="submit">Post Beer</button>
    </form>
  )
}

export default BeerForm
