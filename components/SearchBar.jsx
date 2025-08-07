import React from 'react'

export default function SearchBar({setQuery}) {
  
  
  return (
    <div className="search_container">
  <i className="fa-solid fa-magnifying-glass" aria-hidden="true" />
  <input 
  onChange={(e)=>setQuery(e.target.value.toLowerCase())}
  type="text" placeholder="Search for a country..." />
</div>

  )
}
