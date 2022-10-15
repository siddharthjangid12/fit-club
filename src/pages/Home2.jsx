import React from 'react'
import "./home2.css"
import { NavLink } from 'react-router-dom'
import {motion} from "framer-motion"

const Home2 = () => {
  return (
    <header className="home2">
      <div className="home2-section">
        <motion.div initial ={{x:-300, scale:0.9}} animate = {{x: 0,scale: 1.0}} className="home2-section-image-">
          <img src="./images/training.jpg" alt="" className='home2-image' />
        </motion.div>

        <div className="home2-section-data-">
           <h4>Shape your <span>Body Today</span></h4>
           <p>A gym is a large room, usually containing special equipment, where people go to do physical exercise and get fit</p>
           <NavLink className="home2-btn" to='/price'>Join Now</NavLink>
        </div>
      </div>
    </header>
  )
}

export default Home2