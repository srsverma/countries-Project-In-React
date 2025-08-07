import { useEffect, useState } from "react";

export function useWindowSize(params) {
     const [windowSize, setWindowSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
     })
    // console.log(windowSize);
    
    

     useEffect(() =>{
      window.addEventListener('resize',()=>{
        setWindowSize({
       width: window.innerWidth,
       height: window.innerHeight,
        });
      })
      },[])

      return windowSize
}