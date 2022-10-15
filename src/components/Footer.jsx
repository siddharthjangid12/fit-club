import React from 'react'
import { NavLink } from 'react-router-dom'
import "./footer.css"
import Footer2 from './Footer2'

const Footer = () => {
  return (
    <header className="footer">
      <div className="footer-section">
        <div className="footer-section--">
          <ul className="footer-list">
          <li>
        <NavLink className = "footer-icon" to ="/">Home</NavLink>
      </li>
      <li>
        <NavLink className = "footer-icon" to ="/about">About</NavLink>
      </li>
      <li>
        <NavLink className = "footer-icon" to ="/price">Price</NavLink>
      </li>
      <li>
        <NavLink className = "footer-icon" to ="/trainers">Trainers</NavLink>
      </li>
      <li>
        <NavLink className = "footer-icon" to ="/contact">Contact</NavLink>
      </li>
          </ul>
        </div>

        <div className="footer-section--">
          <ul className="footer-list">
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>24/7 Customer Support</li>
            <li>Report a Problem</li>
          </ul>
        </div>

        <div className="footer-section-input--">
          <h4>Subscribe for company latest update</h4>
          <form action="" className='footer-input'>
            <input type="email" name="" id="" placeholder='Enter Your E-mail' className='footer-input-data'/>
          </form>
          <NavLink className="footer-btn" to ="/">Subscribe</NavLink>
        </div>
      </div>

      <Footer2 />
    </header>
  )
}

export default Footer