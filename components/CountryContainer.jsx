




import React, { useEffect, useState } from 'react'
// import countriesData from '../countriesData'
import CountriesCard from './CountriesCard'
import CountriesShimmer from './CountriesShimmer'

export default function CountryContainer({ query }) {
  const [countriesData, setCountriesData] = useState(null)
 
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/independent?status=true')
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data)
    }), []})


    
    
    return (
      countriesData ===null? <CountriesShimmer /> : (
        
        <>
  
      <div className="countries-container">
        {countriesData
            
          .filter((country) =>  country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query)
            
          
          
          )
          .map((country) => {
            // console.log(country.region);
            return (
              <CountriesCard
                key={country.name.common}
                name={country.name.common}
                flag={country.flags.svg}
                population={country.population}
                region={country.region}
                capital={country.capital?.[0]}
              />
            )
          })}
      </div>
    </>
    )

    
  )
}