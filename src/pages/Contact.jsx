import React from 'react'
import "./contact.css"
import {motion} from "framer-motion"

const Contact = () => {
  return (
    <header className="contact">
      <img src="./images/contact-banner-image.jpg" alt="" className='contact-banner'/>

      <div className="contact-section">
        <motion.div initial ={{x:-300, scale:0.9}} animate = {{x: 0,scale: 1.0}} className="contact--">
           <img src="./images/contact-banner.jpg" alt="" className='contact-image'/>
        </motion.div>

        <div className="contact-data-">
          <h4>Our Address</h4>
          <p>12,A-block,Behind of S.V.G. Hospital,Mumbai,Maharastra,Pin-code: 400001</p>
          <h3>Telephone No: 09876-54321</h3>
            
          <span>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          </span>

        </div>
      </div>
    </header>
  )
}

export default Contact