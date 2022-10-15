import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Price from "./pages/Price"
import Trainers from "./pages/Trainers"
import Contact from "./pages/Contact"
import Header from "./components/Header"
import Footer from "./components/Footer"

const App = () => {
  return (
  <BrowserRouter>
  <Header />
  <Routes>
    <Route path = "/" element= {<Home />}/>
    <Route path = "/about" element= {<About />}/>
    <Route path = "/price" element= {<Price />}/>
    <Route path = "/trainers" element= {<Trainers />}/>
    <Route path = "/contact" element= {<Contact />}/>
  </Routes>
  <Footer />
  </BrowserRouter>
  )
}

export default App
