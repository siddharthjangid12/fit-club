import React from 'react'
import "./trainers.css"
import {motion} from "framer-motion"

const Trainers = () => {
  return (
    <header className="trainer">
      <div className="trainer-list">
        <motion.article initial ={{x:300, scale:0.9}} animate = {{x: 0,scale: 1.0}} className='trainer-name'>
          <img src="./images/trainer-2.jpg" alt="" className='trainer-image'/>
          <h4>Shane Mathew</h4>
          <h5>Body Composition Expert</h5>
          <span>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          </span>
        </motion.article>

        <motion.article initial ={{x:300, scale:0.9}} animate = {{x: 0,scale: 1.0}} className='trainer-name'>
          <img src="./images/trainer-3.jpg" alt="" className='trainer-image'/>
          <h4>Lana Winset</h4>
          <h5>Free Style Expert</h5>
          <span>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          </span>
        </motion.article>

        <motion.article initial ={{x:300, scale:0.9}} animate = {{x: 0,scale: 1.0}} className='trainer-name'>
          <img src="./images/training.jpg" alt="" className='trainer-image'/>
          <h4>Jack Dwayne</h4>
          <h5>Weight Lifting Expert</h5>
          <span>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          </span>
        </motion.article>

        <motion.article initial ={{x:-300, scale:0.9}} animate = {{x: 0,scale: 1.0}} className='trainer-name'>
          <img src="./images/trainer-5.jpg" alt="" className='trainer-image'/>
          <h4>Paul Watson</h4>
          <h5>Body Composition Expert-2</h5>
          <span>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          </span>
        </motion.article>

        <motion.article initial ={{x:-300, scale:0.9}} animate = {{x: 0,scale: 1.0}} className='trainer-name'>
          <img src="./images/trainer.jpg" alt="" className='trainer-image'/>
          <h4>John Carl</h4>
          <h5>Weight Lifting Expert-2</h5>
          <span>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          </span>
        </motion.article>

        <motion.article initial ={{x:-300, scale:0.9}} animate = {{x: 0,scale: 1.0}} className='trainer-name'>
          <img src="./images/trainer1.jpg" alt="" className='trainer-image'/>
          <h4>Maria Ann</h4>
          <h5>Free Style Expert-2</h5>
          <span>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          </span>
        </motion.article>
      </div>
    </header>
  )
}

export default Trainers