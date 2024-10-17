import React from "react"
import img from "../images/about.jpg"
import "./about.css"
import Footer from "../footer/Footer";
import Header from "../header/Header";
const About = () => {
  return (
    <>
      < Header/>
      <section className='about'>
        <div className='back'>
        <div className='container'>
          <span>About Us</span>
          <h1>About Us - Who We Are?</h1>
        </div>
        <img src={img} alt='' />
      </div>
        <div className='container flex mtop'>
          <div className='left row'>
            <div className='heading'>
        <h1>Our Agency Story</h1>
        <p>Check out our company story and work process</p>
      </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default About
