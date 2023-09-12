import { useState } from 'react'
import './country.css'
export default function Country({ countryObj, handleVisitedCountries, visited }) {
    // console.log(countryObj)
    const { name, flags, cca2 } = countryObj
    const [isVisited, setVisited] = useState(visited)
  return (
      <div className="box">
          <h3>{name.common}</h3>
          <img src={flags.png} alt="" />
          <p>Code: {cca2}</p>
      <button onClick={() => { setVisited(!isVisited); handleVisitedCountries(countryObj)}}>{ isVisited ? 'Visited' : 'Going' }</button>
    </div>
  )
}
