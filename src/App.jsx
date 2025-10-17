import React from "react"
import Hero from "../component/hero.jsx"
import Navbar from "../component/nav.jsx"
export default function App() {
  return(
  <>
      <div className = "min-h-screen bg-black ">
      <Navbar/>
      <Hero/>
    </div>
    
    </>
  )
}
