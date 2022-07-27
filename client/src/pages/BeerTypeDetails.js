import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

import BeerCard from '../components/BeerCard'
import BeerForm from '../components/BeerForm'

const BeerTypeDetails = () => {
  const [beerTypeContents, setBeerTypeContents] = useState({})
  const [beerTypContentsHere, setBeerTypeContentsHere] = useState(false)
  const [formDisplay, setFormDisplay] = useState('none')
  const { beerTypeId } = useParams()
  const initialState = {
    image: '',
    beer_name: '',
    brewery: '',
    beer_type_id: '',
    beer_type_name: '',
    avg_rating: '',
    num_of_reviews: ''
  }
  const [newBeer, setNewBeer] = useState(initialState)
  let navigate = useNavigate()

  useEffect(() => {
    const renderBeerTypeContents = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3001/api/beer-types/id/${beerTypeId}`
        )
        // console.log(res.data)
        setBeerTypeContents(res.data)
        setBeerTypeContentsHere(true)
      } catch (e) {
        console.error(e)
      }
    }
    renderBeerTypeContents()
  }, [newBeer])

  const displayNewBeerForm = (beerType) => {
    formDisplay === 'none' ? setFormDisplay('flex') : setFormDisplay('none')
    setNewBeer({
      ...newBeer,
      beer_type_id: beerType._id,
      beer_type_name: beerType.style_name
    })
  }

  const newBeerInput = (e) => {
    setNewBeer({ ...newBeer, [e.target.id]: e.target.value })
  }

  const showBeer = (beer) => {
    navigate(`/beers/id/${beer._id}`)
  }

  const addNewBeer = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(
        `http://localhost:3001/api/beer-types/id/${beerTypeId}`,
        newBeer
      )
      console.log(res)
      setNewBeer(initialState)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div>
      <button onClick={() => displayNewBeerForm(beerTypeContents.beerType)}>
        Add New Beer!
      </button>
      <div style={{ display: `${formDisplay}` }}>
        <BeerForm
          beerType={beerTypeContents.beerType}
          newBeer={newBeer}
          newBeerInput={newBeerInput}
          addNewBeer={addNewBeer}
        />
      </div>
      {beerTypContentsHere ? (
        <section>
          <h1>{beerTypeContents.beerType.style_name}</h1>
          <main>
            {beerTypeContents.beers.map((beer) => (
              <div key={beer._id}>
                <BeerCard beer={beer} showBeer={showBeer} />
              </div>
            ))}
          </main>
        </section>
      ) : (
        <h1>Please reload page</h1>
      )}
    </div>
  )
}

export default BeerTypeDetails
