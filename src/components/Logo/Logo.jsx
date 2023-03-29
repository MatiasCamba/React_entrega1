import React from 'react'
import './Logo.css'

const Logo = () => {
    const imagenLogo = "https://thumbs.dreamstime.com/b/herbal-food-logo-26585479.jpg";
  return (
    
        <img className= "imgLogo" src={imagenLogo} alt="logo de una hoja verde" />
    
  )
}

export default Logo