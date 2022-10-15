import React from 'react'
import "./navbar.css"
import {NavLink} from "react-router-dom"

const Navbar = () => {
  return (
   <nav className="navbar">
    <ul className="nav-list">
      <li>
        <NavLink className = "navbar-icon" to ="/">Home</NavLink>
      </li>
      <li>
        <NavLink className = "navbar-icon" to ="/about">About</NavLink>
      </li>
      <li>
        <NavLink className = "navbar-icon" to ="/price">Price</NavLink>
      </li>
      <li>
        <NavLink className = "navbar-icon" to ="/trainers">Trainers</NavLink>
      </li>
      <li>
        <NavLink className = "navbar-icon" to ="/contact">Contact</NavLink>
      </li>
    </ul>
   </nav>
  )
}

export default Navbar