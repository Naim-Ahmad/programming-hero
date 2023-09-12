import { useEffect, useState } from "react"
import Country from "./Country"
import './country.css'
export default function Countries() {
    const [data, setData] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    const handleVisitedCountries = (countryObj) => {
        const filtered = data.filter(country => country.cca3 !== countryObj.cca3)
        setData(filtered)
        setVisitedCountries([...visitedCountries, countryObj])
    }

    const handleGoingCountries = (countryObj) => {
        const filteredVisitedCountry = visitedCountries.filter(country => country.cca3 !== countryObj.cca3)
        setVisitedCountries(filteredVisitedCountry)
        setData([countryObj, ...data])
    }
    
  return (
      <div>
          <h2>Rest Countries</h2>
          <div>
              <h3>Visited Country: { visitedCountries.length}</h3>
              <div className="grid-container">
                  {
                      visitedCountries.map(countryObj => <Country
                          key={countryObj.cca3}
                          countryObj={countryObj}
                          handleVisitedCountries={handleGoingCountries}
                          visited={true} />)
                  }
              </div>
          </div>
          <hr />
          <div>
              <h3>Countries: {data.length}</h3>
              <div className="grid-container">
                  {data.map(countryObj => <Country
                      countryObj={countryObj}
                      handleVisitedCountries={handleVisitedCountries}
                      visited={false}
                      key={countryObj.cca3} />)}
              </div>
          </div>
    </div>
  )
}
