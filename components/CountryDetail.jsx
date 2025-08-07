import React, { useContext, useEffect, useState } from 'react'

import { Link, useLocation, useOutletContext, useParams } from 'react-router-dom'
import CountryDetailShimmer from './CountryDetailShimmer'

import { useTheme } from '../Hooks/useTheme'

export default function CountryDetail() {
const params = useParams()
const { state } = useLocation()
  

  const countryName = params.country
const [countryData ,setCountryData] = useState(null) 
const [notFound ,setNotFound] = useState(false) 
 const [isDark] = useTheme()


function updateCountryData(data){
    setCountryData({
    name: data.name.common,
    flags: data.flags.svg,
    nativeName: Object.values(data.name.nativeName)[0].common,
    Population: data.population,
    region: data.region,
    subregion: data.subregion,
    capital: data.capital.join(', '),
    tld: data.tld,
    currencies: Object.values(data.currencies)[0].name,
    currenciesSymbol: Object.values(data.currencies)[0].symbol,
    languages: Object.values(data.languages)[0],
    borders: []
  })

  if(!data.borders) {
    data.borders = []
  }
 Promise.all( data.borders.map((border) =>{
      return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
            .then((res)=> res.json())
            .then(([bordercountry])=> bordercountry.name.common) 
  })
 ).then((borders) =>{
  setCountryData((prevState) =>({...prevState, borders}))
 })
}


useEffect(()=>{
  if (state) {
    updateCountryData(state)
    return
  }
fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
.then((res) => res.json())
.then(([data])=>{
 updateCountryData(data)

}).catch((err)=> {
    setNotFound(true)
  })
},[countryName])
if(notFound) {
  return <div>country not found</div>
}


  return (
    


<>
    
  <main className={`  ${isDark ? 'DarkMode' : ""}`}>
    <div className="detalilsContainer">
  <span className="back_button" onClick={()=>history.back()}>
    <i className="fa-solid fa-arrow-left" /> &nbsp;Back
  </span>
  
    { countryData ===null? <CountryDetailShimmer /> :(
      
      <div className="carddetails">
    <img className="cardImage" src={countryData.flags}  alt={countryData.name} srcSet="" />
    <div className="cardTextdetails">
      <h2 className="detailsCardTitle">{countryData.name}</h2>
      <div className="info">
        <div>
          <p>
            <b>Native Name:</b>&nbsp; &nbsp;
            <span className="nativeName" >  {countryData.nativeName}</span>
           
          </p>
          <p>
            <b>Population:</b>&nbsp; &nbsp;
            <span className="Population" >{countryData.Population.toLocaleString('en-IN')
}</span>
          </p>
          <p>
            <b>Region:</b>&nbsp; &nbsp;
            <span className="Region" >{countryData.region}</span>
          </p>
          <p>
            <b>Sub Region:</b>&nbsp; &nbsp;
            <span className="SubRegion" >{countryData.subregion}</span>
          </p>
          <p>
            <b>Capital:</b>&nbsp; &nbsp;
            <span className="Capital" >{countryData.capital}</span>
          </p>
        </div>
        <div>
          <p>
            <b>top Level Domain:</b>&nbsp; &nbsp;
            <span className="topLevelDomain" >{countryData.tld}</span>
          </p>
          <p>
            <b>Currencies:</b>&nbsp; &nbsp;
            <span className="Currencies" >{countryData.currencies} ({countryData.currenciesSymbol})</span>
          </p>
          <p>
            <b>Language:</b>&nbsp; &nbsp;
            <span className="Language" >{countryData.languages}</span>
          </p>
        </div>
      </div>
     
      {countryData.borders.length !==0 && <div href="#" className="borderCountries">
       <p> <b>Border Countries: </b>&nbsp;</p>
        {
         
          countryData.borders.map((border) =>
           <Link key = {border} to={`/${border}`}>{border}</Link>
           
          )
        }
      </div>}
    </div>
  </div>
     )}
  
</div>
  </main>
</>
)

  
}
