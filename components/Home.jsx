

import { useState } from "react"
import CountryContainer from "./CountryContainer"
import SearchBar from "./SearchBar"
import SelectMenu from "./SelectMenu"

import { ThemeContext } from "../contexts/ThemeContext"
import { useTheme } from "../Hooks/useTheme"



export default function Home() {
     const [query, setQuery] = useState('')
     const [isDark] = useTheme()
    
     
     

  return (
    <main className={` ${isDark ? 'DarkMode' : ""}`}>
          <div className="search_filter_container">
            
                 <SearchBar setQuery={setQuery} />
                 <SelectMenu setQuery={setQuery} />
          </div>
          
          {query === 'unmount' ? "" :  <CountryContainer  query={query}/>}
        </main>
  )
}
