import React from "react"
import Header from "../common/header/Header"
import Featured from "./featured/Featured"
import Hero from "./hero/Hero"
import Recent from "./recent/Recent"


const Home = () => {
  return (
    <>
      <Header/>
      <Hero />
       <Featured />
       <Recent />
      {/* <Awards />
      <Location />
      <Team />
      <Price />  */}
    </>
  )
}

export default Home
