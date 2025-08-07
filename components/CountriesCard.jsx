import React from 'react'
import { Link } from 'react-router-dom'

export default function CountriesCard( { capital,flag,name,population,region ,data}) {
  
  
  
  return (
    <Link className="country_card" to={`/${name}`} state={data}>
  <img src={flag} alt="flag" />
  <div className="card_text">
    <h3 className="card_title">{name}</h3>
    <p>
      <b>Population:</b>&nbsp; &nbsp;{population.toLocaleString('en-IN')}
    </p>
    <p>
      <b>Region:</b>&nbsp; &nbsp;{region}
    </p>
    <p>
      <b>Capital:</b>&nbsp; &nbsp;{capital}
    </p>
  </div>
</Link>

  )
}
