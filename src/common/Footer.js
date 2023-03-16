import React from 'react'
import './Footer.css'
import phone from 'C:/Users/Oshini/OneDrive/Desktop/react-resturant/resturant/src/images/phone.png'
import email from 'C:/Users/Oshini/OneDrive/Desktop/react-resturant/resturant/src/images/email.png'

export default function Footer() {
  return (
    <div>

        <div className="navbar">
      <div className="rightSide" >
        <img src={phone} />
        <a class="nav-link active" aria-current="page" href="">0556205931</a>  
        <img src={email} />
        <a class="nav-link active" aria-current="page" href="">spicypizza@gmail.com</a>  


    

      </div>

    
    </div>
    </div>
    
  )
}
