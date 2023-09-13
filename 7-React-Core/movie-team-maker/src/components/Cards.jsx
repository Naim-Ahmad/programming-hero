import PropTypes from 'prop-types'
import { useEffect, useState } from "react"
import Card from "./Card"

export default function Cards({selectActor}) {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
        .then(data=> setData(data))
    },[])
  return (
      <section className="card-section">
          <h2>Select your favorite actor and others</h2>
          <div className="card-container">
              {data.map(actor=> <Card key={actor.id} actor={ actor } selectActor={selectActor} />)}
          </div>
    </section>
  )
}

Cards.propTypes = {
    selectActor: PropTypes.func,
}
