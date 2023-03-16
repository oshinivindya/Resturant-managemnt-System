import React from 'react'
import Footer from '../common/Footer'
import Header from '../common/Header'
import './Contact.css'
import PizzaLeft from "C:/Users/Oshini/OneDrive/Desktop/react-resturant/resturant/src/images/pizzaLeft.jpg"
      

export default function Contact() {
  return (
    <div>
        <Header/>
        <div className="contact">

      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}>
        </div>


      <div className="rightSide">
        <h1> Contact Us</h1>
        <form id="contact-form" >
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
    <Footer/>
    </div>
  )
}
