
import { useTheme } from "../Hooks/useTheme"



 const Header = ()=> {
  const [isDark, setIsDark] =  useTheme()
  
  


  return (
      <header className={`header_container ${isDark ? 'DarkMode' : ""}`}>
  <div className="header_content">
    <h2 className="title"><a href="/">Where in the world?</a></h2>
    <p className="darkModeBtn" onClick={() =>{
      
      setIsDark(!isDark)
      localStorage.setItem('isDarkMode', !isDark)
    }}>
     
      {" "}
      <i className={`fa-solid fa-${isDark ?'sun' : 'moon'}`} aria-hidden="true">
        &nbsp;
      </i>{" "}
      {isDark ? 'Light' : 'Dark'} Mode
    </p>
  </div>
</header> 
    
  )
}

export default Header


