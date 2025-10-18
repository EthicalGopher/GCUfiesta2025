import React from "react"
import "./App.css"
import Hero from "../component/hero.jsx"
import Navbar from "../component/nav.jsx"
export default function App() {
  return(
  <>
      <div className = "min-h-screen hero_background ">
      <Navbar/>
      <Hero/>
    </div>
    
    </>
  )
}
