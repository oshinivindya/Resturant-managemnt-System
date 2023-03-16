import React from 'react'
import './Header.css'
import pizzalogo from "C:/Users/Oshini/OneDrive/Desktop/react-resturant/resturant/src/images/pizzaLogo.png"

export default function Header() {
  return (
    
        <div className="navbar">

      <div className="leftSide" >
        <img src={pizzalogo} />
        <div/>

        <div className="rightSide" >
        <div className="Links">
        <a class="nav-link active" aria-current="page" href="http://localhost:3000/#">Home</a>
        <a class="nav-link active" aria-current="page" href="http://localhost:3000/Menu">Menu</a>
        <a class="nav-link active" aria-current="page" href="http://localhost:3000/AboutUs">About Us</a>
        <a class="nav-link active" aria-current="page" href="http://localhost:3000/Contact">Contact</a>
        </div>
      </div>

    
    </div>
    </div>
  )
}

