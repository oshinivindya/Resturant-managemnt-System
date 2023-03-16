import React from 'react'
import "./Home.css"
import Header from '../common/Header'
import BannerImage from "C:/Users/Oshini/OneDrive/Desktop/react-resturant/resturant/src/images/pizza.jpeg" 
import Footer from '../common/Footer'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    
    <div>
        <Header/>
     <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Spizy Pizzeria </h1>
        <p> PIZZA TO FIT ANY TASTE</p>

        <Link to="http://localhost:3000/Menu">
          <button> ORDER NOW </button>
        </Link> 

        
      </div>
    </div>
    <Footer/>
    </div>
  )
}
