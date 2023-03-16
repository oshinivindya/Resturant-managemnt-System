import React from 'react'
import Footer from '../common/Footer'
import Header from '../common/Header'
import './AboutUs.css'
import MultiplePizzas from "C:/Users/Oshini/OneDrive/Desktop/react-resturant/resturant/src/images/multiplePizzas.jpeg"

export default function AboutUs() {
  return (
    <div>
        <Header/>
        <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
     
         Pizza Hut, a subsidiary of Yum! Brands, is the world's largest pizza company and home of Pan Pizza.
          Pizza Hut began 60 years ago in Wichita, Kansas, and today is an iconic global brand that delivers 
          more pizza, pasta and wings than any other restaurant in the world.

         Since its inception in 1993, Pizza Hut has fast become a household name across Sri Lanka. 
         With its first restaurant at Union Place, Colombo 2, Pizza Hut became the first international 
         restaurant chain to begin operations in Sri Lanka. Pizza Hut is a brand name belonging to global 
         restaurant chain Yum Brands Incorporated which is based in USA. It is the world's largest restaurant
          company which also owns KFC & Taco Bell. Pizza Hut delivery rose swiftly to provide 50% of the restaurant's net sales.
         To date, Pizza Hut Sri Lanka employs over 1800 staff members with diverse backgrounds. As an equal
          opportunity employer, Pizza Hut utilizes 1% of its annual income towards training and welfare. 
          The company strongly believes in creating a results oriented fun working environment.
           This is why all dine-in outlets offer a unique 
           family friendly dine-in experience whilst effectively capturing the gastronomic palate of the Sri 
           Lankan consumer with innovative additions to its menu. Currently Pizza Hut serves a wide range of
            pizza toppings with an exciting selection of special crusts as well as appetizers, pastas, rice, 
            desserts and beverages
        </p>
      </div>
    </div>
    <Footer/>
    </div>
  )
}
