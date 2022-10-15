import React from 'react'
import "./price.css"
import {NavLink} from "react-router-dom"

const Price = () => {
  return (
    <header className="price">
      <img src="./images/girl-gym.jpg" alt="" className='price-image'/>

    <div className="price-list">
      <article className="price-list--">
      <i class="fa-solid fa-dumbbell"></i>
      <h5>Basic Plan</h5>
      <ul className="price-list-data">
        <li><i class="fa-solid fa-check"></i> 6 Days in a week</li>
        <li><i class="fa-solid fa-check"></i> 1 Protein shake</li>
        <li><i class="fa-solid fa-xmark"></i> 1 Super shirt</li>
        <li><i class="fa-solid fa-xmark"></i> Access to video</li>
        <li><i class="fa-solid fa-xmark"></i> Muscles stretching</li>
      </ul>
      <NavLink className="price-btn" to ="/">Purchase Now</NavLink>
      </article>

      <article className="price-list--">
      <i class="fa-solid fa-crown"></i>
      <h5>Premium Plan</h5>
      <ul className="price-list-data">
        <li><i class="fa-solid fa-check"></i> 6 Days in a week</li>
        <li><i class="fa-solid fa-check"></i> 1 Protein shake</li>
        <li><i class="fa-solid fa-check"></i> 1 Super shirt</li>
        <li><i class="fa-solid fa-xmark"></i> Access to video</li>
        <li><i class="fa-solid fa-xmark"></i> Muscles stretching</li>
      </ul>
      <NavLink className="price-btn" to ="/">Purchase Now</NavLink>
      </article>

      <article className="price-list--">
      <i class="fa-solid fa-gem"></i>
      <h5>Diamond Plan</h5>
      <ul className="price-list-data">
      <li><i class="fa-solid fa-check"></i> 6 Days in a week</li>
        <li><i class="fa-solid fa-check"></i> 1 Protein shake</li>
        <li><i class="fa-solid fa-check"></i> 1 Super shirt</li>
        <li><i class="fa-solid fa-check"></i> Access to video</li>
        <li><i class="fa-solid fa-check"></i> Muscles stretching</li>
      </ul>
      <NavLink className="price-btn" to ="/">Purchase Now</NavLink>
      </article>
    </div>
    </header>
  )
}

export default Price