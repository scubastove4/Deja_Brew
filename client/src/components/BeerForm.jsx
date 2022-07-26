import { useEffect } from 'react'
import { useState } from 'react'

const BeerForm = ({ beerType, newBeer, newBeerInput }) => {
  return (
    <div>
      <form>
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
      </form>
    </div>
  )
}

export default BeerForm
