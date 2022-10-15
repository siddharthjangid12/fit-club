import React from 'react'
import "./home.css"
import {NavLink} from "react-router-dom"
import Home2 from './Home2'
import {motion} from "framer-motion"
import About from "./About"
import Price from "./Price"
import Contact from "./Contact"

const Home = () => {
  return (
   <header className="home">
    <div className="home-section">
      <div className="home-section-data">
          <h4>Let's Be <span>FunFit</span></h4>
          <p>The definition of a gym, short for gymnasium, is a room or building where people go to play sports or exercise</p>
          <NavLink className="home-btn" to='/price'>Join Now</NavLink>
      </div>

      <motion.div initial ={{x:300, scale:0.9}} animate = {{x: 0,scale: 1.0}} className="home-section-image">
          <img src="./images/banner-2.jpg" alt="" className='home-image'/>
      </motion.div>
    </div>

    <Home2 />
    <About />
    <Price />
    <Contact />
   </header>
  )
}

export default Home