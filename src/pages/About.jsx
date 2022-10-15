import React from 'react'
import "./about.css"
import {motion} from "framer-motion"

const About = () => {
  return (
    <header className='about'>
      <img src="./images/rope-image.jpg" alt="" className='about-image' />
     
    <div className="about-section">
      <motion.article initial ={{y:0}}animate ={{y:-15}} className='about-section--'>
      <i class="fa-solid fa-dumbbell"></i>
      <h4>Flex Muscles</h4>
      <p>Muscle flexing is more accurately known as muscle contraction, because when you flex your muscles, you're creating tension that's temporarily making the muscle fibers smaller or contracted</p>
      <button className='about-btn'>Learn More</button>
      </motion.article>

      <motion.article initial ={{y:0}}animate ={{y:-15}}  className='about-section--'>
      <i class="fa-solid fa-hands-praying"></i>
      <h4>Yoga and Meditation</h4>
      <p>Yoga is essentially a spiritual discipline based on an extremely subtle science, which focuses on bringing harmony between mind and body</p>
      <button className='about-btn'>Learn More</button>
      </motion.article>

      <motion.article initial ={{y:0}}animate ={{y:-15}}  className='about-section--'>
      <i class="fa-solid fa-dumbbell"></i>
      <h4>Muscles stretching</h4>
      <p>Stretching is a common intervention performed during rehabilitation. Stretching is prescribed to increase muscle length and ROM, or to align collagen fibers during healing muscle</p>
      <button className='about-btn'>Learn More</button>
      </motion.article>
    </div>



    </header>
  )
}

export default About