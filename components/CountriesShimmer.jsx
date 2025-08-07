import React from 'react'
import './CountriesShimmer.css'
export default function CountriesShimmerEffect() {

 
  
  return (
    <>
    <div className="countries-container">
            {
               Array.from({ length: 15}).map((el, i)=>{
    return <a key={i} className="country_card shimmer_card" >
              <img></img>
              <div className="card_text_shimmer">
                <h3 className="card_title Shiimer_title"></h3>
                <p className="ShimmerPopulation"></p>
                <p className="ShimmerRegion"></p>
                <p className="ShimmerCapital"></p>
                </div>
                </a>
  })
            }

    </div>
   

    </>
  )
}
